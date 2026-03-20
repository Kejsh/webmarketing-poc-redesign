import { test, expect } from "@playwright/test";

test.describe("Glavne navigacijske rute", () => {
  test("Header vodi na nove rute iz finalne navigacije", async ({ page }) => {
    await page.goto("/");

    const header = page.locator("header");

    await header.getByRole("link", { name: "Blog" }).click();
    await expect(page).toHaveURL(/\/blog\/?$/);
    await expect(page).toHaveTitle(/Blog/);

    await page.goto("/");
    await header.getByRole("link", { name: "Reference" }).click();
    await expect(page).toHaveURL(/\/reference\/istaknuti-projekti\/?$/);
    await expect(page).toHaveTitle(/Reference/);

    await page.goto("/");
    await header.getByRole("link", { name: "Tvrtka" }).click();
    await expect(page).toHaveURL(/\/tvrtka\/nasa-prica\/?$/);
    await expect(page).toHaveTitle(/Tvrtka/);

    await page.goto("/");
    await header.getByRole("link", { name: "FAQ" }).click();
    await expect(page).toHaveURL(/\/faq\/?$/);
    await expect(page).toHaveTitle(/FAQ|Pitanja/i);

    await page.goto("/");
    await header.getByRole("link", { name: "Kontakt" }).click();
    await expect(page).toHaveURL(/\/kontakt\/?$/);
  });
});
