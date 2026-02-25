"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Svi", "Web Platforme", "E-commerce", "Poslovni Portali", "Integracije"];

const CASE_STUDIES = [
  {
    id: "global-b2b",
    title: "Globalni B2B E-commerce sustav",
    industry: "Proizvodnja",
    type: "E-commerce",
    outcome: "40% uštede kroz automatizaciju narudžbi.",
    imgId: "case-study-1",
    description: "Kompleksna platforma integrirana sa SAP ERP-om za globalnu distribuciju."
  },
  {
    id: "insurance-portal",
    title: "Enterprise portal za osiguranja",
    industry: "Financije",
    type: "Poslovni Portali",
    outcome: "1M+ mjesečnih sesija uz 99.9% uptime.",
    imgId: "case-study-2",
    description: "Self-service zona za klijente s naprednim sustavom polica i plaćanja."
  },
  {
    id: "logistics-iot",
    title: "IoT Supply Chain Dashboard",
    industry: "Logistika",
    type: "Integracije",
    outcome: "Praćenje u realnom vremenu na 500+ lokacija.",
    imgId: "case-study-3",
    description: "Middleware rješenje koje povezuje senzore, baze podataka i web sučelje."
  },
  {
    id: "retail-intranet",
    title: "Enterprise Intranet & Document Vault",
    industry: "Retail",
    type: "Poslovni Portali",
    outcome: "Poboljšana interna komunikacija za 5000+ zaposlenika.",
    imgId: "case-study-1",
    description: "Sigurna pohrana dokumenata s granularnim pravima pristupa."
  },
  {
    id: "custom-web-shop",
    title: "Custom Web Shop za luksuzne brendove",
    industry: "Retail",
    type: "E-commerce",
    outcome: "Povećanje konverzije za 25% kroz personalizirani UX.",
    imgId: "case-study-2",
    description: "Visoko optimizirana prodajna platforma s fokusom na dizajn i brzinu."
  },
  {
    id: "erp-bridge",
    title: "Cloud Bridge za ERP integracije",
    industry: "Tehnologija",
    type: "Integracije",
    outcome: "Eliminiran ručni unos podataka za 3 tima.",
    imgId: "case-study-3",
    description: "Automatizacija tokova podataka između legacy ERP-a i modernog Clouda."
  }
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("Svi");

  const filteredStudies = activeFilter === "Svi" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(s => s.type === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Portfolio / Inženjerska rješenja
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Rezultati koji <span className="text-accent">traju.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Pregledajte naše najznačajnije projekte u kojima smo tehnološke izazove pretvorili u poslovne prednosti kroz EasyEdit CMS i inženjersku preciznost.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-y border-black bg-slate-50 sticky top-[72px] z-40">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-black/40">
                <Filter className="w-4 h-4" /> Filtriraj rješenja:
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map(cat => (
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

        {/* Case Study Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-2 border-black">
              {filteredStudies.map((study) => {
                const img = PlaceHolderImages.find(i => i.id === study.imgId);
                return (
                  <Link 
                    href={`/work/${study.id}`} 
                    key={study.id} 
                    className="group bg-white p-10 flex flex-col h-full hover:bg-muted transition-colors"
                  >
                    <div className="relative aspect-video bg-muted overflow-hidden mb-10 border border-black/5">
                      {img && (
                        <Image
                          src={img.imageUrl}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="bg-black text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-4">
                        {study.type}
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-6 leading-none group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium mb-8 line-clamp-2">
                        {study.description}
                      </p>
                    </div>

                    <div className="pt-8 border-t border-black/5">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">Ključni ishod:</span>
                        <div className="text-xs font-black uppercase tracking-tight text-accent flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                          {study.outcome} <ArrowRight className="w-3 h-3 text-accent" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {filteredStudies.length === 0 && (
              <div className="py-32 text-center">
                <p className="text-xl text-muted-foreground font-medium italic">Nema pronađenih studija slučaja za odabranu kategoriju.</p>
              </div>
            )}
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="bg-black text-white py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative max-w-5xl mx-auto">
              <Quote className="absolute -top-10 -left-10 w-32 h-32 text-primary/10 -z-0" />
              <div className="relative z-10 text-center">
                <p className="text-3xl lg:text-5xl font-black italic tracking-tighter leading-tight mb-12 uppercase">
                  "Suradnja s WEB Marketingom donijela nam je mir. Njihova EasyEdit platforma nam je dala brzinu, a njihov inženjerski pristup sigurnost koju nismo imali s generičkim rješenjima."
                </p>
                <div className="inline-flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary" />
                  <div className="text-left">
                    <p className="font-black uppercase tracking-widest text-sm">CTO, Enterprise klijent</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Sektor Financija i Osiguranja</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 italic leading-none">
              Započnimo vašu <span className="text-primary">priču.</span>
            </h2>
            <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto mb-12">
              Trebate rješenje koje donosi stvarne poslovne rezultate? Naši inženjeri su spremni za analizu vašeg projekta.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                <Link href="/kontakt">Zakaži konzultacije</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
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
