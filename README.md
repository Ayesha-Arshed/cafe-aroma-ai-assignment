```markdown
# Cafe Aroma ☕

A modern, responsive React coffee shop application built as part of the FlyRank AI Internship "React App Development with AI" assignment (Frontend AI Engineering track, Week 3).

## 🔗 Live Links

- **Live App:** [cafe-aroma-ai-assignment.vercel.app](https://cafe-aroma-ai-assignment.vercel.app)
- **GitHub Repo:** [github.com/Ayesha-Arshed/cafe-aroma-ai-assignment](https://github.com/Ayesha-Arshed/cafe-aroma-ai-assignment)

## 📋 About the Project

Cafe Aroma is a frontend-only coffee shop web app featuring:
- **Home** — hero section, featured "Today's Special," featured coffee/brews
- **Menu** — categorized menu items (Espresso, Cold Brews, Teas & Chai, etc.) with search and filtering
- **Product Detail** — full item view with description, price, calories, and add-to-cart with quantity selector
- **Favorites** — saved items with quick "Order Item" and "Add All to Cart" actions
- **Cart** — shopping bag with quantity controls, promo code field, order summary, pickup/delivery options
- **Login / Signup** — styled auth forms with client-side validation (frontend-only, no real backend)
- Fully responsive design with a mobile navigation menu

**Tech stack:** React + Vite, Tailwind CSS v4, React Router v7, Lucide React icons

## 🤖 How AI Assisted Development

This project was built largely independently using **Antigravity IDE** (powered by Gemini) as an AI development assistant, following an iterative, prompt-driven workflow:

1. **Project scaffolding** — AI set up the entire Vite + React + Tailwind CSS v4 project structure, including routing and a themed Navbar, from a single descriptive prompt.
2. **Feature expansion** — AI added a Product Detail page and Login/Signup pages with working client-side validation, based on a follow-up prompt describing the desired behavior.
3. **Bug fixing through manual testing** — After each AI-generated feature, I manually tested the app in the browser and identified real issues (broken navigation links, incorrect scroll position on route change) that I then fed back to the AI as precise, targeted prompts to fix.
4. **Clarifying questions** — Notably, the AI asked clarifying questions before starting the initial build (e.g., Tailwind CSS v4 vs v3, whether to include placeholder content) rather than making silent assumptions, which shaped early implementation decisions.

The full sequence of prompts used, along with results and notes for each, is documented in [`PROMPTS.md`](./PROMPTS.md).

## 🛠️ Manual Improvements & Debugging

Examples of issues I identified through manual testing (not caught by the AI automatically) and fixed via targeted follow-up prompts:

| Issue Found | How I Found It | Fix |
|---|---|---|
| Product Detail page only linked from the Menu page — Home, Favorites, and Cart item cards did nothing | Manually clicking through every page after the initial feature build | Follow-up prompt specifying exactly which elements should/shouldn't trigger navigation (item cards vs. action buttons) |
| Page scrolled to the bottom instead of the top after navigating to Product Detail | Noticed while testing navigation from the Home page | Added a `ScrollToTop` component using `useLocation` + `useEffect`, wrapped around the app's `<Routes>` |
| Uncertainty about mobile responsiveness | Manually tested using Chrome DevTools device mode (not part of any AI prompt) | Confirmed Navbar collapses correctly and all pages render properly on mobile — no fix needed, but verified rather than assumed |

## 📁 Project Structure

```
cafe-aroma/
├── src/
│   ├── components/       (Navbar, ScrollToTop, etc.)
│   ├── pages/            (Home, Menu, ProductDetail, Favorites, Cart, Login, Signup)
│   ├── data/              (mock menu data)
│   ├── App.jsx
│   └── main.jsx
├── PROMPTS.md            (full AI prompt log)
└── README.md
```

## 🚀 Running Locally

```bash
npm install
npm run dev
```
```

A few things to double-check before you finalize:
- Confirm the exact repo/live URLs match what you have (I used what you shared)
- If your `data/` folder or component names differ slightly, adjust that section

Once you're happy with it, save the file, then run these in the terminal to push it:

```bash
git add README.md
git commit -m "Add README with project overview, AI process, and live links"
git push
```
