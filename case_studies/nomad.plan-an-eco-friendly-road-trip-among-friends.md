---
date: 2020-06-07
project_date: 2020-04-30T23:00:00.000+00:00
thumbnail: https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_trumbnail.png
title: Nomad. Plan an eco-friendly road-trip among friends
intro: I love traveling. But we realize more and more that traveling costs a lot for
  the planet, and it's not for sure the best ecological activity to do. Stop it? No
  way! As a designer, I usually say that there is always a solution. I have designed
  Nomad, an app to help travelers to organise an eco-friendly and sustainable road-trip.
hero_image: https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_hero_image.png
next_project: case_studies/create-a-user-centric-cms-for-software-agents.md

---
## Background

**Eco-Friendly Road-Trip -** As I have just said previously, traveling and respecting the environment are two things that can work together. If we make some efforts, we realize that most of the activities we love to do could be done more sustainably. We can first prefer public transports, bike, or even our own feet to travel. Then we can buy products to local sellers in the country we are visiting. We can sleep at people's homes to generate money for local people, rather than huge international resorts, or we can use our tent while respecting the nature around us without generating waste. There are so many alternatives and many more opportunities and adventures to live in this way of traveling.

**Planning a sustainable trip -** But why most of the people don't travel this way? Here is the pain point I wanted to work on. Organising a road-trip by car is quite practical because you can go whenever you want and feel free. But the big issue will be your carbon footprint. Now, if you decide to make this road-trip more sustainable and eco-friendly, you will need to be aware of bus or train timetables - or if you want to ride Europe by bike, you will need to plan routes you should take to ride quietly (as the [EuroVelo](https://fr.eurovelo.com/), a cycle route network all around Europe). So the pain point here is that organising a road-trip without a car is much more complex. 

I have done a road-trip with two amazing friends on Kyushu island, in Japan, for 3 weeks last March. We had no car, we were in the Japanese countryside (so with very few choices in terms of public transport), but we traveled around 10 cities in Kyushu. I let you imagine the kind of organisation we needed for this road-trip. The funny thing is over there, everyone asked us "But, you don't have any car?". One day, a woman was shocked to learn that we have planned to go down a mount by feet, even if it would take 4 hours. So if we succeed to travel without a car even in the Japanese countryside where bus timetables are only available on paper in situ, I am sure that traveling in Europe in an eco-friendly manner is not so complicated.

**Save time and be better organised -** During this trip to Japan, we have realised we needed a tool to help us to organise this big adventure. Of course, there were a lot of tools available for us: Google Docs, Trello, Google Maps. A lot of tools, but nothing to gather everything in the same place and make it practical. Google Docs is nice to gather information, but your document quickly became messy. Trello is better to gather information semantically, but as Google Docs, you can't visualise your planning in time and space.

> We spent 3 days planning our trip, but with a better tool, we would have been able to spend less time.

## Problems

The main problems people face are:

* Organising a trip become easily messily
* No good tool to understand the trip schema
* Easily find the right information offline when people are traveling

## Challenges

* Create a clean and sharable platform to gather information without making it messy
* Allow users to visualise the trip in time and space
* Help users to find solutions and alternatives to travel sustainably

## Research & Insights

Facing this issue, I started to draw a mindmap. This helped me to consider other alternatives I haven’t thought about before, as the idea of collaboration with polls, or the differentiation of stops types (route, housing, meal) to better visualize the itinerary.

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_mindmap.png)

###### Mindmap

**Shared Platform -** When we travel with some buddies, we need a shared platform to gather information, researches, and thoughts. This was the core feature. The aim was to find an easy and visual way to share thoughts, so polls and comments were two solutions I wanted to add as features to the app.

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_share.png)

###### Shared Platform

**Checklist and Organisation -** Making lists is still one of the best and easiest way to plan things and be sure not to forget anything. Integrate a checklist feature was obvious to me, as well as to give some pieces of advice to travelers, especially how to travel sustainably.

**Map -** Integrate a map so that users can find every place they want to add to their trip. The aim is to add a location to your trip directly from the app.

**Dual-Visualisation -** It seems important to me to be able to visualise a trip both in time and in space, especially when you want to plan many things. In most cases, a road trip is a long journey so travelers need to visualise their trip on a one-month scale and even more. Having this dual visualisation allows travelers to better make decisions and see opportunities like - "hey, this place is near from another one we already visit, so we can go there too" or "ho, as we can see on the map, there are so many things to see there, and according to the agenda, we still have a few days, so we can spend one more night there".

**Categorisation & Journey Schema -** To talk about visualization again, the categorisation of all the different stops is something important. If travelers have many stops during a few days, to visually differentiate roads, activities, and accommodations would make it easier to understand the journey schema.

## Solution & Features

**Trips List -** The entry point of the app would be the trips list. An attractive visual is quite important especially here to drive travelers to enter.

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_trips-list.png)

###### Trips List

**Viewing a trip -** When we select a trip on the previous screen, we can browse it through this page. Three call-to-action buttons allow us to access quickly to the three main features: agenda, map, and checklist. By scrolling, we can have a short preview of these three features.

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_home.gif)

###### Home Screen (left) - Notifications (right)

**Create a new stop -** Create a new stop to the trip should be quick to do. As filling a form could be painful, the minimum of information (date, location, type of activity) is required and the rest is optional, such as date, description, external link, poll, and location. To simplify the experience, people can also create a new stop from an app thanks to the "share" button, so that information like external link and title will be pre-filled, to make it easier and quicker. 

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_new_stop.png)

###### Add a new stop to the trip

**Polls -** When the user creates a new stop, it is possible to create a poll inside it. It will drive travelers to express opinions easily and so to make decisions quicker. To not be influenced by the vote of others, you can not see poll results before voting yourself. You can discuss with friends decisions through comments.

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_polls.png)

###### Poll

**Maps & Itinerary -** The first thing one will see when opening the map will be the different stops of the itinerary and the next stop highlighted on the bottom-sheet. When one drags this bottom-sheet to the top, one can have a detailed view of the itinerary with all the stops. The selected stop (in green) will be defined according to the current position of the user.

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_map_itinerary.png)

###### Trip itinerary

**Map & Explore Places -** One is also able to explore some places and directly add it to his trip. One can remove a stop from the trip or share this place on another app (Google Maps for instance to start the navigation). Travel duration is also indicated to inform travelers.

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_map_place.png)

###### Explore a place

**Agenda -** I decided to design two different views on the agenda:

* a calendar view, to visualise the trip though months, and have the view of an all-day stops
* a schedule view, to visualise, day by day, all the stops

In both cases, colors and icons allow travelers to easily differentiate stops types (routes, meals, nature, city, housing) to better understand the schedule.

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_agenda.gif)

###### Agenda - Calendar View (left) - Schedule View (right)

**Checklists -** Finally, travelers can create checklists. These checklists can be private, public, or shared only with some friends

![https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/nomad_checklist.gif)

###### Tips (left) - Create a new item in a checklist (right)

## In a nutshell

Even if my conviction about traveling with a sustainable manner is strong, my aim through this app was not to push people to do this way, but to make things easier for those who want.

This solution allows travelers to feel free about the way they organise their trip. Some travelers prefer having a very strict schedule, so the agenda feature would suit them - whereas some others want to stay flexible, so checklist and map would be enough.