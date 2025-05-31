import { Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigateToRooms() {
    // Click on the "Rooms" link in the header
    await this.page.click('header a[href="/rooms"]');
    
    // Wait for the URL to change to the expected rooms page
    await this.page.waitForURL('/rooms');
  }
}