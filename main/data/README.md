# Content Management

This directory contains the centralized content file and documentation for the portfolio website.

## Files in this Directory

- **content.json** - Main content file with all website data
- **README.md** - This file (quick overview)
- **WEBSITE_CONTENT_GUIDE.md** - Comprehensive guide for managing website content
- **CONTENT_TEMPLATES.md** - Quick reference templates for adding content
- **WEBSITE_CONTENT_SNAPSHOT.md** - Current snapshot of all website content

## content.json

The `content.json` file contains all the text content, information, and data displayed throughout the portfolio website. This makes it easy to update content without modifying component code.

### Structure

The JSON file is organized into the following sections:

- **personal**: Personal information (name, email, phone, location, etc.)
- **professionalTitles**: Array of professional titles
- **currentPosition**: Current job information
- **hero**: Hero section content (greeting, tagline, description)
- **about**: About section paragraphs
- **projects**: Array of project objects with detailed information
- **techStack**: Technology stack organized by category
- **programmingLanguages**: Programming languages with proficiency levels
- **education**: Education information
- **workExperience**: Array of work experience entries
- **contact**: Contact information and form description
- **social**: Social media links
- **services**: Services offered (for future use)
- **certifications**: List of certifications
- **highlights**: Key highlights and strengths
- **personalStatement**: Personal statement

### How to Update Content

1. Open `main/data/content.json`
2. Find the section you want to update
3. Modify the values (keep the JSON structure intact)
4. Save the file
5. The changes will automatically reflect in the website

### Project Structure

Each project in the `projects` array contains:
- `name`: Project name
- `summary`: Brief summary
- `problem`: Problem statement
- `solution`: Solution description
- `impact`: Impact/results
- `techStack`: Array of technologies used
- `period`: Time period (optional)
- `company`: Company name (optional)
- `github`: GitHub link (optional)

### Adding New Projects

To add a new project, add a new object to the `projects` array:

```json
{
  "name": "Project Name",
  "summary": "Brief summary",
  "problem": "Problem description",
  "solution": "Solution description",
  "impact": "Impact description",
  "techStack": ["Tech1", "Tech2"],
  "period": "Q1 2024",
  "company": "Company Name",
  "github": "https://github.com/username/project"
}
```

### Translation Support

To support multiple languages in the future:

1. Create separate JSON files for each language (e.g., `content.en.json`, `content.es.json`)
2. Update components to load the appropriate language file based on user preference
3. Use a language context or state management to switch between languages

### Notes

- Always maintain valid JSON syntax
- Use double quotes for strings
- Escape special characters in strings
- Keep arrays and objects properly formatted
- Test the website after making changes to ensure everything displays correctly

## Documentation

For detailed instructions on managing content, see:

- **WEBSITE_CONTENT_GUIDE.md** - Complete guide with examples and best practices
- **CONTENT_TEMPLATES.md** - Copy-paste templates for quick updates
- **WEBSITE_CONTENT_SNAPSHOT.md** - Reference of current website content

