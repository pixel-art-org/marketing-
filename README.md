# PixelArt Marketing Website

A static, conversion-focused marketing site for **PixelArt: Number Coloring Book** (iOS). Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js 18+
- npm or yarn

## Setup

1. **Clone and install**

   ```bash
   cd marketing
   npm install
   ```

2. **Add the app icon**

   Place your app icon at **`public/icon.png`** (recommended: 512×512 px). The site uses it in the header, hero, and as the Open Graph image.

3. **Configure links (optional)**

   Edit **`src/lib/config.ts`** to set:

   - `APP_STORE_URL` – App Store link (default is set)
   - `TERMS_URL` – Terms of Use link (default: Apple EULA)
   - `SITE_URL` – Your production URL (for SEO and sitemap)

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

Output is in the **`out`** directory (static HTML/CSS/JS). No Node server is required to serve it.

## Deploy

### Vercel (recommended)

1. Push the repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Set **Root Directory** to `marketing` if the repo is a monorepo.
3. Deploy. Vercel will use the Next.js build; for static export it will serve the `out` folder.

### Nginx at a subpath (e.g. https://itsartstudios.com/pixelart)

The app is built with **`basePath: '/pixelart'`**, so it must be served under `/pixelart`. On your EC2 server, run the app with `npx serve -s out -l 3000` (from the `marketing` directory), then in Nginx use:

```nginx
# Redirect /pixelart to /pixelart/
location = /pixelart {
    return 302 /pixelart/;
}
# Strip /pixelart prefix and proxy to the app (served at root on port 3000)
location /pixelart/ {
    rewrite ^/pixelart/?(.*)$ /$1 break;
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

After changing Nginx config: `sudo nginx -t && sudo systemctl reload nginx`.

### Other static hosts

1. Run `npm run build`.
2. Upload the contents of the **`out`** folder to your host (Netlify, S3, GitHub Pages, etc.).
3. Set **Environment variable** `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://yourdomain.com/pixelart` if using a subpath) so the sitemap and metadata use the correct domain.
4. Update **`public/robots.txt`**: replace the `Sitemap` line with your full URL, e.g. `Sitemap: https://yourdomain.com/pixelart/sitemap.xml`.

## Project structure

```
marketing/
├── public/
│   ├── icon.png          # Add your app icon here
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx      # Landing page
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   └── privacy/
│   │       └── page.tsx  # Privacy Policy
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── SocialProof.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── config.ts     # APP_NAME, URLs, meta
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## Pages

- **`/`** – Landing (hero, features, reviews, FAQ, CTAs)
- **`/privacy`** – Privacy Policy (with table of contents)

Terms of Use is linked externally (Apple EULA) from the footer and config.

## Config summary

| Variable        | Purpose                          |
|----------------|-----------------------------------|
| `APP_NAME`     | App name used across the site    |
| `APP_STORE_URL`| Download CTA link                |
| `TERMS_URL`    | Footer “Terms of Use” link       |
| `PRIVACY_URL`  | Path to privacy page (`/privacy`)|
| `SITE_URL`     | Production URL (SEO, sitemap)    |
