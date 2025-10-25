import { test, expect } from "@playwright/test";
import { ROUTES } from "../utils/routes";
import { CartPage } from "../pages/CartPage";
import { InventoryPage } from "../pages/InventoryPage";

test("removes item from cart", async ({ page }) => {
  const cartPage = new CartPage(page);
  const inventoryPage = new InventoryPage(page);

  await test.step("Add first product to the cart", async () => {
    await page.goto(ROUTES.INVENTORY);
    await inventoryPage.addInventoryItemToCart(0);
  });

  await test.step("Navigate to cart", async () => {
    await cartPage.page.goto(ROUTES.CART);
  });

  await test.step("Remove item from cart", async () => {
    await cartPage.removeItemFromCart(0);
    await expect(cartPage.cartItems).not.toBeVisible();
  });
});
