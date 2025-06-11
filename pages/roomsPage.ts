import { Locator, Page } from '@playwright/test';

export class RoomsPage {
  readonly page: Page;
  readonly roomsPageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roomsPageHeading = this.page.locator('#rooms h2', { hasText: 'Our Rooms' });
  }
}
