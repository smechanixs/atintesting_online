import { Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';


export class BookingsPage {
  readonly page: Page;
  readonly bookingCalendar: Locator;
  readonly checkInDateInput: Locator;
  readonly checkOutDateInput: Locator;
  readonly roomType: Locator;
  readonly reserveButton: Locator;
  readonly guestFirstNameInput: Locator;
  readonly guestLastNameInput: Locator;
  readonly guestEmailInput: Locator;
  readonly guestPhoneInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookingCalendar = this.page.locator('.rbc-calendar');
    this.checkInDateInput = this.bookingCalendar.locator('.rbc-day-bg rbc-today')
    this.checkOutDateInput = this.page.locator('label.form-label', { hasText: 'Check Out' }).locator('..').locator('input');
    this.roomType = this.page.locator('h1');
    this.reserveButton = this.page.locator('.btn', { hasText: 'Reserve Now' });
    this.guestFirstNameInput = this.page.locator('input[name="firstname"]');
    this.guestLastNameInput = this.page.locator('input[name="lastname"]');
    this.guestEmailInput = this.page.locator('input[name="email"]');
    this.guestPhoneInput = this.page.locator('input[name="phone"]');
  }

  async clickReserveButton(): Promise<void> {
    await this.reserveButton.scrollIntoViewIfNeeded();
    await this.reserveButton.click();
  }

  async fillAndSubmitGuestDetails(): Promise<void> {
    await this.guestFirstNameInput.fill(faker.person.firstName());
    await this.guestLastNameInput.fill(faker.person.lastName());
    await this.guestEmailInput.fill(faker.internet.email());
    await this.guestPhoneInput.fill(faker.phone.number());
    await this.clickReserveButton();
  }
}
