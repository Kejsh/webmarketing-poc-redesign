---
name: testiranje-izmjena
description: Use when implementing or reviewing code changes that must be validated with relevant Playwright end-to-end tests before completion.
---

# Testiranje Izmjena

## Overview

Ovaj skill definira obavezni E2E workflow: svaka izmjena u chatu mora imati odgovarajuce Playwright testove (novi ili izmijenjeni), a testovi se moraju pokrenuti prije tvrdnje da je posao gotov.

## Obavezni Koraci

1. Identificiraj sto je mijenjano (`git diff --name-only`) i koje korisnicke tokove to dira.
2. Mapiraj svaku bitnu izmjenu na test:
   - postojeći test za izmjenu,
   - novi test ako pokrivenost ne postoji.
3. Implementiraj testove u `tests/e2e/` s jasnim nazivom scenarija.
4. Pokreni minimalno relevantni subset testova.
5. Ako je promjena siroka (layout, navigacija, routing, forme), pokreni cijeli `npm run e2e`.
6. Tek nakon prolaza testova potvrdi dovrsetak zadatka.

## Pravila Pisanja Testova

- Testovi moraju provjeravati korisnicki vidljiv ishod (URL, naslov, vidljiv CTA, poruka, stanje forme).
- Ne testirati interne implementacijske detalje.
- Koristi stabilne selektore (`getByRole`, `getByLabel`, `getByText`), izbjegavati krhke CSS selektore kad nije nuzno.
- Jedan test = jedan scenarij s jasnim nazivom.
- Za nove rute obavezno provjeri:
  - otvaranje stranice,
  - ispravni title ili kljucni heading,
  - barem jedan primarni CTA/link.

## Komande

```bash
# svi e2e testovi
npm run e2e

# pojedinacni spec
npx playwright test tests/e2e/<file>.spec.ts

# headed mod (debug)
npm run e2e:headed
```

## Zavrsni Izvjestaj U Chatu

Prije finalnog odgovora navedi:

1. koje testove si dodao/izmijenio,
2. koju komandu si pokrenuo,
3. jesu li testovi prosli ili gdje je pad.

Ako testovi nisu pokrenuti ili su blokirani, to mora biti eksplicitno navedeno i ne smije se tvrditi da je izmjena validirana.
