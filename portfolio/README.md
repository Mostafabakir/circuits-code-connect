# Professional Portfolio Website

A modern, minimal, and professional portfolio for a multi-skilled Electrical Engineer specializing in Embedded Systems, Electrical Distribution & BIM, and Web Development.

## Features
- Three main sections: Embedded Systems, Electrical Distribution & BIM, Web Development
- Clean, responsive design
- Project cards with GitHub links and image placeholders
- Modern engineering-inspired color palette
- No frameworks: pure HTML, CSS, and JavaScript

## Project Structure

```
portfolio/
│
├── index.html
├── embedded.html
├── electrical.html
├── webdev.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── projects/
    ├── embedded/
    ├── electrical/
    └── web/
```

## Deployment: GitHub Pages

1. **Push the `portfolio/` folder to your GitHub repository.**
2. Go to your repository settings > Pages.
3. Set the source branch to `main` (or your default branch) and the folder to `/portfolio` (or `/root` if you move files to the root).
4. Save. Your site will be live at `https://your-username.github.io/repo-name/portfolio/`.

**Tip:** For a custom domain, add a `CNAME` file in the `portfolio/` folder.

## Adding New Projects

1. Add your project images to `assets/images/`.
2. Add project files or documentation to the relevant folder in `projects/embedded/`, `projects/electrical/`, or `projects/web/`.
3. Edit the corresponding HTML page (`embedded.html`, `electrical.html`, or `webdev.html`) and add a new project card:

```html
<div class="project-card">
  <div class="project-image-placeholder">Image</div>
  <div class="project-content">
    <h3>Project Title</h3>
    <p>Short description of the project.</p>
    <p class="tech">Technologies: ...</p>
    <a href="https://github.com/your-github/project-repo" target="_blank">GitHub</a>
  </div>
</div>
```

4. Update the GitHub link and image as needed.

## License
MIT
