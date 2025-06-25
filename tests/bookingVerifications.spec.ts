import { test } from '../fixtures/test-options';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { RoomType } from '../enums/roomTypes';
import { BookingsPage } from '../pages/bookingsPage';


test.describe('Booking Verifications', () => {
  test.afterEach(async ({ page }) => {
      page.close();
      await page.context().clearCookies();
    });

  test('Book a single room - Positive scenario', async ({page, homePageNav}) => {
    const homePage = new HomePage(page);
    const bookingsPage = new BookingsPage(page);
    const checkInDate = await homePage.checkInDateInput.inputValue();
    const checkOutDate = await homePage.checkOutDateInput.inputValue();

    await homePage.checkAvailabilityBtn.isVisible();
    await homePage.checkAvailabilityBtn.click();
    await expect(homePage.roomCard).toHaveCount(3, { timeout: 5000 });

    await homePage.selectARoom(RoomType.SINGLE);

    await expect(bookingsPage.roomType).toContainText(RoomType.SINGLE);

    await bookingsPage.clickReserveButton();

    await bookingsPage.fillAndSubmitGuestDetails();

  });
});