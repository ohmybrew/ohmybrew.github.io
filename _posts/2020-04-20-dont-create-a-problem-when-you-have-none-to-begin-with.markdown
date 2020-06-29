---
layout: post
title: Don't create a problem, when you have none to begin with!
permalink: dont-create-a-problem
date: '2020-04-20 15:03:02'
---

![Cover Image](/assets/images/2020/04/3xdp0w.jpg)

## Big Fat No

This post is about creating unnecessary problems for yourself, when you have none of those problems to begin with.

In browsing the various tech and programming feeds I read weekly, I've seen a trend of developers asking questions such as:

> "Should I use [hip language] instead of [well trusted language]?"

> "New project! Should I create [this], [that], and [those] as microservices in [hip language] and [hipper language]?"

I don't know if its some sort of tech-culture pressure to learn these languages and create microservices out-of-the-gate for new projects... but it seems to be becoming more commonly asked.

The answer is always **no**. A _big fat **no**_. If you're currently in the starts of doing this, **turn around**.

## The Issue

The answer is simple... why put yourself through pain that you don't need to drag yourself through?

First, lets explain the difference...

**Monolith**: This is when the entirety of your project/app's business is contained in one piece.

**Microservices**: This is when the your project/app's business is split up into multiple pieces.

The trend lately seems to be people attempting to write with a microservices-first mindset. Not only that, people are wanting to write these microservices in Golang, Rust, Erlang, etc, instead of a more popular/mature language with full-featured framework.

I've used/use some of those languages, and while I like them, I would not start with them. Even with adding packages to fill gaps, its still not as a smooth of a process as a mature method can offer.

You end up trying to connect dots yourself, writing a bunch of code to handle the basics a framework already provides. In the end, you end up spending a lot of time building your own loose framework rather than writing your project/app's business logic. You then also have to write tests for your own framework logic, then do this _X times_ over for each microservice.

Here's some things to consider about if you're thinking about starting with microservices, and microservices in less popular languages/frameworks:

- Are you writing this project by yourself?
- Are you writing this project with a team?
- Does your team have experience with microservices?
- Does your team have experience with the language(s)?
- Do they have time to learn it?
- How will you deploy the project and microservices?
- How do you plan to manage the project's resources?
- Are you having authentication and validation?
- How do you plan to manage the above if yes?
- How do you plan to monitor and log the project?
- Are you touching a cache or database?
- How do you plan to manage those connections?
- How do you plan to test?
- How do you plan to write tests between the microservices?

The list goes on and on... starting with monolith, in a well-matured language, with a solid framework can handle most (if not all) of that list for you. So that's where you should begin. Let yourself, and your team, write the business logic and focus on the project's goals itself, rather than trying to manage all sort of separated services in various languages.

You will regret it once you go down the path of microservices to start, then your deadline looms over your head and you and your team are still patching together the basics a framework would've provided to you.

You and your team will be able to develop at a much higher rate of speed with the proper initial setup. That initial setup should not include microservices.

## A Good Process

Build a monolith to start. Don't worry about your _imaginary server load_, _mystical scaling needs_, and whatever nonsense you've read on some click-baity article.

Worry about it when the time comes to worry about it - you will know when you reach that point. Guess what... most things never reach that point for many company projects out of the gate.

What you want to do is keep your core as a monolith and separate out your externals... like database, caching, queue, logging, etc.

If you're project requires Postgres for a database, Redis for a cache layer, RabbitMQ or Redis or a queue holdpen, and logging... then those are items you should separate from your app. Allow them to run in another instance, either self-managed or preferably managed.

This way you have a good base.

- Happen to actually get some hard-hitting load on your app? Throw it behind a load balancer...
- Is your database actually getting hammered? Scale it's resources...
- Is your cache growing too much? Increase it and create a cluster...
- Is your queue overworked? Spin up new instances...

All this can be handled easily, and with services that DigitalOcean, Azure, Heroku, AWS, and many others provide, it can happen with a click of a button... all without the need to microservice the core of your project.

When your core project can't scale any more, this is when you need think about microservices, but not before.

## Conclusion

Although the above is just one programmers (experienced) opinion, it really should be taken with some consideration.

Start with a monolith and external requirements, use microservices for your core project only when it's needed. Don't give yourself an unneeded headache to start.
