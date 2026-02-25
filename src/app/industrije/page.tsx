
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Workflow,
  Building2,
  ShoppingCart,
  Car,
  Palmtree,
  Settings,
  Cpu
} from "lucide-react";
import Link from "next/link";

const INDUSTRIES = [
  {
    title: "Osiguranje",
    slug: "osiguranje",
    desc: "Digitalni portali za prodaju polica i obradu šteta s maksimalnom sigurnošću podataka.",
    icon: ShieldCheck
  },
  {
    title: "Retail & Prodaja",
    slug: "retail",
    desc: "E-commerce rješenja koja povezuju fizičke trgovine i web u jedinstven sustav.",
    icon: ShoppingCart
  },
  {
    title: "Automotive",
    slug: "automotive",
    desc: "Sustavi za konfiguraciju vozila i upravljanje logistikom rezervnih dijelova.",
    icon: Car
  },
  {
    title: "Turizam",
    slug: "turizam",
    desc: "Booking platforme i sustavi za upravljanje sadržajem za velike hotelske lance.",
    icon: Palmtree
  },
  {
    title: "Tehnologija",
    slug: "tehnologija",
    desc: "Infrastrukturna rješenja i platforme za upravljanje inženjerskim podacima.",
    icon: Cpu
  },
  {
    title: "Javni sektor",
    slug: "ostalo",
    desc: "Digitalizacija javnih usluga i portali za građane uz visoku transparentnost.",
    icon: Building2
  }
];

export default function IndustriesHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Domenska Ekspertiza / Industrije
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Specijalizirana <span className="text-primary">rješenja.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl">
              Svaka industrija ima svoje zakone. Naši inženjeri razumiju vaše specifične poslovne procese i pretvaraju ih u stabilan kod.
            </p>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-2 border-black">
            {INDUSTRIES.map((ind, idx) => (
              <Link 
                href={`/industrije/${ind.slug}`} 
                key={idx} 
                className="bg-white p-12 group hover:bg-muted transition-colors flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <ind.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 italic leading-none group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-8 flex-grow">
                  {ind.desc}
                </p>
                <div className="pt-6 border-t border-black/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest group-hover:text-primary transition-colors">
                  Pogledaj pristup <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Universal Principles */}
        <section className="bg-black text-white py-24 border-y border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-16 text-center">Zajednički <span className="text-primary">standardi.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Maksimalna Sigurnost", desc: "Podaci vaših klijenata su oklopljeni unutar EasyEdit arhitekture.", icon: ShieldCheck },
                { title: "Besprijekorna Integracija", desc: "Povezivanje s vašim core sustavima je temelj svakog našeg rješenja.", icon: Zap },
                { title: "Agilna Isporuka", desc: "Rezultate vidite u tjednima, ne u mjesecima, kroz Scrum proces.", icon: Workflow }
              ].map((p, i) => (
                <div key={i} className="text-center space-y-6">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                    <p.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-black uppercase italic">{p.title}</h4>
                  <p className="text-sm text-white/40 font-medium leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Link CTA */}
        <section className="py-32 container mx-auto px-4 text-center">
           <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic mb-8 leading-none">
             Rezultati u <span className="text-primary">brojkama.</span>
           </h2>
           <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto mb-12">
             Pogledajte kako smo transformirali poslovanje lidera u raznim industrijama.
           </p>
           <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
             <Link href="/work">Pogledaj studije slučaja</Link>
           </Button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
