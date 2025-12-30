# Kenneth Atchon - Complete Information Profile

## Personal Information

- **Full Name**: Kenneth Atchon
- **Primary Email**: kenneth.atchon@gmail.com
- **Career Email**: katchon.career@gmail.com
- **Phone**: +1 (219) 386-6604
- **Current Location**: Seattle, WA
- **Previous Location**: Crown Point, IN 46307
- **Nationality**: USA Citizen / African American
- **Language**: English
- **GitHub**: https://github.com/KennethAtchon
- **Freelance Status**: Available

## Professional Titles

- Software Developer
- Mobile Developer
- Full Stack Developer
- Freelancer
- React Developer
- Backend Developer
- Content Creator

## Current Position

**Software Developer I** at **Amazon**
- **Location**: Seattle, WA
- **Start Date**: November 2024
- **Status**: Present
- **Team**: Authentication Team for AtoZ App
- **Responsibilities**:
  - Work on the authentication team for Amazon's AtoZ app, a public-facing internal application
  - Contribute significantly to React Native migration projects, modernizing legacy mobile applications
  - Develop and maintain cross-platform mobile applications using React Native, Objective-C/Swift, and Java
  - Learned and implemented GraphQL for mobile application data fetching and API integration
  - Collaborate with cross-functional teams to deliver high-quality mobile software solutions
  - Implement automated testing and CI/CD pipelines improving deployment efficiency by 40%
  - Optimize mobile application performance and user experience across iOS and Android platforms
  - Build scalable mobile solutions that impact millions of users worldwide across iOS and Android platforms
  - Handle various development tasks as needed, adapting to project requirements

## Work Experience

### Software Developer I - Amazon
**Period**: November 2024 - Present  
**Location**: Seattle, WA

Work on the authentication team for Amazon's AtoZ app, a public-facing internal application. Contribute significantly to React Native migration projects, modernizing legacy mobile applications. Develop and maintain cross-platform mobile applications using React Native, Objective-C/Swift, and Java. Learned and implemented GraphQL for mobile application data fetching and API integration. Collaborate with cross-functional teams to deliver high-quality mobile software solutions. Implement automated testing and CI/CD pipelines improving deployment efficiency by 40%. Optimize mobile application performance and user experience across iOS and Android platforms. Handle various development tasks as needed, adapting to project requirements.

#### Work Summary

##### Major Projects Delivered

**AtoZMobileAuthentication Migration to React Native (Q4 2024 - Q2 2025)**
- Contributed to complete migration from native iOS/Android to React Native under Arthur's leadership
- Recreated 8+ authentication screens with enhanced accessibility features
- Migrated 100+ metrics from native ios/android and eliminated redundant metrics
- Implemented React Context, session management, demo mode, and logging systems

**Impact**: AtoZ (Amazon's internal platform for managing associates/employees) had a login page that was built in native iOS/Android. There were multiple issues with this. AtoZ codebase was mostly already on React Native and we wanted to migrate to React Native to better integrate with other features of the app. The native iOS/Android codebase was also very tedious to update - a developer would have to update both the iOS codebase and the Android codebase and they had different development principles and ways to update to ensure parity. This had the effect of doubling development time. We would also need to learn how both sides of the codebases work which is extra overhead. The React Native migration cut the development time in half by merging them into one codebase, ensured the login of AtoZ was modernized like the rest of the app, and we improved things like code readability, metrics, and accessibility while doing the migration.

I was in charge of creating the new authentication screens based on provided Figma and old design, and I was in charge of enhancing accessibility features to make the login screen born accessible. I ensured great coverage on screen sizes, good screen reader functionality with accessibility labels and text.

I implemented things like: React Context, session management (session expiration logic), demo mode (for app testers), and logging system (found a new way to log metrics and implemented all the previous logging into the new app).

**2-Person Review Spoofing for Demo Mode (Q3-Q4 2025)**
- Delivered 2PR security solution addressing Shepherd risk from Amazon Security
- Created Spoofing package preventing monolith growth
- Implemented polling mechanism, approval screens, and deeplink handling
- **Impact**: Unlocked demo mode expansion to US and 12 EU countries

**Context**: Our current package was growing into a monolith and we took the initiative to split it. We created our new feature in a separate package to ensure the main package doesn't become a monolith. I implemented the polling mechanism, the approval screen for associates, and waiting state for managers, and I also worked on the deeplink handling and ensuring it works properly. This helped unlock the demo mode expansion to the US and 12 EU countries. It was currently locked due to security concerns that I helped address.

**Pivot Transition Alumni Feature (Q3-Q4 2025)**
- Modified auto-trigger system consuming PeopleBus Access Revoked V2 events
- Enabled pivot users to sign up for Alumni Lite during transition
- Synchronized with AtoZ Azul team on approach

**Alumni Lite Launch (Q3 2025)**
- Implemented feature gate for controlled rollout
- Created 4 HTML email templates translated into 27 languages (108 total files)
- Successfully launched globally

**Kiosk Authentication Investigation (Q3-Q4 2025)**
- Investigated WebSocket solution for logout issue

**Impact**: Solution was rejected but learned how to work with very tight constraints.

The issue was kiosk machines were authenticating using Kerberos. We owned the AtoZ app, which is supposed to log the user out. We can log the user out from the web browser with every other authentication provider except Kerberos as it is tied to the actual device. We created a workaround. We would have a long-lived WebSocket connection, opened up by the client to our website. And we would send an event to the client computer. The client computer would then shut down the PC, which will have the effect of clearing Kerberos auth. This was the only working solution given that it's impossible for a web browser to close a desktop by itself.

The solution was rejected in favor of just migrating away from Kerberos authentication.

### Full Stack Developer Intern - Prognostic Optimization Group
**Period**: May 2024 – August 2024  
**Location**: Remote

Transformed Figma designs into responsive websites ensuring smooth user experience across devices through precise implementation and testing. Developed robust PostgreSQL database with advanced analytics, enhancing user insights and site performance. Sharpened skills in both front-end development and database management. Implemented precise testing and optimization strategies.

### Software Developer - AI Trainer - DataAnnotation.tech
**Period**: June 2023 – November 2024  
**Location**: Remote

In this freelancing role, chose tasks that matched interests, primarily focusing on evaluating and grading the performance of AI systems to enhance their coding capabilities. Provided detailed and nuanced feedback, which significantly improved AI accuracy and reliability. This experience also allowed for developing strong code review and comprehension skills. Evaluated and graded AI system performance to enhance coding capabilities. Provided detailed feedback improving AI accuracy and reliability while developing strong code review skills.

### Cloud Administrator Intern - Arpa-Cloud
**Period**: May 2023 – August 2023  
**Location**: Remote

Supported senior Azure admins in developing and maintaining private and hybrid cloud infrastructures. Tasks included establishing VNets and subnets, managing network routing and peering, deploying and configuring IaaS components, and updating IAM and resource policies.

## Education

**Bachelor of Science in Computer Science**  
**Purdue University Calumet**  
**Location**: Hammond, IN  
**Period**: 2021 - 2024  
**GPA**: 3.87 (Magna Cum Laude / High Honors)

Graduated with high honors (GPA: 3.87) in Computer Science, completing a curriculum that included courses in Data Structures, Algorithms, Operating Systems, Database Management, and Software Engineering. Education provided a strong foundation in both theoretical concepts and practical applications, preparing for a dynamic career in technology.

## About Me

I'm Kenneth Atchon, a Software Engineer with expertise in full-stack web development, mobile development, and cloud-based solutions. With a Bachelor's degree in Computer Science from Purdue University Calumet, I've developed and deployed dynamic web applications using React JS, React Native, AWS, MySQL, and MongoDB.

My experience includes improving AI training datasets, transforming Figma designs into responsive websites, and optimizing cloud infrastructures. I'm passionate about leveraging technology to solve complex problems, continuously learning, and delivering high-quality solutions that drive user engagement and efficiency.

As a Software Developer I at Amazon, I work on the authentication team for the AtoZ app, a public-facing internal application. I contribute significantly to React Native migration projects and develop cross-platform mobile applications using React Native, Objective-C/Swift, and Java. I've learned and implemented GraphQL for mobile application data fetching and API integration. I work on building scalable mobile solutions that impact millions of users worldwide across iOS and Android platforms, while handling various development tasks as needed.

## Technical Skills

### Programming Languages (with Proficiency Levels)

- **Python**: 90%
- **C++**: 75%
- **Java**: 65%
- **NodeJS**: 80%
- **Web Dev (HTML/CSS)**: 80%
- **React**: 80%

### Complete Skill Set

**Mobile Development**:
- React Native
- Objective-C
- Swift
- Java (Android)
- iOS
- Android

**Frontend**:
- React
- HTML/CSS
- JavaScript
- TypeScript
- Tailwind CSS

**Backend**:
- Node.js
- Express
- Strapi
- GraphQL (learned at Amazon)

**Databases**:
- MySQL
- MongoDB
- PostgreSQL

**Cloud & Infrastructure**:
- AWS
- Azure
- AWS Amplify

**Other Technologies**:
- Git
- REST API
- GraphQL (learned at Amazon)
- AI/ML
- Code Review
- Data Analysis
- Mobile App Migration
- CI/CD
- Automated Testing

## Coding Journey Timeline

### Python

**2024**:
- Practice for coding interviews by solving problems on LeetCode using python
- Built a side project, GUI called 'Unital' in python, to help people convert word documents, filter them, and compare files

**2023**:
- Collaborated with professor on research investigating sublinear time algorithms for finding the sum of n integers
- Utilized Python libraries such as pandas and numpy to conduct detailed analysis and comparisons of various algorithms, including the Metropolis-Hastings algorithm

**2020**:
- Started programming journey with Python
- Took a bootcamp in Python the summer after high school and decided to pursue a career in tech
- Learned data types, inheritance, common libraries, etc.

### C++

**2023**:
- Solved a very complex programming problem in C++ (maybe only 20% of peers were able to complete it)
- [Download Project ZIP file](downloads/CS30200Project1.zip)

**2022**:
- Learned C++ for the first time at university
- Learned difference between call by value and call by reference
- Learned pointers, recursion, and dynamic memory allocation

### Java

**2023**:
- Learned about Computer Graphics in Java (3D models and MVC) [HW assignment](downloads/hw4_work.zip)
- For Operating Systems class learned how to use HTTP methods in Java [HW assignment](downloads/hw3.zip)
- [How I solved it](downloads/CS336Hw3Atchon.zip)

**2021**:
- Had first class in Java, and learned the basics of OOP and syntax
- Built a hangman game in Java for extra practice with the language

### NodeJS

**2024**:
- Currently use Strapi on top of Node JS to build webapps

**2023**:
- For a Capstone Database Project, a team of developers and I built a NodeJS server for our React frontend [Link](https://github.com/KennethAtchon/Ecommerce-Website-CS442)

**2021**:
- Developed and hosted a personal website (old one) using React JS and AWS Amplify, showcasing professional portfolio and projects

### Web Dev (HTML/CSS)

**2024**:
- For most of school year, avoided HTML/CSS because couldn't learn it, but after learning React and Tailwind decided to go back to the roots
- Was able to build website with just vanilla JS, HTML/CSS with the knowledge gained from React and Tailwind

### React

**2024**:
- Build most of side web projects with React
- Built 3 ecommerce stores: Trivowear, Broovie, and the store for Database class
- Mainly use Tailwind for styling when using React

### GraphQL

**2024**:
- Learned GraphQL at Amazon for mobile application data fetching and API integration
- Implemented GraphQL in cross-platform mobile applications using React Native

## Notable Projects

### POG AI - Prognostic Optimization Group
**Description**: Transformed Figma designs into a responsive website with robust PostgreSQL database and advanced analytics. Enhanced user insights and site performance through precise implementation and testing.  
**Technologies**: React, PostgreSQL, Figma, JavaScript, CSS  
**Status**: Featured Project

### DataAnnotation AI Training
**Description**: Evaluated and graded AI system performance to enhance coding capabilities. Provided detailed feedback improving AI accuracy and reliability while developing strong code review skills.  
**Technologies**: AI/ML, Code Review, Python, Data Analysis

### Broovie - Movie Application
**Description**: Full-stack movie application with user authentication, movie database integration, and responsive design. Features include search, ratings, and personalized recommendations.  
**Technologies**: React, Node.js, MongoDB, Express, API Integration  
**GitHub**: https://github.com/KennethAtchon/Ecommerce-Website-CS442

### Trivowear - E-commerce Platform
**Description**: Complete e-commerce solution with user authentication, payment processing, and inventory management. Built with modern web technologies and responsive design.  
**Technologies**: React, Node.js, MySQL, Stripe, AWS

### Bug Tracker - Project Management
**Description**: Comprehensive bug tracking and project management tool with team collaboration features, issue tracking, and progress monitoring.  
**Technologies**: React, Python, Django, PostgreSQL, REST API

### Unital - Document Conversion Tool
**Description**: GUI application built in Python to help people convert word documents, filter them, and compare files.  
**Technologies**: Python, GUI

## Services Offered

### Web Development
I create responsive, visually appealing websites optimized for performance and user experience.

### App Development
From concept to deployment, I build intuitive, scalable, and secure mobile and web applications.

### UI/UX Design
I design user-centric interfaces that are both visually stunning and highly functional.

### Game Development
I develop immersive games with captivating graphics and smooth performance from concept to release.

**Mission Statement**: My mission is to help you create a fully functional website that drives your success. Whether you're building an e-commerce platform, a SaaS product, or any other type of business, I'm here to bring your vision to life.

## Certifications

- AWS Certified Developer - Associate
- Azure Cloud Administrator
- MongoDB Certified Developer (mentioned in AI_CONTEXT.md)

## Key Highlights & Strengths

### Clean Code
Writing maintainable, scalable, and efficient code following best practices and design patterns.

### Performance
Optimizing applications for speed, scalability, and exceptional user experience.

### Collaboration
Working effectively in cross-functional teams using Agile methodologies and modern tools.

### Problem Solving
Analyzing complex requirements and delivering innovative solutions that exceed expectations.

## Personal Statement

Passionate software engineer with expertise in full-stack web development and cloud-based solutions, dedicated to creating exceptional digital experiences. Passionate about leveraging technology to solve complex problems, continuously learning, and delivering high-quality solutions that drive user engagement and efficiency.

## Contact Information

**Email**: kenneth.atchon@gmail.com (primary) | katchon.career@gmail.com (career)  
**Phone**: +1 (219) 386-6604  
**Location**: Seattle, WA  
**GitHub**: https://github.com/KennethAtchon  
**Map Location**: Crown Point, IN 46307 (previous location)

## Portfolio Website Details

### Current Portfolio (viteproject)
- **Tech Stack**: React, TypeScript, Tailwind CSS, Vite
- **Features**: 
  - Modern, responsive design
  - Glass morphism effects
  - Smooth animations
  - Dark/light theme support
  - Contact form functionality
  - Project showcase with GitHub integration
- **Components**: Navigation, Hero, About, Projects, Resume, Contact, Footer

### Previous Portfolio (oldcode)
- **Tech Stack**: Vanilla JavaScript, HTML, CSS
- **Features**:
  - Dark mode toggle
  - Responsive navigation
  - Animated skill progress circles
  - Interactive coding journey timeline
  - Smooth scrolling sections
  - Google Maps integration

## Additional Notes

- Experience level: 1-2 years professional experience
- Available for freelance work
- Strong foundation in both theoretical concepts and practical applications
- Focus on continuous learning and delivering high-quality solutions
- Expertise in full-stack web development and cloud-based solutions
- Experience with AI/ML integration and cloud infrastructure

---

*Last Updated: Based on information from /oldcode and /viteproject directories*  
*This document consolidates all personal, professional, and project information for easy reference and reuse.*