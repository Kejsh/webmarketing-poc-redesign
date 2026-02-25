
"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, ArrowRight, ShieldCheck, Zap, Cpu, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const INDUSTRIES = ["Svi", "Osiguranje", "Retail", "Auto", "Turizam", "Tehnologija", "Ostalo"];

const CLIENTS = [
  { name: "Croatia Osiguranje", delivery: "Digitalna transformacija prodajnih kanala i core integracija.", industry: "Osiguranje", tags: ["web", "portal", "integracije"] },
  { name: "Konzum", delivery: "B2C E-commerce sustav s real-time ERP sinkronizacijom.", industry: "Retail", tags: ["ecom", "integracije"] },
  { name: "Rimac Technology", delivery: "Interni portal za upravljanje inženjerskim resursima.", industry: "Auto", tags: ["portal", "custom"] },
  { name: "Valamar Riviera", delivery: "Centralni booking sustav i multi-brand platforma.", industry: "Turizam", tags: ["web", "ecom"] },
  { name: "Allianz", delivery: "Web platforma za online prodaju i obradu polica.", industry: "Osiguranje", tags: ["web", "portal"] },
  { name: "Pevex", delivery: "Enterprise web shop engine i PIM integracija.", industry: "Retail", tags: ["ecom", "integracije"] },
  { name: "Tokić", delivery: "B2B portal za partnere i inteligentni katalog dijelova.", industry: "Auto", tags: ["ecom", "portal"] },
  { name: "Maistra", delivery: "Višejezična platforma za luksuzne hotelske lance.", industry: "Turizam", tags: ["web", "portal"] },
  { name: "A1 Hrvatska", delivery: "Integracijski middleware za automatizaciju korisničkih podataka.", industry: "Tehnologija", tags: ["integracije", "portal"] },
  { name: "Wiener Osiguranje", delivery: "Custom platforma za izračun i ugovaranje polica.", industry: "Osiguranje", tags: ["web", "custom"] },
  { name: "Zubak Grupa", delivery: "E-commerce rješenje za prodaju rabljenih vozila.", industry: "Auto", tags: ["ecom", "integracije"] },
  { name: "Arena Hospitality Group", delivery: "Integracija globalnog booking engine-a i CMS-a.", industry: "Turizam", tags: ["ecom", "custom"] },
  { name: "Infobip", delivery: "Sustav za upravljanje kompleksnom tehničkom dokumentacijom.", industry: "Tehnologija", tags: ["portal", "web"] },
  { name: "Orbico", delivery: "B2B platforma za distribuciju na 20 regionalnih tržišta.", industry: "Retail", tags: ["ecom", "integracije"] },
  { name: "Atlantic Grupa", delivery: "Interni portal za zaposlenike i digitalizacija procesa.", industry: "Ostalo", tags: ["portal", "custom"] },
  { name: "OTP Banka", delivery: "Middleware za integraciju sustava prijave klijenata.", industry: "Ostalo", tags: ["integracije", "portal"] },
  { name: "Pliva", delivery: "Custom sustav za praćenje usklađenosti i sigurnosti podataka.", industry: "Tehnologija", tags: ["custom", "portal"] },
  { name: "Ericsson Nikola Tesla", delivery: "Inženjerski dashboard za monitoring mrežnih resursa.", industry: "Tehnologija", tags: ["portal", "custom"] },
  { name: "Adris Grupa", delivery: "Korporativni portal i sustav za odnose s investitorima.", industry: "Ostalo", tags: ["web", "portal"] },
  { name: "Franck", delivery: "Web shop platforma i CRM konektor za lojalnost.", industry: "Retail", tags: ["ecom", "integracije"] },
  { name: "Podravka", delivery: "Višejezična platforma za globalno tržište i brendove.", industry: "Ostalo", tags: ["web", "custom"] },
  { name: "Rimac Energy", delivery: "Sustav za vizualizaciju i analitiku energetskih podataka.", industry: "Auto", tags: ["portal", "custom"] },
  { name: "M+ Group", delivery: "Omnichannel ticketing sustav za podršku korisnicima.", industry: "Tehnologija", tags: ["portal", "integracije"] },
  { name: "Span", delivery: "Knowledge base platforma za interne IT timove.", industry: "Tehnologija", tags: ["web", "portal"] },
  { name: "HEP", delivery: "Sustav za digitalno upravljanje dokumentacijom.", industry: "Ostalo", tags: ["portal", "integracije"] },
];

export default function ClientsPage() {
  const [activeFilter, setActiveFilter] = useState("Svi");

  const filteredClients = activeFilter === "Svi" 
    ? CLIENTS 
    : CLIENTS.filter(c => c.industry === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Povjerenje / Referentna lista
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Naši <span className="text-primary">Klijenti.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Od globalnih korporacija do regionalnih lidera. Gradimo rješenja koja pokreću najzahtjevnije sustave.
            </p>
            <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
              <a href="/kontakt">Započnite suradnju</a>
            </Button>
          </div>
        </section>

        {/* Filter Section */}
        <section className="border-y border-black bg-slate-50 sticky top-[72px] z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black/40">
                <Filter className="w-4 h-4" /> Filtriraj po industriji:
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {INDUSTRIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={cn(
                      "px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all border-2 border-transparent",
                      activeFilter === cat 
                        ? "bg-black text-white border-black" 
                        : "bg-white text-black/60 hover:border-black/20"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clients Listing */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-2 border-black">
              {filteredClients.map((client, idx) => (
                <div key={idx} className="bg-white p-10 flex flex-col h-full group hover:bg-muted transition-colors">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/20">{client.industry}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none group-hover:text-primary transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-tight mb-8 flex-grow italic">
                    "{client.delivery}"
                  </p>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5">
                    {client.tags.map((tag, tidx) => (
                      <span key={tidx} className="text-[8px] font-black uppercase tracking-widest text-secondary border border-secondary/20 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {filteredClients.length === 0 && (
              <div className="py-32 text-center border-2 border-dashed border-black/10">
                <p className="text-xl text-muted-foreground font-medium italic uppercase tracking-widest">Nema rezultata za ovu kategoriju.</p>
              </div>
            )}
          </div>
        </section>

        {/* Why they choose us - Principles */}
        <section className="py-24 bg-slate-50 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-6">Zašto nas <span className="text-accent">biraju?</span></h2>
              <p className="text-lg text-muted-foreground font-medium">Standardi koji nas izdvajaju od agencijskog prosjeka.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6 text-center lg:text-left">
                <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto lg:mx-0">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-black uppercase text-xl italic">Inženjerska preciznost</h4>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  Svakom projektu pristupamo s inženjerskom disciplinom. Ne nagađamo, već projektiramo sustave za nulti downtime i maksimalnu brzinu.
                </p>
              </div>
              <div className="space-y-6 text-center lg:text-left">
                <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto lg:mx-0">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-black uppercase text-xl italic">Vlastita Tehnologija</h4>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  EasyEdit CMS nam omogućuje potpunu kontrolu nad sigurnošću i performansama. Vaše rješenje nije ograničeno tuđim kodom.
                </p>
              </div>
              <div className="space-y-6 text-center lg:text-left">
                <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto lg:mx-0">
                  <ShieldCheck className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-black uppercase text-xl italic">Dugoročna Podrška</h4>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  Nismo ovdje samo za launch. Kroz strukturirane SLA ugovore postajemo vaš vanjski IT tim koji osigurava kontinuiranu evoluciju sustava.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-black text-white p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 italic leading-none">
                  Vaš logotip <span className="text-primary">ovdje?</span>
                </h2>
                <p className="text-white/60 text-lg font-medium">
                  Pridružite se listi najuspješnijih tvrtki u regiji. Projektirajmo vašu digitalnu budućnost zajedno.
                </p>
              </div>
              <div className="relative z-10">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <a href="/kontakt?type=brief">Započnite projekt <ArrowRight className="w-4 h-4 ml-2" /></a>
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
