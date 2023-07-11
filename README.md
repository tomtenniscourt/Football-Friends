# Football Friends - Project 3

## Code Kickers FC

## Overview

- Application to connect people based on their favourite Football teams and players
- Users can create a profile with their key information and their football team/player likes.
- Users can view other users to identify other similarities in likes.
- Users can customise their favoured players and explain why they like them.
- Version 1 of this App will be simple but there are plenty of additional features we aim to build in the future.

## Entity Relationship Diagram

<img src=“Images/Database/ERD.png”>
In the above ERD we have listed all the attributes of both the Users and Admired Players Schemas and the relationship between them.
## Data Flow and Component Hierarchy
### Link to Excalidraw Diagram/Flow Chart:
https://excalidraw.com/#json=JyhH0fF_IU_l3CyIbrwWX,1EPJqHp2bf5Ks3uXcO1o1w
<img src=“Images/DataFlow/DF-CH.png”>
- Here we’ve listed all of the top level components that we’ll be making use of throughout the project.
- Starting from the top of the hierarchy tree, we’ve visually displayed all of the components and how they will flow in to one another.
- Under each component, we’ve listed a three step process (signified by the three separate colors) where the flow of data is described.

## Models

<img src=“Images/Database/Models.png”>

- We’ve included the 2 core Models we’ll be making use of throughout the project.
- We decided that as the Player Schema is closely linked to the User Schema, that the two should be linked via an embedded relationship.
- Favourite Team is a key which may undergo some functional development as the project progresses, but for now it’ll remain a standard key:value pair with a String data type.

## Team Expectations

### Link to Google Docs Team Expectation sheet:

https://docs.google.com/document/d/1TWpg1u1rXhTKCyDuWgDQZmLaGjY8xo24nyqrrdJnQvM/edit?usp=sharing

- Within this document we’ve outlined the best practices which we agreed upon as a team.
- This includes timeline, best communication practices etc

## User Stories

<ul>
    <li>As a User, I want to join the Football Friends community by registering on the platform.</li>
    <li>As a User, I want to secure my data by being able to log in and out of my account.</li>
    <li>As a User, I want to connect with fellow fans of my favorite team by selecting them on my profile.</li>
    <li>As a User, I want to discover and connect with other fans who share my admiration for certain players by adding them to my profile.</li>
     <li>As a User, I want to personalize my profile to make it easy for other users to identify me.</li>
     <li>As a User, I want to update my user profile whenever there are changes to my information.</li>
     <li>As a User, I want to keep my profile up to date by editing the reasons why I admire certain players.</li>
     <li>As a User, I want the flexibility to remove players from my admired list if I change my mind.</li>
     <li>As a User, I want to explore and discover like-minded fans by viewing other people’s profiles.</li>
     <li>As a User, I want to stay current by being able to add new players that I admire to my profile.</li>
     <li>(ADDITIONAL) As a User, I want to add a profile photo so that other users can put a face to my name.</li>
     <li>(ADDITIONAL) As a User, I want to rate the performance of my admired players in recent matches so that I can compare my assessments with other users.</li>
     <li>(ADDITIONAL) As a User, I want to watch a tutorial video that explains how to use the app so that I can quickly become proficient.</li>
     <li>(ADDITIONAL) As a User, I want to initiate connections by sending ‘likes’ to other fans who share my interests.</li>
     <li>(ADDITIONAL) As a User, I want to receive notifications of likes that have been sent to me so that I can connect with fans who are interested in connecting with me.</li>
     </ul>

### Tracking User Story Progress

- Throughout the project, we made use of an online tool called Miro to track progress.
- We were able to track the User Stories using a simple color coded table like below.
  <img src=“Images/Tracking/UserStories.png”>

## Wire Frames

#### Browser Wire-Frame

<img src=“Images/Wireframes/WF-Browser.png”>

#### Browser Wire-Frame Whole App

<img src=“Images/Wireframes/WF-Browser-Whole.png”>

#### Mobile Wire-Frame

<img src=“Images/Wireframes/WF-Phone.png”>

#### Mobile Wire-Frame / Whole App

<img src=“Images/Wireframes/WF-Phone-Whole.png”>

## Project Management

### Link to Project Management system:

https://github.com/users/jayteebee/projects/1

- For Project Management systems, we’ve made use of GitHub Projects.

## Timeframe And Working Team

We were given this project on the 4th May, 2023 and were tasked to submit and deploy by Friday 12th.
Team members:

- Tom Court
- Karl Matthews
- Jack Coots
- Jethro Block

## Back End Technologies Used

- Express
- Mongoose
- MongoDB
- Axios
- Bcrypt
- Cors
- JsonWebToken
- Multer
- Passport
- Passport-jwt

## Brief

### Planning

- Have a thoroughly documented Team Expectations Google document / markdown file.
- Have a thoroughly developed, beautiful README.md file.
- Take time for each team member to discuss where they feel strongest and weakest, in terms of coding ability.
- Create a Excalidraw or Whimsical document to convey the data flow with component hierarchy included.

### Collaboration

- Contribute equally.
- Have a solid understanding of the entire project. (Even the features implemented by other team members.)
- Take time to pair program with teammates to reinforce learning.
- Be prepared to explain sections of code that were written by teammates.

### Client (Front End)

- Have a working, interactive React app, built using npx create-react-app client
- Have at least 6 separate, rendered components in an organized and understandable React file structure.
- Use only React for DOM Manipulation.
- Consume data from your API, and render that data in your components.
- Utilize React Router, for client-side routing.
- Authentication!

### Server (Back End)

- Have working generic router actions for CRUD using Express, Mongoose, and MongoDB.
- Have at least 2 models (more if it makes sense)
- Have full CRUD on at least one of your models
- Be able to Add/Delete on any remaining models (if it makes sense)
- Authentication!

### Styling

- Be styled with CSS.
- Use flexbox (display: flex) or CSS Grid.
- Implement responsive design on 2 screen sizes (including desktop) using a media query (mobile).
- You can use a CSS framework if you want to.
- Linting
- Indent properly.
- Utilize high-quality, semantic variable names and follow naming conventions.
- Remove unnecessary boilerplate React files and code.
- Remove all console.log()s and commented out code (functional notes/comments are okay).

### Deployment

- Deploy the fully functional front-end via GitHub Pages or Vercel.
- Deploy the back-end via Heroku (or vercel).
- Deploy the MongoDB database on MongoDB Atlas.
- More details on how to deploy will be shared later separately.

### Procedural

- Have frequent commits from every team member dating back to the very beginning of the project. These commits should total to or exceed 50.
- Commit often and use meaningful commit messages
- Use effective and safe branching and merging processes.
- Every team member must have commits contributing to the project.
- Pair programming is allowed and should be noted in the commit by using @github_username of each developer pairing
- No single developer should do a majority of the commits
- Document your code well.

### Stretch Goals

- Build a UML Use-case diagram
- Use JSDoc to document your project
- Use a 3rd party API
- High quality, professional design
- useContext
- Allow users to upload files

## Planning

Much of our planning process can be seen at the top of this document.
One key point to add is that once we had started to work on the project, we made good use of Github’s Project planning tool to create and track tickets which needed to be completed. We were then able to claim responsibility of certain tasks and make sure tasks were being complete in the correct fashion.

## Build Process

During the build process, our project team divided into two groups, each focusing on a distinct aspect: the front-end and the back-end. Given my strengths and expertise, I volunteered to be part of the front-end team. Together with my colleague we dedicated ourselves to developing the visual and interactive components of the application.

Our initial task was to create static HTML and CSS templates for all the pages we had discussed during the planning phase. We began by constructing a functional navigation bar (`NavBar.jsx`), which served as the backbone of our application's user interface. Once we had the foundation in place, we proceeded to meticulously design and implement the remaining pages, ensuring a cohesive and intuitive user experience.

Considering the importance of user management and security, we prioritized the development of the login and registration pages. We invested time and effort into crafting seamless user authentication and account creation processes, guaranteeing a smooth onboarding experience for our users. Additionally, we focused on building intuitive interfaces for profile creation, enabling users to personalize their experience within the application.

The back-end team had set up the server-side infrastructure to handle the functionality we had previously discussed. This included designing robust systems for user authentication, managing accounts, and securely storing data. Furthermore, they implemented mechanisms for populating the application with seed data, ensuring a realistic and representative testing environment.

Once both the front-end and back-end components were running on their own, we initiated the integration phase. This involved merging our front-end work with the back-end infrastructure developed by the other team. By synchronizing the two parts, we created a cohesive and functional application, ready to be put through rigorous testing and optimization.

During the final stages of the build process, we focused on refining the visual aspects of the application. We fine-tuned the CSS and HTML elements, ensuring consistent styling and responsiveness across different devices and screen sizes. This attention to detail enhanced the overall user experience and polished the application's visual identity.

To guarantee the stability and reliability of our application, we conducted multiple rounds of testing. We subjected the application to various scenarios, meticulously hunting down bugs and glitches. Through a systematic approach, we identified and resolved issues, ensuring a smooth and error-free user experience.

After thorough testing and bug fixing, we achieved a stable and feature-rich product that met our initial objectives. 


## Challenges

One of the challenges we faced within the project was how to divvy up responsibilities to ensure that everyone had at least some exposure to areas of coding with which they’re not as comfortable.
Once we had started to merge the front/back end (as detailed below) we decided that it’d be an opportune time to switch roles for a day so we could achieve the goal stated above.
Safe to say it was a bit of a challenge getting up to speed, but certainly a worthwhile process as not much time was lost making progress towards the MVP.


As a member of the front-end team however, I encountered several personal challenges throughout the build process. These were as follows:

**Responsive Design**: One of the primary challenges was ensuring that the application's user interface was responsive and adaptable to different devices and screen sizes. It required careful consideration and testing to guarantee that the layout, components, and content were displayed correctly across various resolutions and orientations.

**Integration Complexity**: Integrating the front-end with the back-end infrastructure developed by the other team posed a challenge. I had to ensure that the communication between the two components was seamless and that data exchanged accurately. This involved coordinating efforts, understanding each other's codebases, and resolving compatibility issues that arose during the integration process.

**User Experience Optimization**: Designing an intuitive and user-friendly interface was crucial to the success of the application. Balancing aesthetic appeal with functionality and ease of use was a challenge that required constant iteration and feedback. I had to carefully consider user flows, navigation patterns, and interactive elements to create a delightful experience for our users.

**Debugging and Issue Resolution**: Throughout the build process, I encountered various bugs, inconsistencies, and unexpected behaviors. Debugging these issues, identifying their root causes, and implementing appropriate fixes demanded persistence and attention to detail. Collaborating closely with the back-end team and conducting thorough testing helped me and my front-end team member identify and resolve these challenges effectively.

**Time Management**: Building a comprehensive front-end solution within the project's timeline was a continuous challenge. Prioritizing tasks, managing dependencies, and ensuring efficient collaboration within the team were crucial aspects of overcoming this challenge. I had to make strategic decisions to optimize our workflow and meet our development milestones without compromising the quality of the final product.
Despite these challenges, our team's dedication, collaboration, and problem-solving skills enabled us to overcome obstacles and deliver a high-quality front-end solution. 



## Wins

Whilst as a team we experienced many wins together, I experienced many personal ones in addition to this. Here are some of the accomplishments that I am particularly proud of:

**Front-End Proficiency**: Being assigned to the front-end team allowed me to focus on strengthening my skills in HTML, CSS, and JavaScript. Throughout the project, I successfully implemented the static HTML and CSS templates for various pages, gaining a deeper understanding of front-end development principles and best practices.

**Navigation Bar Implementation:** Building a functional navigation bar using bootstrap was a significant achievement for me. It required understanding the user experience requirements and translating them into an interactive and intuitive design. Successfully implementing this crucial component showcased my ability to create user-friendly interfaces that enhance navigation within the application.

**Responsive Design Mastery:** Overcoming the challenges of creating a responsive user interface was a noteworthy accomplishment. Through careful planning, testing, and iterating, I was able to ensure that our application displayed consistently and flawlessly across different devices and screen sizes. Mastering responsive design principles is a valuable skill in today's mobile-first world.

**Collaboration and Teamwork:** Working collaboratively with the front-end and back-end teams was an essential part of the project's success. Successfully integrating my front-end work with the back-end infrastructure developed by the other team demonstrated my ability to collaborate effectively, communicate clearly, and understand different codebases. This collaboration not only improved the overall quality of the application but also enhanced my interpersonal skills as a software engineer.

**User Experience Contributions:** As a junior software engineer, I actively participated in discussions and decision-making regarding user experience design. Offering valuable insights and suggestions on user flows, interactions, and interface improvements showcased my ability to think critically and contribute meaningfully to the overall user experience of the application.

**Bug Fixing and Issue Resolution:** Throughout the project, I encountered various bugs and issues that required diligent investigation and debugging. Successfully identifying the root causes of these issues and implementing effective solutions highlighted my problem-solving skills and attention to detail. Resolving these challenges contributed to the overall stability and functionality of the application.

**Continuous Learning and Growth:** As a beginner software engineer, every aspect of the build process provided opportunities for learning and growth. Overcoming challenges and expanding my skill set allowed me to enhance my technical abilities and gain valuable experience in real-world development scenarios. Embracing a growth mindset and actively seeking knowledge throughout the project contributed to my personal and professional development as a software engineer.


### Authentication

As listed above, one of the MVP requirements for this project was implementing authentication for the application. Given this was a new and quite difficult challenge, it is worth calling out how we approached this and how we got on.

When we first started to tackle this feature, it was evident that there wasn't a clear understanding of all the moving parts involved in authentication. It therefore felt sensible to actually sketch out a high level flow of all the steps involved.

See below the diagram we came up with:

<img src="Images/Authentication/flow1.png">
<img src="Images/Authentication/flow2.png">

It was once we had this fleshed out that we were able to confidently start programming the various requirements. Due to the fact that we had chunked up the process into small parts we managed to progress through the actual implementation quite quickly.

Another benefit of the process flow was communicating the process to the whole team. Not everyone on the team was directly involved in implementing the authentication, but it of course would impact everyone. It was with the high level process flow that we were able to communicate easily what was happening.

### Project Management

As a team, one of our strengths was communicating effectively and making sure we were always making progress. One thing that really helped with that, outside of each team member's individual efforts to communicate effectively, was the use of the github projects tool.

See below a screenshot of a section of the tool from within the project.

<img src="Images/tracking/PMTool.png">

As you can see, we split the different tasks up to be represented by different tickets. We included a brief description of what work was involved, who was responsible for it, what stage it was at as well as a few other details.

This really helped to ground our planning conversations each day. It was clear what was still left to do to reach MVP, it was clear who was owning what and it was clear what order the work needed to be done in. It was also easy to keep track of what everyone in the team was working on which helped to avoid merge conflicts when we came to pull requests.

### Git Process

It has been highlighted that we as a team are proud of the way we worked together. One other bit to call out which helped us was the way that we managed our git processes to make sure that our work was consistently being synced up.

The first part of that was making sure that our git process was clear. We sketched out the process, calling out the commands and steps required so that it was really clear.

<img src="Images/tracking/Git process.png">

This combined with the way that we agreed to work together meant that the team were frequently committing their work and we were doing pull requests several times a day.

<img src="Images/tracking/Commits.png">

We had well over 200 commits by the end of the project.

<img src="Images/tracking/Merging.png">

We also worked through around 50 pull request and merges.

In just 4 working days of development time, this helps to demonstrate the way that we as a team worked together. We are especially proud as it for each team member this was the first time working on a group project in the world of software development.

## Future Improvements

In the future, we’d like to build out more functionality within our app to make it closer to something that could be deployed in the real world.
Specifically:

- Messaging functionality so that users who have connected over a mutual player or team could then arrange to go and see a game together.
- Third Party API Integration to include the latest news, scores and matches happening in the various football leagues.
