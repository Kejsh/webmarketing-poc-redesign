
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Workflow,
  CheckCircle2,
  Lock,
  Cpu,
  Database,
  ArrowLeft,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function IndustryDetailPage() {
  const params = useParams();
  const slug = params.slug;

  // Placeholder mapping based on slug
  const industryTitle = slug === 'osiguranje' ? 'Osiguranje' : 
                       slug === 'retail' ? 'Retail & Prodaja' : 
                       'Industrijsko rješenje';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <Link href="/industrije" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Povratak na Industrije
            </Link>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              {industryTitle}: <span className="text-primary">digitalne platforme.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Pouzdani procesi i integracije koji omogućuju skaliranje u {industryTitle.toLowerCase()} sektoru.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt">Započnite projekt</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt?type=brief">Pošalji brief</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Typical Challenges */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-16">Tipični <span className="text-secondary">izazovi.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Silosi podataka između različitih odjela",
                "Sigurnost osjetljivih podataka klijenata",
                "Ovisnost o zastarjelim (legacy) sustavima",
                "Sporo vrijeme izlaska na tržište (Time-to-market)",
                "Nedostatak real-time analitike za odlučivanje",
                "Kompleksno upravljanje korisničkim pravima"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-8 bg-white border-2 border-black/5 hover:border-secondary transition-colors">
                  <div className="w-1.5 h-1.5 bg-secondary shrink-0 mt-2" />
                  <p className="font-bold uppercase tracking-tight text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Most common solutions */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-16 text-center">Rješenja koja <span className="text-primary">isporučujemo.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border-2 border-black">
              {[
                { title: "Custom Web Platforma", icon: Cpu, desc: "Središnji digitalni hub za vaše poslovanje." },
                { title: "Korisnički Portal", icon: Database, desc: "Self-service zona za klijente i partnere." },
                { title: "E-commerce Engine", icon: ShoppingCart, desc: "Robusna prodaja s ERP integracijom." },
                { title: "Middleware & Integracije", icon: Zap, desc: "Povezivanje svih vaših sustava u jedan tok." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 space-y-6 group hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-black uppercase italic leading-none">{item.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Governance */}
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic leading-none">
                  Sigurnost i <span className="text-primary">Governance.</span>
                </h2>
                <p className="text-white/60 text-lg font-medium leading-relaxed">
                  U {industryTitle.toLowerCase()} sektoru, podaci su imovina. Osiguravamo ih kroz stroge protokole i zatvorenu EasyEdit arhitekturu.
                </p>
                <ul className="space-y-4">
                  {["ISO 27001 standardi", "Audit logovi svih akcija", "Role-based access control"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary">
                      <CheckCircle2 className="w-4 h-4" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-12 relative overflow-hidden">
                <Lock className="w-24 h-24 text-primary/20 absolute -right-6 -bottom-6" />
                <h3 className="text-2xl font-black uppercase tracking-tight italic mb-6">Puna usklađenost</h3>
                <p className="text-sm text-white/70 font-medium leading-relaxed">
                  Naša rješenja su od prvog dana projektirana s GDPR i industrijskim regulativama na umu, omogućujući vam siguran rast bez pravnih rizika.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 container mx-auto px-4 text-center">
           <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-none">
             Projektirajmo vašu <span className="text-primary">budućnost.</span>
           </h2>
           <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
             <Link href="/kontakt">Zakaži konzultacije</Link>
           </Button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
