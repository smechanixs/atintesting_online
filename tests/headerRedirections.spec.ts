import { test } from '../fixtures/test-options';
import { expect } from '@playwright/test';
import { RoomsPage } from '../pages/roomsPage';
import { roomTypes } from '../enums/roomTypes';
import { BookingsPage } from '../pages/bookingsPage';

// Removed manual page.close() to let Playwright handle page lifecycle automatically

test.describe('Header Redirections', () => {

  test('Verify "Rooms" section navigation', async ({ page, roomsPageNav }) => {

  const roomsPage = new RoomsPage(page);
  await page.waitForLoadState('networkidle');
  await expect(roomsPage.roomsPageHeading, "Rooms page section is off-screen.").toBeInViewport();
  });


  test('Verify "Booking" section navigation', async ({ page, bookingPageNav }) => {

  const bookingsPage = new BookingsPage(page);
  await page.waitForLoadState('networkidle');
  await expect(bookingsPage.checkAvailabilityBtn).toBeVisible();
  await expect(bookingsPage.bookingsPageHeading, "Booking page section is off-screen.").toBeInViewport();
  });
});