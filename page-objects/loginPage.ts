// fixtures/LoginPage.ts
import { Page, expect } from '@playwright/test';
import { HomePage } from './HomePage'; // Import HomePage

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locator methods (unchanged)
    getEmailInput() {
        return this.page.getByLabel('Email or phone');
    }
    getPasswordInput() {
        return this.page.getByLabel('Enter your password');
    }
    getNextButton() {
        return this.page.getByRole('button', { name: 'Next' });
    }
    getErrorMessage() {
        return this.page.locator('[data-error-code]');
    }

    // Action methods
    async navigateToLogin() {
        await this.page.goto('https://accounts.google.com/ServiceLogin');
        await this.getEmailInput().waitFor({ state: 'visible' });
        return this;
    }

    async enterEmail(email: string) {
        await this.getEmailInput().fill(email);
        await this.getNextButton().click();
        return this;
    }

    async enterPassword(password: string): Promise<HomePage> {
        await this.getPasswordInput().fill(password);
        await this.getNextButton().click();
        
        // Return a new instance of HomePage to enable chaining to the next page
        return new HomePage(this.page);
    }
}