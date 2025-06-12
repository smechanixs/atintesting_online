import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly roomsPageHeading: Locator;
  readonly bookingsPageHeading: Locator;
  readonly checkAvailabilityBtn: Locator;
  readonly locationPageHeading: Locator;
  readonly contactPageHeading: Locator;


  constructor(page: Page) {
    this.page = page;
    this.roomsPageHeading = this.page.locator('#rooms h2', { hasText: 'Our Rooms' });
    this.bookingsPageHeading = this.page.locator('#booking h3', { hasText: 'Check Availability & Book Your Stay' });
    this.checkAvailabilityBtn = this.page.locator('#booking button', { hasText: 'Check Availability' });
    this.locationPageHeading = this.page.locator('#location h2', { hasText: 'Our Location' });
    this.contactPageHeading = this.page.locator('#contact h3', { hasText: 'Send Us a Message' });
  }
}