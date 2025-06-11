import { Locator, Page } from '@playwright/test';

export class BookingsPage {
  readonly page: Page;
  readonly bookingsPageHeading: Locator;
  readonly checkAvailabilityBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookingsPageHeading = this.page.locator('#booking h3', { hasText: 'Check Availability & Book Your Stay' });
    this.checkAvailabilityBtn = this.page.locator('#booking button', { hasText: 'Check Availability' });
  }
}
