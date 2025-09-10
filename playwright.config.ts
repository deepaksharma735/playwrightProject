// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.{test,spec}.{ts,js}',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: isCI,
        launchOptions: {
          args: ['--start-fullscreen'],
        },
        // The problematic 'deviceScaleFactor' option is removed here.
      },
    },
  ],
  use: {
    headless: isCI,
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
});