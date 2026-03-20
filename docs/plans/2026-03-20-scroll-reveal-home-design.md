# Scroll Reveal Na Naslovnici Design

**Datum:** 2026-03-20
**Status:** Potvrdeno s korisnikom

## Cilj

Dodati jednostavnu scroll animaciju na naslovnicu tako da veci blokovi ispod hero sekcije blago ulaze odozdo uz fade in kada udju u viewport, a pri izlasku iz viewporta vracaju se u fade out stanje. Hero ne smije imati animaciju na prvom ucitavanju, ali pri povratku prema vrhu nakon prethodnog scrollanja treba odraditi isti lagani reveal.

## Odabrani pristup

Koristiti `IntersectionObserver` bez novih runtime ovisnosti. Ovo je najpragmaticniji pristup za ovaj Next.js projekt jer:

- radi pouzdano na mobilnim uredajima i desktopu,
- ne povecava bundle nepotrebnom animacijskom bibliotekom,
- daje jednostavan i testabilan signal stanja kroz `data-*` atribute ili klase,
- odgovara static-first smjeru projekta.

## Opseg

Scroll reveal se primjenjuje na vece blokove naslovnice ispod hero sekcije:

- `#what-we-do`
- `#client-triggers`
- `#featured-projects`
- `#how-we-work`
- `#easyedit-cms`
- `#trust-proof`
- `#faq`
- `#blog`
- `#ask-ai`
- `#final-cta`

Hero ostaje izvan opceg reveal wrappera.

## Ponasanje

### Blokovi ispod hero sekcije

- Pocetno stanje: `opacity: 0` i blagi `translateY`.
- Kada blok dovoljno ude u viewport: prijelaz u vidljivo stanje (`opacity: 1`, `translateY(0)`).
- Kada blok izade iz viewporta: vraca se u skriveno stanje.
- Efekt mora raditi i pri scrollanju dolje i pri vracanju gore.

### Hero sekcija

- Na prvom loadu hero je odmah vidljiv.
- Nakon sto korisnik jednom napusti hero zonu, hero postaje spreman za povratni reveal.
- Kada se korisnik vrati prema vrhu i hero ponovno ulazi u viewport s gornje strane, hero content odraduje lagani fade in i scroll-up settle.

## UX ogranicenja

- Animacija mora ostati suptilna: kratko trajanje, bez scale efekta i bez parallaxa.
- Efekt ne smije narusiti citljivost ni percepciju performansi.
- `prefers-reduced-motion` mora ugasiti ili znacajno ublaziti transform/opacity prijelaze.

## Tehnicka struktura

- Dodati mali client component wrapper, npr. `ScrollReveal`, za sekcije ispod hero bloka.
- Wrapper iznosi stanje kroz `data-reveal-state="hidden|visible"` i opcionalno `data-reveal-ready`.
- Hero dobiva zaseban observer flow kako bi se razlikovao prvi load od povratnog reveala.
- Stilovi ostaju u `src/components/home-v2/home-v2.module.css` da se vizualni jezik naslovnice ne rasprsuje po globalnim stilovima.

## Test strategija

E2E validacija ide preko mjerljivih DOM stanja, ne preko screenshot diffova:

- reprezentativna sekcija ispod heroja mijenja stanje iz `hidden` u `visible` kada ude u viewport,
- ista sekcija se vraca u `hidden` kada izade iz viewporta,
- hero nema skriveno stanje na prvom loadu,
- hero dobiva povratni reveal tek nakon scrollanja dolje pa nazad gore.

Ovo testiranje je dovoljno strogo za ponasanje, a manje krhko od provjere konkretnih frameova animacije.
