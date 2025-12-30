# Website Content Management Guide

This guide explains how to manage and update the content on Kenneth Atchon's portfolio website.

## Table of Contents
- [Overview](#overview)
- [Content File Structure](#content-file-structure)
- [How to Update Content](#how-to-update-content)
- [Adding New Projects](#adding-new-projects)
- [Updating Personal Information](#updating-personal-information)
- [Modifying Sections](#modifying-sections)
- [Examples](#examples)

## Overview

All website content is stored in `main/data/content.json`. This centralized approach makes it easy to update the website without modifying component code. Simply edit the JSON file and the changes will automatically appear throughout the site.

## Content File Structure

The `content.json` file is organized into the following main sections:

```json
{
  "personal": { ... },           // Personal information
  "professionalTitles": [ ... ],  // Array of professional titles
  "currentPosition": { ... },     // Current job information
  "hero": { ... },                // Hero section content
  "about": { ... },               // About section paragraphs
  "workProjects": [ ... ],        // Professional work projects
  "personalProjects": [ ... ],    // Personal/side projects
  "techStack": { ... },           // Technology stack by category
  "programmingLanguages": { ... }, // Language proficiency levels
  "education": { ... },           // Education information
  "workExperience": [ ... ],      // Work history
  "contact": { ... },             // Contact information
  "social": { ... },              // Social media links
  "services": { ... },            // Services offered
  "certifications": [ ... ],      // Certifications list
  "highlights": { ... },          // Key highlights
  "personalStatement": "..."      // Personal statement
}
```

## How to Update Content

### Step 1: Open the Content File
Navigate to `main/data/content.json` in your editor.

### Step 2: Find the Section
Locate the section you want to update (e.g., `personal`, `hero`, `workProjects`).

### Step 3: Make Changes
Update the values while maintaining valid JSON syntax:
- Use double quotes for strings
- Use commas to separate items in arrays/objects
- Ensure proper closing brackets/braces

### Step 4: Save and Verify
Save the file and check the website to see your changes.

## Adding New Projects

### Adding a Work Experience Project

Add a new object to the `workProjects` array:

```json
{
  "name": "Project Name",
  "summary": "Brief one-sentence summary of the project",
  "problem": "Detailed description of the problem or challenge that needed to be solved. This should explain the context and why this project was necessary.",
  "solution": "Detailed description of how you solved the problem. Include specific technologies, approaches, and your role in the solution.",
  "impact": "Description of the results, outcomes, or impact of the project. Include metrics if available.",
  "techStack": ["Technology 1", "Technology 2", "Technology 3"],
  "period": "Q1 2024 - Q2 2024",
  "company": "Company Name"
}
```

**Example:**
```json
{
  "name": "API Performance Optimization",
  "summary": "Improved API response times by 80% through caching and query optimization",
  "problem": "The API was experiencing slow response times (p95 > 2s) during peak traffic, causing user experience issues and increased server costs.",
  "solution": "Implemented Redis caching layer, optimized database queries, and added connection pooling. Refactored slow endpoints and implemented request batching.",
  "impact": "Reduced p95 latency from 2.1s to 400ms. Decreased infrastructure costs by 35% and improved user satisfaction scores.",
  "techStack": ["Node.js", "Redis", "PostgreSQL", "Express"],
  "period": "Q3 2024",
  "company": "Amazon"
}
```

### Adding a Personal/Side Project

Add a new object to the `personalProjects` array:

```json
{
  "name": "Project Name",
  "summary": "Brief one-sentence summary",
  "problem": "What problem does this project solve?",
  "solution": "How did you build it? What technologies and approaches did you use?",
  "impact": "What did you learn? What was the outcome?",
  "techStack": ["Technology 1", "Technology 2"],
  "period": "2024",
  "github": "https://github.com/username/project-name"
}
```

**Example:**
```json
{
  "name": "Task Manager App",
  "summary": "Full-stack task management application with real-time collaboration",
  "problem": "Needed a personal project to practice full-stack development and learn new technologies.",
  "solution": "Built a React frontend with Node.js/Express backend. Implemented user authentication, real-time updates with WebSockets, and MongoDB for data storage.",
  "impact": "Successfully deployed and used by 50+ beta users. Learned WebSocket implementation and improved full-stack skills.",
  "techStack": ["React", "Node.js", "MongoDB", "WebSockets", "Express"],
  "period": "2024",
  "github": "https://github.com/KennethAtchon/TaskManager"
}
```

## Updating Personal Information

### Personal Details
Update the `personal` section:

```json
"personal": {
  "fullName": "Kenneth Atchon",
  "firstName": "Kenneth",
  "lastName": "Atchon",
  "primaryEmail": "kenneth.atchon@gmail.com",
  "careerEmail": "katchon.career@gmail.com",
  "phone": "+1 (219) 386-6604",
  "currentLocation": "Seattle, WA",
  "previousLocation": "Crown Point, IN 46307",
  "nationality": "USA Citizen / African American",
  "language": "English",
  "github": "https://github.com/KennethAtchon",
  "freelanceStatus": "Available"
}
```

### Professional Titles
Update the `professionalTitles` array:

```json
"professionalTitles": [
  "Software Developer",
  "Mobile Developer",
  "Full Stack Developer",
  "Freelancer",
  "React Developer",
  "Backend Developer",
  "Content Creator"
]
```

### Current Position
Update the `currentPosition` object:

```json
"currentPosition": {
  "title": "Software Developer I",
  "company": "Amazon",
  "location": "Seattle, WA",
  "startDate": "November 2024",
  "status": "Present",
  "team": "Authentication Team for AtoZ App",
  "description": "Detailed description of your current role and responsibilities..."
}
```

## Modifying Sections

### Hero Section
The hero section appears at the top of the page:

```json
"hero": {
  "greeting": "Hi, I'm Kenneth Atchon",
  "tagline": "Software Developer · Mobile Developer · Full Stack Developer",
  "description": "Your professional description that appears below the tagline..."
}
```

### About Section
The about section contains multiple paragraphs:

```json
"about": {
  "title": "About Me",
  "paragraphs": [
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph...",
    "Fourth paragraph..."
  ]
}
```

To add a new paragraph, add a new string to the `paragraphs` array.

### Tech Stack
Organize technologies by category:

```json
"techStack": {
  "Mobile Development": ["React Native", "Objective-C", "Swift", "Java (Android)"],
  "Frontend": ["React", "HTML/CSS", "JavaScript", "TypeScript"],
  "Backend": ["Node.js", "Express", "Strapi", "GraphQL"],
  "Databases": ["MySQL", "MongoDB", "PostgreSQL"],
  "Cloud & Infrastructure": ["AWS", "Azure", "AWS Amplify"],
  "Other Technologies": ["Git", "REST API", "GraphQL", "CI/CD"]
}
```

To add a technology:
1. Find the appropriate category
2. Add the technology name as a string in the array

To add a new category:
1. Add a new key-value pair
2. Use an array of technology names as the value

### Contact Information
Update contact details:

```json
"contact": {
  "title": "Let's Talk",
  "description": "Your contact section description...",
  "email": {
    "primary": "kenneth.atchon@gmail.com",
    "career": "katchon.career@gmail.com"
  },
  "phone": "+1 (219) 386-6604",
  "location": "Seattle, WA",
  "resume": "/Resume.pdf",
  "downloads": {
    "resume": "/Resume.pdf",
    "cs30200Project1": "/downloads/CS30200Project1.zip",
    "cs336Hw3": "/downloads/CS336Hw3Atchon.zip",
    "hw3": "/downloads/hw3.zip",
    "hw4Work": "/downloads/hw4_work.zip"
  }
}
```

### Social Media Links
Update social links:

```json
"social": {
  "github": "https://github.com/KennethAtchon",
  "linkedin": "https://linkedin.com/in/kenneth-atchon",
  "email": "kenneth.atchon@gmail.com"
}
```

## Adding Work Experience

Add a new entry to the `workExperience` array:

```json
{
  "title": "Job Title",
  "company": "Company Name",
  "period": "Start Date – End Date",
  "location": "City, State or Remote",
  "description": "Detailed description of your role, responsibilities, and achievements..."
}
```

**Example:**
```json
{
  "title": "Software Developer Intern",
  "company": "Tech Company Inc.",
  "period": "June 2023 – August 2023",
  "location": "Remote",
  "description": "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes. Improved application performance by 25% through code optimization."
}
```

## Adding Education

Update the `education` section:

```json
"education": {
  "degree": "Bachelor of Science in Computer Science",
  "university": "Purdue University Calumet",
  "location": "Hammond, IN",
  "period": "2021 - 2024",
  "gpa": "3.87",
  "honors": "Magna Cum Laude / High Honors",
  "description": "Description of your education and coursework..."
}
```

## Adding Certifications

Add to the `certifications` array:

```json
"certifications": [
  "AWS Certified Developer - Associate",
  "Azure Cloud Administrator",
  "MongoDB Certified Developer",
  "New Certification Name"
]
```

## Best Practices

### 1. Keep JSON Valid
- Always use double quotes for strings
- Ensure commas are properly placed
- Close all brackets and braces
- Use a JSON validator if unsure

### 2. Write Clear Descriptions
- Be specific about your contributions
- Include metrics when possible
- Use action verbs (e.g., "Developed", "Implemented", "Optimized")
- Keep descriptions concise but informative

### 3. Maintain Consistency
- Use consistent date formats (e.g., "Q1 2024" or "January 2024")
- Keep technology names consistent
- Use the same writing style throughout

### 4. Update Regularly
- Keep your current position up to date
- Add new projects as you complete them
- Update tech stack as you learn new technologies
- Refresh descriptions to reflect your latest work

## File Locations

- **Content File**: `main/data/content.json`
- **Resume**: `main/public/Resume.pdf`
- **Downloads**: `main/public/downloads/`
- **Components**: `main/components/`
- **This Guide**: `main/WEBSITE_CONTENT_GUIDE.md`

## Quick Reference

### Common Updates

**Change email:**
```json
"personal": {
  "primaryEmail": "new-email@gmail.com"
}
```

**Add new project:**
Add object to `workProjects` or `personalProjects` array

**Update current job:**
Modify `currentPosition` object

**Change location:**
```json
"personal": {
  "currentLocation": "New City, State"
}
```

**Add technology:**
Find category in `techStack` and add to array

**Update resume:**
Replace `main/public/Resume.pdf` file

## Troubleshooting

### JSON Syntax Errors
- Use a JSON validator (e.g., jsonlint.com)
- Check for missing commas
- Ensure all strings use double quotes
- Verify all brackets/braces are closed

### Changes Not Appearing
- Clear browser cache
- Restart the development server
- Check browser console for errors
- Verify JSON file is saved correctly

### File Not Found Errors
- Ensure resume is in `main/public/Resume.pdf`
- Check download file paths in `contact.downloads`
- Verify file names match exactly (case-sensitive)

## Need Help?

If you encounter issues:
1. Check this guide first
2. Validate your JSON syntax
3. Review the component code in `main/components/`
4. Check the browser console for errors

---

**Last Updated**: Based on current website structure  
**Content File**: `main/data/content.json`  
**Maintainer**: Kenneth Atchon

