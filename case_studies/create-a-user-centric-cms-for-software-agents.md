---
date: 2020-03-29
project_date: 2020-06-03T23:00:00.000+00:00
thumbnail: https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_trumbnails.png
title: Tomorrow. Life is too short to lose time
intro: For several years, I noticed that I had plenty of goals and dreams that I never
  achieve. This is very easy to always postpone because we think that tomorrow will
  be a better day. The thing is that we can wait for it, but time waits for no one.
  Through this project, I wanted to create an app to push people to start to make
  those dreams something real.
hero_image: https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_hero.png
next_project: case_studies/pole-emploi-building-a-user-centered-crm-for-a-government-employment-agency.md

---
## Background

**A world where we procrastinate more and more -** Our world is changing very fast, and so we change our way of living as well. Our digital tools push us to go to the most comfortable and easiest solution, again and again. Facebook is here to make us remember our friends and relatives birthdays, Waze helps us to find the right road to take, even if it's to go to your grandma's home, and Google is never far from us to help us to convert centimeters into millimeters, uh? That's what we call "digital amnesia". It's like to plug our brain to a hard drive so that we could find the right information we're looking for. The problem is that this digital amnesia is turning into a digital dependency. We need the Internet and digital tools to live, and most of the time, we use it even when we don't really need it. The main consequence of that is our screen time that increases more and more. In the UK, [the average screen time](https://www.codecomputerlove.com/blog/screen-time-stats) is 3 hours and 23 minutes per day, and if we convert this time into days in a year, it represents 50 days per year. Then, if you think about what kind of app you spend the most time on, you realize how much time you lose in your life.

**Life is too short to lose time -** So as I've just said before, we're all able to lose time without realizing it. Postpone is also a way to lose time. We all have a bucket list, a list of crazy or less crazy dreams we want to achieve. Those dreams also have something in common: we are afraid of achieving it. Sometimes because it takes time, sometimes because it hard to achieve and you won't see your advancement immediately.

> Dost thou love life? Then do not squander time, for it's the stuff that life is made of
>
> \- Benjamin Franklin

I want to talk about Steven Pressfield, the author of "The war of art". In his book, the author writes about the concept of the resistance, a kind of toxic thing that fights against our inner genius who wants to achieve our dreams. The resistance, according to Steven Pressfield, defends us to reach our dreams by making us afraid of: "I think I'm not ready yet", "today is not the right day" or worse "I still have time, I can start later". The way how Steven Pressfield personifies the concept of the resistance is very clever, and it serves to illustrate quite well the idea of procrastination. That is a perfect transition to take a look at another concept to understand how time is precious, [the life calendar](https://ezhilangunasekaran.github.io/life-calendar/): it's a 4693-box grid that represents a 90-year-old life. One box is one week. When you fill the weeks that you've already lived, it's scary to realize how much time it is left.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_life_calendar.png)

###### Here is my life calendar with my 22-year-old...

## Problems

The main issues we are facing:

* People are not motivated in the long term and give up a habit after a month
* We waste time without realizing it
* We spend too much time on screens

## Challenges

* Bring a long-term vision to a habit
* Allows users to easily visualize him or her consistency
* Bring motivation in new good habits

## Researches & Insights

**Screen Time** - Alarming figures show that we definitely lose time on our screens. But I've also realised that there are already many solutions to track our screen time. I preferred to aim the app towards the new habit tracking, rather than the screen time tracking.

**Week pattern & Grid View -** I was previously talking about the life calendar and how it is scary to see the rest of the time we have left. If you have a Github account and you take a look at your contributions on your profile page, you can see this kind of year view. A day is represented by a square and green tints depend on how many contributions you've made. First thing, this is insane to see how much a year looks short when we look at this time view. Then, the idea of using color squares to represent days and visualize consistency through a month or a year like this way is a very clever manner.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_github_grid.png)

###### Yep, I didn't make a lot of contributions yet in Github :/

Then, I drafted some week patterns according to different types of habits. For instance, the second pattern (see picture below) could suit a daily habit that you want to break during weekends, whereas the third one would be perfect for habits that could need more time in a day when you have a lot of free time on weekends (like DIY projects). The idea would be to allow users to draw their own week patterns to set days when they want to repeat the habit, and then they will be able to visualize their consistency during the current or past months.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_week_pattern.JPG)

###### Some Week Pattern for different kind of habits

**Challenge Friends -** We all know that launching a new habit with someone else is much more motivating that going into it alone. We help each other, give pieces of advice, and motivate friends not to give up. To integrate that possibility to share a habit with friends to challenge them sounds like a good feature to add.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_request_wireframes.JPG)

###### Challenge Request Flow

**Milestones & Long-Term Vision -** One of the main pain points about building new habits is to... make it a real habit, so not to give it up. At this point, I've understood that I will need to bring a long-term vision to those habits, in order to give real value to keep it going. Users need to feel their improvement and benefits. Then, milestones came to me as a great idea, to go on step by step and achieve goals one after another.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_milestones_draft.JPG)

###### Milestones Principle

**Day Status -** I spent some time working on the day status style: how to make the difference between days when the habit should be done, days when it's not planned, days that the user missed, and today's day. I've started some iterations by using the primary color for the current day and day when the habit was done, and two other different styles for future days when it's planned and when it's not. But it turns out too complicated and less accessible because there were too many styles. I made several iterations to simplify the thing, and finally, reach a much clearer solution (solution C).

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_day_status_iterations.png)

###### Day Status Iterations

## Solution & Features

**Manage Habits -** On the habits screen, you'll find all the habits you've created and you can check as "done" the habits you've done. I wanted to allows users to check habits even if those habits weren't planned for today, because sometimes we realize we can spend much more time than expected for a good habit, and that's a good thing.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_home.png)

###### Home page and Habits list

**Create a new habit -** By creating a new habit, you will start defining a color theme, set a name, and the aim of this new habit. Then, you will select which days we want to repeat this habit (week pattern), set some milestones to achieve, and then why not make this habit funnier by inviting some friends to do the same.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_anim_create.gif)

###### Create a new habit

**Habit Grid** - Once you are into a habit for several weeks or months, you can see our advancement through the screen. The grey boxes represent the days we missed to do it, and the primary color represents the days you have done. And for instance, here, white boxes represent the days you have not supposed to do it because you have planned to do this habit only during weekdays.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_scroll_habit.gif)

###### Habit Example

**Miss to set a day as done -** You will always have the possibility to set a habit as done even if the day is over ("I did it yesterday but I forgot to write it down") because sometimes you just forget to check our phone and the aim is not to generate frustration or to push the users to stay focused on their screen all the time.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/tomorrow_anim_day_status.gif)

###### User can change the day status even if the day is over

**Challenge Requests** - Friends can send you some challenge requests to invite you to get into a new habit with them.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/challenge_request.png)

## In a nutshell

Through this project, I wanted to make the habit tracker something funnier (invite a friend to do the same) and bring a long-term vision to habits (highlight the aim and the consistency) to make goals more tangible.