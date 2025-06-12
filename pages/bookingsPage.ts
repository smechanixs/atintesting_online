import { Locator, Page } from '@playwright/test';

export class BookingsPage {
  readonly page: Page;
  

  constructor(page: Page) {
    this.page = page;

  }
}
