import type { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly inventoryHeader: Locator;
  readonly shoppingCartLink: Locator;
  readonly cartBadge: Locator;
  readonly addItemToCart: Locator;
  readonly inventoryPrice: Locator;
  readonly inventorySortContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryHeader = page.locator("#header_container .app_logo");
    this.shoppingCartLink = page.getByTestId("shopping-cart-link");
    this.cartBadge = page.locator(
      'xpath=//span[@data-test="shopping-cart-badge"]',
    );
    this.addItemToCart = page.getByTestId(/^add-to-cart-/);
    this.inventoryPrice = page.locator(".inventory_item_price");
    this.inventorySortContainer = page.getByTestId("product-sort-container");
  }

  async addInventoryItemToCart(index: number) {
    await this.addItemToCart.nth(index).click();
  }

  async sortInventoryByPrice() {
    await this.inventorySortContainer.selectOption("lohi");
  }

  async getInventoryPrices(): Promise<number[]> {
    const priceTexts = await this.inventoryPrice.allTextContents();
    return priceTexts.map((text) => parseFloat(text.replace("$", "")));
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}
