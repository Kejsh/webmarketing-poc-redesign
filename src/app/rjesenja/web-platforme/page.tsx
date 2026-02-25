
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Layers, 
  Lock, 
  Zap, 
  ArrowRight,
  Search,
  Code2,
  Server
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FEATURES = [
  {
    title: "Enterprise Arhitektura",
    desc: "Projektiramo sustave koji podnose visoko opterećenje i kompleksne korisničke tokove bez gubitka performansi.",
    icon: Layers
  },
  {
    title: "Security-First Pristup",
    desc: "Zatvoreni kod EasyEdit platforme i strogi protokoli osiguravaju maksimalnu zaštitu podataka i otpornost na napade.",
    icon: Lock
  },
  {
    title: "Advanced SEO Core",
    desc: "Tehnički SEO je integriran u samu srž koda, osiguravajući vrhunske Core Web Vitals ocjene i vidljivost.",
    icon: Search
  },
  {
    title: "Skalabilna Infrastruktura",
    desc: "Vaša platforma raste s vašim poslovanjem. Modularni pristup omogućuje lako dodavanje novih funkcionalnosti.",
    icon: Server
  }
];

export default function WebPlatformsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Rješenja / Web Platforme
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Custom Web <span className="text-primary">Platforme.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Gradimo stabilne, visoko-performansne web sustave koji nisu samo digitalni katalog, već ključni pokretači vaših poslovnih procesa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt">Zatražite procjenu arhitekture</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt?type=brief">Pošalji brief</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Engineering Value Proposition */}
        <section className="bg-black text-white py-24 border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-10 italic leading-none">
                  Inženjering <span className="text-primary">stabilnosti.</span>
                </h2>
                <div className="space-y-12">
                  {FEATURES.map((feat, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <feat.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-tight text-xl mb-2">{feat.title}</h4>
                        <p className="text-sm text-white/50 font-medium leading-relaxed max-w-md">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/5 border border-white/10 p-8 lg:p-16 aspect-square flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <Code2 className="w-20 h-20 text-primary mb-8" />
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-6 italic">Built on EasyEdit Core</h3>
                  <p className="text-lg text-white/70 font-medium mb-10">
                    Naša vlastita platforma omogućuje nam potpunu kontrolu nad svakim bajtom koda. Nema "black box" rješenja, nema sigurnosnih kompromisa.
                  </p>
                  <Button variant="link" className="text-primary p-0 h-auto self-start font-black uppercase tracking-widest text-xs gap-2" asChild>
                    <Link href="/easyedit">Istražite tehnologiju <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Highlight */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic">Agile razvoj, <span className="text-secondary">brza isporuka.</span></h2>
              <p className="text-xl text-muted-foreground font-medium">
                Kompleksne platforme razvijamo u fazama, osiguravajući funkcionalne isporuke i stalni povratni feedback.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black">
              {[
                { step: "01", title: "Discovery & Arch", desc: "Definiramo tech stack i tokove podataka." },
                { step: "02", title: "Iterative Dev", desc: "Kodiranje modula kroz Scrum sprinteve." },
                { step: "03", title: "Deployment", desc: "Hardening servera i sigurno puštanje." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 group hover:bg-muted transition-colors">
                  <span className="text-5xl font-black text-black/10 group-hover:text-primary transition-colors block mb-6">{item.step}</span>
                  <h4 className="font-black uppercase tracking-tight text-xl mb-4">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed CTA */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="bg-black p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] italic">
                  Trebate robusnu <span className="text-primary">web platformu?</span>
                </h2>
                <p className="text-white/60 text-lg font-medium">
                  Naši inženjeri će analizirati vaše zahtjeve i predložiti optimalnu arhitekturu temeljenu na EasyEdit CMS-u.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <Link href="/kontakt">Zakaži tech konzultacije</Link>
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
