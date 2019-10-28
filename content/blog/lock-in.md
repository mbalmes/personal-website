---
title: "I ain't scared of no vendor lock-in"
date: 2019-10-22
draft: false
---

"We can't use functions or we'll be stuck with Azure."

"We can't use cognito or we'll be with AWS forever."

I hear it all the time. Vendor lock-in is going to be the scariest halloween costume for a cloud engineer this halloween season. I'm not saying vendor lock-in isn't a problem. In fact, it's costing some big companies a lot of [money](https://www.theinformation.com/articles/aws-customers-rack-up-hefty-bills-for-moving-data?utm_source=hackernews&utm_medium=unlock). But, I'm not one of them. Avoiding vendor lock-in is expensive, really expensive, for small to medium sized cloud users.

For example, cognito is free for the first 50,000 monthly active users. Cognito also, at this time, won't ever give you your users passwords ([because they literally can't](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)). Cognito is 100% certified vendor lock-in technology. However, the money a team saves by using cognito is huge. Having to implement authentication, or any cloud service, has three huge costs. The first cost is liability; most engineers are probably not better at security than AWS's security engineers. The cost of getting authentication wrong can be huge and even enough to bankrupt a small company. The second cost is opportunity cost. When a team of engineers has to work on authentication, they could have been working on other things that would have generated more revenue. The third cost is maintenance. Have fun making sure that the database is always secure, passwords are never stored in plain-text, and training new engineers on the authentication system.

Avoiding Cognito and implementing authentication without it can easily cost thousands to hundreds of thousands of dollars. Cognito is about half a penny per user (and that's after 50,000 users). What are the odds that AWS is going to raise their prices so fast that it won't be worth the cost savings anymore? I don't think they would be getting any new customers anytime soon.

Another example is kubernetes. I love kubernetes and large players in the cloud space can save a lot of money with kubernetes. They can afford the huge upfront cost of getting the cluster configured and the devops to go along with it, but not the tiny players. I can get an autoscaling app service running in a couple hours, but it's going to take me a long time to get a production k8s cluster ready. Sure I'm "locked-in," but it's a shallow lock-in. I can switch over to elastic beanstalk as easy as I got into app service. I know my app service is more expensive than a k8s cluster, but at the small scale we're talking a couple hundred dollars a month.  

It just never makes sense to me to think about the possible costs of vendor lock-in and not the very real costs of avoiding it. Sure prices are going to go up, but more than we're investing to avoid vendor lock-in? The important thing to remember is that when work is done to avoid vendor lock-in it provides absolutely no value unless it's used. When code is written to avoid vendor lock-in it is nothing but a huge cost until someone actually uses it to switch providers. Think of the huge cost  of maintaining anti vendor-lock in code for five years versus the cost of finding away to leave the vendor later on (if that even happens).