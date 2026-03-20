---
name: pokretanje-appa
description: Use when starting, restarting, or validating local runtime of this Next.js website app in development or production-like mode.
---

# Pokretanje Appa

## Overview

Ovaj skill standardizira kako lokalno pokrenuti web app, provjeriti da radi i brzo dijagnosticirati probleme pokretanja.

## Brzi Start (Development)

```bash
npm install
npm run dev
```

- App se pokrece na `http://localhost:9002` (`next dev --turbopack -p 9002`).
- Nakon dizanja servera otvori `/`, `/kontakt` i jednu dodatnu rutu koja je dirana u trenutnoj sesiji.
- Prije novog `npm run dev` obavezno provjeri postoji li vec proces na `9002`; ako postoji, ugasi ga prije restarta umjesto da pokreces drugi dev server preko njega.

## Production-like Provjera

```bash
npm run build
npm run start
```

- Koristi ovo kada treba potvrditi da izmjene prolaze i u build modu, ne samo u dev modu.
- Nemoj paralelno vrtjeti `next dev` i `next build` nad istim workspaceom ako koriste isti `.next/` direktorij; to moze proizvesti lazne `ENOENT`, manifest i runtime greske.

## Obavezne Provjere Nakon Pokretanja

1. Server stvarno slusa na `9002`.
2. Nema runtime gresaka u terminalu pri ucitavanju kljucnih ruta.
3. Za izmjene u sesiji otvori relevantne stranice i potvrdi da UI renderira bez error overlaya.

## Ako App Ne Krene

1. Provjeri dependencies:
```bash
npm install
```
2. Provjeri zauzet port:
```bash
lsof -i :9002
```
3. Ako je port zauzet, ugasi stari proces pa tek onda ponovno pokreni `npm run dev`:
```bash
kill <PID>
```
4. Ako build puca, pokreni:
```bash
npm run typecheck
npm run build
```
5. Ako se pojave `ENOENT` greske unutar `.next/` tijekom razvoja, provjeri nije li netko upravo paralelno pokrenuo `build`, `start` ili drugi `dev` proces nad istim repozitorijem.

## Povezanost s E2E Testovima

Nakon pokretanja i provjere dostupnosti aplikacije, za validaciju funkcionalnih izmjena pokreni:

```bash
npm run e2e
```

Ako je izmjena uska, dozvoljen je i ciljani run pojedinog Playwright speca.
