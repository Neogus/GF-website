# GF Inspecciones y Ensayos — Corporate Website

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-deployed-F38020?logo=cloudflare)

A modern, SEO-optimized corporate website for **GF Inspecciones y Ensayos**, an industrial inspection and non-destructive testing (NDT) company based in Buenos Aires, Argentina.

## 🌐 Live Site

> [gfinspecciones.com.ar](https://www.gfinspecciones.com.ar) *(coming soon)*

## 📸 Preview

| Desktop | Mobile |
|---------|--------|
| ![Desktop preview](docs/desktop-preview.png) | ![Mobile preview](docs/mobile-preview.png) |

## 🏗️ About the Project

This is a full-stack B2B website built for a company specializing in:

- **Non-Destructive Testing (NDT)** — Phased Array Ultrasonics, Radiography, Eddy Current, Dye Penetrant, Magnetic Particle Testing
- **Welding Inspection & Certification** — WPS/PQR development, welder qualification per AWS/ASME/ISO
- **Pressure Vessel & Piping Inspection** — Per ASME VIII, API 510, API 570
- **Corrosion Assessment** — Wall thickness measurement, corrosion mapping, remaining life analysis
- **Asset Integrity Management** — Risk-Based Inspection (RBI), predictive maintenance, consulting
- **3D Laser Scanning** — Point cloud capture, BIM modeling, reverse engineering

Industries served: Energy, Petrochemical, Pharmaceutical, Construction, and Industrial Manufacturing.

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌍 **Bilingual (ES/EN)** | Full Spanish/English support with runtime language toggle |
| 🔍 **SEO Optimized** | 10+ individual service pages with unique metadata, JSON-LD schema markup, sitemap.xml, robots.txt |
| 📱 **Fully Responsive** | Mobile-first design with adaptive layouts for all screen sizes |
| 📧 **Contact Form** | Server-side email delivery via Nodemailer (SMTP/Gmail) |
| ⚡ **Performance** | Static pre-rendering, optimized fonts (Inter + Barlow), minimal JS bundle |
| 🎨 **Animated UI** | Smooth scroll-triggered animations with Framer Motion |
| 🏢 **Google Business Profile Ready** | Organization schema, geo-coordinates, service catalog structured data |
| 🔒 **Production Ready** | TypeScript strict mode, ESLint, environment variable validation |

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** TypeScript 5
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Email:** [Nodemailer](https://nodemailer.com/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) via OpenNext adapter
- **Fonts:** Google Fonts (Inter, Barlow)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                              # Landing page (hero, about, services, projects, contact)
│   ├── layout.tsx                            # Global SEO metadata + JSON-LD Organization schema
│   ├── globals.css                           # Tailwind v4 theme configuration
│   ├── sitemap.ts                            # Dynamic XML sitemap
│   ├── robots.ts                             # Crawler directives
│   ├── api/contact/route.ts                  # Contact form → email API
│   └── servicios/
│       ├── page.tsx                          # Services index with card grid
│       ├── ensayos-no-destructivos/          # NDT service page
│       ├── inspeccion-soldadura/             # Welding inspection
│       ├── inspeccion-recipientes-presion/   # Pressure vessels
│       ├── evaluacion-corrosion/             # Corrosion assessment
│       ├── gestion-integridad-activos/       # Asset integrity management
│       ├── escaneo-laser-3d/                 # 3D laser scanning
│       ├── ultrasonido/                      # Ultrasonic testing
│       ├── particulas-magneticas/            # Magnetic particle testing
│       ├── liquidos-penetrantes/             # Liquid penetrant testing
│       └── inspeccion-tanques/               # Storage tank inspection (API 653)
├── components/
│   ├── Navbar.tsx                            # Sticky nav with mobile menu + language toggle
│   ├── Hero.tsx                              # Full-screen hero with stats bar
│   ├── About.tsx                             # Company info + values grid
│   ├── Services.tsx                          # 6-card animated grid
│   ├── Projects.tsx                          # Project showcase + industry sectors
│   ├── Contact.tsx                           # Form with validation + contact info
│   ├── Footer.tsx                            # 4-column footer with links
│   └── ServicePage.tsx                       # Reusable service detail template
└── i18n/
    ├── LanguageContext.tsx                    # React context for language state
    ├── es.json                               # Spanish translations
    └── en.json                               # English translations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/gf-site.git
cd gf-site
npm install
```

### Development

```bash
npm run dev
# → http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Cloudflare Pages (local preview)

```bash
npm run build:cloudflare
npm run preview:cloudflare
```

## ⚙️ Environment Variables

Create a `.env.local` file (see `.env.example`):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_EMAIL=recipient@example.com
```

## 🌐 Deployment

This project is configured for **Cloudflare Pages** deployment:

1. Push to GitHub
2. Connect repo in Cloudflare Dashboard → Workers & Pages
3. Set build command: `npx cloudflare`
4. Set output directory: `.open-next/cloudflare`
5. Add environment variables
6. Deploy

## 📊 SEO Architecture

Each service page includes:
- Unique `<title>` and `<meta description>` with targeted keywords
- JSON-LD `Service` schema with provider info and offer catalog
- OpenGraph tags for social sharing
- Canonical URLs
- Internal cross-linking between related services

The root layout includes:
- JSON-LD `Organization` schema with geo-coordinates (Buenos Aires)
- Service area definition for local SEO
- Google Business Profile-compatible structured data

## 📄 License

This project is proprietary. All rights reserved by GF Inspecciones y Ensayos.

---

**Built with ☕ and precision engineering.**
