import { Page, BrowserContext, Locator } from '@playwright/test';

export class LandingPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly LOGO: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.LOGO = page.locator('.app_logo');
    }

    async validateLandingPage(): Promise<void> {
        await this.LOGO;
    }
}