import test from '@lib/BaseTest';

test(`Verify Landing Page`, async ({ loginPage, landingPage }) => {
    await loginPage.navigateToURL();
    await loginPage.performLogin();
    await landingPage.validateLandingPage();
});