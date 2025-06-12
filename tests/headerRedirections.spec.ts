import { test } from '../fixtures/test-options';
import { expect, Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { assertAdminPageElements, assertHeadingIsInViewport } from '../assertions/assertions';
import { AdminPage } from '../pages/adminPage';


test.afterEach(async ({ page }) => {
  page.close();
  await page.context().clearCookies();
});

test.describe('Header Redirections', () => {

  

  test('Verify "Rooms" section navigation', async ({ page, roomsPageNav }) => {

  const homePage = new HomePage(page);
  await assertHeadingIsInViewport(page, homePage.roomsPageHeading);
  });


  test('Verify "Booking" section navigation', async ({ page, bookingPageNav }) => {

  const homePage = new HomePage(page);
  await assertHeadingIsInViewport(page, homePage.bookingsPageHeading);
  });

  test('Verify "Location" section navigation', async ({ page, locationPageNav }) => {

  const homePage = new HomePage(page);
  await assertHeadingIsInViewport(page, homePage.locationPageHeading);
  });

  test('Verify "Contact" section navigation', async ({ page, contactPageNav }) => {

  const homePage = new HomePage(page);
  await assertHeadingIsInViewport(page, homePage.contactPageHeading);
  });

  test('Verify "Admin" page navigation', async ({ page, contactPageNav }) => {

  const adminPage = new AdminPage(page);
  await page.goto('/admin');
  await assertAdminPageElements(adminPage);
  
  });
});