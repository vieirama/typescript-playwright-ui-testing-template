import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { LandingPage } from '@pages/LandingPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    landingPage: LandingPage;
}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },
    landingPage: async ({ page, context }, use) => {
        await use(new LandingPage(page, context));
    }
})

export default test;