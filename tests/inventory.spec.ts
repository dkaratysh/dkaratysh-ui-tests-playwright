import { test, expect } from "@playwright/test";
import { ROUTES } from "../utils/routes";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

test.describe("Inventory page tests", () => {
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(ROUTES.INVENTORY);
  });

  test("adds product to the cart", async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await test.step("Add first product to the cart", async () => {
      await inventoryPage.addInventoryItemToCart(0);
      await expect(inventoryPage.cartBadge).toHaveText("1");
    });

    await test.step("Verify product is in the cart", async () => {
      await inventoryPage.goToCart();
      await expect(cartPage.page).toHaveURL(ROUTES.CART);
      await expect(cartPage.cartItems).toBeVisible();
    });
  });

  test("sorts products by price low to high", async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    await test.step("Sort products by Price (low to high)", async () => {
      await inventoryPage.sortInventoryByPrice();
    });

    await test.step("Verify products are sorted by price low to high", async () => {
      const prices = await inventoryPage.getInventoryPrices();
      const sortedPrices = [...prices].sort((a, b) => a - b);

      await expect(prices).toEqual(sortedPrices);
      await expect(prices[0]).toBe(Math.min(...prices));
      await expect(inventoryPage.inventoryPrice).toHaveCount(prices.length);
    });
  });
});
