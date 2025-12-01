# SaaS Starter (React + Vite + TailwindCSS)

A clean, beginner-friendly SaaS website starter built with React, Vite, TailwindCSS, and React Router. Includes mock auth with localStorage, basic pages, and deployment guide for Vercel.

## Features

- React + Vite
- React Router for navigation
- TailwindCSS for styling
- Pages: Home, Products, Login, Signup, Dashboard
- Mock auth using localStorage (no backend required)
- Clean, modern, responsive UI
- Ready to deploy on Vercel (free)

## Project Structure

```
saas-starter/
  ├─ index.html
  ├─ package.json
  ├─ postcss.config.cjs
  ├─ tailwind.config.cjs
  ├─ vite.config.js
  └─ src/
      ├─ main.jsx
      ├─ App.jsx
      ├─ index.css
      ├─ lib/
      │   └─ auth.js
      ├─ components/
      │   ├─ Navbar.jsx
      │   ├─ Footer.jsx
      │   ├─ Hero.jsx
      │   ├─ FeatureCard.jsx
      │   ├─ ProductCard.jsx
      │   ├─ CTA.jsx
      │   └─ ProtectedRoute.jsx
      └─ pages/
          ├─ Home.jsx
          ├─ Products.jsx
          ├─ Login.jsx
          ├─ Signup.jsx
          └─ Dashboard.jsx
```

## Setup

1) Install Node.js 18+.

2) Install dependencies:

```bash
npm install
```

If using PowerShell and you see a script execution error, run the command with `npm.cmd install` or start a new terminal (PowerShell sometimes blocks `npm.ps1`).

3) Run in development:

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel (Free)

1) Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2) Go to Vercel and import the repository.
3) Framework preset: Vite
4) Build Command: `npm run build`
5) Output Directory: `dist`
6) Environment Variables: none required
7) Deploy.

Vercel will automatically build and host your site at a public URL.

## Notes

- This project uses localStorage for mock auth. Replace `src/lib/auth.js` and the protected route logic when connecting a real backend.
- You can swap Tailwind with Shadcn UI later if you prefer.
