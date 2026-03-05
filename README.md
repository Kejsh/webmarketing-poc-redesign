# WEB Marketing - Next.js static website

Nova verzija marketinškog web sajta za WEB Marketing (`webmarketing.hr` kontekst), izrađena u Next.js App Router arhitekturi s fokusom na:

- performanse
- SEO
- pristupačnost
- jednostavno održavanje
- statičku isporuku (GitHub Pages kompatibilno)

## Tehnologije

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Playwright (E2E testovi)

## Lokalni razvoj

### 1) Instalacija

```bash
npm install
```

### 2) Dev server

```bash
npm run dev
```

App je dostupan na:

- `http://localhost:9002`

### 3) Produkcijski static build (lokalna provjera)

```bash
npm run build
```

Nakon builda, statički export je u direktoriju:

- `out/`

## Skripte

- `npm run dev` - lokalni razvoj (port `9002`)
- `npm run build` - produkcijski static build + export
- `npm run start` - start Next servera (korisno za non-static scenarije)
- `npm run typecheck` - TypeScript provjera
- `npm run lint` - lint (trenutno zahtijeva migraciju na ESLint CLI)
- `npm run e2e` - Playwright testovi (headless)
- `npm run e2e:headed` - Playwright testovi u browser modu
- `npm run e2e:ui` - Playwright UI runner

## E2E testiranje

Playwright testovi su u:

- `tests/e2e/`

Pokretanje:

```bash
npm run e2e
```

Za debug:

```bash
npm run e2e:headed
```

## GitHub Pages deployment (`gh-pages` branch)

Projekt je podešen za static export i deploy na `gh-pages` branch preko GitHub Actions.

Workflow:

- file: `.github/workflows/deploy-gh-pages.yml`
- trigger: `push` na `main` + ručni `workflow_dispatch`
- build output: `out/`
- publish branch: `gh-pages`

### Potrebne GitHub postavke

U repozitoriju:

1. `Settings -> Pages`
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** (`/ root`)

Nakon prvog uspješnog workflow runa, Pages URL će biti aktivan.

## Struktura projekta (sažetak)

- `src/app/` - rute i stranice
- `src/components/` - reusable UI i layout komponente
- `src/config/` - centralni config (npr. navigacija)
- `tests/e2e/` - Playwright E2E testovi
- `.llm/` - projektni AI kontekst i lokalni skillovi

## Napomena o static modu

Repo je konfiguriran za `output: "export"` kako bi se site mogao isporučiti kao čisti statički bundle na GitHub Pages.
