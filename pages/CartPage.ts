import type { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly removeItemButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.getByTestId("inventory-item");
    this.removeItemButton = page.getByRole("button", { name: "Remove" });
  }

  async removeItemFromCart(index: number) {
    await this.removeItemButton.click();
  }
}
