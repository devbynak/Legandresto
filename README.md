# Legrandresto — Next.js (App Router)

A luxurious, fully responsive 4‑page restaurant website using Next.js 14, TailwindCSS, and Framer Motion.

## Pages
- `/` Home — hero with restaurant frontage, value cards, animated buttons
- `/about` About — story & focus areas (placeholders for now)
- `/menu` Menu — bestsellers grid + QR code section
- `/contact` Contact — phones, social buttons, and an embedded Google Map

## Tech
- Next.js 14 App Router
- TailwindCSS for styling
- Framer Motion for micro‑interactions
- Lucide icons

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## GitHub + CI/CD
- Workflows are preconfigured under `.github/workflows/`:
  - `ci.yml` runs lint and build on every push/PR.
  - `vercel_deploy.yml` deploys to Vercel on pushes to `main`.
- Add repository Secrets for Vercel:
  - `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- Optional: set `NEXT_PUBLIC_SITE_URL` in your environment.

### Connect local project to GitHub
```bash
# in the project root
git init
git add .
git commit -m "Initial commit"
# create a GitHub repo, then add as remote
git remote add origin https://github.com/<your-username>/<your-repo>.git
# push and set main as default branch
git branch -M main
git push -u origin main
```

### GitHub OAuth Integration
This app includes secure server-side endpoints to connect a user’s GitHub account and perform repository operations (list repos, create issues, open pull requests) following GitHub’s web application best practices.

1) Create a GitHub OAuth App:
- Go to `Settings → Developer settings → OAuth Apps → New OAuth App`.
- Set `Homepage URL`: your site URL (e.g., `http://localhost:3001`).
- Set `Authorization callback URL`: `http://localhost:3001/api/github/callback` (or your production URL).
- Copy the `Client ID` and generate a `Client Secret`.

2) Configure environment variables (in `.env.local`):
```bash
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-client-secret
GITHUB_OAUTH_REDIRECT_URL=http://localhost:3001/api/github/callback
# Use at least 32 random characters
SESSION_SECRET=your-long-random-secret
# Optional: set where to redirect after connection
NEXT_PUBLIC_GITHUB_CONNECTED_REDIRECT=/developer
```

3) OAuth Flow:
- Start the flow by visiting `/api/github/login` (link your UI to this).
- After consent, GitHub redirects to `/api/github/callback`, where the app:
  - Validates the `state` for CSRF protection.
  - Exchanges the `code` for an access token.
  - Encrypts the token (AES‑256‑GCM) and stores it in an HTTP‑only cookie (`gh_session`).

4) Available API endpoints:
- `GET /api/github/user` → authenticated user profile.
- `GET /api/github/repos?visibility=all&per_page=50` → list repositories.
- `POST /api/github/issues` → create an issue `{ owner, repo, title, body, labels, assignees }`.
- `POST /api/github/pulls` → create a PR `{ owner, repo, title, body, head, base }`.

All endpoints use server-side token storage and GitHub API headers (`Accept: application/vnd.github+json`, `X-GitHub-Api-Version`).

5) Scopes
- The OAuth flow requests: `repo`, `read:user`, `user:email`.
- Adjust scopes if you need more granular permissions.

6) Security Notes
- Tokens are encrypted at rest in cookies and are never exposed to client-side JS (HTTP-only, SameSite=Lax, Secure in production).
- Ensure `SESSION_SECRET` is strong and rotated as needed.
- Prefer fine-grained OAuth App permissions and least-privilege scopes.

## Customize
- Replace text content in the page files under `/app`.
- Add food & chef photos in `/public/images/` and reference them in components.
- Colors live in `tailwind.config.ts` (gold/black/white/gray palette).
- Header logo links to home and appears in the footer.
- Update Instagram/Facebook URLs in `/app/contact/page.tsx`.

## Deployment (Vercel)
- Import this GitHub repo in Vercel and select `Framework Preset: Next.js`.
- Set Environment Variables in Vercel (Project Settings → Environment Variables):
  - `NEXT_PUBLIC_SITE_URL=https://<your-domain>`
  - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`
  - `GITHUB_OAUTH_REDIRECT_URL=https://<your-domain>/api/github/callback`
  - `SESSION_SECRET` (use a long random string)
- Configure a production Domain in Vercel (Project Settings → Domains).
- Optional: add GitHub Action secrets to enable the provided workflow:
  - `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (Repository → Settings → Secrets → Actions)
- On push to `main`, the GitHub Action will build and deploy. You can also deploy directly from Vercel UI.

### Verify Production
- After deploy, visit `https://<your-domain>/developer` and `/contact` to verify pages.
- If the OAuth callback URL differs, ensure it matches exactly in your GitHub OAuth App settings.
