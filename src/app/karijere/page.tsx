"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Code2, 
  ShieldCheck, 
  Workflow, 
  Zap, 
  Users, 
  Rocket, 
  Coffee, 
  GraduationCap,
  ArrowRight,
  Monitor,
  Heart,
  CalendarDays
} from "lucide-react";
import Link from "next/link";

const HOW_WE_WORK = [
  "Inženjerska autonomija u donošenju arhitektonskih odluka.",
  "Stroga kultura Code Review procesa za svaku liniju koda.",
  "Agile/Scrum metodologija s jasnim dvotjednim ciljevima.",
  "Fokus na pisanje čistog, testabilnog i dokumentiranog koda.",
  "Kontinuirano učenje kroz interne radionice i vanjske edukacije.",
  "Izravna suradnja s klijentima na rješavanju kompleksnih problema."
];

const BENEFITS = [
  { title: "Remote-first kultura", desc: "Radite od kuće ili iz ureda u Zagrebu.", icon: Rocket },
  { title: "Vrhunska oprema", desc: "Sami birate svoj inženjerski setup.", icon: Monitor },
  { title: "Edukacijski budžet", desc: "Plaćeni tečajevi, certifikati i konferencije.", icon: GraduationCap },
  { title: "Fleksibilno vrijeme", desc: "Fokus je na isporuci, ne na radnom vremenu.", icon: CalendarDays },
  { title: "MultiSport kartica", desc: "Brinemo o tvom fizičkom zdravlju.", icon: Heart },
  { title: "Timski ručkovi", desc: "Zajednička druženja i razmjena znanja.", icon: Coffee },
  { title: "Referral bonus", desc: "Nagrade za preporuku novih kolega.", icon: Users },
  { title: "Moderan stack", desc: "Rad na EasyEdit platformi i modernim alatima.", icon: Zap }
];

const JOBS = [
  { id: "senior-nextjs-engineer", title: "Senior Next.js Engineer", location: "Remote / Zagreb", type: "Full-time", level: "Senior" },
  { id: "fullstack-developer-core", title: "Fullstack Developer (EasyEdit Core)", location: "Hybrid / Zagreb", type: "Full-time", level: "Medior/Senior" },
  { id: "qa-security-engineer", title: "QA / Security Engineer", location: "Remote", type: "Full-time", level: "Senior" },
  { id: "product-manager-ecommerce", title: "Product Manager (E-commerce)", location: "Hybrid / Zagreb", type: "Full-time", level: "Senior" },
  { id: "frontend-developer-react", title: "Frontend Developer (React)", location: "Remote / Zagreb", type: "Full-time", level: "Medior" },
  { id: "devops-cloud-engineer", title: "DevOps & Cloud Engineer", location: "Remote", type: "Full-time", level: "Senior" }
];

const RECRUITMENT_PROCESS = [
  { step: "01", title: "Prijava & Pregled", desc: "Pregledavamo vaš životopis i portfelj radova." },
  { step: "02", title: "Inicijalni razgovor", desc: "Kratki poziv o vašim ambicijama i našim očekivanjima." },
  { step: "03", title: "Tehnički izazov", desc: "Zadatak koji simulira stvarne probleme s kojima se susrećemo." },
  { step: "04", title: "Finalni intervju", desc: "Dubinski razgovor s tech leadovima i timom." }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Karijere / Engineering Culture
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Gradi sustave koji <span className="text-primary">rade.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Pridružite se timu koji ne vjeruje u prečace. Razvijamo vlastitu tehnologiju, rješavamo kompleksne integracije i postavljamo standarde u industriji.
            </p>
            <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
              <Link href="#open-positions">Pogledaj otvorene pozicije</Link>
            </Button>
          </div>
        </section>

        {/* Kako radimo */}
        <section className="bg-slate-50 py-24 border-y border-black mb-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-8">Kako <span className="text-secondary">stvaramo.</span></h2>
                <div className="grid grid-cols-1 gap-4">
                  {HOW_WE_WORK.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-6 bg-white border-2 border-black/5">
                      <div className="w-1.5 h-1.5 bg-secondary shrink-0 mt-2" />
                      <p className="font-bold uppercase tracking-tight text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square bg-black text-white p-12 lg:p-20 flex flex-col justify-center overflow-hidden">
                <Terminal className="w-24 h-24 text-primary/20 absolute -right-6 -top-6" />
                <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6">Inženjerska Autonomija.</h3>
                <p className="text-lg text-white/70 font-medium leading-relaxed mb-8">
                  Kod nas ne dobivate samo taskove. Dobivate probleme koje treba riješiti. Očekujemo od vas da predlažete rješenja, birate alate i preuzimate ownership nad arhitekturom.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Node.js", "Go", "PostgreSQL", "Redis", "Genkit"].map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-[8px] font-black uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefiti */}
        <section className="container mx-auto px-4 mb-32">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic text-center mb-16">Standardi <span className="text-accent">života i rada.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border-2 border-black">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="bg-white p-10 group hover:bg-muted transition-colors flex flex-col h-full">
                <div className="w-12 h-12 bg-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-black uppercase tracking-tight text-lg italic mb-2 leading-none">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground font-medium leading-tight">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Otvorene pozicije */}
        <section id="open-positions" className="container mx-auto px-4 mb-32 max-w-5xl">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-16">Postani dio <span className="text-primary">tima.</span></h2>
          <div className="space-y-4">
            {JOBS.map((job, idx) => (
              <Link 
                href={`/karijere/${job.id}`} 
                key={idx} 
                className="bg-white border-2 border-black p-8 flex flex-col md:flex-row justify-between items-center gap-8 group hover:bg-slate-50 transition-all"
              >
                <div className="space-y-2 text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-2">
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-black text-white">{job.type}</span>
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 border border-black/10 text-black/40">{job.level}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight italic group-hover:text-primary transition-colors">{job.title}</h3>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{job.location}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/20 group-hover:text-primary transition-colors hidden md:block">Detalji pozicije</span>
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Proces zapošljavanja */}
        <section className="bg-black text-white py-24 border-y border-white/10 mb-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic text-center mb-20">Proces <span className="text-primary">selekcije.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
              {RECRUITMENT_PROCESS.map((step, idx) => (
                <div key={idx} className="space-y-6 text-center md:text-left">
                  <span className="text-5xl font-black italic text-primary/30 block">{step.step}</span>
                  <h4 className="font-black uppercase text-xl italic">{step.title}</h4>
                  <p className="text-xs text-white/40 font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Otvorena prijava */}
        <section className="container mx-auto px-4">
          <div className="bg-slate-50 border-2 border-black p-12 lg:p-24 text-center relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-none">
                  Nemaš svoju <span className="text-primary">ulogu?</span>
                </h2>
                <p className="text-xl font-medium max-w-2xl mx-auto mb-12 text-muted-foreground">
                  Ako misliš da tvoj set vještina može unaprijediti naš proces, pošalji nam otvorenu molbu. Uvijek smo otvoreni za razgovor s talentiranim ljudima.
                </p>
                <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <Link href="/kontakt">Pošalji otvorenu prijavu</Link>
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
