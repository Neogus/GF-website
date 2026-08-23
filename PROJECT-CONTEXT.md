# GF Inspecciones y Ensayos — Project Context

## Project Location
`/mnt/c/Users/grabino/PycharmProjects/pythonProject/gf-site`

## What Is This
Corporate B2B website for **GF Inspecciones y Ensayos**, an industrial inspection and NDT company based in Buenos Aires, Argentina. Built with Next.js 16 + TypeScript + Tailwind CSS 4. To be deployed on Cloudflare Pages.

## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (CSS-based config, NOT tailwind.config.ts)
- **Language:** TypeScript 5
- **Email:** Nodemailer (SMTP Gmail)
- **Deployment:** Cloudflare Pages via @opennextjs/cloudflare
- **NO framer-motion** (removed due to React 19 hydration issues)

## Important: Dev vs Production
- `npm run dev` does NOT work when accessing from network/VPN (WebSocket blocked)
- **Always use production mode for testing:** `npm run build && npm start -- --hostname 0.0.0.0`
- Access at `http://192.168.4.200:3000` or `http://localhost:3000`

## Emails Configuration (.env.local)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=gabrielfranco2301@gmail.com
SMTP_PASS=wstnrcnmrsvidawk
CONTACT_EMAIL=gabrielfranco2301@gmail.com
CONTACT_BCC=rabino.gustavo@gmail.com
```
- **Correct email:** gabrielfranco2301@gmail.com (NOT 2031)
- BCC goes to rabino.gustavo@gmail.com (hidden, server-side only)
- App Password generated from gabrielfranco2301@gmail.com

## Email Status: NEEDS INVESTIGATION
- API returned `{"success":true}` on last test but user didn't receive the email
- Possible causes: spam folder, Gmail delays, VPN blocking outbound SMTP
- Check spam folder of both gabrielfranco2301@gmail.com and rabino.gustavo@gmail.com
- May need to test with VPN disconnected
- Alternative: switch to Resend or EmailJS if Gmail SMTP continues to be unreliable

## What's Done ✅
1. Full landing page: Hero, About, Services, Projects, Contact, Footer
2. Bilingual support (ES/EN) with runtime toggle
3. 10 individual SEO-optimized service pages at `/servicios/[slug]`
4. Services index page at `/servicios`
5. JSON-LD schema markup (Organization + Service)
6. Sitemap.xml and robots.txt
7. Contact form with server-side email (API route)
8. Responsive design (mobile-first)
9. Cloudflare Pages configuration (wrangler.jsonc, open-next.config.ts)
10. README.md + LinkedIn docs in /docs/
11. Git repo initialized with commits
12. Phone: +54 9 11 6152-8650
13. LinkedIn link in footer

## Pending / Known Issues 🔧
1. **Email delivery** — success:true returned but email not confirmed received. Needs testing without VPN.
2. **Language toggle** — needs verification in production mode (was broken in dev due to VPN)
3. **Form success message** — user couldn't see green/red feedback (likely working now in production build)
4. **Hero animation** — uses `opacity-0 animate-[fade-up_...]` CSS. Works but needs verification on user's browser.
5. **Test page** — `/test` page exists (can be deleted before deploy)
6. **GitHub push** — not yet pushed to GitHub
7. **Cloudflare deployment** — not yet done
8. **Images** — no real project photos yet (using gradient placeholders)
9. **LinkedIn URL** — placeholder `https://www.linkedin.com/company/gf-inspecciones` needs real URL
10. **Domain** — `gfinspecciones.com.ar` not purchased yet, using placeholder in sitemap/meta

## File Structure (key files)
```
src/
├── app/
│   ├── page.tsx                    # Landing (all sections)
│   ├── layout.tsx                  # SEO metadata + JSON-LD
│   ├── globals.css                 # Tailwind v4 theme + keyframes
│   ├── sitemap.ts / robots.ts
│   ├── api/contact/route.ts        # Email API
│   ├── test/page.tsx               # DELETE BEFORE DEPLOY
│   └── servicios/                  # 10 service pages + index
├── components/
│   ├── Navbar.tsx                  # Fixed nav, mobile menu, lang toggle
│   ├── Hero.tsx                    # CSS animations (no framer-motion)
│   ├── About.tsx, Services.tsx, Projects.tsx, Contact.tsx, Footer.tsx
│   └── ServicePage.tsx             # Reusable service detail template
└── i18n/
    ├── LanguageContext.tsx          # React context (es default)
    ├── es.json, en.json            # Translation keys must match component t() calls
```

## Translation Keys Architecture
Components call `t('key.subkey')` which resolves against the JSON files.
**Critical:** JSON structure must EXACTLY match what components expect.
Common pattern: `t('section.subsection.field')` → JSON: `{ "section": { "subsection": { "field": "value" } } }`

## Git Status
```
master branch, 7 commits
Latest: "fix: correct email to gabrielfranco2301@gmail.com across all files"
No remote configured yet (needs GitHub push)
```

## Next Steps
1. Test email with VPN off
2. Verify all interactivity works in production mode
3. Delete /test page
4. Push to GitHub
5. Deploy to Cloudflare Pages
6. Add real project photos
7. Connect custom domain
8. Test on mobile device
