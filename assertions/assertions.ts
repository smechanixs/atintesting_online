import { expect, Locator, Page } from "@playwright/test";
import { AdminPage } from "../pages/adminPage";

export async function assertHeadingIsInViewport(page: Page, element: Locator) {
    await page.waitForLoadState('networkidle');
    await expect(element, "Element is not visible.").toBeVisible();
    await expect(element, "Element is off-screen.").toBeInViewport();
}

export async function assertAdminPageElements(page: AdminPage) {
    await expect(page.usernameInput, "Username input is not visible.").toBeVisible();
    await expect(page.passwordInput, "Password input is not visible.").toBeVisible();
    await expect(page.loginButton, "Login button is not visible.").toBeVisible();
}
