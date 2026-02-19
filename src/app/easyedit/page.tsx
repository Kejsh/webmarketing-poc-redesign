
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ModuleRecommender } from "@/components/ai/ModuleRecommender";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Search, Globe, Database, Puzzle } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  {
    title: "Core & Sadržaj",
    modules: ["CMS Core", "Blog & Novosti", "Galerije slika i videa", "Upravljanje dokumentima"],
    icon: Database,
  },
  {
    title: "E-commerce",
    modules: ["Web Shop Core", "Sustav popusta i kupona", "Upravljanje zalihama", "Recenzije proizvoda"],
    icon: Zap,
  },
  {
    title: "Integracije",
    modules: ["ERP Connector", "Payment Gateway Suite", "CRM Lite", "API Integration Engine"],
    icon: Puzzle,
  },
  {
    title: "Marketing & SEO",
    modules: ["Advanced SEO Manager", "A/B Testing Module", "Newsletter Integration", "Analytics & Reporting"],
    icon: Search,
  },
];

export default function EasyEditPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        {/* Intro */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-8">
              EasyEdit CMS: Platforma bez kompromisa
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Zaboravite na ograničenja generičkih sustava. EasyEdit je naša vlastita platforma razvijana 25 godina s jednim ciljem: osigurati potpunu stabilnost, maksimalnu sigurnost i neograničenu skalabilnost vašeg digitalnog poslovanja.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-slate-50 py-20 mb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold text-primary">Preko 30 specijaliziranih modula</h2>
              <p className="text-muted-foreground mt-2">Modularna arhitektura koja se prilagođava vašim potrebama.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm">
                  <cat.icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="font-bold text-lg mb-4">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.modules.map((mod, midx) => (
                      <li key={midx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {mod}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tool */}
        <section id="recommender" className="container mx-auto px-4 mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Ne znate što vam točno treba?</h2>
              <p className="text-muted-foreground">Iskoristite naš AI alat za preporuku modula temeljen na vašim poslovnim ciljevima.</p>
            </div>
            <ModuleRecommender />
          </div>
        </section>

        {/* Dual Track FAQ */}
        <section className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                <Globe className="w-5 h-5 text-accent" /> Za Marketing Timove
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Kako EasyEdit pomaže kod SEO-a?</AccordionTrigger>
                  <AccordionContent>
                    EasyEdit ima integrirane SEO kontrole na Core razini. Automatski generira optimizirane URL-ove, omogućuje potpunu kontrolu nad meta tagovima i osigurava visoke Core Web Vitals ocjene.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Je li sučelje jednostavno za korištenje?</AccordionTrigger>
                  <AccordionContent>
                    Apsolutno. Razvijeno je s fokusom na urednike sadržaja. Drag-and-drop sučelje, WYSIWYG editori i brzina rada su prioriteti.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                <Shield className="w-5 h-5 text-accent" /> Za IT Timove
              </h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Sigurnost zatvorenog koda?</AccordionTrigger>
                  <AccordionContent>
                    Za razliku od open-source sustava, EasyEditov izvorni kod nije javno dostupan, što drastično smanjuje površinu napada. Redovito provodimo sigurnosne audite i hardening.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Mogućnosti integracije?</AccordionTrigger>
                  <AccordionContent>
                    Platforma ima robustan API engine i pre-built konektore za SAP, Microsoft Dynamics, Navision i ostale enterprise ERP sustave.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section id="demo" className="mt-24 container mx-auto px-4">
          <div className="bg-primary text-white p-16 rounded-3xl text-center">
            <h2 className="text-3xl font-headline font-bold mb-6">Zatražite demonstraciju uživo</h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto">
              Pokazat ćemo vam kako EasyEdit funkcionira u praksi i kako se može prilagoditi vašim specifičnim zahtjevima.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold" asChild>
              <Link href="/kontakt">Zakažite termin</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
