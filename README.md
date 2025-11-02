# Audiophile E-Commerce Website

_Stage 3 Task – Frontend Wizards (HNG 13)_

A **pixel-perfect, fully responsive e-commerce website** built with **Next.js (App Router)** and powered by **Convex** for real-time cart, checkout, and order management.  
Implements the **Audiophile** Figma design exactly, across mobile, tablet, and desktop viewports.

---

## Features

### Frontend

- **Pixel-perfect UI** from the official Audiophile Figma
- **Responsive design** across all breakpoints (mobile / tablet / desktop)
- **Global “Manrope” typography**
- **Accessible navigation**
  - Keyboard-friendly
  - Proper focus rings & labels
- **Dynamic category & product pages**
  - `/headphones`, `/speakers`, `/earphones`
  - Reusable product detail layout (`/[category]/[slug]`)
- **Animated mobile + tablet menu drawer**
- **Add-to-cart functionality**
  - Quantity controls
  - Real-time Convex sync
  - Cart persistence per client

### Checkout System

- Full checkout form with **Zod + React-Hook-Form** validation
- Inline error messages & accessible input states
- Supports **e-Money** and **Cash-on-Delivery**
- Dynamic order summary showing subtotal, shipping, VAT, and grand total

### Backend (Convex)

- Real-time database for:
  - Cart items
  - Orders with timestamps & status
- **Resend API** integration for transactional emails
  - Sends responsive order confirmation email
  - Includes order ID, summary, total, and contact info

### Order Confirmation

- On successful checkout:
  - Order saved in Convex
  - Email automatically sent
  - Cart cleared
  - Confirmation modal displayed with order summary

---

## Tech Stack

| Category           | Tools / Libraries                                  |
| ------------------ | -------------------------------------------------- |
| Framework          | **Next.js 14 (App Router)**                        |
| Styling            | **Tailwind CSS**                                   |
| State & Backend    | **Convex (queries / mutations / actions)**         |
| Forms & Validation | **React Hook Form + Zod**                          |
| Email Service      | **Resend API**                                     |
| Font               | **Manrope (Google Font)**                          |
| Deployment         | **Vercel (frontend)** + **Convex Cloud (backend)** |

---

## Project Structure

```

app/
├── (routes)/
│ ├── [category]/page.tsx
│ └── [category]/[slug]/page.tsx
├── components/
│ ├── category/
│ ├── product/
│ ├── cart/
│ └── checkout/
└── layout.tsx
convex/
├── cart.ts
├── orders.ts
├── actions.ts
└── schema.ts
lib/
├── clientId.ts
├── currency.ts
├── totals.ts
└── products.ts

```

---

## Local Setup

### Clone the repository

```bash
git clone https://github.com/<your-username>/audiophile-ecommerce.git
cd audiophile-ecommerce
```

### Install dependencies

```bash
npm install
```

### Set up environment variables

Create `.env.local` in the project root:

```env
CONVEX_DEPLOYMENT=dev:patient-minnow-893
NEXT_PUBLIC_CONVEX_URL=https://patient-minnow-893.convex.cloud
RESEND_API_KEY=re_************************
```

### Run Convex locally

```bash
npx convex dev
```

### Start the Next.js dev server

```bash
npm run dev
```

---

## Deployment

- **Frontend:** [Vercel](https://vercel.com/)
  Auto-deploy from GitHub.
- **Backend:** [Convex Cloud](https://dashboard.convex.dev)
  Set environment variables with

  ```bash
  npx convex env set RESEND_API_KEY re_************************
  ```

---

## Example Confirmation Email

| Element  | Description                                        |
| -------- | -------------------------------------------------- |
| Subject  | `Your Audiophile Order #A-1234`                    |
| Includes | Greeting, Order ID, Item List, Total, Support Link |
| Sender   | `Audiophile <onboarding@resend.dev>`               |
| Layout   | Responsive HTML template matching brand colors     |

---

## Validation Checklist

| Requirement                    | Status |
| ------------------------------ | :----: |
| Pixel-perfect responsive build |   ✅   |
| Checkout form validation       |   ✅   |
| Convex cart + orders logic     |   ✅   |
| Confirmation email             |   ✅   |
| Accessible UI / forms          |   ✅   |
| Clean code + Tailwind tokens   |   ✅   |

---

## Submission Details

| Item               | Description                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Live App**       | [https://your-vercel-deployment.vercel.app](https://your-vercel-deployment.vercel.app)                             |
| **Repository**     | [https://github.com/<your-username>/audiophile-ecommerce](https://github.com/<your-username>/audiophile-ecommerce) |
| **Email Template** | `/email/order-confirmation.html`                                                                                   |

```

```
