import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const FAQ_CATEGORIES = [
  {
    title: "Tehnologija & EasyEdit CMS",
    questions: [
      {
        q: "Što se događa ako WEB Marketing prestane s radom? Je li kod zaključan?",
        a: "Ne. Iako je EasyEdit CMS vlasnička platforma, naši ugovori predviđaju escrow klauzule ili isporuku izvornog koda u slučaju prestanka rada tvrtke. Vaša investicija je zaštićena."
      },
      {
        q: "Mogu li samostalno mijenjati dizajn weba unutar CMS-a?",
        a: "Da. EasyEdit koristi modularni sustav predložaka koji omogućuje urednicima da preslaguju elemente stranice, mijenjaju vizuale i sadržaj bez programerske pomoći."
      },
      {
        q: "Podržava li platforma integraciju s bilo kojim ERP sustavom?",
        a: "U pravilu da. Ako vaš ERP ima dostupan API (REST, SOAP) ili omogućuje razmjenu datoteka (XML, CSV), naš Integration Engine može uspostaviti sinkronizaciju."
      }
    ]
  },
  {
    title: "Sigurnost & Podaci",
    questions: [
      {
        q: "Gdje se čuvaju podaci i tko je vlasnik?",
        a: "Klijent je 100% vlasnik svih unesenih podataka i baze. Hosting može biti na našoj hardened infrastrukturi, vašem privatnom cloudu ili on-premise serverima."
      },
      {
        q: "Koliko često radite sigurnosne zakrpe?",
        a: "Budući da se radi o zatvorenom kodu, ranjivosti su drastično rjeđe nego kod open-source sustava. Ipak, sigurnosni auditi i proaktivne nadogradnje se rade na mjesečnoj bazi za sve klijente pod SLA podrškom."
      }
    ]
  },
  {
    title: "Proces & Suradnja",
    questions: [
      {
        q: "Koliko traje prosječan projekt izrade custom platforme?",
        a: "Ovisno o kompleksnosti, od 3 do 9 mjeseci. Koristimo Agile/Scrum metodologiju, što znači da prve funkcionalne module vidite i testirate već nakon prvih nekoliko tjedana."
      },
      {
        q: "Koja je moja uloga kao klijenta tijekom razvoja?",
        a: "Vi ste 'Product Owner'. Sudjelujete u definiranju zahtjeva na početku i testiranju isporuka na kraju svakog sprinta. Vaš feedback usmjerava razvoj."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Resursi / Knowledge Base
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Pitanja i <span className="text-primary">odgovori.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl">
              Transparentno o tehnologiji, procesima i sigurnosti. Ako ne pronađete odgovor, naši inženjeri su vam na raspolaganju.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar / Navigation */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-slate-50 border-2 border-black sticky top-32">
                <HelpCircle className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Trebate brzi odgovor?</h3>
                <p className="text-sm text-muted-foreground mb-8 font-medium">Pošaljite nam specifično pitanje vezano uz vaš projekt i odgovorit ćemo vam unutar 24h.</p>
                <Button className="w-full rounded-none font-black uppercase tracking-widest text-xs h-12" asChild>
                  <Link href="/kontakt">Postavi pitanje</Link>
                </Button>
              </div>
            </div>

            {/* Accordions */}
            <div className="lg:col-span-8 space-y-16">
              {FAQ_CATEGORIES.map((cat, cidx) => (
                <div key={cidx} className="space-y-8">
                  <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b-2 border-black pb-4">
                    {cat.title}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {cat.questions.map((item, qidx) => (
                      <AccordionItem key={qidx} value={`item-${cidx}-${qidx}`} className="border-b border-black/10">
                        <AccordionTrigger className="text-left font-black uppercase tracking-tight hover:text-primary transition-colors py-6 text-lg">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-medium text-lg leading-relaxed pb-8">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 container mx-auto px-4">
          <div className="bg-primary p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic leading-none">
                Još uvijek niste <span className="text-black">sigurni?</span>
              </h2>
              <p className="text-white/80 text-xl font-medium">
                Dogovorite termin za tehničke konzultacije. Bez obveze, razgovarat ćete s inženjerom, a ne s prodajnim agentom.
              </p>
            </div>
            <div className="relative z-10">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                <Link href="/kontakt">Zakaži razgovor <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
