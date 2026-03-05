import { test, expect } from "@playwright/test";

test.describe("Glavne navigacijske rute", () => {
  test("Footer vodi na nove rute (Blog, Reference, Tvrtka)", async ({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");

    await footer.getByRole("link", { name: "Blog" }).click();
    await expect(page).toHaveURL(/\/blog\/?$/);
    await expect(page).toHaveTitle(/Blog/);

    await page.goto("/");
    await footer.getByRole("link", { name: "Reference" }).click();
    await expect(page).toHaveURL(/\/reference\/istaknuti-projekti\/?$/);
    await expect(page).toHaveTitle(/Reference/);

    await page.goto("/");
    await footer.getByRole("link", { name: "Tvrtka" }).click();
    await expect(page).toHaveURL(/\/tvrtka\/nasa-prica\/?$/);
    await expect(page).toHaveTitle(/Tvrtka/);
  });
});
