---
title: "Serverless: still no such thing as a silver bullet"
date: 2019-09-18
draft: false
---

[Serverless](https://en.wikipedia.org/wiki/Serverless_computing) is the new
hotness right now, which means everyone is using it for everything and
getting upset that isn't some magical wand that solves all their problems. For
example, [cardgames.io switched from Elastic Beanstalk
to Lambdas and saw their bills go up and response time get worse.](https://einaregilsson.com/serverless-15-percent-slower-and-eight-times-more-expensive/)
Isn't the whole point of serverless that the built in autoscaling saves 
money and helps with performance?

When I talk about serverless, I tell people serverless is like Uber and
everything else is like owning a car. Uber and Serverless have the same
benefits: I only have to pay for the time I'm using it, someone else is
doing most of the work, and I can use it as much as I need. If all of that is so
great why do so many Americans own cars?

For one thing, just because I only pay for the time I'm using something doesn't
make it cheaper. For people that only need to be driven to the grocery store once 
a week, it's probably better
for them to not own a car and Uber everywhere. If someone else is driving 100
miles a day Uber is going to cost more than owning a car. Likewise, if
serverless functions are always hot, they're not cheaper. To take advantage of
on-demand pricing there has to be periods of low demand. Cardgames.io is 
serving about 10 million requests per day. That's like taking an Uber across
the country every single day. Just buy the dang car already!

For another thing, Uber is slower. Sometimes serverless is slow too.
Having dedicated instances that have enough resources to server peak load is
faster than autoscaling functions, period. Auto-scaling doesn't mean fast.
Auto-scaling means that there will be enough resources to fullfill the given
load eventually. Just because there are Uber drivers available, doesn't mean
they'll be at my door as soon as I press the button. 
The large serverless providers aren't perfect at scaling and there are going to 
be large periods when function instances aren't matching load and there isn't a 
thing I can do about it because I don't get to control how they scale. 

But, here's the important part of the analogy: do people that own cars use Uber?
Of course they do! There are times where it makes sense for car owners to take 
an Uber and there are times when serverless can play a small role in another 
cloud compute based architecture. The amazing thing about serverless is how easy 
it is to get started with it. To add one function to a project is not nearly the 
same amount of effort to add a k8s cluster or a baremetal machine. I can slap a 
function app on any project in less than a day. I can have a dedicated VM for 
time sensitive operations and serverless functions for asynchronous calls in the 
background or I can have functions do my daily tasks or I can have a function 
for an endpoint that is heavily, but only once a month.

There are still times and places where serverless is all that's required. For 
example, a webapp that only gets visited a few times a day is going to waste so 
much money on devops and servers for a full environment than would be 
spent on a serverless environment. But situations like that are not nearly as 
common as situations where serverless can play a small role in the larger 
infrastructure. Give it some thought and make a calculated decision about what 
role serverless can play in the larger architecture before shoehorning it in to 
try to save money or increase performance. Like all tools, it doesn't work
when it's not used correctly.