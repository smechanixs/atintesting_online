import {test as base} from '@playwright/test';

export type TestOptions = {
    baseURL: string;
    roomsPage: string;
}

export const test = base.extend<TestOptions>({
    roomsPage: async ({page}, use) => {
        await page.goto('/');
        await page.locator(".navbar").getByRole('link', { name: 'Rooms' }).click();
        await use('');
    }
});