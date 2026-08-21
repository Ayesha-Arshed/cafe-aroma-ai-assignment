# Cafe Aroma — AI Development Prompts

## Prompt 1 — Project Setup
Set up a new React + Vite project called Cafe Aroma. Install and configure Tailwind CSS. Set up React Router with 4 routes: Home (/), Menu (/menu), Favorites (/favorites), and Cart (/cart). Create a Navbar component with links to all 4 pages, a warm coffee-shop color theme (browns, creams, maybe a terracotta accent), and make it responsive.

**Result:** Project scaffolded successfully with Vite + React + Tailwind CSS v4. Navbar, routing, and coffee theme (espresso browns, cream backgrounds, terracotta accents) all working on first attempt.
**Notes:** Agent asked clarifying questions before building (Tailwind v4 vs v3, whether to add placeholder content) rather than guessing — approved Tailwind v4 and placeholder content for all pages.

## Prompt 2 — Product Detail, Login, and Signup Pages
Add a Product Detail page at route /product/:id that shows a larger view of a menu item when clicked from the Menu page — include image, name, full description, price, calories, category, and an "Add to Cart" button with quantity selector. Also add a Login page (/login) and Signup page (/signup) with styled forms matching the Cafe Aroma coffee theme. These are frontend-only — no real backend/auth, just working forms with client-side validation (required fields, email format, password length) and a success message on submit. Add Login/Signup links to the Navbar (e.g. a user icon or "Sign In" button). Make sure clicking any menu item card in Menu.jsx navigates to its Product Detail page.

**Result:** ProductDetail.jsx, Login.jsx, and Signup.jsx created. Login/Signup pages linked to each other (Login → "Create account" → Signup). Menu page items correctly link to their Product Detail pages.
**Notes:** Found that Product Detail linking only worked from the Menu page — Home, Favorites, and Cart item cards did not link to it. Required a follow-up fix (see Prompt 3).

## Prompt 3 — Fix Product Detail Linking on Home, Favorites, and Cart
None of the item cards on Home, Favorites, or Cart currently open the Product Detail page. Specifically:
1. The "Order Special" button/card on the Home page still navigates to /menu instead of that specific item's /product/:id page.
2. Clicking a favorite item card (or its name/image) on the Favorites page does not navigate to /product/:id.
3. Clicking a cart item card (or its name/image) on the Cart page does not navigate to /product/:id.

Please fix all three so clicking the item's name or image (not the action buttons like "Add to Cart," "Order Item," or quantity controls) navigates to that specific item's Product Detail page at /product/:id, matching how it already works on the Menu page.

**Result:** Fixed successfully — Home, Favorites, and Cart items now all navigate to their correct Product Detail pages, while action buttons (Add to Cart, Order Item, quantity controls) still work as intended without triggering navigation.
**Notes:** After this fix, noticed a new issue during manual testing: the Product Detail page opened scrolled to the bottom instead of the top when navigated to from the Home page. Addressed in Prompt 4.

## Prompt 4 — Fix Scroll Position on Route Change
When navigating to the Product Detail page (or any page) via React Router, the page opens scrolled down to wherever the previous page was scrolled, instead of starting at the top. Please fix this so every route change scrolls the window to the top automatically (e.g. using a ScrollToTop component with useLocation and useEffect, placed inside the Router).

**Result:** Added a ScrollToTop component using useLocation and useEffect, wrapped around the Routes in App.jsx. All route changes now reset scroll position to the top correctly.
**Notes:** Verified fix by scrolling down on Home and Favorites pages, then navigating to Product Detail — page now consistently opens at the top. Also manually tested responsive/mobile view (DevTools device mode) — Navbar collapses correctly and all pages display properly on mobile.
