
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Zap, 
  Users, 
  Heart, 
  Rocket, 
  Coffee, 
  GraduationCap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CULTURE_PILLARS = [
  {
    title: "Inženjerska autonomija",
    desc: "Vjerujemo u 'Engineering First' pristup. Inženjeri kod nas sudjeluju u arhitekturi, a ne samo u pukom kucanju koda.",
    icon: Terminal
  },
  {
    title: "Kontinuirani rast",
    desc: "Osiguran budžet za edukacije, konferencije i certifikate. Ako ti rasteš, raste i WEB Marketing.",
    icon: GraduationCap
  },
  {
    title: "Transparentni procesi",
    desc: "Radimo po Scrumu, bez mikro-menadžmenta. Fokus je na isporuci vrijednosti i kvaliteti koda.",
    icon: Zap
  }
];

const OPEN_POSITIONS = [
  {
    title: "Senior Next.js Engineer",
    type: "Full-time",
    location: "Zagreb / Remote",
    tags: ["Next.js", "TypeScript", "Tailwind", "Genkit"]
  },
  {
    title: "Fullstack Developer (EasyEdit Core)",
    type: "Full-time",
    location: "Zagreb / Hybrid",
    tags: ["Node.js", "PostgreSQL", "React", "Architecture"]
  },
  {
    title: "QA / Security Engineer",
    type: "Full-time",
    location: "Zagreb / Remote",
    tags: ["Testing", "Security Audit", "Automation"]
  },
  {
    title: "Product Manager (E-commerce focus)",
    type: "Full-time",
    location: "Zagreb / Hybrid",
    tags: ["Agile", "Scrum", "Business Analysis"]
  }
];

const BENEFITS = [
  { title: "Remote-first kultura", icon: Rocket },
  { title: "Edukacijski budžet", icon: GraduationCap },
  { title: "Vrhunska oprema", icon: Cpu },
  { title: "MultiSport kartica", icon: Heart },
  { title: "Timski ručkovi", icon: Coffee },
  { title: "Bonus za preporuku", icon: Users }
];

export default function CareersPage() {
  const teamImg = PlaceHolderImages.find(i => i.id === 'team-working');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Karijere / Pridruži se timu
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Gradi budućnost <span className="text-primary">weba.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Nismo samo agencija, mi smo inženjerski inkubator. Razvijamo vlastitu tehnologiju i rješavamo najkompleksnije enterprise izazove u regiji.
            </p>
            <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
              <Link href="#positions">Pogledaj otvorene pozicije</Link>
            </Button>
          </div>
        </section>

        {/* Culture & Philosophy */}
        <section className="bg-slate-50 py-24 border-y border-black mb-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square bg-white border-2 border-black overflow-hidden group">
                 {teamImg && (
                   <Image 
                     src={teamImg.imageUrl} 
                     alt="Inženjeri na djelu" 
                     fill 
                     className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-90"
                   />
                 )}
                 <div className="absolute top-0 right-0 p-8 text-right">
                    <span className="text-[10rem] font-black text-black/5 leading-none">CODE</span>
                 </div>
              </div>
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter italic mb-8 leading-none">
                    Naša <span className="text-primary">kultura.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                    U WEB Marketingu cijenimo znanje iznad svega. Naš stack je moderan, naši izazovi su veliki, a naša hijerarhija je plosnata.
                  </p>
                </div>
                <div className="space-y-8">
                  {CULTURE_PILLARS.map((pillar, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                        <pillar.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-tight text-xl mb-2 italic">{pillar.title}</h4>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack - Engineering Focus */}
        <section className="container mx-auto px-4 mb-32">
          <div className="bg-black text-white p-12 lg:p-24 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none skew-x-12 translate-x-1/2 bg-primary" />
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic mb-8 leading-none">Inženjerski <span className="text-primary">Stack.</span></h3>
                   <p className="text-white/60 text-lg font-medium mb-12">
                     Radimo s najmodernijim alatima kako bismo osigurali performanse i skalabilnost EasyEdit platforme.
                   </p>
                   <div className="flex flex-wrap gap-4">
                      {["Next.js 15", "TypeScript", "Tailwind CSS", "Genkit AI", "PostgreSQL", "Docker", "Redis", "Cloudflare"].map((tech, i) => (
                        <span key={i} className="px-6 py-2 border border-white/20 text-[10px] font-black uppercase tracking-widest bg-white/5">
                          {tech}
                        </span>
                      ))}
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="p-8 border border-primary/20 bg-primary/5">
                      <Code2 className="w-10 h-10 text-primary mb-6" />
                      <h4 className="font-black uppercase text-xl mb-4">Code Review & Standards</h4>
                      <p className="text-xs text-white/40 leading-relaxed italic">
                        Kvaliteta koda nam je svetinja. Svaki PR prolazi rigoroznu recenziju kako bismo osigurali stabilnost enterprise sustava naših klijenata.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto px-4 mb-32">
           <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-16 text-center">Što nudimo <span className="text-secondary">zauzvrat?</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-2 border-black">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="bg-white p-10 group hover:bg-muted transition-colors flex items-center gap-6">
                   <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-primary" />
                   </div>
                   <h4 className="font-black uppercase tracking-tight text-lg italic">{benefit.title}</h4>
                </div>
              ))}
           </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="container mx-auto px-4 mb-32">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic text-center">Otvorene <span className="text-accent">Pozicije.</span></h2>
            <div className="space-y-4">
              {OPEN_POSITIONS.map((pos, idx) => (
                <div key={idx} className="bg-slate-50 border-2 border-black p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-primary transition-all">
                  <div className="space-y-4 text-center md:text-left">
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                       <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-black text-white">{pos.type}</span>
                       <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 border border-black/10">{pos.location}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight italic group-hover:text-primary transition-colors">{pos.title}</h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                       {pos.tags.map((tag, t) => (
                         <span key={t} className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{tag}</span>
                       ))}
                    </div>
                  </div>
                  <Button className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10 shrink-0">
                    Prijavi se <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4">
          <div className="bg-primary p-12 lg:p-24 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-none">
                  Nema pozicije <span className="text-black">za tebe?</span>
                </h2>
                <p className="text-xl font-medium max-w-2xl mx-auto mb-12">
                  Uvijek smo u potrazi za talentiranim inženjerima. Pošalji nam svoj CV i GitHub profil na <span className="font-black text-black">posao@webmarketing.hr</span> i javit ćemo ti se.
                </p>
                <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <Link href="/kontakt">Pošalji otvorenu molbu</Link>
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
