---
title: ".NET Under The Covers: GUID"
date: 2019-10-31
draft: false
---

If you ever search for "how GUIDs are generated" you'll probably see a lot of articles like this one from Microsoft

![GUIDs are globally unique, but substrings of GUIDs aren't](/images/guid-article-1.png)

or this one

![GUIDs are designed to be unique, not random](/images/guid-article-2.png)

or more recently this one

![How GUID Is Generated In C#](/images/guid-article-3.png)

and they almost always claim that GUIDs are composed of:

* 60 bits of timestamp
* 48 bits of computer identifier
* 14 bits of uniquifier
* six bits are fixed

But how are they actually generated in the C# source code? 

In .NET framework the NewGuid() method in the Guid.cs class makes a reference to the Win32Native.CoCreateGuid() static method.

```
public static Guid NewGuid() {
    // CoCreateGuid should never return Guid.Empty, since it attempts to maintain some
    // uniqueness guarantees.  It should also never return a known GUID, but it's unclear
    // how extensively it checks for known values.
    Contract.Ensures(Contract.Result<Guid>() != Guid.Empty);

    Guid guid;
    Marshal.ThrowExceptionForHR(Win32Native.CoCreateGuid(out guid), new IntPtr(-1));
    return guid;
}
```

The CoCreateGuid method is what actually makes the GUID and it's a C++ functiom imported from the Windows OLE32 dll.
```
HRESULT CoCreateGuid(
  GUID *pguid
);
```
The CoCreateGuid function makes an RPC call to the Windows OS UuidCreate function.
```
RPC_STATUS UuidCreate(
  UUID *Uuid
);
```
So for .NET framework how GUIDS are generated is completely up to the Windows OS. For newer versions of Windows this returns a [version 4 UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29) (you can tell because there is one [Nibble](https://en.wikipedia.org/wiki/Nibble) that is always set to 4). But what about .NET Core? Guid.Windows.cs contains the NewGuid() implementation for Windows and it's almost identical to the .NET Framework version and still generates GUIDs using the CoCreateGuid function.
```
 public static Guid NewGuid()
{
    // CoCreateGuid should never return Guid.Empty, since it attempts to maintain some
    // uniqueness guarantees.

    Guid g;
    int hr = Interop.Ole32.CoCreateGuid(out g);
    // We don't expect that this will ever throw an error, none are even documented, and so we don't want to pull
    // in the HR to ComException mappings into the core library just for this so we will try a generic exception if
    // we ever hit this condition.
    if (hr != 0)
    {
        Exception ex = new Exception();
        ex.HResult = hr;
        throw ex;
    }
    return g;
}
```
But the Unix version in Guid.Unix.cs is very different because it can't make the RPC call. The Unix version is almost entirely a random number, with the exception of a few bits.
```
public static unsafe Guid NewGuid()
{
    Guid g;
    Interop.GetRandomBytes((byte*)&g, sizeof(Guid));

    const ushort VersionMask = 0xF000;
    const ushort RandomGuidVersion = 0x4000;

    const byte ClockSeqHiAndReservedMask = 0xC0;
    const byte ClockSeqHiAndReservedValue = 0x80;

    // Modify bits indicating the type of the GUID

    unchecked
    {
        // time_hi_and_version
        g._c = (short)((g._c & ~VersionMask) | RandomGuidVersion);
        // clock_seq_hi_and_reserved
        g._d = (byte)((g._d & ~ClockSeqHiAndReservedMask) | ClockSeqHiAndReservedValue);
    }

    return g;
}
```
Unix GUIDs are guaranteed to be [version 4 UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_.28random.29). What's interesting is that many .NET blogs (even from Microsoft) will claim that GUIDs can never be treated as random numbers and that a subset of a GUID is no longer unique, but that's not true for Linux. The Interop.GetRandomBytes call that actually generates the GUID is actually the exact same method that's invoked when generated the seed for the Random.cs class.
```
private static unsafe int GenerateGlobalSeed()
{
    int result;
    Interop.GetRandomBytes((byte*)&result, sizeof(int));
    return result;
}
```
With the exception of a few bits, you can treat GUIDs as a random number generator whose whose subset is also unique. Although, it's probably not best to treat GUIDs seperately based off the operating system considering that the G stands for global. Regardless of how it's implemented, I wouldn't recommend using GUIDs for anything but what they're named for: globally unique identiers ([except ordering by GUID in SQL server to do random sampling because it's a really cool hack](https://dba.stackexchange.com/questions/955/what-is-the-best-way-to-get-a-random-ordering)).