// tests/login.spec.ts
import { test } from '../fixtures/fixtures'; // Use the new test import

test.describe('Gmail Login', () => {

    test('should show a password error for invalid credentials', async ({ loginPage }) => {

        // 1. Navigate to the login page
        await loginPage.navigateToLogin();

        // 2. Enter a dummy email and click next
        await loginPage.enterEmail('dummyuser123@gmail.com');

        // 3. Enter a dummy password and click next
        await loginPage.enterPassword('incorrect-password');

        // 4. Assert that the error message is displayed and contains the expected text
        await loginPage.verifyLoginError();
    });

});