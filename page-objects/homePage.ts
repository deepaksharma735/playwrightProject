// page-objects/HomePage.ts
import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    composeButton = () => this.page.getByRole('button', { name: 'Compose' });
    userProfileIcon = () => this.page.locator('img[aria-label="Google Account:"]');
    
    // Actions
    async verifyLoggedIn() {
        await this.composeButton().waitFor({ state: 'visible' });
        await expect(this.composeButton()).toBeVisible();
    }
}