# Morgan Zintec College Website

Modern, performant website for Morgan Zintec College built with **Astro 4**, **Tailwind CSS**, and **TypeScript**.

## Features

- ⚡ **Astro 4** - Fast, modern static site generator with island architecture
- 🎨 **Tailwind CSS** - Utility-first styling with custom MZC design system
- 📝 **MDX Support** - Write content in Markdown with React/Astro components
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt, Open Graph
- 📱 **Fully Responsive** - Mobile-first design with hamburger menus
- ♿ **Accessible** - Semantic HTML, ARIA labels, focus management
- 🌙 **Dark Mode Ready** - Research portal uses dark theme
- 📦 **Decap CMS** - Git-based CMS for non-technical content editing
- 🚀 **Netlify Ready** - One-click deploy with form handling & identity

## Pages

- **Home** - Hero, portals, about strip, academics, stats, HODs, VP desk, research CTA
- **About** - Principal's desk, VP desk, history timeline, vision/mission, values, advisory council
- **Academics** - Diploma in Education (Junior/Infant), Applied ICT specialisations, Short courses
- **Contact** - Contact form (Formspree), location map, office hours
- **Departments** - Overview of all 5 departments with HOD quick contacts
- **Department Pages** - Humanities (full), Maths & Sciences, Research & Innovation, ECD, Non-Academic
- **Research** - Dark-themed portal with areas, publications, symposium, submission form
- **Library** - Koha ILS information, features, access details
- **Blog** - MDX-powered news/posts with tagging
- **Research Publications** - Filterable listing of academic outputs

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
# Clone and navigate
cd morgan-site-fixed

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview  # Test production build locally
```

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── FeatureCard.astro
│   └── PortalCard.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro              # Home
│   ├── about/index.astro        # About
│   ├── academics/index.astro    # Academics
│   ├── contact/index.astro      # Contact
│   ├── departments/
│   │   ├── index.astro          # Departments overview
│   │   ├── humanities/          # Humanities (full)
│   │   ├── maths-science/
│   │   ├── research-innovation/
│   │   ├── ecd/
│   │   └── non-academic/
│   ├── research/
│   │   ├── index.astro          # Research portal
│   │   └── publications/        # Publications listing
│   ├── library/index.astro      # Library
│   └── blog/
│       ├── index.astro          # Blog listing
│       └── [slug].astro         # Individual post
├── content/
│   ├── blog/                    # MDX blog posts
│   ├── research/                # MDX research publications
│   └── config.ts                # Content collections schema
├── styles/
│   └── global.css               # Tailwind + custom styles
└── layouts/
    └── BaseLayout.astro
public/
├── admin/                       # Decap CMS
│   ├── config.yml
│   └── index.html
├── images/                      # Static images
└── robots.txt
```

## Decap CMS Setup

1. Deploy to Netlify
2. Enable **Netlify Identity** in site settings
3. Enable **Git Gateway** in Identity settings
4. Visit `/admin/` to access CMS
5. Invite editors via Identity panel

### Collections Configured

- **Pages** - Home, About, Academics, Contact, Departments content
- **Departments** - Individual department pages (Humanities, etc.)
- **Blog Posts** - News articles with tags, images
- **Research Publications** - Academic outputs with metadata

## Forms

Contact and Research Submission forms use **Formspree**:

1. Create forms at [formspree.io](https://formspree.io)
2. Add form IDs to `.env`:
   ```
   FORMSPREE_CONTACT_FORM=your-id
   FORMSPREE_RESEARCH_FORM=your-id
   ```

## Deployment

### Netlify (Recommended)

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables from `.env.example`
5. Enable Identity & Git Gateway for CMS

### Vercel

```bash
npm i -g vercel
vercel deploy
```

### Static Hosting

Upload `dist/` folder to any static host (GitHub Pages, Cloudflare Pages, etc.)

## Customization

### Colors

Edit `tailwind.config.mjs` to modify the MZC colour palette:

```js
colors: {
  mzc: {
    blue: '#0C71C3',
    teal: '#7EBEC5',
    navy: '#1A2A4A',
    gold: '#C9A84C',
    // ...
  }
}
```

### Fonts

Fonts loaded in `BaseLayout.astro`:
- **Open Sans** - Body text
- **Nunito Sans** - UI elements
- **Playfair Display** - Display headings

## Performance

- Static generation (no server required)
- Optimised images (add `@astrojs/image` for auto-optimisation)
- Minified CSS/JS
- Preconnect hints for fonts
- HTTP/2 ready

## License

© 2026 Morgan Zintec College. All Rights Reserved.

Developed by ICT Services Section.
