import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactFormDualPath } from "@/components/forms/ContactFormDualPath";
import { Mail, Phone, MapPin, Globe, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt | WEB Marketing",
  description:
    "Kontaktirajte WEB Marketing tim i odaberite put upita: demo prezentacija ili projektni brief.",
};

export default function KontaktPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* A) Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Kontakt / Inženjerske Konzultacije
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Započnimo <span className="text-primary">arhitekturu rješenja.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Odaberite put koji vam najbolje odgovara: brzi dogovor demo prezentacije ili slanje strukturiranog projektnog briefa za detaljnu procjenu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <a href="#selector">Odaberi putanju upita</a>
              </Button>
            </div>
          </div>
        </section>

        {/* B & C) Dual-Path Layout + Brief Form */}
        <section id="selector" className="container mx-auto px-4 mb-32">
          <ContactFormDualPath />
        </section>

        {/* D) Kontakt Info + Mapa Placeholder */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tight italic border-b-2 border-black pb-4">Direktni kontakti</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Centrala</p>
                      <p className="font-bold">+385 1 123 4567</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Email</p>
                      <p className="font-bold">info@webmarketing.hr</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">Adresa</p>
                      <p className="font-bold">Ulica Tehnologije 123, 10000 Zagreb</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-2 border-black bg-slate-50 space-y-4">
                <h4 className="font-black uppercase tracking-tight text-sm">Radno vrijeme</h4>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                  Naši inženjeri su dostupni za konzultacije od ponedjeljka do petka, 08:00 — 16:00 h.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary">
                  <Globe className="w-3 h-3" /> Globalna podrška aktivna
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="aspect-video bg-slate-100 border-2 border-black relative group overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/20">Interactive Map Placeholder</p>
                </div>
                <div className="absolute top-4 left-4 bg-black text-white p-4 text-[10px] font-black uppercase tracking-widest">
                  HQ: Zagreb, Croatia
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E) Trust Mini */}
        <section className="bg-black text-white py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-2">
                  <p className="text-5xl font-black italic text-primary">25+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Godina iskustva</p>
                </div>
                <div className="space-y-2">
                  <p className="text-5xl font-black italic text-secondary">500+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Projekata</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-8 -left-8 w-16 h-16 text-primary/10" />
                <p className="text-2xl font-black italic uppercase leading-tight relative z-10">
                  "Inženjerski pristup WEB Marketinga osigurao nam je stabilnost koju nismo mogli pronaći kod klasičnih agencija."
                </p>
                <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-primary">CTO, Regionalna Retail Grupa</p>
              </div>
            </div>
          </div>
        </section>

        {/* F) Final CTA Banner */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 italic leading-none">
              Niste sigurni odakle <span className="text-primary">krenuti?</span>
            </h2>
            <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto mb-12">
              Pregledajte naše najnovije inženjerske analize ili katalog modula kako biste dobili bolju sliku o mogućnostima.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                <Link href="/easyedit/moduli">Istraži module</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                <Link href="/insights">Znanje i analize <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
