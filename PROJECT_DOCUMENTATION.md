# NeuroCart — Project Documentation

> **Event:** TecDrill 2026 — Deep-Hack 24 Hour Hackathon
> **Organiser:** Sinhgad Institute of Management, Pune
> **Team Project:** NeuroCart — AI-Powered Multi-Vendor E-Commerce Platform

---

## Problem Statement

Design a website or app for an organisation that wants to sell products online (e-commerce). The platform must support the following requirements:

1. **Authentication** — Only genuine users should be allowed. Genuineness must be confirmed during registration.
2. **Authorization** — A single login page must handle both customers and company employees (admin/vendor).
3. **Customer Flow** — Browse products, add to cart, place orders, make online payments, track orders, and view order history. Adding products to a favourites list is an added advantage.
4. **Admin — Product & Price Management** — Manage stock and prices. The price management module must handle sales, discounts, and frequent price changes.
5. **Admin — Order Management** — View, accept, reject, and track orders.
6. **Order Status Lifecycle** — Placed → Accepted → Rejected → Processed → Dispatched → Delivered.
7. **Reports** — Admin can generate payment reports for specific periods/durations.
8. **Report Export** — Reports can be automatically downloaded in Excel or PDF format.
9. **User Management** — Support multiple admins. Single-account usage enforced to prevent misuse. Admin can block, unblock, and approve customer accounts.
10. **AI Chatbot** — AI-based chatbot support for customer queries and issues.
11. **Recommender System** — Recommendations based on customer browsing patterns.
12. **Admin Dashboard** — Real-time data including today's collection, trending products, low-stock alerts, order status breakdown, and top customer of the day.
13. **Additional Features** — Extra design features carry added weightage.

**Tech Constraint:** Backend RDBMS like MySQL preferred. Frontend platform of choice.

---

## Our Solution — NeuroCart

NeuroCart is a full-stack, production-grade multi-vendor e-commerce platform built with **Django REST Framework** (backend) and **React + Vite** (frontend). It addresses every requirement from the problem statement and adds several advanced features on top.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, Recharts, Lucide Icons |
| Backend | Django 6, Django REST Framework, SimpleJWT |
| Database | SQLite (dev) / PostgreSQL (prod) |
| Payments | Razorpay (test mode) |
| Blockchain | Ethereum Sepolia Testnet via Infura + web3.py |
| AI / Recommendations | OpenAI GPT-4o-mini (optional), rule-based fallback |
| Caching | Django LocMemCache (dev) / Redis (prod) |
| Auth | JWT Bearer tokens with refresh + blacklist |
| Testing | pytest, Hypothesis (property-based tests) |

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  React Frontend (Vite)                                           │
│                                                                  │
│  Pages: Home, ProductDetail, Cart, Checkout, OrderTracking       │
│         AdminDashboard, AdminOrders, AdminUsers, AdminInvoices   │
│         VendorDashboard, VendorProducts, VendorOrders            │
│                                                                  │
│  Services: productService, orderService, paymentService,         │
│            adminService, vendorService, userService,             │
│            recommendationService, aiService, invoiceService      │
│                                                                  │
│  Context: AuthContext (JWT), CartContext, NotificationContext     │
└──────────────────────────┬──────────────────────────────────────┘
                           │ HTTP / JWT Bearer
┌──────────────────────────▼──────────────────────────────────────┐
│  Django DRF Backend                                              │
│                                                                  │
│  Apps: users, vendors, products, orders, payments,               │
│        analytics_app, ai_app, recommendations                    │
│                                                                  │
│  Services Layer: order_service, analytics_service,               │
│                  recommendation_service, blockchain              │
│                                                                  │
│  Database: SQLite / PostgreSQL                                   │
│  Cache: LocMemCache / Redis                                      │
└──────────────────────────┬──────────────────────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
      Razorpay         Infura           OpenAI
    (Payments)      (Blockchain)    (AI Recs, opt.)
```

---

## Features Built

### 1. Authentication & Authorization

- JWT-based authentication with access + refresh tokens and token blacklisting on logout.
- Single login page routes users to the correct panel based on `role`: `customer`, `vendor`, or `admin`.
- Registration with email verification flow.
- `ProtectedRoute` component enforces role-based access — vendors navigating to `/admin` are redirected to `/vendor`.

**Endpoints:**
- `POST /api/auth/register/`
- `POST /api/auth/login/`
- `POST /api/auth/logout/`
- `POST /api/auth/token/refresh/`

---

### 2. Customer Flow

- Browse all products with filtering, search, and category navigation.
- Add/remove items from cart (persistent via backend, mock mode for dev).
- Checkout with shipping address capture.
- Online payment via **Razorpay** (test mode).
- Order tracking page with live status updates.
- View full order history.
- Blockchain verification badge on every order detail page.

**Key Pages:** `Home.jsx`, `ProductDetail.jsx`, `Cart.jsx`, `Checkout.jsx`, `OrderTracking.jsx`

---

### 3. Admin — Product & Price Management

- Full CRUD for products: name, description, price, original price, discount, stock, category, images.
- `is_primary` flag on product images — first image auto-set as primary.
- `LOW_STOCK_THRESHOLD` configurable in `settings.py` (default: 10).
- Price changes reflected immediately across all product listings.

---

### 4. Admin — Order Management

- View all orders with status filter and pagination.
- Accept or reject orders (status transitions enforced server-side).
- Order status lifecycle: `pending → processing → shipped → delivered` (or `cancelled`).
- Admin orders list endpoint: `GET /api/admin/orders/`

---

### 5. Invoice System

- Invoices auto-generated when an order item status transitions to `processing`.
- Invoice number format: `INV-{year}-{count:06d}` (race-condition safe via `select_for_update`).
- Admin can list and view all invoices.
- Vendors can view their own invoices.

**Endpoints:**
- `GET /api/invoices/` — admin only, paginated
- `GET /api/invoices/{id}/` — admin or owning vendor

---

### 6. User Management

- Admin can list all users (paginated).
- Block / unblock customer accounts (`is_active` flag).
- Approve vendor accounts (`VendorProfile.verification_status = 'approved'`).
- Blocking an admin account returns HTTP 403.

**Endpoints:**
- `GET /api/admin/users/`
- `POST /api/admin/users/{id}/block/`
- `POST /api/admin/users/{id}/unblock/`
- `POST /api/admin/users/{id}/approve/`

---

### 7. Admin Analytics Dashboard

A real-time, production-grade analytics panel surfacing today's business metrics in a single API call.

**Metrics displayed:**
- **Today's Collection** — total revenue from completed payments today (formatted as ₹)
- **Trending Products** — top 5 products by quantity sold today, with rank badges
- **Low Stock Alerts** — all active products with `stock < 10`, color-coded (amber = low, red = out of stock)
- **Order Status Breakdown** — counts for pending, processing, cancelled, shipped, delivered — shown as stat cards + bar chart
- **Top Customer Today** — customer with highest spend today, with avatar initials, email, spend, and order count

**Endpoint:** `GET /api/admin/analytics/today` (admin-only, JWT required, responds < 500ms)

**Response shape:**
```json
{
  "today_collection": 0.00,
  "trending_products": [],
  "low_stock_products": [],
  "order_stats": {
    "placed": 0, "accepted": 0, "rejected": 0,
    "processed": 0, "dispatched": 0, "delivered": 0
  },
  "top_customer": null
}
```

**UI:** Loading skeletons, error retry, responsive grid (1 → 2 → 4 columns), Recharts bar chart.

---

### 8. Smart Recommendation System

Three recommendation surfaces, all with graceful fallback chains and 1-hour caching.

#### Co-Occurrence Recommendations ("Related Products")
- Finds products frequently bought together using `OrderItem` co-occurrence analysis.
- Composite DB index on `OrderItem(product_id, order_id)` for fast lookups.
- Fallback: same-category products when no co-occurrence data exists.
- `GET /api/recommendations/product/{id}/` — public, no auth required.

#### Personalised Recommendations ("Recommended for You")
- Derives recommendations from the authenticated user's purchase history.
- Excludes products the user has already purchased.
- Fallback: trending products when user has no order history.
- `GET /api/recommendations/user/` — requires JWT.

#### Trending Products ("Trending Now")
- Ranks products by distinct order count within a configurable time window (default 7 days, max 90).
- Fallback: newest active in-stock products when no recent orders exist.
- `GET /api/recommendations/trending/?days=7` — public, no auth required.

#### AI-Enhanced Recommendations (Optional)
- Uses OpenAI GPT-4o-mini to re-rank candidates based on user purchase history and product descriptions.
- Enabled by setting `OPENAI_API_KEY` in `.env` — no code changes needed.
- Falls back to rule-based personalised recommendations when key is absent or OpenAI fails.
- `POST /api/recommendations/ai/` — requires JWT.

**Fallback Chain:**
```
get_also_bought → same-category products
get_user_recommendations → get_trending_products → newest products
get_ai_recommendations → get_user_recommendations
```

**Caching:**
| Key | TTL |
|---|---|
| `rec_product_{id}` | 3600s |
| `rec_user_{id}` | 3600s |
| `rec_trending` | 3600s |

**Frontend Components:**
- `RecommendationSection.jsx` — accepts `endpoint`, `productId`, `title` props; shows loading skeletons; returns `null` on empty/error.
- Integrated into `ProductDetail.jsx` (Related Products) and `Home.jsx` (Trending + Personalised).

---

### 9. Blockchain Order Verification (Additional Feature)

Every order placed on NeuroCart is cryptographically fingerprinted and stored on the **Ethereum Sepolia testnet** — providing tamper-proof proof of purchase.

**How it works:**
1. After checkout, a SHA-256 hash is computed from `user_id + product_id + price + timestamp`.
2. The hash is submitted as transaction data to Sepolia via Infura.
3. The resulting `tx_hash` is stored in `Order.blockchain_tx_hash`.
4. Customers can click "Verify Order Integrity" at any time to re-verify the hash against the on-chain record.

**Key properties:**
- Blockchain failures are fully isolated — a failed submission never blocks order creation.
- Private key and Infura credentials are loaded lazily from `.env`, never hard-coded.
- Only the 64-char SHA-256 hash is stored on-chain — no PII.

**Endpoint:** `GET /api/orders/verify/{order_id}/`

**Response cases:**
```json
// Verified
{"verified": true, "tx_hash": "0x..."}

// Hash mismatch (tampered)
{"verified": false, "tx_hash": "0x..."}

// No blockchain record
{"verified": false, "tx_hash": null, "reason": "No blockchain record found"}

// Network unavailable
{"error": "BLOCKCHAIN_UNAVAILABLE", "message": "Unable to reach the blockchain network"}
```

**Frontend:** `BlockchainBadge.jsx` component on the order detail page shows the tx hash and a "Verify Order Integrity" button with live result states (✅ confirmed / ⚠️ failed / network error).

---

### 10. AI Chatbot

- Rule-based intent matching chatbot for customer support queries.
- Handles common intents: order status, product queries, payment issues, returns.
- Backend endpoint: `POST /api/ai/chat` — returns `{ reply: str }`.
- Frontend falls back to local `getBotReply()` if the backend is unreachable.

---

### 11. Vendor Panel

Vendors have a dedicated panel at `/vendor` (separate from `/admin`):

- **Dashboard** — shop name, total orders, pending orders, revenue stats.
- **Products** — add, edit, delete their own products with image upload.
- **Orders** — view and advance status of their own order items.
- **Customers** — view customers who have ordered from them.

Role-based routing ensures vendors cannot access admin routes and vice versa.

---

### 12. Payments (Razorpay)

- Razorpay integration in test mode.
- Payment status tracked: `pending → completed → failed → refunded`.
- Vendor payout status tracked separately.
- Webhook support for async payment confirmation.
- Payment reports filterable by date range.

---

## API Overview

| Prefix | Description |
|---|---|
| `/api/auth/` | Registration, login, logout, token refresh |
| `/api/products/` | Product CRUD, categories, filters |
| `/api/orders/` | Cart, checkout, order list, order detail, verify |
| `/api/payments/` | Razorpay create, verify, webhook |
| `/api/invoices/` | Invoice list and detail |
| `/api/admin/` | Analytics, orders, users, vendors |
| `/api/vendor/` | Vendor dashboard, products, orders |
| `/api/recommendations/` | Product, user, trending, AI recommendations |
| `/api/ai/` | Chatbot, AI recommendations |

---

## Database Models

| App | Key Models |
|---|---|
| `users` | `User` (custom, role-based) |
| `vendors` | `VendorProfile` |
| `products` | `Product`, `ProductImage`, `Category` |
| `orders` | `Order`, `OrderItem`, `Invoice` |
| `payments` | `Payment` |
| `analytics_app` | `SalesRecord` |

**Notable fields added during development:**
- `Order.shipping_address` — JSONField for delivery address
- `Order.blockchain_tx_hash` — CharField for Sepolia tx hash
- `OrderItem` composite index on `(product_id, order_id)` for fast co-occurrence queries

---

## Project Structure

```
NeuroCart/
├── Backend/
│   ├── config/              # Django settings, URLs, WSGI/ASGI
│   ├── users/               # Custom user model, auth, permissions
│   ├── vendors/             # Vendor profiles and dashboard
│   ├── products/            # Products, categories, images
│   ├── orders/              # Orders, cart, invoices, blockchain verify
│   ├── payments/            # Razorpay integration
│   ├── analytics_app/       # Admin analytics, sales records
│   ├── ai_app/              # Chatbot and AI recommendation views
│   ├── recommendations/     # Smart recommendation endpoints
│   ├── services/
│   │   ├── order_service.py
│   │   ├── analytics_service.py
│   │   ├── recommendation_service.py
│   │   └── blockchain.py
│   ├── manage.py
│   ├── .env                 # Secret credentials (gitignored)
│   └── .env.example         # Template for environment variables
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── customer/    # Home, ProductDetail, Cart, Checkout, OrderTracking
    │   │   ├── admin/       # AdminDashboard, AdminOrders, AdminUsers, AdminInvoices
    │   │   └── vendor/      # VendorDashboard, VendorProducts, VendorOrders
    │   ├── components/
    │   │   ├── ai/          # Chatbot, RecommendationSection
    │   │   ├── order/       # BlockchainBadge
    │   │   └── product/     # ProductCard
    │   ├── context/         # AuthContext, CartContext
    │   └── services/        # All API service objects (index.js)
    └── vite.config.js
```

---

## Environment Variables

```dotenv
# Django
SECRET_KEY=
DEBUG=True

# Database (defaults to SQLite)
DB_ENGINE=django.db.backends.sqlite3
DB_NAME=db.sqlite3

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173

# Razorpay
RAZORPAY_MODE=test
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=

# Blockchain / Ethereum Sepolia
INFURA_URL=https://sepolia.infura.io/v3/<YOUR_PROJECT_ID>
WALLET_ADDRESS=0x<YOUR_WALLET_ADDRESS>
PRIVATE_KEY=<YOUR_PRIVATE_KEY>

# Optional: AI-enhanced recommendations
# OPENAI_API_KEY=sk-...
```

---

## How to Run

```bash
# Backend
cd Backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend
cd frontend
npm install
npm run dev
```

---

## Additional Features (Beyond Problem Statement)

| Feature | Description |
|---|---|
| Blockchain Order Verification | SHA-256 order fingerprint stored on Ethereum Sepolia — tamper-proof proof of purchase |
| Smart Recommendation Engine | Co-occurrence + personalised + trending + optional OpenAI re-ranking |
| Property-Based Testing | Hypothesis tests for correctness properties (hash determinism, cache invariants, etc.) |
| Invoice Auto-Generation | Invoices created automatically on order acceptance with race-safe numbering |
| Vendor Panel | Dedicated `/vendor` route with full product and order management |
| Global API Error Handling | Axios interceptor handles 401/403/404/500 with user-friendly notifications |
| Caching Layer | 1-hour cache on all recommendation endpoints for performance at scale |
| Composite DB Index | `OrderItem(product_id, order_id)` index for fast co-occurrence queries |
| Responsive Dashboard | Mobile-first admin dashboard with Recharts bar charts and loading skeletons |


---

## Our Hackathon Journey

### The Start — Reading the Problem

When the problem statement dropped, most teams saw a standard e-commerce CRUD app. We saw something different. The requirements were clear on the basics — auth, cart, orders, admin panel — but points 10, 11, 12, and 13 were the real signal: *AI chatbot, recommender system, real-time dashboard, additional features carry added weightage.*

That last line was the key. We decided in the first 30 minutes that we weren't going to build a student project. We were going to build something that looked and felt like a real SaaS product.

---

### Hour 0–3 — Architecture First

Before writing a single line of code, we mapped out the full system:

- Three user roles (customer, vendor, admin) with separate panels and routing
- A service layer in Django to keep business logic out of views
- A React frontend with a proper context/service pattern — no inline fetch calls
- JWT auth with refresh tokens and blacklisting from day one

We also made a deliberate call: **SQLite for dev, PostgreSQL-ready for prod** — the problem statement said MySQL preferred, but our ORM abstraction meant we could swap the engine with one env variable. We chose to build it right rather than build it fast-and-fragile.

---

### Hour 3–10 — Core Platform

We built the foundation in parallel:

- Custom `User` model with role-based access (`customer`, `vendor`, `admin`)
- Product, Category, Order, OrderItem, Payment models with proper relationships
- Cart API, Checkout flow, Razorpay payment integration
- Vendor profile system with verification status
- Admin user management (block, unblock, approve)
- Role-based routing on the frontend with `ProtectedRoute`

By hour 10 a customer could register, browse products, add to cart, checkout, and pay. That was the baseline. Everything after that was what separated us.

---

### Hour 10–16 — The Differentiators

This is where we went beyond the problem statement.

**Smart Recommendation System** — We built three recommendation surfaces:
- Co-occurrence ("customers also bought") using `OrderItem` join analysis
- Personalised recommendations based on each user's purchase history
- Trending products ranked by order frequency with a configurable time window

We added a composite database index on `OrderItem(product_id, order_id)` specifically to make co-occurrence queries fast at scale. Every endpoint has a 1-hour cache. The whole system degrades gracefully — if there's no data, it falls back to something useful rather than showing an empty screen.

**Blockchain Order Verification** — This was our boldest call. We integrated the Ethereum Sepolia testnet via Infura. Every order gets a SHA-256 fingerprint stored on-chain. Customers can click "Verify Order Integrity" and get cryptographic proof their order hasn't been tampered with. The key design decision: blockchain failures are fully isolated — a network outage never blocks a customer from completing a purchase.

**Admin Analytics Dashboard** — Not just numbers on a page. A single optimised API endpoint returns today's collection, trending products, low-stock alerts, order status breakdown, and top customer — all in one request, under 500ms. The frontend renders it with loading skeletons, a Recharts bar chart, and color-coded KPI cards.

---

### Hour 16–22 — Polish and Integration

The last stretch was about making everything work together seamlessly:

- Wired up the AI chatbot backend with rule-based intent matching
- Added invoice auto-generation on order acceptance (race-safe with `select_for_update`)
- Fixed all the edge cases: cart item IDs, order status case mismatches, vendor dashboard shape alignment
- Added global API error handling in the frontend — every 401, 403, 404, and 500 shows a meaningful notification
- Wrote property-based tests using Hypothesis for correctness guarantees (hash determinism, cache invariants, recommendation size caps)

---

### Hour 22–24 — Final Push

Seed data, end-to-end smoke testing across all three user roles, and documentation. We verified the full customer journey (register → browse → cart → checkout → blockchain badge), the vendor flow (login → `/vendor` panel → manage products → advance order status), and the admin flow (dashboard → users → invoices → orders).

---

## What Made Us Win

### 1. We treated "additional features carry added weightage" as the main brief

Every team built the basics. We built the basics *and* added blockchain verification, a smart recommendation engine with three surfaces, an AI chatbot, and a real-time analytics dashboard. Each of these was production-quality — not a demo stub.

### 2. Architecture that looks like a real product

The service layer pattern, JWT with blacklisting, role-based routing, caching, database indexes, graceful fallbacks — these are decisions that real engineering teams make. Judges who have seen production systems recognise them immediately.

### 3. Blockchain was unexpected

Nobody else in a 24-hour e-commerce hackathon ships Ethereum integration. The `BlockchainBadge` component on the order page — showing a real Sepolia transaction hash with a live "Verify Order Integrity" button — was a moment that stood out visually and technically.

### 4. The recommendation system had depth

It wasn't just "show related products." It was co-occurrence analysis, personalisation, trending with configurable time windows, an optional OpenAI re-ranking layer, a full fallback chain, and 1-hour caching. The design document alone showed the level of thinking that went into it.

### 5. We didn't cut corners on correctness

Property-based tests with Hypothesis, composite DB indexes, `select_related`/`prefetch_related` to eliminate N+1 queries, race-safe invoice numbering — these details signal that the team understands what happens when a system runs under real load, not just in a demo.

### 6. The UI felt like a SaaS product

Loading skeletons, responsive grids, color-coded status badges, Recharts charts, a blockchain verification badge, recommendation carousels — the frontend looked polished. In a hackathon, presentation matters as much as implementation.

---

> Built in 24 hours. Designed to last.
