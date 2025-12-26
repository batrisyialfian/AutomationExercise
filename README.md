# Automation with Playwright & Typescript

## Overview
This project contains an end-to-end test suite for automationexercise.com built with Playwright and TypeScript, following the Page Object Model (POM) design pattern.

## Project Structure
.
├── src/
│   ├── fixtures/
│   │   └── sessions.ts           # Authenticated session fixtures
│   ├── models/
│   │   ├── CartItem.ts            # Cart item interface
│   │   ├── Credentials.ts         # User credentials interface
│   │   ├── PaymentDetails.ts      # Payment details interface
│   │   └── Product.ts             # Product interface
│   ├── pages/
│   │   ├── CartPage.ts            # Cart page object
│   │   ├── CheckoutPage.ts        # Checkout page object
│   │   ├── LoginPage.ts           # Login page object
│   │   └── ProductsPage.ts        # Products page object
│   ├── selectors/
│   │   ├── cart.selectors.ts      # Cart page selectors
│   │   ├── checkout.selectors.ts  # Checkout page selectors
│   │   ├── login.selectors.ts     # Login page selectors
│   │   └── products.selectors.ts  # Products page selectors
│   └── test-data/
│       ├── credentials.json       # Test credentials
│       ├── payment.json           # Mock payment data
│       └── test-data.ts           # Test data exports
├── tests/
│   └── e2e-shopping.spec.ts      # Main E2E test suite
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Project dependencies
└── README.md                     # This file

## Setup

1. Clone repo
```bash
git clone <automationexercise>
```
2. cd <folder>
3. Install dependencies
```bash

```
4. npx playwright install
5. cp .env.example .env
6. # fill in .env values
7. npx playwright test

## External Assistance Disclosure

(List AI prompts used, selector tools, or any external code/library references. Provide short examples if possible.)

- Playwright Codegen was used to generate initial selectors and test flow
- Browser DevTools was used to refine selectors
- ChatGPT was used for guidance on understanding the assessment requirements, structuring and general best practices.

AI prompts used:

1. Explain how to approach this assessment step by step, highlighting important aspects
2. How to apply TypeScript Strict Mode

## Notes
