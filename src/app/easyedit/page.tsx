import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ModuleRecommender } from "@/components/ai/ModuleRecommender";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Zap, 
  Search, 
  Globe, 
  Database, 
  Puzzle, 
  ArrowRight, 
  Lock, 
  Cpu, 
  CheckCircle2,
  Settings,
  Terminal
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EasyEdit CMS | WEB Marketing",
  description:
    "EasyEdit CMS je zasebna platforma za stabilne, sigurne i skalabilne web projekte.",
};

const CORE_PILLARS = [
  {
    title: "Vlastita arhitektura",
    desc: "EasyEdit nije fork niti modifikacija postojećih sustava. To je 25 godina inženjerskog razvoja usmjerenog na stabilnost.",
    icon: Cpu
  },
  {
    title: "Sigurnost zatvorenog koda",
    desc: "Eliminiramo 99% uobičajenih vektora napada karakterističnih za open-source platforme kroz kontrolirani stack.",
    icon: Lock
  },
  {
    title: "Vrhunske performanse",
    desc: "Bez bloatwarea i nepotrebnih pluginova. Svaka linija koda je optimizirana za Core Web Vitals i brzinu.",
    icon: Zap
  }
];

export default function EasyEditPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Tehnologija / EasyEdit CMS
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Tehnologija <span className="text-primary">slobode.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Vlastita platforma razvijana za stabilne, sigurne i skalabilne digitalne projekte. Oslobodite se ograničenja generičkih sustava i preuzmite potpunu kontrolu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10 shadow-xl shadow-primary/20" asChild>
                <Link href="#demo">Zatraži demo sustava</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/easyedit/moduli">Katalog modula</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Technical Core Pillars */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black">
              {CORE_PILLARS.map((pillar, idx) => (
                <div key={idx} className="bg-white p-12 space-y-6">
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dual Track Value Proposition */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              
              {/* Marketing Track */}
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-2">
                    <Settings className="w-3 h-3" /> Za Marketing timove
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter italic leading-none">
                    Upravljanje bez <span className="text-accent">trenja.</span>
                  </h2>
                  <p className="text-muted-foreground font-medium">Sučelje razvijeno prema potrebama modernih urednika sadržaja, bez tehničkog balasta.</p>
                </div>
                
                <ul className="space-y-6">
                  {[
                    { title: "Drag-and-drop sučelje", desc: "Intuitivna organizacija elemenata bez potrebe za programerom." },
                    { title: "Advanced SEO Manager", desc: "Kontrola nad meta tagovima, URL-ovima i schemom na razini koda." },
                    { title: "Multi-language podrška", desc: "Jednostavno upravljanje s više od 20+ jezika unutar jednog sučelja." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <h4 className="font-bold uppercase text-sm tracking-tight">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IT/Engineering Track */}
              <div className="space-y-12 bg-black text-white p-12 lg:p-16 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl" />
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> Za IT & CTO timove
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter italic leading-none">
                    Inženjerska <span className="text-primary">kontrola.</span>
                  </h2>
                  <p className="text-white/40 font-medium">Arhitektura spremna za enterprise integracije i stroge sigurnosne protokole.</p>
                </div>

                <div className="space-y-8">
                  {[
                    { title: "Resilient API Engine", desc: "Robustni endpointovi za sigurnu komunikaciju s ERP i CRM sustavima." },
                    { title: "Custom Logic Hooks", desc: "Mogućnost pisanja specifičnih poslovnih pravila izravno u Core." },
                    { title: "ISO 27001 Readiness", desc: "Arhitektura usklađena s najvišim sigurnosnim standardima industrije." }
                  ].map((item, i) => (
                    <div key={i} className="border-l-2 border-primary/30 pl-6">
                      <h4 className="font-bold uppercase text-sm tracking-tight text-primary">{item.title}</h4>
                      <p className="text-xs text-white/40">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* AI Tool Integration */}
        <section id="recommender" className="py-24 bg-slate-50 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic">
                Modularni <span className="text-secondary">Ekosustav.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                EasyEdit CMS raste s vama. Odaberite iz kataloga od 30+ modula ili zatražite razvoj potpuno novog rješenja.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ModuleRecommender />
            </div>
          </div>
        </section>

        {/* FAQ - Quick Technical Questions */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">Česta pitanja o platformi</h2>
            </div>
            <Accordion type="single" collapsible className="w-full border-t border-black">
              {[
                { 
                  q: "Zašto odabrati EasyEdit umjesto WordPressa ili drugog open-source sustava?", 
                  a: "EasyEdit nudi zatvoreni kod koji drastično smanjuje rizik od hakiranja i malwarea. Također, nema nepotrebnih pluginova koji usporavaju sustav, što rezultira vrhunskim performansama (90+ na Core Web Vitals)." 
                },
                { 
                  q: "Može li se EasyEdit integrirati s mojim postojećim SAP ili Navision ERP-om?", 
                  a: "Apsolutno. EasyEdit posjeduje nativni Integration Engine koji upravlja transformacijom podataka i sinkronizacijom u realnom vremenu s bilo kojim enterprise ERP sustavom." 
                },
                { 
                  q: "Tko posjeduje podatke i licencu?", 
                  a: "Klijent je vlasnik svih podataka unutar baze. Licenca se izdaje na projektnoj bazi s mogućnošću dugoročnog SLA održavanja i podrške." 
                }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-black">
                  <AccordionTrigger className="text-left font-black uppercase tracking-tight hover:text-primary transition-colors py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-medium text-lg leading-relaxed pb-8">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Live Demo CTA */}
        <section id="demo" className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="bg-black p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 italic leading-none">
                  Vidite snagu <span className="text-primary">uživo.</span>
                </h2>
                <p className="text-white/60 text-lg font-medium">
                  Zakažite termin za tehničku demonstraciju EasyEdit platforme. Pokazat ćemo vam back-office, brzinu rada i opcije prilagodbe.
                </p>
              </div>
              <div className="relative z-10">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <Link href="/kontakt">Zakaži termin za demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
