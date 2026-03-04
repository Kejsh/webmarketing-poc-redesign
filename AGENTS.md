# AGENTS.md

## Projektni kontekst
- Projekt: nova verzija statičkog web sajta za web agenciju u Hrvatskoj (`webmarketing.hr` kontekst).
- Primarni cilj: marketinški sajt koji jasno prodaje usluge, gradi povjerenje i generira upite.
- Jezik sadržaja: hrvatski kao zadani; engleski samo ako je eksplicitno tražen.

## Tehnički okvir
- Kodna baza je Next.js (App Router), ali sve funkcionalnosti trebaju biti kompatibilne sa statičkim web pristupom.
- Prioritet: performanse, SEO, pristupačnost i jednostavno održavanje.
- Izbjegavati nepotreban backend i kompleksne runtime ovisnosti ako nisu nužne za javne stranice.

## Pravila rada za Codex
- Prije izmjena prvo pročitaj postojeći kontekst:
  - `docs/blueprint.md`
  - `.llm/input-knowledge/*`
- Sve veće odluke napravi kao male, provjerljive korake (mali diffovi, jasan razlog promjene).
- Ne mijenjaj postojeći ton brenda bez razloga; predlaži promjene kroz konkretan diff.
- Zadrži strukturu URL-ova i nazivlje sekcija konzistentno na hrvatskom.
- Kod i sadržaj moraju biti spremni za produkciju: bez placeholder teksta tipa "Lorem ipsum".

## Definicija dovršenosti (Definition of Done)
- Stranica je responzivna i stabilna na mobilnom i desktop prikazu.
- SEO osnove su postavljene (title, description, semantički headingi, interne poveznice).
- Tekstovi imaju jasan CTA i poslovni ton primjeren hrvatskom tržištu.
- Nema očitih regresija u postojećim komponentama i rutama.

## Struktura radnih mapa (`.llm`)
- `.llm/input-knowledge/` postojeći ulazni materijali i razgovori.
- `.llm/brand/` brand smjernice (ton, poruke, vizualna pravila).
- `.llm/briefs/` kratki briefovi po tasku/stranici.
- `.llm/page-specs/` specifikacije po pojedinoj stranici.
- `.llm/content-plan/` plan sadržaja i informacijska arhitektura.
- `.llm/tasks/` task breakdown i status zapisi.
- `.llm/reviews/` bilješke nakon reviewa i QA provjere.
- `.llm/output-copy/` finalne copy verzije spremne za implementaciju.
- `.llm/output-seo/` SEO nacrti (meta, schema, keyword mapping).
- `.llm/research/` istraživanje konkurencije i tržišta.
- `.llm/prompts/` reusable promptovi za ponovljive zadatke.
- `.llm/assets/` reference za assete (opis i plan upotrebe).

## Operativni workflow
1. Učitaj kontekst iz `docs/blueprint.md` i `.llm/input-knowledge/`.
2. Definiraj mini-brief u `.llm/briefs/` prije većih izmjena.
3. Napravi implementaciju u malim koracima.
4. Zapiši rezultat i otvorene točke u `.llm/reviews/`.

## Napomena
- Ako zahtjev korisnika kolidira s ovim pravilima, prioritet ima eksplicitni korisnički zahtjev.
