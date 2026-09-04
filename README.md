# 🐷 PiggyPath

PiggyPath is a modern, gamified financial literacy web application designed to help users master budgeting, investing, and personal finance through interactive lessons, daily challenges, and mini-games.

Built with **React**, **Vite**, **Tailwind CSS**, and **Supabase**.

---

## 🌟 Key Features

- **Gamified Financial Learning**: Duolingo-style interactive path nodes, daily quests, and streak tracking.
- **Virtual Economy**: Earn XP, coins, and gems through lessons and mini-games to spend in the shop.
- **Pixel Art Aesthetics**: Dark mode styling with vibrant neon accents and responsive UI widgets.
- **Supabase Integration**: Secure authentication (Email & OAuth), state persistence, and Row Level Security (RLS) policies.
- **Performance & Accessibility**: Code-split route lazy loading, manual vendor chunking, WCAG touch target compliance, and full keyboard/screen reader ARIA support.

---

## 🛠️ Environment Setup

Copy `.env.example` to `.env` in the project root:

```bash
cp .env.example .env
```

Define your Supabase project credentials in `.env`:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## 🚀 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Run Code Verification & Linter:**
   ```bash
   npm run lint
   ```

4. **Run Unit Tests:**
   ```bash
   npm run test
   ```

5. **Build Production Bundle:**
   ```bash
   npm run build
   ```

6. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

---

## 📁 Project Architecture

```
PiggyPath/
├── public/                # Static assets (robots.txt, sitemap.xml, manifest.json)
├── src/
│   ├── components/        # UI components (dashboard, profile, path, layout, ui)
│   ├── contexts/          # Context providers (AuthContext.jsx)
│   ├── lib/               # Utility libraries (supabaseClient.js)
│   ├── pages/             # Lazy-loaded page views (DashboardPage, SignInPage, etc.)
│   ├── App.jsx            # Core router configuration with Suspense & ProtectedRoute
│   └── main.jsx           # React DOM entry point
├── supabase/
│   └── migrations/        # SQL schema definitions & RLS security policies
├── .github/
│   └── workflows/ci.yml   # GitHub Actions CI/CD workflow
├── vite.config.js         # Vite configuration & manualChunks code splitting
└── package.json           # Dependencies and project scripts
```

---

## 🗄️ Database Migrations

Database migration scripts are stored in `supabase/migrations/`:
- `20260904000000_schema.sql`: Table definitions for `profiles`, `user_progress`, `inventory`, and `transactions_ledger`.
- `20260904000001_rls_policies.sql`: Row Level Security policies for user data isolation.
