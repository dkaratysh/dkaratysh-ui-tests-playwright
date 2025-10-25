import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "tests",
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL,
    screenshot: "only-on-failure",
    testIdAttribute: "data-test",
  },
  reporter: [["html"], ["list"]],

  projects: [
    { name: "setup", testMatch: /.*.setup\.ts/ },
    {
      name: "chromium",
      use: { storageState: ".auth/user.json" },
      dependencies: ["setup"],
    },
  ],
});
