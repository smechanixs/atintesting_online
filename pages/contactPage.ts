import { Locator, Page } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly contactPageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactPageHeading = this.page.locator('#contact h3', { hasText: 'Send Us a Message' });
  }
}