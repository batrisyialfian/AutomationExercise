# Automation with Playwright & Typescript

## Overview

This project contains an end-to-end test suite for automationexercise.com built with Playwright and TypeScript, following the Page Object Model (POM) design pattern.

## Setup

1. Clone repo

```bash
git clone <https://github.com/batrisyialfian/AutomationExercise.git>
cd <AutomationExercise>
```

2. Install dependencies

```bash
npm install
```

3. Install Playwright browsers

```bash
npx playwright install
```

4. Update test credentials (optional):

- Navigate to `src/test-data/credentials.json`
- Replace with your own test account credentials

5. Run tests

```bash
npx playwright test
```
HTML reports are generated in `playwright-report/` after each test run.

View with: `npm run report`

## External Assistance Disclosure

The following tools were used during development:

### Tools Used

- **Playwright Codegen**: Used to generate initial test flows and baseline selectors for the end-to-end workflow
- **Browser DevTools**: Used to inspect DOM elements and refine selectors
- **Claude AI / ChatGPT**: Used extensively for guidance, code generation, and debugging
- **GitHub Copilot**: Used for code completion and boilerplate generation

### AI Assistance Details

AI tools (Claude AI and ChatGPT) were used throughout the development process for:

1. **Project Setup and Architecture**
   - Understanding assessment requirements and success criteria
   - Designing the Page Object Model structure with separated selectors
   - Setting up TypeScript interfaces and models
   - Configuring Playwright with appropriate settings

2. **Code Generation**
   - Initial scaffolding of Page Object classes
   - Selector class implementations
   - Fixture setup for authenticated sessions
   - TypeScript interfaces (Product, CartItem, Credentials, PaymentDetails)

3. **Debugging and Problem-Solving**
   - Resolving strict mode violations (multiple elements matching selectors)
   - Fixing timeout issues with page loads
   - Understanding cart item ordering and index management
   - Implementing proper waits instead of hard timeouts

4. **Best Practices and Optimization**
   - Playwright best practices for selector strategies
   - Proper use of `waitForLoadState` vs hard waits
   - Error handling and assertion patterns
   - Code organization and maintainability

### Example AI Prompts Used

**Initial Setup:**

- "I am creating an automated test suite using Playwright and TypeScript for a site. I have test code generated in Playwright codegen, and I need to factor in Page Object Model."
- "How do I code the selector classes with explanation"
- "Explain the complete project structure for this assessment"

**Debugging:**

- "Error: strict mode violation: getByRole('link', { name: 'Kids' }) resolved to 2 elements"
- "Error: page.goto: Test timeout of 30000ms exceeded"
- "The test expected 'Sleeves Printed Top - White' at cart index 0, but found 'Half Sleeves Top Schiffli Detailing - Pink'"

**Implementation Guidance:**

- "How to structure selectors separately from Page Objects"
- "Best practices for Playwright waits - avoid hard sleeps"

### Development Approach

While AI tools provided significant assistance with code generation and problem-solving, I:

- Manually reviewed and tested all generated code
- Made decisions on project structure and architecture
- Debugged issues by analyzing error messages and page snapshots
- Adapted AI suggestions to fit the specific requirements of this assessment
- Ensured all code works correctly and meets the acceptance criteria

### Notes

Approximately **70-80%** of the final code was AI-generated or AI-assisted, with my contribution being:

- Understanding the requirements and translating them into specific prompts
- Testing and debugging the generated code
- Making architectural decisions about project structure
- Iteratively refining prompts based on errors and failures
- Validating that the final solution meets all technical requirements
