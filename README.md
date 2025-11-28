# Rahul Maurya - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing machine learning and data science projects.

## 🚀 Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Vanilla CSS with modern design system
- **Deployment:** Cloudflare Pages / Netlify

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

## 🏗️ Build

```bash
npm run build
```

Build output will be in the `dist/` directory.

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── robots.txt
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.json
│   │   └── socials.json
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── index.html
```

## ✨ Features

- 🎨 Modern, premium UI with glassmorphism effects
- 🌙 Dark mode design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and micro-interactions
- ♿ Accessible with keyboard navigation
- 🔍 SEO optimized with meta tags and structured data
- 🏷️ Tag-based project filtering

## 📝 Adding New Projects

Edit `src/data/projects.json` and add your project:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "short": "Brief description",
  "code_url": "https://github.com/username/repo",
  "live_url": "https://demo-url.com",
  "thumbnail": null,
  "tags": ["Python", "Machine Learning"],
  "date": "2024-11-28"
}
```

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. Push your code to GitHub
2. Go to Cloudflare Pages → Create a project
3. Connect your GitHub repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

### Netlify

1. Push your code to GitHub
2. Go to Netlify → New site from Git
3. Connect your repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Rahul Maurya**

- LinkedIn: [rahul-maurya-a9943b267](https://www.linkedin.com/in/rahul-maurya-a9943b267/)
- GitHub: [@rahulmaurya255](https://github.com/rahulmaurya255)
- Kaggle: [rahulmauryya](https://www.kaggle.com/rahulmauryya)
