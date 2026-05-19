# Dzaki's Personal Portfolio Website

A modern, responsive personal portfolio website built with Astro and Tailwind CSS.

## Features

- 🚀 Built with Astro for optimal performance
- 💅 Styled with Tailwind CSS
- 📱 Fully responsive design
- 📝 Blog functionality with MDX (TODO: to write at least 5 articles)
- 🔍 SEO optimized (TODO: to integrate astro-seo)
- 📊 Sitemap generation

## Pages

- Home: Landing page with featured projects and latest blog posts (blog posts is WIP)
- About: Personal information and skills (WIP)
- Projects: Portfolio of projects with detailed descriptions
- Resume: Professional experience and education (WIP)
- Blog: Articles and tutorials (WIP)

## Getting Started

### Prerequisites

- Node.js (v22 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dzakibuchori/dzakibuchori.github.io.git
cd dzakibuchori.github.io
```

or using `degit` by Rich Harris for project scaffolding, the guide is [here](https://github.com/Rich-Harris/degit)

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Deployment

This site is configured for deployment on GitHub Pages. The build process will create a static site in the `dist` directory.

1. Update the `site` and `base` URLs in `astro.config.mjs` to match your GitHub Pages URL.
2. Build the site:

```bash
npm run build
```

3. Deploy to GitHub Pages:

```bash
npm run deploy
```

## Customization

1. Update personal information in the respective page components
2. Add your own projects in `src/pages/projects.astro`
3. Create blog posts in the `src/content/blog` directory (TODO)
4. Customize the theme colors in `src/styles/global.css`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or report an issue.
