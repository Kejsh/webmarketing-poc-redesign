import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Layout, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  RefreshCw, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Workflow,
  ClipboardCheck,
  Zap,
  MessageSquare
} from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    number: "01",
    title: "Discovery & Arch",
    desc: "Dubinska analiza vaših poslovnih procesa, definiranje tehničke arhitekture i izrada detaljnog roadmapa projekta.",
    icon: Search,
    color: "text-primary"
  },
  {
    number: "02",
    title: "UI/UX Engineering",
    desc: "Projektiranje sučelja koje spaja estetiku s inženjerskom logikom, fokusirajući se na konverzije i lakoću korištenja.",
    icon: Layout,
    color: "text-secondary"
  },
  {
    number: "03",
    title: "Iterative Dev",
    desc: "Kodiranje modula kroz Scrum sprinteve. Svaka dva tjedna dobivate funkcionalnu verziju sustava na testiranje.",
    icon: Code2,
    color: "text-accent"
  },
  {
    number: "04",
    title: "QA & Hardening",
    desc: "Rigorozno testiranje performansi, sigurnosti i funkcionalnosti prije nego što bilo koja linija koda ode na produkciju.",
    icon: ShieldCheck,
    color: "text-primary"
  },
  {
    number: "05",
    title: "Launch & SEO",
    desc: "Sigurna migracija podataka i puštanje u rad uz maksimalnu optimizaciju za pretraživače od prvog dana.",
    icon: Rocket,
    color: "text-secondary"
  },
  {
    number: "06",
    title: "Support & SLA",
    desc: "Kontinuirano održavanje, proaktivna zaštita i strateško unapređenje sustava prema vašem rastu.",
    icon: RefreshCw,
    color: "text-accent"
  }
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Metodologija / Inženjerski Workflow
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inženjering <span className="text-primary">bez pretpostavki.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Naš proces je projektiran da eliminira nesigurnost. Koristimo Agile/Scrum metodologiju kako bismo osigurali brze isporuke, maksimalnu transparentnost i rješenja koja stvarno rade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10 shadow-xl shadow-primary/20" asChild>
                <Link href="/kontakt">Započnite projekt</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/easyedit">Tehnologija platforme</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* The 6-Step Grid */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-2 border-black">
              {STEPS.map((step, idx) => (
                <div key={idx} className="bg-white p-12 group hover:bg-muted transition-colors h-full flex flex-col">
                  <div className="flex items-start justify-between mb-12">
                    <span className="text-4xl font-black text-black/10 group-hover:text-primary transition-colors leading-none">{step.number}</span>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 italic leading-none">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed flex-grow">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scrum Deep Dive */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary mb-4 block">Agile Execution</span>
                <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic mb-8 leading-none">
                  Scrum kao <span className="text-secondary">standard.</span>
                </h2>
                <p className="text-muted-foreground font-medium text-lg leading-relaxed mb-12">
                  Kompleksne projekte ne razvijamo u mraku. Naš Scrum framework omogućuje vam potpunu kontrolu nad prioritetima i stalni uvid u napredak.
                </p>
                
                <div className="space-y-8">
                  {[
                    { 
                      title: "Dvotjedni Sprintevi", 
                      desc: "Radimo u kratkim ciklusima na kraju kojih isporučujemo testni kod.",
                      icon: Zap
                    },
                    { 
                      title: "Product Backlog", 
                      desc: "Jasna lista prioriteta koja se prilagođava vašim poslovnim potrebama.",
                      icon: ClipboardCheck
                    },
                    { 
                      title: "Sprint Review & Demo", 
                      desc: "Svaka dva tjedna demonstriramo napredak i prikupljamo vaš feedback.",
                      icon: Users
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-black uppercase tracking-tight text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground font-medium leading-tight">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-slate-50 border-2 border-black p-12 lg:p-16 relative group">
                  <div className="absolute top-0 right-0 w-full h-1 bg-secondary" />
                  <Workflow className="w-20 h-20 text-secondary/20 mb-10" />
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6">Transparentnost je norma.</h3>
                  <p className="text-lg text-muted-foreground font-medium mb-8">
                    Svim klijentima otvaramo pristup našem sustavu za praćenje zadataka. Ne morate nas pitati "što se događa" — to vidite u realnom vremenu.
                  </p>
                  <ul className="space-y-3">
                    {["Uvid u Ticketing sustav", "Jasni Burndown grafikoni", "Direktan pristup inženjerima", "Tjedni statusni izvještaji"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-secondary">
                        <div className="w-1.5 h-1.5 bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Quality Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none skew-x-12 translate-x-1/2 bg-primary" />
           <div className="container mx-auto px-4 relative z-10 text-center">
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic mb-12">Kvaliteta je <span className="text-primary">ne-pregovaračka.</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-black uppercase italic">Code Review</h4>
                  <p className="text-sm text-white/40 font-medium">Svaka linija koda prolazi peer-review prije spajanja na glavnu granu sustava.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-black uppercase italic">Security Audit</h4>
                  <p className="text-sm text-white/40 font-medium">Automatizirani i manualni testovi ranjivosti na svakom sprintu.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-black uppercase italic">Performance Test</h4>
                  <p className="text-sm text-white/40 font-medium">Osiguravamo 90+ Core Web Vitals ocjene kroz strogu optimizaciju imovine i koda.</p>
                </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden">
               <div className="relative z-10 max-w-2xl">
                  <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] italic">
                    Spremni za <span className="text-black">profesionalan proces?</span>
                  </h2>
                  <p className="text-white/80 text-xl font-medium">Zaboravite na "black box" razvoj. Dogovorite konzultacije i saznajte kako planiramo vaš projekt.</p>
               </div>
               <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                    <Link href="/kontakt">Zakaži konzultacije</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                    <Link href="/kontakt?type=brief">Pošalji brief <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
