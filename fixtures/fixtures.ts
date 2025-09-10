// fixtures/fixtures.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { HomePage } from '../page-objects/homePage';


// Define the shape of your custom fixtures
type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
};

// Extend the base 'test' object with your new fixtures
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});