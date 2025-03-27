import { Page, BrowserContext, Locator } from '@playwright/test';
import { config } from '../config';

export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly USERNAME_INPUT: Locator;
    readonly PASSWORD_INPUT: Locator;
    readonly LOGIN_BUTTON: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.USERNAME_INPUT = page.getByTestId('username');
        this.PASSWORD_INPUT = page.getByTestId('password');
        this.LOGIN_BUTTON = page.getByRole('button', { name: 'Login'});
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/");
    }

    async performLogin(): Promise<void> {
        await this.USERNAME_INPUT.fill(config.username);
        await this.PASSWORD_INPUT.fill(config.password);
        await this.LOGIN_BUTTON.click();
    }
}