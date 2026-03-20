import { test, expect } from "@playwright/test";

test.describe("Naslovnica V2", () => {
  test("homepage renderira novi hero i kljucne CTA-ove prema finalnoj specifikaciji", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Razvijamo digitalna rješenja koja podržavaju vaše poslovanje, pojednostavljuju procese i stvaraju prostor za rast",
      })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Zatražite besplatnu analizu" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Pogledajte projekte", exact: true })).toBeVisible();
    const hero = page.locator("#hero");
    await expect(hero.getByText(/25\+\s*godina na tržištu/i)).toBeVisible();
    await expect(hero.getByText(/500\+\s*projekata/i)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Digitalni sustavi koji izgledaju premium i rade bez kompromisa." })
    ).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Rezerviraj strateški poziv" })).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: "Znanje, sigurnost i platforma kao nastavak iste price." })
    ).toHaveCount(0);
  });

  test("homepage prikazuje sve glavne sekcije i FAQ accordion", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Digitalna rješenja prilagođena stvarnim poslovnim potrebama" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Klijenti nam se najčešće javljaju kada trebaju:" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Projekti koji pokazuju kako pristupamo stvarnim poslovnim izazovima" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Vlastiti CMS za veću fleksibilnost i razvoj bez ograničenja" })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Česta pitanja" })).toBeVisible();

    await page.getByRole("button", { name: "Radite li web stranice potpuno od nule?" }).click();
    await expect(
      page.getByText(
        "WEB Marketing razvija web rješenja na vlastitom EasyEdit CMS sustavu koji smo razvili in-house."
      )
    ).toBeVisible();
  });

  test("homepage ostaje citljiv i na mobilnom viewportu", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Razvijamo digitalna rješenja koja podržavaju vaše poslovanje, pojednostavljuju procese i stvaraju prostor za rast",
      })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Zatražite besplatnu analizu" }).first()).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Digitalna rješenja prilagođena stvarnim poslovnim potrebama" })
    ).toBeVisible();
    await expect(page.locator("body")).not.toHaveJSProperty("scrollWidth", 0);
  });

  test("header koristi novu navigaciju, a Pitaj AI blok nudi tri providera", async ({ page }) => {
    await page.goto("/");

    for (const label of ["Usluge", "Reference", "EasyEdit CMS", "Tvrtka", "Blog", "FAQ", "Kontakt"]) {
      await expect(page.getByRole("link", { name: label }).first()).toBeVisible();
    }

    await expect(page.getByRole("link", { name: "Pitajte ChatGPT" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Pitajte Gemini" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Pitajte Claude" })).toBeVisible();
  });

  test("homepage brand lockup i dark surface tekstovi zadrzavaju kontrast", async ({ page }) => {
    await page.goto("/");

    const brandStyles = await page
      .locator("header")
      .getByText("WEB MARKETING")
      .evaluate((element) => {
        const styles = window.getComputedStyle(element);
        return {
          color: styles.color,
          textShadow: styles.textShadow,
          textStrokeWidth:
            styles.getPropertyValue("-webkit-text-stroke-width") ||
            styles.getPropertyValue("text-stroke-width"),
        };
      });

    const finalCtaHeadingStyles = await page.locator("#final-cta h2").evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        color: styles.color,
      };
    });

    const finalCtaPrimaryButtonStyles = await page
      .locator("#final-cta")
      .getByRole("link", { name: "Zatražite besplatnu analizu" })
      .last()
      .evaluate((element) => {
        const styles = window.getComputedStyle(element);
        return {
          color: styles.color,
          backgroundColor: styles.backgroundColor,
        };
      });

    const footerHeadingStyles = await page.locator("footer h4").first().evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        color: styles.color,
      };
    });

    expect(brandStyles.color).not.toBe("rgb(0, 0, 0)");
    expect(brandStyles.textShadow).not.toBe("none");
    expect(brandStyles.textStrokeWidth).not.toBe("0px");
    expect(finalCtaHeadingStyles.color).toBe("rgb(255, 255, 255)");
    expect(finalCtaPrimaryButtonStyles.backgroundColor).toBe("rgb(255, 255, 255)");
    expect(finalCtaPrimaryButtonStyles.color).toBe("rgb(0, 0, 0)");
    expect(footerHeadingStyles.color).not.toBe("rgb(0, 0, 0)");
  });

  test("easyedit business kontekst CTA red ostaje unutar kartice", async ({ page }) => {
    await page.setViewportSize({ width: 920, height: 1180 });
    await page.goto("/");

    const easyEditSection = page.locator("#easyedit-cms");
    const dimensions = await easyEditSection.evaluate((element) => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  });

  test("easyedit bijeli CTA zadrzava crni tekst na hover, a dugi CTA-evi se ne stiscu u preuzak red", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 853, height: 980 });
    await page.goto("/");

    const easyEditSection = page.locator("#easyedit-cms");
    const primaryButton = easyEditSection.getByRole("link", { name: "Saznajte više o EasyEdit CMS-u" });
    const secondaryButton = easyEditSection.getByRole("link", { name: "Zatražite besplatnu analizu" }).last();

    await secondaryButton.hover();

    const secondaryStyles = await secondaryButton.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        color: styles.color,
      };
    });

    const primaryBox = await primaryButton.boundingBox();
    const secondaryBox = await secondaryButton.boundingBox();

    expect(secondaryStyles.color).toBe("rgb(0, 0, 0)");
    expect(primaryBox).not.toBeNull();
    expect(secondaryBox).not.toBeNull();
    expect(secondaryBox!.y).toBeGreaterThan(primaryBox!.y);
  });

  test("outline CTA-evi globalno zadrzavaju tamni tekst na hover", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 960 });
    await page.goto("/");

    const heroOutlineButton = page.getByRole("link", { name: "Pogledajte projekte", exact: true });
    const easyEditOutlineButton = page
      .locator("#easyedit-cms")
      .getByRole("link", { name: "Zatražite besplatnu analizu" })
      .last();

    for (const button of [heroOutlineButton, easyEditOutlineButton]) {
      await button.hover();

      const styles = await button.evaluate((element) => {
        const computed = window.getComputedStyle(element);
        return {
          color: computed.color,
        };
      });

      expect(styles.color).toBe("rgb(0, 0, 0)");
    }
  });

  test("easyedit crni CTA dobiva vidljiv hover color effect", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 960 });
    await page.goto("/");

    const primaryButton = page
      .locator("#easyedit-cms")
      .getByRole("link", { name: "Saznajte više o EasyEdit CMS-u" });

    const beforeHover = await primaryButton.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        backgroundColor: styles.backgroundColor,
        boxShadow: styles.boxShadow,
        transform: styles.transform,
      };
    });

    await primaryButton.hover();

    const afterHover = await primaryButton.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return {
        backgroundColor: styles.backgroundColor,
        boxShadow: styles.boxShadow,
        transform: styles.transform,
      };
    });

    expect(afterHover.backgroundColor).not.toBe(beforeHover.backgroundColor);
    expect(afterHover.boxShadow).not.toBe(beforeHover.boxShadow);
    expect(afterHover.transform).not.toBe(beforeHover.transform);
  });

  test("trust metrike ostaju unutar lijevog stupca na dugorocnom desktop layoutu", async ({ page }) => {
    await page.setViewportSize({ width: 1365, height: 1100 });
    await page.goto("/");

    const trustMetricPanel = page.locator('#trust-proof [class*="metricGrid"]').first();
    const dimensions = await trustMetricPanel.evaluate((element) => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }));

    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  });
});
