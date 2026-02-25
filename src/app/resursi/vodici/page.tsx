"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Lock, 
  BarChart3,
  Mail,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const RESOURCES = [
  {
    title: "Enterprise E-commerce Blueprint",
    type: "Whitepaper",
    size: "2.4 MB",
    desc: "Kompletan tehnički vodič kroz arhitekturu robusnih prodajnih sustava s dubokim integracijama.",
    tags: ["E-commerce", "Architecture", "ERP"],
    icon: Zap
  },
  {
    title: "Security Audit Checklist 2024",
    type: "Vodič",
    size: "1.1 MB",
    desc: "Kontrolna lista za CTO-ove i IT menadžere — osigurajte svoje web sustave od modernih prijetnji.",
    tags: ["Security", "IT Management", "Compliance"],
    icon: ShieldCheck
  },
  {
    title: "EasyEdit CMS Technical Spec",
    type: "Dokumentacija",
    size: "4.8 MB",
    desc: "Dubinski uvid u module, performanse i sigurnosne aspekte EasyEdit platforme.",
    tags: ["EasyEdit", "CMS", "Performance"],
    icon: Lock
  },
  {
    title: "ROI of Custom Development",
    type: "Poslovna Analiza",
    size: "1.8 MB",
    desc: "Analiza povrata investicije kod prelaska s generičkih na custom rješenja.",
    tags: ["Business", "Strategy", "ROI"],
    icon: BarChart3
  }
];

export default function GuidesPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const form = document.getElementById("lead-form");
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Resursi / Vodiči & Whitepapers
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Strateško <span className="text-primary">Znanje.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Naši inženjeri i stratezi pripremaju dubinske analize koje vam pomažu u donošenju boljih tehnoloških odluka.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-2 border-black">
            {RESOURCES.map((res, idx) => (
              <div key={idx} className="bg-white p-12 group hover:bg-slate-50 transition-colors flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                   <div className="w-16 h-16 bg-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <res.icon className="w-8 h-8 text-primary" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 px-3 py-1">
                     {res.type}
                   </span>
                </div>
                <div className="flex-grow space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight italic leading-none">{res.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">{res.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {res.tags.map((tag, t) => (
                      <span key={t} className="text-[8px] font-bold text-black/30 uppercase tracking-[0.2em]">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-12 mt-12 border-t border-black/5 flex items-center justify-between">
                   <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Veličina: {res.size}</span>
                   <button 
                    onClick={handleDownloadClick}
                    className="text-[10px] font-black uppercase tracking-widest text-black flex items-center gap-2 hover:text-primary transition-colors"
                   >
                     Preuzmi resurs <Download className="w-4 h-4" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Gen Form - Gated Content */}
        <section id="lead-form" className="container mx-auto px-4">
          <div className="bg-black text-white p-12 lg:p-24 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none skew-x-12 translate-x-1/2 bg-primary" />
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                   <div className="space-y-8">
                      <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none">
                        Pristupite <span className="text-primary">znanju.</span>
                      </h2>
                      <p className="text-white/60 text-xl font-medium leading-relaxed">
                        Pretplatite se na naš newsletter i osigurajte besplatan pristup svim našim whitepaperima i tehničkim vodičima.
                      </p>
                      <ul className="space-y-4">
                         {["Ekskluzivni uvid u EasyEdit roadmap", "Pozivnice na tech webinare", "Mjesečni security izvještaji"].map((item, i) => (
                           <li key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary">
                             <div className="w-1.5 h-1.5 bg-primary" />
                             {item}
                           </li>
                         ))}
                      </ul>
                   </div>

                   <div className="bg-white/5 border border-white/10 p-10 relative">
                      {submitted ? (
                        <div className="text-center py-12 space-y-6 animate-in zoom-in duration-500">
                           <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
                           <h3 className="text-2xl font-black uppercase tracking-tight italic">Hvala vam na interesu!</h3>
                           <p className="text-white/60 font-medium">Link za preuzimanje poslan je na vašu email adresu.</p>
                           <Button 
                            variant="outline" 
                            className="border-white text-white hover:bg-white hover:text-black rounded-none"
                            onClick={() => setSubmitted(false)}
                           >
                             Zatvori
                           </Button>
                        </div>
                      ) : (
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Vaše Ime</label>
                              <Input className="bg-white/5 border-white/20 rounded-none h-14 text-white" placeholder="Npr. Ivan Horvat" required />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Poslovni Email</label>
                              <Input type="email" className="bg-white/5 border-white/20 rounded-none h-14 text-white" placeholder="ivan@tvrtka.hr" required />
                           </div>
                           <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs">
                             Preuzmi sve resurse <ArrowRight className="w-4 h-4 ml-2" />
                           </Button>
                           <p className="text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] text-center">
                             Slanjem podataka pristajete na našu politiku privatnosti.
                           </p>
                        </form>
                      )}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="mt-32 container mx-auto px-4 text-center">
           <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-8">Znanje je samo <span className="text-primary">početak.</span></h2>
           <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto mb-12">
             Imate specifičan tehnički izazov o kojem niste pronašli vodič? Naši inženjeri su spremni za direktan razgovor.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                <Link href="/kontakt">Zakaži razgovor</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                <Link href="/work">Pogledaj reference <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
