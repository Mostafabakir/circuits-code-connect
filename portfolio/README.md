# Ahmed's Professional Portfolio

A modern, minimal, and professional portfolio website for a multi-skilled Electrical Engineer. Built with HTML, CSS, and JavaScript. Deployed using GitHub Pages.

## Features
- Three main domains: Embedded Systems, Electrical Distribution & BIM, Web Development
- Clean, responsive, and modern design
- Reusable project card component
- Easy to add new projects
- No frameworks, works perfectly with GitHub Pages

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

## Deployment (GitHub Pages)

1. **Push the `portfolio/` folder to your GitHub repository.**
2. Go to your repository settings on GitHub.
3. Find the **Pages** section.
4. Set the source branch to `main` (or `master`) and the folder to `/portfolio` (or `/root` if you move files to the root).
5. Save and wait for deployment. Your site will be live at `https://your-username.github.io/repo-name/portfolio/`.

## Adding New Projects

1. Open `js/script.js` and add your new project to the relevant array (`embedded`, `electrical`, or `web`).
2. Add an image for your project in `assets/images/` (optional, use a placeholder if not available).
3. The project will automatically appear on the correct domain page.

## Customization
- Update your name, bio, and contact info in `index.html`.
- Add or update icons in `assets/icons/`.
- Adjust colors and styles in `css/style.css`.

## License
MIT
