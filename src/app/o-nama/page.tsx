import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  History, 
  Cpu, 
  ShieldCheck, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Zap,
  Code2,
  Lock,
  Workflow,
  User,
  Medal
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const TIMELINE = [
  { year: "1999", title: "Osnivanje", desc: "Početak rada kao jedna od prvih digitalnih agencija u regiji." },
  { year: "2005", title: "EasyEdit v1.0", desc: "Lansiranje vlastitog CMS sustava fokusiranog na stabilnost." },
  { year: "2012", title: "Enterprise Pivot", desc: "Specijalizacija za kompleksne integracije i B2B sustave." },
  { year: "2018", title: "Modularna Arhitektura", desc: "Transformacija EasyEdita u potpuno modularnu platformu." },
  { year: "Danas", title: "Engineering Partner", desc: "Vodeći tehnološki partner za najzahtjevnije klijente u regiji." }
];

const PRINCIPLES = [
  {
    title: "Code Quality",
    desc: "Svaki red koda prolazi rigorozne testove i inženjerski peer-review.",
    icon: Code2
  },
  {
    title: "Data Integrity",
    desc: "Privatnost i integritet podataka klijenta su temelj svake odluke.",
    icon: Lock
  },
  {
    title: "Transparentnost",
    desc: "Klijent ima uvid u proces rada i status zadataka u realnom vremenu.",
    icon: Workflow
  },
  {
    title: "Inovacija",
    desc: "Kontinuirano ulažemo u AI i nove tehnologije unutar vlastitog stacka.",
    icon: Zap
  },
  {
    title: "Skalabilnost",
    desc: "Projektiramo sustave koji rastu s vašim poslovanjem bez tehničkog duga.",
    icon: Cpu
  },
  {
    title: "Partnerstvo",
    desc: "Nismo samo dobavljač, već vanjski IT odjel fokusiran na vaš cilj.",
    icon: Users
  }
];

const TEAM = [
  { name: "Marko Marić", role: "CEO & Founder", bio: "25 godina iskustva u digitalnoj arhitekturi." },
  { name: "Ana Horvat", role: "Lead Developer", bio: "Specijalist za EasyEdit Core i skalabilne sustave." },
  { name: "Ivan Babić", role: "Security Engineer", bio: "Fokusiran na ISO standarde i hardening infrastrukture." },
  { name: "Petra Kovač", role: "Product Manager", bio: "Spaja poslovne ciljeve s inženjerskom izvedbom." }
];

export default function AboutPage() {
  const teamImg = PlaceHolderImages.find(i => i.id === 'team-working');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* A) Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Tvrtka / Brand Story & Inženjerski Tim
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inženjerska <span className="text-primary">izvrsnost</span> od 1999.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Vjerujemo da je vlastita tehnologija jedini put do stabilnosti. Naš tim inženjera pretvara kompleksne vizije u siguran i skalabilan kod.
            </p>
            <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
              <Link href="/kontakt">Zakažite razgovor</Link>
            </Button>
          </div>
        </section>

        {/* B) Timeline */}
        <section className="bg-slate-50 py-24 border-y border-black mb-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-16 text-center">Evolucija <span className="text-secondary">Puta.</span></h2>
            <div className="relative">
              {/* Horizontal line for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-black/10 -translate-y-1/2" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 border-2 border-black group hover:border-primary transition-all">
                    <span className="text-4xl font-black text-black/10 group-hover:text-primary transition-colors italic block mb-4">{item.year}</span>
                    <h4 className="font-black uppercase tracking-tight mb-2 text-lg">{item.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* C) Principi isporuke */}
        <section className="container mx-auto px-4 mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-6">Inženjerski <span className="text-accent">Principi.</span></h2>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto">Standardi koji osiguravaju da svaka naša isporuka nadilazi tržišna očekivanja.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-2 border-black">
            {PRINCIPLES.map((val, idx) => (
              <div key={idx} className="bg-white p-12 space-y-6 group hover:bg-muted transition-colors">
                <div className="w-14 h-14 bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <val.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight italic">{val.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* D) EasyEdit kao diferencijator */}
        <section className="container mx-auto px-4 mb-32">
          <div className="bg-black text-white p-12 lg:p-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none skew-x-12 translate-x-1/2 bg-primary" />
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                   <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic leading-none">
                     Snaga <span className="text-primary">vlastitog koda.</span>
                   </h3>
                   <p className="text-white/60 text-xl font-medium leading-relaxed">
                     EasyEdit CMS nije samo platforma, to je naša inženjerska baza koja nam omogućuje da eliminiramo 99% rizika povezanih s generičkim open-source rješenjima.
                   </p>
                   <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                     <Link href="/easyedit">Detalji platforme <ArrowRight className="ml-2 w-4 h-4" /></Link>
                   </Button>
                </div>
                <div className="border-l-2 border-primary/20 pl-12 space-y-8">
                   {[
                     "Nema nepotrebnih pluginova",
                     "Potpuna kontrola nad sigurnošću",
                     "Arhitektura prilagođena integracijama",
                     "Native SEO bez kompromisa"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                        <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* E) Brojke + nagrade/certifikati placeholder */}
        <section className="bg-slate-50 py-24 border-y border-black mb-32">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center items-center">
                 <div className="space-y-2">
                    <p className="text-6xl font-black italic text-primary">500+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Projekata</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-6xl font-black italic text-secondary">270</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Aktivnih licenci</p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-center gap-4 grayscale opacity-40">
                       <Medal className="w-12 h-12" />
                       <Award className="w-12 h-12" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Nagrade struke</p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-center gap-4 grayscale opacity-40 text-primary">
                       <ShieldCheck className="w-12 h-12" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/40">ISO 27001 Ready</p>
                 </div>
              </div>
           </div>
        </section>

        {/* F) Tim preview grid */}
        <section className="container mx-auto px-4 mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-6">Upoznajte <span className="text-secondary">Arhitekte.</span></h2>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto">Lideri i inženjeri koji stoje iza WEB Marketing vizije.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border-2 border-black">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white p-10 group hover:bg-muted transition-colors flex flex-col h-full">
                <div className="w-20 h-20 bg-slate-100 border-2 border-black mb-8 flex items-center justify-center">
                   <User className="w-10 h-10 text-black/20" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-1">{member.name}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">{member.role}</p>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* G) Final CTA Banner */}
        <section className="container mx-auto px-4">
          <div className="bg-primary p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden">
             <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] italic">
                  Gradimo <span className="text-black">budućnost zajedno.</span>
                </h2>
                <p className="text-white/80 text-xl font-medium">Upoznajte naše inženjere i saznajte kako možemo postati vaš tehnološki motor rasta.</p>
             </div>
             <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <Link href="/kontakt">Zakaži razgovor</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                  <Link href="/work">Pogledaj reference <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
