import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  RefreshCw, 
  Database, 
  Zap, 
  ArrowRight,
  Code2,
  ShieldCheck,
  Link2,
  Cpu,
  Workflow
} from "lucide-react";
import Link from "next/link";

const INTEGRATION_CATEGORIES = [
  {
    title: "ERP Sustavi",
    desc: "Potpuna sinkronizacija artikala, zaliha, cijena i narudžbi.",
    systems: ["SAP", "Microsoft Dynamics", "Navision", "Pantheon", "Datalab"],
    icon: Database
  },
  {
    title: "CRM & Sales",
    desc: "Povezivanje leadova i prodajnih tokova s vašim prodajnim timom.",
    systems: ["Salesforce", "HubSpot", "Pipedrive", "Zendesk", "Custom CRM"],
    icon: Share2
  },
  {
    title: "Payment Gateways",
    desc: "Sigurna obrada transakcija putem vodećih pružatelja usluga.",
    systems: ["CorvusPay", "Stripe", "PayPal", "WSPay", "Braintree"],
    icon: Zap
  },
  {
    title: "Logistika & Dostava",
    desc: "Automatizacija generiranja naloga za isporuku i trackinga.",
    systems: ["GLS", "DPD", "DHL", "Hrvatska Pošta", "BoxNow"],
    icon: Workflow
  }
];

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Rješenja / Sistemske Integracije
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Besprekidna <span className="text-primary">sinergija podataka.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Vaše poslovanje je mreža sustava. Mi osiguravamo da oni govore istim jezikom kroz robusne integracijske tokove temeljene na EasyEdit Integration Engine-u.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10 shadow-xl shadow-primary/20" asChild>
                <Link href="/kontakt">Zakaži tech konzultacije</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt?type=brief">Pošalji tehnički brief</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Integration Engine Deep Dive */}
        <section className="bg-black text-white py-24 border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-10 italic leading-none">
                  EasyEdit <span className="text-primary">Integration Engine.</span>
                </h2>
                <p className="text-white/60 mb-12 text-lg font-medium leading-relaxed">
                  Više od pukog API poziva. Naš engine služi kao inteligentni middleware koji upravlja transformacijom podataka, queueingom i error handlingom.
                </p>
                <div className="space-y-8">
                  {[
                    { 
                      title: "Real-time Sync", 
                      desc: "Trenutna sinkronizacija kroz Webhook arhitekturu bez kašnjenja.",
                      icon: Zap 
                    },
                    { 
                      title: "Data Transformation", 
                      desc: "Inteligentno mapiranje polja između heterogenih baza podataka (XML, JSON, SOAP).",
                      icon: Code2 
                    },
                    { 
                      title: "Resilient Queueing", 
                      desc: "Sustav nastavlja s radom i kod privremenih ispada vanjskih servisa.",
                      icon: RefreshCw 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-tight text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-white/40 leading-tight">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-primary/5 border-2 border-primary/20 p-8 lg:p-16 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  <Cpu className="w-20 h-20 text-primary mb-8 animate-pulse" />
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Eliminirajte ručni unos.</h3>
                  <p className="text-lg text-white/70 font-medium mb-8">
                    Automatizacijom prijenosa podataka između ERP-a i web platforme smanjujemo ljudsku pogrešku na nulu i štedimo stotine radnih sati mjesečno.
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-8">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                    <span className="text-xs font-black uppercase tracking-widest text-white/50">ISO 27001 Ready Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Catalog */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic">Što sve <span className="text-primary">povezujemo?</span></h2>
              <p className="text-xl text-muted-foreground font-medium">
                Naša lista podržanih sustava stalno raste. Ako sustav ima API ili bazu podataka, možemo ga integrirati.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-2 border-black">
              {INTEGRATION_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="bg-white p-12 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-black flex items-center justify-center">
                      <cat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <Link2 className="w-6 h-6 text-black/10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-8 leading-tight">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.systems.map((sys, sidx) => (
                      <span key={sidx} className="px-3 py-1 bg-muted text-[10px] font-black uppercase tracking-widest text-black/60 border border-black/5">
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Flow */}
        <section className="py-24 bg-slate-50 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-6 italic">Inženjerski <span className="text-primary">pristup.</span></h2>
              <p className="text-lg text-muted-foreground font-medium">
                Integracijama pristupamo kao kritičnom dijelu infrastrukture, ne samo kao "featureu".
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { step: "01", title: "API Audit", desc: "Analiza tehničke dokumentacije i endpointova vanjskog sustava." },
                { step: "02", title: "Data Mapping", desc: "Definiranje tokova podataka i transformacijskih pravila." },
                { step: "03", title: "Sandbox Testing", desc: "Temeljito testiranje u izoliranom okruženju prije puštanja." },
                { step: "04", title: "Live Sync", desc: "Produkcijsko puštanje uz monitoring performansi i error logove." }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <span className="text-4xl font-black text-primary/20 block mb-4">{item.step}</span>
                  <h4 className="font-black uppercase tracking-tight text-lg mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 italic text-white leading-none">
              Povežite svoje <span className="text-black">poslovanje.</span>
            </h2>
            <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-12">
              Naši integracijski stručnjaci će analizirati vaše sustave i predložiti najsigurniji put do automatizacije.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                <Link href="/kontakt">Zakaži tehničku analizu</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                <Link href="/kontakt?type=brief">Pošalji brief <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
