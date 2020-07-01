---
date: 2020-06-29
project_date: 2019-04-30T23:00:00.000+00:00
thumbnail: https://annarabeonybucket.s3.eu-west-2.amazonaws.com/poleemploi_trumbnail.png
hero_image: https://annarabeonybucket.s3.eu-west-2.amazonaws.com/poleemploi_hero_image.png
title: Pôle Emploi - Building a CRM for a government employment agency
intro: _Pole Emploi is a French governmental agency which helps unemployed people
  to find jobs and provides them with financial aid. The agency also advisers companies
  in their recruitment part and helps them to find candidates. In May 2018, we had
  the opportunity at school to work in partnership with this agency. This partnership
  aimed to bring fresh ideas so to help Pole Emploi to improve their workflow with
  companies and job seekers. During this project, I had the chance to work with two
  amazing students,_ [_Lengliang Li_](https://www.behance.net/lilenglian6085 "Lengliang
  Li") _and_ [_Morgane Thomas_](https://dribbble.com/mo_thomas "Morgane Thomas")_.
  This project last 3 weeks._

---
## Background

The Pôle Emploi team came to us with a precise issue: improving the company adviser workflow at Pôle Emploi. This French governmental agency is very famous in France, and also because their services are free, a lot of job seekers and companies request their help. With this huge amount of requests, it's more and more complicated for the advisers to manage every applicant's requests and as well as job offers from companies by respecting due date and constraints.

**The main requests from Pôle Emploi were:**

* Focus and improve the company advisers workflow and care about the company follow-up
* Build a tool as intelligent assistance to help advisers in the recruitment phase
* Help advisers to find the best job offers thanks to intelligent job offers suggestions
* Help advisers to manage a large number of job offers and the company follow-up (time deadline, remind in the right time to call back and take some news...)

## Research & Understanding

First of all, we spend a great deal of time on-site to discuss with Pôle Emploi key workers to know how they used to work, understand their whole workflow to catch the pain points. The main challenging part for us was to be immersed in a very different field that we used to. We needed time to understand this new environment and the current user flow.

**There are two different types of advisers at Pole Emploi:**

* **The job seeker adviser** focuses on helping unemployed people to find a new job, orients this person to additional training or formations if needed, help him/her to get ready for an interview. This adviser also manages his/her follow-up after the hiring to be sure that everything is fine and the job is adapted.
* **The company adviser** focuses on the recruitment process of a company that needs help to find candidates for a job offer. The adviser sometimes goes to check on-site if the job respect laws and regulations. The mission of this adviser is to understand the company's need and request, and to find candidates through the registered job seekers at Pole Emploi. The adviser also organises interviews when the company can't.

For this project, Pole Emploi asked us to focus on **the** **company's adviser workflow.** Of course, we did focus our researches on both advisers because both of them use to work together, as they act as a conduit between the job seekers and the companies.

**The recruitment process with Pole Emploi** - One of the very first things we had to think about was "How does the recruitment phase take place between job seekers, advisers, and companies at Pole Emploi, from the file opening to the first months of employment? We draw this user flow and use it as support then to draw ideas and insights.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/userflow.png)

###### Pôle Emploi recruitment process user flow

I won't go into details, so to conclude from this user flow, we've identified the following pain points:

* **There are far too many email exchanges between both advisers (company's adviser & applicant's adviser).** To reduce email exchanges, It might be interesting to allow them to share information in common on a dedicated space.
* **Communication and information between the two advisers require more clarity.** For example, we noted via the user flow above that the company was not sufficiently clear with the advisor. The candidate, therefore, did not have enough clear information which can explain his departure from the company after 3 months of employment.
* **There's a lake of traceability.** Companies don't contact back advisers to tell them if they finally hired the applicants, and it's not easy for advisers to remember to call back each company.

## Problems

* **The traceability** - Did the company finally hire the candidate? If yes, is the candidate still hired at present? Why did the company hire this candidate and not the other? All this feedback from the company and the applicants is missed and advisers need it to improve their recruitment phase and better understand today's people's needs.
* **A large number of requests and files.** Pôle Emploi is a recognized French organization and certainly the best-known in the field of recruitment. These services are free, which makes Pôle Emploi attractive. The pain point here is that more and more people call on this agency, creating more and more requests and data to process, which is critical for advisers.
* **Waste of time on administrative tasks** - Advisers feel like they spend to much time on administrative tasks (creating a file, email exchange, finding missing information, checking availability, checking data,...) instead of staying focused on the recruitment part.
* **Lake of information for advisers** - Amount of email exchanges shows that the information is missing or simply forgotten - how to remember someone's availabilities when you have 30 people to manage?

## Goals / Challenges

* **Bring context to a job request** - Bring hierarchy and highlight the right information needed in order to have a better overview of the situation and the advancement of the file.
* **Communication ease between company adviser and applicant adviser.** Build a common place where both of them can share information would be able to understand the needs of the other side (company or job seeker) and better know if it's an applicant match with a job offer or not.
* **Bring suggestions and help to the adviser** - Because of the number of requests, advisers need suggestions, guides to prioritize requests, and applicants seeking.

## Insights

**Highlight & prioritize information**

Most of the people who posted a job offer through Pole Emploi are not recruiters. They have another job, so first of all, they don't have much time to spend in the recruitment phase (the reason why they request Pôle Emploi help) and they need tools and help to organise interviews and manage paperwork. Because most of the time, those people are not often available for calls or appointments, advisers need precise pieces of information. And because of the number of requests to manage, advisers need clear information written somewhere, because without it, finding the right information each time becomes painful and a lake of time.

* One first part of this information could be first the availability dates, (company and job seekers), so that advisers can quickly find an interview date (in most cases, for a job offer, there could be about 10 applicants so 10 interviews to plan).
* The deadline for the job offer - Sometimes, hiring someone is urgent, for the seasonal jobs for instance.
* The next events so that the consultant can anticipate, prepare each event despite the huge amount of job offers to manage (interviews, on-site visits, interview preparation, one-one appointments...)

In other terms, prioritize information would be also to help the adviser to answer the following question: which request should I work on first? Because there is a lot of jobs offers created every day on the platform, and some of them don't especially have a due date but last for a long time and should be highlight also. So another goal here would be to suggest to the adviser which file to work on (the most urgent ones, the oldest ones, etc...).

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/filestatus.png)

###### All the process steps for a file

**Help in the research phase**

One of the parts the company consultant spend time on would be the research of applicants for a job offer. Is this job offer match with this job seeker, are the job seeker and the recruiter needs the same? This is also one of the reasons there are two types of advisers at Pole Emploi, one who focuses on the job seeker and one on the company. So, both consultants discuss the job offer and the potential applicant to see if it could match together. But time is limited and there is a lot of job offers to manage, so it would be good that needs from both sides (recruiter & job seeker) would be write down in a place that both consultants can access to.

## User flow

As required, we focused our work on the company adviser workflow, while considering the applicant adviser. Before starting screen design, I used to draw quick wireframes on the Ipad first to test if the user flow does work and also to start to prioritise information.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/wireframe1.jpeg)

###### User flow (1/3)

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/wireframe2.jpeg)

###### User flow (2/3)

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/wireframe3.jpeg)

###### User flow (3/3)

## High Fidelity Screens

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/Inbox.png)

**Inbox & Tasks Priorisation** - As I've mentioned before, an adviser has a lot of files to manage, and it's often complicated to know when to start at the beginning of the day. The inbox would allow the user to prioritise and order those files (sort by start date or due date).

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/applicants.png)

###### Applicants Board

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/Pool.png)

###### Applicants Pool

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/filters.png)

###### Applicants Pool - Filters

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/applicantprofile.png)

###### Applicant Profile

**Search for applicants** - Once the user selects a file to work on, he/she can find all the applicants involved in the recruitment process and check the job detail and requirements on the sidebar at the right. The user can also access to the job seeker pool which is pre-filled with filters according to this specific job offer. From this page, the user can select an applicant to know more about her/him and add this job seeker on the process or not.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/changestatus.png)

###### Edit Applicant Status

**Applicant Status & File Activity** - Once the situation of an applicant for the recruitment process needs to be updated, the adviser can easily change an applicant's status with a drag and drop from a board to another. Using the kanban view came to me as an interesting idea. Through the side sheet at the right, the adviser can also access the file activity: applicants status updates, new events, new notes created. This feature seems to be very important because usually, several advisers work on the same file and communication is important.

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/planning.png)

###### Planning Tab

![](https://annarabeonybucket.s3.eu-west-2.amazonaws.com/modalnote.png)

###### Create a new note

**Reminders** - Advisers can create reminders to help them to remind about a task (call back the company to take some news, check the recruitment advancement, etc), but they also have the possibility of adding a reminder inside a note. Indeed, the advisers, having a lot of files to process, must return at a given moment to reconnect with the company, and to go back on an old file is not always simple.

## Design Metrics

The user testing phase was very quick. One adviser came to the design school and we had to get her feedback in 5 mins because she had to dedicate time to all the groups and there were many of us. To be honest, we would have liked more time, because figuring out new software in 5 minutes is more than challenging. Fortunately, her feedback was very positive:

* She found our interfaces generally readable and relevant
* She was attracted by the kanban view for managing applicants in the recruitment process
* She found the planning tab very relevant and would have liked emails to be added

## As a nutshell

Although the user testing phase seemed too short for us, this project made us grow as designers. The project was all the more challenging because we were not originally familiar with the subject. This difficulty pushed us to deepen our research phase as much as possible to better identify problems that advisers may encounter in their daily working time. In addition, I was also able to realize that working on the conception of professional software was something that I really liked.