import { test as setup } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { env } from "../data/user-data";

const authFile = ".auth/user.json";

setup("Authenticate user and save storage state", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(env.USERNAME, env.PASSWORD);
  await page.waitForLoadState("networkidle");
  await page.waitForSelector('[data-test="inventory-container"]', {
    state: "visible",
  });

  await page.context().storageState({ path: authFile });
});
