# Playwright UI tests

UI automation test assignment: Create UI tests using Playwright for web app saucedemo.com

## Prerequisties

- Node.js
- Git

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd dkaratysh-ui-tests-playwright
```

### 2. Insatll Dependencies

```bash
 npm install
```

### 3. Install Playwright Browser

```bash
npm run install:browsers
```

### 4. Setup Authentication

Create `.env` and add your credentials

```bash
cp .env.example.env
```

Edit `.env` and add your credentials:

## Running test

```bash
# Run all test
npx playwright test

# Run tests in UI mode
npx playwright test --ui

#View test report
npx playwright show-report
```

## Notes

- Auth state is cashed in `.auth/` for faster test execution
- Login tests run without cashed auth test actual login flow
- Other tests reuse auth session
- Enable "setup" project to run auth with UI tests
