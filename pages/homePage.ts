import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly roomsPageHeading: Locator;
  readonly bookingsPageHeading: Locator;
  readonly checkAvailabilityBtn: Locator;
  readonly locationPageHeading: Locator;
  readonly contactPageHeading: Locator;
  readonly roomCard: Locator;
  readonly checkInDateInput: Locator;
  readonly checkOutDateInput: Locator;


  constructor(page: Page) {
    this.page = page;
    this.roomsPageHeading = this.page.locator('#rooms h2', { hasText: 'Our Rooms' });
    this.bookingsPageHeading = this.page.locator('#booking h3', { hasText: 'Check Availability & Book Your Stay' });
    this.checkAvailabilityBtn = this.page.locator('#booking button', { hasText: 'Check Availability' });
    this.locationPageHeading = this.page.locator('#location h2', { hasText: 'Our Location' });
    this.contactPageHeading = this.page.locator('#contact h3', { hasText: 'Send Us a Message' });
    this.roomCard = this.page.locator('#rooms .room-card');
    // Locators for the check-in and check-out date inputs
    this.checkInDateInput = this.page.locator('label.form-label', { hasText: 'Check In' }).locator('..').locator('input');
    this.checkOutDateInput = this.page.locator('label.form-label', { hasText: 'Check Out' }).locator('..').locator('input');
  }

  async selectARoom(roomType: string): Promise<void> {
    const bookNowButton = this.roomCard
      .getByText(roomType)
      .locator('../..')
      .locator('.btn', { hasText: 'Book now' });
    
    await bookNowButton.click();
  }
}