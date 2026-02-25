
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  Layers,
  ArrowLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// In a real app, this data would come from a CMS or DB.
const CASE_STUDIES_DATA: Record<string, any> = {
  "global-b2b": {
    title: "Globalni B2B E-commerce sustav",
    client: "Industrial Global Corp",
    industry: "Proizvodnja",
    year: "2023",
    services: ["E-commerce", "ERP Integracija", "Cloud Arhitektura"],
    outcome: "40% uštede kroz automatizaciju narudžbi",
    imgId: "case-study-1",
    challenge: "Klijent je upravljao narudžbama putem e-maila i Excel tablica za preko 50 globalnih distributera. Sinkronizacija zaliha s legacy SAP sustavom bila je ručna, što je rezultiralo čestim pogreškama i nezadovoljstvom partnera.",
    solution: "Implementirali smo EasyEdit E-commerce Engine s dubokom integracijom u SAP ERP. Sustav omogućuje distributerima uvid u stvarne zalihe, personalizirane rabate i praćenje isporuke u realnom vremenu.",
    architecture: [
      { title: "Real-time SAP Sync", desc: "Dvosmjerna sinkronizacija artikala, cijena i narudžbi svake 2 minute.", icon: Cpu },
      { title: "Multi-Entity Logic", desc: "Podrška za različite porezne stope i valute unutar jedinstvene baze podataka.", icon: Layers },
      { title: "Hardened Security", desc: "Zatvorena arhitektura s nultom stopom ranjivosti na SQL injection napade.", icon: ShieldCheck }
    ],
    results: [
      { label: "Smanjenje grešaka", value: "95%" },
      { label: "Brzina obrade", value: "3x brže" },
      { label: "ROI postignut za", value: "8 mj." }
    ],
    modules: ["Web Shop Engine", "ERP Bridge", "Order Management", "Multilanguage Engine"]
  },
  "insurance-portal": {
    title: "Enterprise portal za osiguranja",
    client: "SafeGuard Adria",
    industry: "Financije",
    year: "2024",
    services: ["Poslovni Portal", "Custom Softver", "UI/UX Inženjering"],
    outcome: "1M+ mjesečnih sesija uz 99.9% uptime",
    imgId: "case-study-2",
    challenge: "Fragmentirani sustavi za klijente otežavali su prodaju novih polica i produženje postojećih. Korisničko iskustvo bilo je opterećeno tehničkim dugom i sporim učitavanjem.",
    solution: "Razvijen je centralizirani self-service portal baziran na EasyEdit Business Core-u. Korisnici sada mogu upravljati svim policama, prijaviti štetu i izvršiti plaćanja unutar 3 klika.",
    architecture: [
      { title: "Micro-service Ready", desc: "Modularna arhitektura koja se lako povezuje s vanjskim servisima za procjenu rizika.", icon: Layers },
      { title: "High-Load Handling", desc: "Optimizirano za opsluživanje preko 10.000 konkurentnih korisnika.", icon: Zap },
      { title: "Advanced Audit", desc: "Potpuni trag svih promjena na policama s visokom razinom enkripcije.", icon: ShieldCheck }
    ],
    results: [
      { label: "Uptime", value: "99.99%" },
      { label: "Online plaćanja", value: "+60%" },
      { label: "Support ticketi", value: "-30%" }
    ],
    modules: ["EasyEdit Core CMS", "CRM Connector", "Payment Gateway Sync", "Document Vault"]
  }
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = CASE_STUDIES_DATA[slug];

  if (!data) {
    // For now, if not in mock data, show generic or notFound
    if (slug !== "logistics-iot" && slug !== "retail-intranet" && slug !== "custom-web-shop" && slug !== "erp-bridge") {
      notFound();
    }
    // Fallback for missing detail data in MVP
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-48 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black uppercase tracking-tighter italic">Detaljni podaci za {slug} su u pripremi.</h1>
          <p className="mt-8"><Link href="/work" className="text-primary hover:underline flex items-center justify-center gap-2"><ArrowLeft className="w-4 h-4"/> Povratak na portfolio</Link></p>
        </main>
        <Footer />
      </div>
    );
  }

  const heroImg = PlaceHolderImages.find(i => i.id === data.imgId);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Project Header */}
        <section className="container mx-auto px-4 mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-3xl">
              <Link href="/work" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-3 h-3" /> Povratak na studije slučaja
              </Link>
              <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none mb-8">
                {data.title}
              </h1>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">Klijent</p>
                  <p className="font-bold uppercase tracking-tight">{data.client}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">Industrija</p>
                  <p className="font-bold uppercase tracking-tight">{data.industry}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">Godina</p>
                  <p className="font-bold uppercase tracking-tight">{data.year}</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 border-2 border-black p-8 lg:p-10 w-full lg:w-80">
              <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4">Usluge</p>
              <ul className="space-y-3">
                {data.services.map((s: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-black uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 bg-accent" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Hero Visual */}
        <section className="container mx-auto px-4 mb-24">
          <div className="relative aspect-video lg:aspect-[21/9] bg-muted border-2 border-black overflow-hidden group">
            {heroImg && (
              <Image 
                src={heroImg.imageUrl} 
                alt={data.title} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-90"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 text-white">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 block text-primary">Ključni ishod projekta:</span>
              <h2 className="text-2xl lg:text-5xl font-black uppercase tracking-tighter italic leading-none">{data.outcome}</h2>
            </div>
          </div>
        </section>

        {/* Challenge & Solution Grid */}
        <section className="py-24 border-y border-black bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-black text-white flex items-center justify-center not-italic text-sm">01</span>
                  Poslovni izazov
                </h3>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed italic">
                  "{data.challenge}"
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-white flex items-center justify-center not-italic text-sm">02</span>
                  Inženjersko rješenje
                </h3>
                <p className="text-lg text-black font-medium leading-relaxed">
                  {data.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-4">Tehnička <span className="text-primary">Arhitektura.</span></h2>
              <p className="text-muted-foreground font-medium">Svako rješenje na EasyEdit platformi projektirano je za maksimalnu otpornost i performanse.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black">
              {data.architecture.map((item: any, idx: number) => (
                <div key={idx} className="bg-white p-12 space-y-6 group hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight italic">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & KPI */}
        <section className="py-24 bg-black text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none skew-x-12 translate-x-1/2 bg-primary" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-6xl font-black uppercase tracking-tighter italic">Mjerljivi <span className="text-primary">Rezultati.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {data.results.map((res: any, idx: number) => (
                <div key={idx} className="text-center space-y-2">
                  <p className="text-6xl lg:text-8xl font-black italic tracking-tighter text-primary">{res.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{res.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Used Modules */}
        <section className="py-24 bg-slate-50 border-b border-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-xl">
                <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4">Korišteni <span className="text-secondary">EasyEdit Moduli.</span></h3>
                <p className="text-muted-foreground font-medium">Platforma je sastavljena od provjerenih modula koji osiguravaju stabilnost i brzu isporuku.</p>
              </div>
              <Button variant="link" className="font-black uppercase tracking-widest text-xs p-0 h-auto gap-2" asChild>
                <Link href="/easyedit/moduli">Katalog svih modula <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {data.modules.map((m: string, i: number) => (
                <div key={i} className="px-8 py-4 bg-white border-2 border-black font-black uppercase tracking-widest text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-secondary" /> {m}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden">
               <div className="relative z-10 max-w-2xl">
                  <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] italic">
                    Trebate slično <span className="text-black">rješenje za svoj biznis?</span>
                  </h2>
                  <p className="text-white/80 text-xl font-medium">Naši tech leadovi su spremni za besplatnu analizu vaših zahtjeva.</p>
               </div>
               <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                    <Link href="/kontakt">Započni razgovor</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                    <Link href="/work">Pogledaj ostale projekte <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
