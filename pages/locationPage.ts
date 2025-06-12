import { Locator, Page } from '@playwright/test';

export class LocationPage {
  readonly page: Page;
  readonly locationPageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locationPageHeading = this.page.locator('#location h2', { hasText: 'Our Location' });
  }
}
