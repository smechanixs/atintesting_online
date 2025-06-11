import {test as base} from '@playwright/test';

export type TestOptions = {
    baseURL: string;
    roomsPageNav: string;
    bookingPageNav: string;
}

export const test = base.extend<TestOptions>({
    roomsPageNav: async ({page}, use) => {
        await page.goto('/');
        await page.locator(".navbar").getByRole('link', { name: 'Rooms' }).click();
        await use('');
    },

    bookingPageNav: async ({page}, use) => {
        await page.goto('/');
        await page.locator(".navbar").getByRole('link', { name: 'Booking' }).click();
        await use('');
    },
});