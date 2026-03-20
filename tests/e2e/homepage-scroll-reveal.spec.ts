import { test, expect } from "@playwright/test";

test.describe("Naslovnica scroll reveal", () => {
  test("sekcija ispod heroja mijenja reveal stanje pri ulasku i izlasku iz viewporta", async ({
    page,
  }) => {
    await page.goto("/");

    const section = page.locator("#what-we-do");
    const finalCta = page.locator("#final-cta");

    await expect(section).toHaveAttribute("data-reveal-state", "hidden");

    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveAttribute("data-reveal-state", "visible");

    await finalCta.scrollIntoViewIfNeeded();
    await expect(section).toHaveAttribute("data-reveal-state", "hidden");
  });

  test("hero je odmah vidljiv, a povratni reveal se aktivira tek nakon izlaska iz viewporta", async ({
    page,
  }) => {
    await page.goto("/");

    const hero = page.locator("#hero");
    const faq = page.locator("#faq");

    await expect(hero).toHaveAttribute("data-reveal-state", "visible");
    await expect(hero).toHaveAttribute("data-reveal-ready", "false");

    await faq.scrollIntoViewIfNeeded();
    await expect(hero).toHaveAttribute("data-reveal-ready", "true");

    await hero.scrollIntoViewIfNeeded();
    await expect(hero).toHaveAttribute("data-reveal-state", "visible");
  });
});
