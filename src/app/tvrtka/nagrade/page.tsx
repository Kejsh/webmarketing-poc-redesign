"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Filter, 
  ArrowRight,
  Medal,
  BadgeCheck,
  Star,
  FileCheck
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const YEARS = ["Sve", "2024", "2023", "2022", "2021", "Ranije"];
const CATEGORIES = ["Sve", "Nagrade", "Certifikati"];

const ITEMS = [
  {
    id: 1,
    title: "ISO/IEC 27001",
    year: "2024",
    category: "Certifikati",
    issuer: "International Organization for Standardization",
    description: "Međunarodni standard za upravljanje informacijskom sigurnošću.",
    meaning: "Jamči najvišu razinu zaštite podataka i oklopljenu infrastrukturu za klijente.",
    icon: ShieldCheck
  },
  {
    id: 2,
    title: "Best Enterprise Solution",
    year: "2023",
    category: "Nagrade",
    issuer: "Regional Tech Summit",
    description: "Nagrada za najuspješniju implementaciju EasyEdit platforme u industrijski sustav.",
    meaning: "Potvrda inženjerske izvrsnosti u rješavanju kompleksnih poslovnih problema.",
    icon: Medal
  },
  {
    id: 3,
    title: "ISO 9001:2015",
    year: "2023",
    category: "Certifikati",
    issuer: "Bureau Veritas",
    description: "Standard za upravljanje kvalitetom u procesima razvoja softvera.",
    meaning: "Osigurava dosljednost, sljedivost i visoke standarde u svakoj fazi projekta.",
    icon: CheckCircle2
  },
  {
    id: 4,
    title: "Digital Innovation Award",
    year: "2022",
    category: "Nagrade",
    issuer: "Vidi e-novation",
    description: "Priznanje za inovativni pristup integraciji ERP sustava.",
    meaning: "Dokaz naše sposobnosti da razvijamo jedinstvena rješenja koja ne postoje na tržištu.",
    icon: Star
  },
  {
    id: 5,
    title: "AWS Certified Partner",
    year: "2021",
    category: "Certifikati",
    issuer: "Amazon Web Services",
    description: "Certifikat za projektiranje i upravljanje cloud infrastrukturama.",
    meaning: "Sposobnost izgradnje globalno skalabilnih i visoko dostupnih sustava.",
    icon: BadgeCheck
  },
  {
    id: 6,
    title: "Web Strategy Excellence",
    year: "2021",
    category: "Nagrade",
    issuer: "Web Strategija",
    description: "Zlatna nagrada za najbolju strategiju online prodaje u B2B sektoru.",
    meaning: "Razumijemo poslovne ciljeve klijenta, ne samo tehničku izvedbu.",
    icon: Award
  }
];

export default function AwardsCatalogPage() {
  const [activeYear, setActiveYear] = useState("Sve");
  const [activeCategory, setActiveCategory] = useState("Sve");

  const filteredItems = ITEMS.filter(item => {
    const yearMatch = activeYear === "Sve" || item.year === activeYear || (activeYear === "Ranije" && parseInt(item.year) < 2021);
    const categoryMatch = activeCategory === "Sve" || item.category === activeCategory;
    return yearMatch && categoryMatch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* A) Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Priznanja / Nagrade i Certifikati
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Dokazana <span className="text-primary">izvrsnost.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Katalog naših certifikata i nagrada nije samo lista trofeja, već dokaz naše predanosti inženjerskim standardima i sigurnosti vašeg poslovanja.
            </p>
            <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
              <Link href="/kontakt">Zatražite security audit</Link>
            </Button>
          </div>
        </section>

        {/* B) Filter Section */}
        <section className="border-y border-black bg-slate-50 sticky top-[72px] z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40">
                  <Filter className="w-4 h-4" /> Godina:
                </div>
                <div className="flex flex-wrap gap-2">
                  {YEARS.map(y => (
                    <button
                      key={y}
                      onClick={() => setActiveYear(y)}
                      className={cn(
                        "px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all border-2",
                        activeYear === y ? "bg-black text-white border-black" : "bg-white text-black/60 border-black/5 hover:border-black/20"
                      )}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40">
                  Kategorija:
                </div>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(c => (
                    <button
                      key={c}
                      onClick={() => setActiveCategory(c)}
                      className={cn(
                        "px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all border-2",
                        activeCategory === c ? "bg-primary text-white border-primary" : "bg-white text-black/60 border-black/5 hover:border-black/20"
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C & D) Nagrade i Certifikati Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-2 border-black">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-white p-10 flex flex-col h-full group hover:bg-slate-50 transition-colors">
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-14 h-14 bg-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary block">{item.year}</span>
                        <span className="text-[8px] font-bold uppercase tracking-widest text-black/30">{item.category}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow space-y-4">
                      <h3 className="text-2xl font-black uppercase tracking-tight italic leading-none">{item.title}</h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/40">{item.issuer}</p>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.description}</p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-black/5 bg-accent/5 -mx-10 -mb-10 p-10">
                      <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">Što to znači za vas?</p>
                      <p className="text-xs font-bold leading-relaxed italic">"{item.meaning}"</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-32 text-center border-2 border-dashed border-black/10">
                <p className="text-xl text-muted-foreground font-medium italic uppercase tracking-widest">Nema rezultata za odabrane kriterije.</p>
              </div>
            )}
          </div>
        </section>

        {/* E) Zašto je to važno klijentima */}
        <section className="py-24 bg-slate-50 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-16 text-center">Zašto inzistiramo na <span className="text-secondary">standardima?</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    title: "Smanjenje rizika",
                    desc: "Certifikati poput ISO 27001 osiguravaju da vaši podaci nikada nisu prepušteni slučaju ili nesigurnim procesima."
                  },
                  {
                    title: "Predvidljivost isporuke",
                    desc: "Procesi temeljeni na ISO 9001 znače da svaki naš projekt prati istu visoku razinu kontrole kvalitete."
                  },
                  {
                    title: "Konkurentska prednost",
                    desc: "Korištenjem nagrađivanih rješenja i platformi, vaše poslovanje dobiva najnaprednije alate dostupne u regiji."
                  }
                ].map((point, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-8 h-8 bg-black text-primary flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h4 className="font-black uppercase text-xl italic">{point.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* F) CTA Banner */}
        <section className="container mx-auto px-4 py-24">
          <div className="bg-primary p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden">
             <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 italic leading-none">
                  Projektirajmo <span className="text-black">pobjedničko rješenje.</span>
                </h2>
                <p className="text-white/80 text-xl font-medium">Osigurajte svoje poslovanje na platformi koja ne pristaje na manje od izvrsnosti.</p>
             </div>
             <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <Link href="/kontakt">Zakaži konzultacije</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                  <Link href="/trust">Trust Center <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
