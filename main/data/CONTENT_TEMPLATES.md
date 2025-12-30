# Content Templates - Quick Reference

Use these templates to quickly add or update content in `main/data/content.json`.

## 📝 Adding a New Work Project

Copy this template and paste into the `workProjects` array:

```json
{
  "name": "Project Name",
  "summary": "One-sentence summary of what the project does",
  "problem": "What problem or challenge did this project solve? Provide context about why this was needed.",
  "solution": "How did you solve it? What technologies did you use? What was your specific role and contributions?",
  "impact": "What were the results? Include metrics, outcomes, or improvements if available.",
  "techStack": ["Technology 1", "Technology 2", "Technology 3"],
  "period": "Q1 2024 - Q2 2024",
  "company": "Company Name"
}
```

## 🛠️ Adding a New Personal Project

Copy this template and paste into the `personalProjects` array:

```json
{
  "name": "Project Name",
  "summary": "One-sentence summary",
  "problem": "What problem does this solve or what was the motivation?",
  "solution": "How did you build it? What technologies and approaches?",
  "impact": "What did you learn? What was the outcome?",
  "techStack": ["Technology 1", "Technology 2"],
  "period": "2024",
  "github": "https://github.com/KennethAtchon/ProjectName"
}
```

## 💼 Adding Work Experience

Copy this template and paste into the `workExperience` array:

```json
{
  "title": "Job Title",
  "company": "Company Name",
  "period": "Start Date – End Date",
  "location": "City, State or Remote",
  "description": "Describe your role, key responsibilities, achievements, and technologies used. Be specific about your contributions and impact."
}
```

## 🎓 Updating Education

Replace the `education` object:

```json
"education": {
  "degree": "Degree Name",
  "university": "University Name",
  "location": "City, State",
  "period": "Start Year - End Year",
  "gpa": "GPA",
  "honors": "Honors or Awards",
  "description": "Description of your education, coursework, and achievements"
}
```

## 📧 Updating Contact Info

Update the `contact` section:

```json
"contact": {
  "title": "Let's Talk",
  "description": "Your contact section description",
  "email": {
    "primary": "your-email@gmail.com",
    "career": "career-email@gmail.com"
  },
  "phone": "+1 (XXX) XXX-XXXX",
  "location": "City, State",
  "resume": "/Resume.pdf"
}
```

## 🔗 Updating Social Links

Update the `social` section:

```json
"social": {
  "github": "https://github.com/username",
  "linkedin": "https://linkedin.com/in/username",
  "email": "your-email@gmail.com"
}
```

## 🎯 Updating Hero Section

Update the `hero` section:

```json
"hero": {
  "greeting": "Hi, I'm Kenneth Atchon",
  "tagline": "Title 1 · Title 2 · Title 3",
  "description": "Your professional description that appears below the tagline"
}
```

## 📖 Adding About Paragraph

Add a new string to the `about.paragraphs` array:

```json
"about": {
  "title": "About Me",
  "paragraphs": [
    "First paragraph...",
    "Second paragraph...",
    "New paragraph here..."
  ]
}
```

## 💻 Adding Technology to Tech Stack

Find the category and add to the array:

```json
"techStack": {
  "Mobile Development": ["React Native", "New Technology"],
  "Frontend": ["React", "New Framework"],
  // ... other categories
}
```

## 🏆 Adding Certification

Add to the `certifications` array:

```json
"certifications": [
  "Existing Certification",
  "New Certification Name"
]
```

## 📋 Current Position Update

Update the `currentPosition` object:

```json
"currentPosition": {
  "title": "Job Title",
  "company": "Company Name",
  "location": "City, State",
  "startDate": "Month Year",
  "status": "Present",
  "team": "Team Name",
  "description": "Detailed description of your role and responsibilities"
}
```

## ✅ Quick Checklist for Adding a Project

- [ ] Choose correct array: `workProjects` or `personalProjects`
- [ ] Fill in all required fields: name, summary, problem, solution, impact
- [ ] Add technologies to `techStack` array
- [ ] Include period/date
- [ ] Add company name (for work projects)
- [ ] Add GitHub link (for personal projects)
- [ ] Validate JSON syntax
- [ ] Test on website

## 🔍 JSON Validation Tips

- All strings must use **double quotes** (`"`)
- Separate array items with **commas** (`,`)
- Separate object properties with **commas** (`,`)
- Close all brackets `[]` and braces `{}`
- No trailing commas before closing brackets/braces

## 📍 File Locations

- **Content File**: `main/data/content.json`
- **Resume**: `main/public/Resume.pdf`
- **Downloads**: `main/public/downloads/`
- **Full Guide**: `main/WEBSITE_CONTENT_GUIDE.md`

---

**Quick Tip**: Always validate your JSON at [jsonlint.com](https://jsonlint.com) before saving!

