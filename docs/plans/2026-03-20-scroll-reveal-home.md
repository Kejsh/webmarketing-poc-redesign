# Scroll Reveal Home Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Uvesti lagani scroll reveal za vece blokove naslovnice i poseban povratni reveal za hero, uz Playwright E2E validaciju ponasanja.

**Architecture:** Implementirati mali client-side `IntersectionObserver` sloj koji oznacava stanje reveala preko `data-*` atributa, bez novih biblioteka. Opci reveal wrapper koristi se za sekcije ispod hero bloka, dok hero dobiva zaseban observer flow kako bi ostao odmah vidljiv na prvom loadu, ali se ponovno animirao pri povratku na vrh nakon prethodnog scrollanja.

**Tech Stack:** Next.js App Router, React 19, TypeScript, CSS Modules, Playwright

---

### Task 1: Definirati E2E ocekivanja za scroll reveal

**Files:**
- Create: `tests/e2e/homepage-scroll-reveal.spec.ts`
- Reference: `tests/e2e/homepage-v2.spec.ts`
- Reference: `playwright.config.ts`

**Step 1: Write the failing test**

Dodati Playwright spec sa scenarijima:

```ts
import { test, expect } from "@playwright/test";

test.describe("Homepage scroll reveal", () => {
  test("sekcija ispod heroja ulazi i izlazi iz visible stanja ovisno o viewportu", async ({ page }) => {
    await page.goto("/");

    const targetSection = page.locator("#what-we-do");

    await expect(targetSection).toHaveAttribute("data-reveal-state", "hidden");

    await targetSection.scrollIntoViewIfNeeded();
    await expect(targetSection).toHaveAttribute("data-reveal-state", "visible");

    await page.locator("#final-cta").scrollIntoViewIfNeeded();
    await expect(targetSection).toHaveAttribute("data-reveal-state", "hidden");
  });

  test("hero je odmah vidljiv na prvom loadu, ali dobiva povratni reveal nakon vracanja prema vrhu", async ({
    page,
  }) => {
    await page.goto("/");

    const hero = page.locator("#hero");

    await expect(hero).toHaveAttribute("data-reveal-state", "visible");
    await expect(hero).toHaveAttribute("data-reveal-ready", "false");

    await page.locator("#faq").scrollIntoViewIfNeeded();
    await expect(hero).toHaveAttribute("data-reveal-ready", "true");

    await hero.scrollIntoViewIfNeeded();
    await expect(hero).toHaveAttribute("data-reveal-state", "visible");
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npx playwright test tests/e2e/homepage-scroll-reveal.spec.ts`

Expected: FAIL because `data-reveal-state` / `data-reveal-ready` are not implemented yet.

**Step 3: Write minimal implementation**

Do not implement full styling yet. Add only the minimum DOM state hooks required for the tests to become meaningful in later tasks.

**Step 4: Run test to verify it still fails for the right reason**

Run: `npx playwright test tests/e2e/homepage-scroll-reveal.spec.ts`

Expected: FAIL on missing observer behavior, not on invalid selectors or wrong route.

**Step 5: Commit**

```bash
git add tests/e2e/homepage-scroll-reveal.spec.ts
git commit -m "test: define homepage scroll reveal scenarios"
```

### Task 2: Dodati reusable reveal wrapper za sekcije ispod heroja

**Files:**
- Create: `src/components/home-v2/ScrollReveal.tsx`
- Modify: `src/components/home-v2/HomeV2Page.tsx`
- Test: `tests/e2e/homepage-scroll-reveal.spec.ts`

**Step 1: Write the failing test**

Prosiriti ili potvrditi postojeci prvi scenarij tako da cilja tocno sekciju `#what-we-do` i njeno stanje nakon scrolla do `#final-cta`.

```ts
await expect(page.locator("#what-we-do")).toHaveAttribute("data-reveal-state", "hidden");
await page.locator("#what-we-do").scrollIntoViewIfNeeded();
await expect(page.locator("#what-we-do")).toHaveAttribute("data-reveal-state", "visible");
```

**Step 2: Run test to verify it fails**

Run: `npx playwright test tests/e2e/homepage-scroll-reveal.spec.ts --grep "sekcija ispod heroja"`

Expected: FAIL because sections are not wrapped with reveal logic.

**Step 3: Write minimal implementation**

Implementirati `ScrollReveal.tsx` kao client component:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
};

export function ScrollReveal({
  as: Tag = "section",
  children,
  className,
  id,
  threshold = 0.24,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={className}
      data-reveal="section"
      data-reveal-state={isVisible ? "visible" : "hidden"}
    >
      {children}
    </Tag>
  );
}
```

Zatim u `HomeV2Page.tsx` omotati sve ciljane sekcije ispod heroja ovim wrapperom bez mijenjanja sadrzaja.

**Step 4: Run test to verify it passes**

Run: `npx playwright test tests/e2e/homepage-scroll-reveal.spec.ts --grep "sekcija ispod heroja"`

Expected: PASS for section state changes.

**Step 5: Commit**

```bash
git add src/components/home-v2/ScrollReveal.tsx src/components/home-v2/HomeV2Page.tsx tests/e2e/homepage-scroll-reveal.spec.ts
git commit -m "feat: add section scroll reveal wrapper"
```

### Task 3: Implementirati hero povratni reveal bez animacije na prvom loadu

**Files:**
- Modify: `src/components/home-v2/HomeV2Page.tsx`
- Modify: `src/components/home-v2/ScrollReveal.tsx`
- Test: `tests/e2e/homepage-scroll-reveal.spec.ts`

**Step 1: Write the failing test**

Osigurati da drugi scenarij eksplicitno provjerava:

```ts
const hero = page.locator("#hero");
await expect(hero).toHaveAttribute("data-reveal-state", "visible");
await expect(hero).toHaveAttribute("data-reveal-ready", "false");
await page.locator("#faq").scrollIntoViewIfNeeded();
await expect(hero).toHaveAttribute("data-reveal-ready", "true");
await hero.scrollIntoViewIfNeeded();
await expect(hero).toHaveAttribute("data-reveal-state", "visible");
```

**Step 2: Run test to verify it fails**

Run: `npx playwright test tests/e2e/homepage-scroll-reveal.spec.ts --grep "hero je odmah vidljiv"`

Expected: FAIL because hero-specific reveal lifecycle is not implemented.

**Step 3: Write minimal implementation**

U `HomeV2Page.tsx` dodati hero observer state:

- `hasLeftHeroViewport`
- `heroVisible`

Minimalni shape:

```tsx
const [hasLeftHeroViewport, setHasLeftHeroViewport] = useState(false);
const [heroVisible, setHeroVisible] = useState(true);
```

Observer logika:

- prvi load: `heroVisible = true`
- kada hero vise nije intersecting: `hasLeftHeroViewport = true`, `heroVisible = false`
- kada hero ponovno postane intersecting i `hasLeftHeroViewport === true`: `heroVisible = true`

Na hero `section` dodati:

```tsx
data-reveal="hero"
data-reveal-ready={hasLeftHeroViewport ? "true" : "false"}
data-reveal-state={heroVisible ? "visible" : "hidden"}
```

**Step 4: Run test to verify it passes**

Run: `npx playwright test tests/e2e/homepage-scroll-reveal.spec.ts --grep "hero je odmah vidljiv"`

Expected: PASS for hero initial visibility and return reveal behavior.

**Step 5: Commit**

```bash
git add src/components/home-v2/HomeV2Page.tsx src/components/home-v2/ScrollReveal.tsx tests/e2e/homepage-scroll-reveal.spec.ts
git commit -m "feat: add hero return reveal behavior"
```

### Task 4: Dodati produkcijske stilove animacije i reduced-motion fallback

**Files:**
- Modify: `src/components/home-v2/home-v2.module.css`
- Modify: `src/components/home-v2/HomeV2Page.tsx`
- Modify: `src/components/home-v2/ScrollReveal.tsx`
- Test: `tests/e2e/homepage-scroll-reveal.spec.ts`

**Step 1: Write the failing test**

Ako treba, dopuniti test da cilja finalne atribute, ne CSS klase:

```ts
await expect(page.locator("#what-we-do")).toHaveAttribute("data-reveal-state", "visible");
await expect(page.locator("#hero")).toHaveAttribute("data-reveal-ready", "true");
```

**Step 2: Run test to verify it fails if styling wiring breaks DOM state**

Run: `npx playwright test tests/e2e/homepage-scroll-reveal.spec.ts`

Expected: PASS on existing behavior before CSS changes, or FAIL only if attribute wiring was disturbed.

**Step 3: Write minimal implementation**

U `home-v2.module.css` dodati stilove poput:

```css
.revealBlock {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 420ms ease,
    transform 420ms ease;
  will-change: opacity, transform;
}

.revealBlock[data-reveal-state="visible"] {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .revealBlock,
  .revealBlock[data-reveal-state="visible"] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

Primijeniti klasu na sekcije ispod heroja i na hero sekciju samo za povratni reveal, bez uvodenja skrivenog stanja na prvom loadu.

**Step 4: Run test to verify it passes**

Run: `npx playwright test tests/e2e/homepage-scroll-reveal.spec.ts`

Expected: PASS and visual behavior should now match spec in browser.

**Step 5: Commit**

```bash
git add src/components/home-v2/home-v2.module.css src/components/home-v2/HomeV2Page.tsx src/components/home-v2/ScrollReveal.tsx tests/e2e/homepage-scroll-reveal.spec.ts
git commit -m "feat: style homepage scroll reveal states"
```

### Task 5: Provesti regresijsku validaciju naslovnice i navigacije

**Files:**
- Test: `tests/e2e/homepage-v2.spec.ts`
- Test: `tests/e2e/navigation-smoke.spec.ts`
- Test: `tests/e2e/homepage-scroll-reveal.spec.ts`

**Step 1: Write the failing test**

Nema novih failing testova; ovo je regresijska validacija nakon implementacije.

**Step 2: Run test to verify current status**

Run: `npx playwright test tests/e2e/homepage-v2.spec.ts tests/e2e/navigation-smoke.spec.ts tests/e2e/homepage-scroll-reveal.spec.ts`

Expected: PASS. Any failure here is a regression introduced by reveal wiring.

**Step 3: Write minimal implementation**

Ako se pojavi regresija:

- prilagoditi threshold observera,
- ispraviti wrapper markup da ne razbije semantiku sekcija,
- zadrzati postojece headinge, CTA-ove i `id` anchor tocke.

**Step 4: Run test to verify it passes**

Run: `npx playwright test tests/e2e/homepage-v2.spec.ts tests/e2e/navigation-smoke.spec.ts tests/e2e/homepage-scroll-reveal.spec.ts`

Expected: PASS on all three spec datoteke.

**Step 5: Commit**

```bash
git add src/components/home-v2/HomeV2Page.tsx src/components/home-v2/ScrollReveal.tsx src/components/home-v2/home-v2.module.css tests/e2e/homepage-scroll-reveal.spec.ts
git commit -m "test: verify homepage scroll reveal regression coverage"
```
