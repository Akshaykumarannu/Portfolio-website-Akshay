# Deployment Instructions

This portfolio is built with Next.js 15 and Tailwind CSS v4.

## Deploy to Vercel (Recommended)

1.  Push this code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) and sign up/login.
3.  Click "Add New..." -> "Project".
4.  Import your GitHub repository.
5.  Vercel will automatically detect the Next.js framework.
6.  Click "Deploy".

## Deploy to Netlify

1.  Push this code to a GitHub repository.
2.  Go to [Netlify](https://netlify.com) and sign up/login.
3.  Click "Add new site" -> "Import from existing project".
4.  Connect to GitHub and select your repository.
5.  Netlify should detect the build settings:
    *   **Build command:** `npm run build`
    *   **Publish directory:** `.next` (or let Netlify handle it with the Next.js plugin)
6.  Click "Deploy site".

## Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) in your browser.
