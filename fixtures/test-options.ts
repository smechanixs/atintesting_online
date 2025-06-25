import { test as base } from '@playwright/test';

export type TestOptions = {
    baseURL: string;
    homePageNav: string;
    roomsPageNav: string;
    bookingPageNav: string;
    locationPageNav: string;
    contactPageNav: string;
}

export const test = base.extend<TestOptions>({

    homePageNav: async ({ page }, use) => {
        await page.goto('/');
        await use('');
    },
    roomsPageNav: async ({ page }, use) => {
        await page.goto('/');
        await page.locator(".navbar").getByRole('link', { name: 'Rooms' }).click();
        await use('');
    },

    bookingPageNav: async ({ page }, use) => {
        await page.goto('/');
        await page.locator(".navbar").getByRole('link', { name: 'Booking' }).click();
        await use('');
    },

    locationPageNav: async ({ page }, use) => {
        await page.goto('/');
        await page.locator(".navbar").getByRole('link', { name: 'Location' }).click();
        await use('');
    },

    contactPageNav: async ({ page }, use) => {
        await page.goto('/');
        await page.locator(".navbar").getByRole('link', { name: 'Contact' }).click();
        await use('');
    },
});