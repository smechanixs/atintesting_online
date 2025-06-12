import { test } from '../fixtures/test-options';
import { expect } from '@playwright/test';
import { roomTypes } from '../enums/roomTypes';
import { RoomsPage } from '../pages/roomsPage';
import { BookingsPage } from '../pages/bookingsPage';
import { LocationPage } from '../pages/locationPage';
import { ContactPage } from '../pages/contactPage';
import { assertAdminPageElements, assertHeadingIsInViewport } from '../assertions/assertions';
import { AdminPage } from '../pages/adminPage';


// Removed manual page.close() to let Playwright handle page lifecycle automatically

test.describe('Header Redirections', () => {

  test('Verify "Rooms" section navigation', async ({ page, roomsPageNav }) => {

  const roomsPage = new RoomsPage(page);
  await assertHeadingIsInViewport(page, roomsPage.roomsPageHeading);
  });


  test('Verify "Booking" section navigation', async ({ page, bookingPageNav }) => {

  const bookingsPage = new BookingsPage(page);
  await assertHeadingIsInViewport(page, bookingsPage.bookingsPageHeading);
  });

  test('Verify "Location" section navigation', async ({ page, locationPageNav }) => {

  const locationPage = new LocationPage(page);
  await assertHeadingIsInViewport(page, locationPage.locationPageHeading);
  });

  test('Verify "Contact" section navigation', async ({ page, contactPageNav }) => {

  const contactPage = new ContactPage(page);
  await assertHeadingIsInViewport(page, contactPage.contactPageHeading);
  });

  test('Verify "Admin" page navigation', async ({ page, contactPageNav }) => {

  const adminPage = new AdminPage(page);
  await page.goto('/admin');
  await assertAdminPageElements(adminPage);
  
  });
});