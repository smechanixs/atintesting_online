import { Locator, Page } from '@playwright/test';

export class LocationPage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }
}
