import { test, expect } from "@playwright/test";
import { env } from "../data/user-data";
import { ROUTES } from "../utils/routes";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.use({ storageState: undefined });
test("logins with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(env.USERNAME, env.PASSWORD!);
  await expect(loginPage.page).toHaveURL(`${env.BASE_URL}${ROUTES.INVENTORY}`);
  await expect(inventoryPage.inventoryHeader).toBeVisible();
});
