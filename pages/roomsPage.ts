import { Locator, Page } from '@playwright/test';

export class RoomsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
