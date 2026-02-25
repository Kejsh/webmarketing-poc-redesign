"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Send, 
  Clock, 
  Cpu, 
  Lock,
  Workflow,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function JobDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const [submitted, setSubmitted] = useState(false);

  // Mock data mapping based on slug - in reality this would fetch from a database
  const jobTitle = slug?.toString().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Radna pozicija";

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Job Hero */}
        <section className="container mx-auto px-4 mb-16">
          <Link href="/karijere" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-3 h-3" /> Povratak na Karijere
          </Link>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">Full-time</span>
                <span className="border-2 border-black text-[10px] font-black uppercase tracking-widest px-3 py-1">Senior</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none mb-8">
                {jobTitle}
              </h1>
              <div className="flex items-center gap-6 text-black/40">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                  <MapPin className="w-4 h-4" /> Remote / Zagreb
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                  <Clock className="w-4 h-4" /> Objvavljeno prije 2 dana
                </div>
              </div>
            </div>
            <div className="hidden lg:block sticky top-32">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 shadow-xl shadow-primary/20" asChild>
                <Link href="#apply">Prijavi se odmah</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content & Form */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Job Description */}
            <div className="lg:col-span-7 space-y-16">
              
              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic border-b-2 border-black pb-4">O ulozi</h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Kao {jobTitle} u WEB Marketingu, radit ćete na razvoju i održavanju naše vlastite EasyEdit CMS platforme te implementaciji rješenja za velike enterprise klijente. Tražimo osobu koja razumije da je stabilnost koda jednako važna kao i same funkcionalnosti.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic border-b-2 border-black pb-4">Odgovornosti</h3>
                <ul className="space-y-4">
                  {[
                    "Razvoj skalabilnih komponenti sustava koristeći moderan stack.",
                    "Arhitekturno planiranje novih modula unutar EasyEdit platforme.",
                    "Provođenje i sudjelovanje u Code Review procesima.",
                    "Suradnja s ostalim inženjerima na optimizaciji performansi sustava.",
                    "Mentoriranje mlađih kolega i dijeljenje znanja.",
                    "Implementacija sigurnosnih protokola na razini koda.",
                    "Izrada tehničke dokumentacije za interne i vanjske potrebe.",
                    "Sudjelovanje u Agile ceremonijama i planiranju sprinteva."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm font-medium text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary shrink-0 mt-1.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic border-b-2 border-black pb-4">Što tražimo</h3>
                <ul className="space-y-4">
                  {[
                    "Minimalno 5 godina iskustva u profesionalnom razvoju softvera.",
                    "Izvrsno poznavanje TypeScripta i modernih frameworka.",
                    "Iskustvo u radu s relacijskim bazama podataka (PostgreSQL).",
                    "Razumijevanje principa sigurnosti weba i performansi.",
                    "Sposobnost samostalnog rješavanja kompleksnih problema.",
                    "Iskustvo u radu s Gitom i CI/CD procesima.",
                    "Odlično znanje engleskog jezika u pismu i govoru.",
                    "Želja za radom u timu koji cijeni kvalitetu iznad brzine."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm font-medium text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic border-b-2 border-black pb-4">Poželjno</h3>
                <ul className="space-y-4">
                  {[
                    "Iskustvo s Next.js 14/15 App Routerom.",
                    "Poznavanje Genkit ili sličnih AI razvojnih alata.",
                    "Iskustvo u razvoju vlastitih CMS ili E-commerce rješenja.",
                    "Poznavanje Docker i Kubernetes okruženja.",
                    "Zanimanje za informacijsku sigurnost i ISO standarde."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm font-medium text-muted-foreground">
                      <div className="w-1 h-1 bg-black/20 shrink-0 mt-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border-2 border-black p-10 space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic">Što nudimo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "Inženjerska Autonomija", icon: Cpu },
                    { title: "Remote-first pristup", icon: Workflow },
                    { title: "Edukacijski budžet", icon: GraduationCap },
                    { title: "Vrhunska oprema", icon: Lock },
                    { title: "Transparentni bonusi", icon: Zap }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <item.icon className="w-6 h-6 text-primary" />
                      <span className="font-bold uppercase text-xs tracking-tight">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div id="apply" className="lg:col-span-5">
              <div className="bg-black text-white p-8 lg:p-12 border-2 border-black shadow-[20px_20px_0px_0px_rgba(0,174,239,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
                
                {submitted ? (
                  <div className="text-center py-12 space-y-8 animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-primary mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tight italic mb-2">Prijava primljena!</h3>
                      <p className="text-white/60">Hvala vam na interesu. Javit ćemo vam se čim pregledamo vašu prijavu.</p>
                    </div>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none" onClick={() => setSubmitted(false)}>
                      Zatvori
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-black uppercase tracking-tight italic mb-8">Prijavi se za poziciju</h3>
                    <form className="space-y-6" onSubmit={handleApply}>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-white/40">Ime i Prezime</Label>
                        <Input className="bg-white/5 border-white/20 rounded-none h-14 text-white" placeholder="Npr. Ivan Horvat" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-white/40">Email adresa</Label>
                        <Input type="email" className="bg-white/5 border-white/20 rounded-none h-14 text-white" placeholder="ivan@tvrtka.hr" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-white/40">Link na CV / LinkedIn / Portfolio</Label>
                        <Input className="bg-white/5 border-white/20 rounded-none h-14 text-white" placeholder="https://..." required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-white/40">Kratka poruka (Opcionalno)</Label>
                        <Textarea className="bg-white/5 border-white/20 rounded-none min-h-[100px] text-white" placeholder="Zašto želite raditi s nama?" />
                      </div>
                      <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs">
                        Pošalji prijavu <Send className="w-4 h-4 ml-2" />
                      </Button>
                      <p className="text-[8px] font-bold text-white/30 uppercase text-center tracking-widest leading-relaxed">
                        Slanjem prijave pristajete na obradu vaših osobnih podataka u svrhu selekcijskog procesa.
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* Selekcijski proces sidebar */}
              <div className="mt-12 space-y-8">
                <h4 className="text-xl font-black uppercase tracking-tighter italic border-b border-black/10 pb-4">Proces selekcije</h4>
                <div className="space-y-6">
                  {["Prijava & Pregled", "Inicijalni razgovor", "Tehnički izazov", "Finalni intervju"].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-2xl font-black italic text-black/10">0{i+1}</span>
                      <p className="text-xs font-bold uppercase tracking-tight">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Sticky Apply Mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-black z-40">
          <Button size="lg" className="w-full rounded-none font-black uppercase tracking-widest text-xs h-14 px-10 shadow-xl" asChild>
            <Link href="#apply">Prijavi se odmah</Link>
          </Button>
        </div>

      </main>
      <Footer />
    </div>
  );
}
