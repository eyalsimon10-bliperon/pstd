# PSTD Landing Page

Bilingual (Hebrew / English) landing page for **PSTD — The Post-Traumatic Support Center** (המטה לנפגעי פוסט-טראומה).

## Stack

- Vite + React + TypeScript
- Static assets under `public/images/` (logo extracted from strategic vision PDFs)
- Ready for Vercel

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com): **Add New Project** → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
4. Deploy. Optionally set a custom domain.

Or with the Vercel CLI:

```bash
npx vercel
```

## Placeholders

Until official contacts exist, the Invest section shows clearly labeled placeholders for:

- Helpline phone
- Email
- Donate / partnership URL

## Language

Default is Hebrew (`dir="rtl"`). Toggle to English in the header (`dir="ltr"`). Preference is stored in `localStorage`.
