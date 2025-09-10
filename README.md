# Playwright End-to-End Testing Framework

This repository provides an automated end-to-end testing framework for web applications using [Playwright](https://playwright.dev/). It is designed for scalable, maintainable, and robust UI testing, with support for custom page objects, fixtures, and CI integration.

## Features

- **Playwright Test Runner**: Uses Playwright's built-in test runner for fast and reliable browser automation.
- **Page Object Model**: Encapsulates page interactions in reusable classes under [`page-objects/`](page-objects/).
- **Custom Fixtures**: Shared setup and utilities are defined in [`fixtures/fixtures.ts`](fixtures/fixtures.ts).
- **Test Organization**: Test files are located in [`tests/`](tests/) and follow the `.test.ts` naming convention.
- **Reporting**: Generates HTML reports in [`playwright-report/`](playwright-report/) and stores test results in [`test-results/`](test-results/).
- **Continuous Integration**: Includes a GitHub Actions workflow ([`.github/workflows/playwright.yml`](.github/workflows/playwright.yml)) for automated testing on pushes and pull requests.

## Project Structure

- `page-objects/`: Page object classes for encapsulating UI interactions.
- `fixtures/`: Custom Playwright fixtures for shared setup.
- `tests/`: Test cases for different scenarios.
- `playwright.config.ts`: Playwright configuration file.
- `.github/workflows/playwright.yml`: CI workflow for running tests on GitHub Actions.
- `playwright-report/`: HTML test reports.
- `test-results/`: Raw test result data.

## How to Run Tests Locally

1. **Install dependencies**  
   ```sh
   npm ci
   ```

2. **Install Playwright browsers**  
   ```sh
   npx playwright install --with-deps
   ```

3. **Run all tests**  
   ```sh
   npm test
   ```

4. **View HTML report**  
   After running tests, open [`playwright-report/index.html`](playwright-report/index.html) in your browser.

## Continuous Integration

On every push or pull request to the `main` branch, GitHub Actions will:

- Checkout the code
- Set up Node.js
- Install dependencies and browsers
- Run Playwright tests
- Upload the HTML report as an artifact

See the workflow file: [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml)

## Writing Tests

- Use the custom fixtures from [`fixtures/fixtures.ts`](fixtures/fixtures.ts) for shared setup.
- Use page objects from [`page-objects/`](page-objects/) to interact with the UI.
- Place your test files in [`tests/`](tests/) and use the `.test.ts` suffix.

Example test: [`tests/loginGmail.test.ts`](tests/loginGmail.test.ts)

## License

This project is licensed under the ISC License.