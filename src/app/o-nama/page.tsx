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
  Globe,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const VALUES = [
  {
    title: "Engineering First",
    desc: "Ne vjerujemo u gotova rješenja koja zahtijevaju kompromise. Svaki red koda pišemo s ciljem maksimalne performanse i sigurnosti.",
    icon: Cpu
  },
  {
    title: "Integritet podataka",
    desc: "Privatnost i sigurnost nisu 'feature', već temelj. EasyEdit CMS je dizajniran da oklopi vaše najvrednije digitalne resurse.",
    icon: ShieldCheck
  },
  {
    title: "Dugoročni rast",
    desc: "Nismo ovdje za jedan projekt. Mi smo vaši tehnološki partneri koji prate i usmjeravaju vašu digitalnu evoluciju godinama.",
    icon: TrendingUp
  }
];

const TIMELINE = [
  { year: "1999", title: "Početak vizije", desc: "Osnovan WEB Marketing kao jedna od prvih agencija fokusiranih isključivo na digitalni razvoj u regiji." },
  { year: "2005", title: "EasyEdit v1.0", desc: "Lansirana prva verzija naše vlastite platforme za upravljanje sadržajem, fokusirana na brzinu i stabilnost." },
  { year: "2012", title: "Enterprise Fokus", desc: "Specijalizacija za kompleksne e-commerce sustave i duboke ERP integracije s vodećim globalnim vendorima." },
  { year: "2018", title: "Modularna Revolucija", desc: "EasyEdit CMS postaje potpuno modularan sustav s preko 30+ provjerenih modula za enterprise klijente." },
  { year: "Danas", title: "Engineering Partner", desc: "Preko 500 uspješnih projekata i 270 aktivnih licenci koje pokreću regionalno i globalno poslovanje." }
];

export default function AboutPage() {
  const teamImg = PlaceHolderImages.find(i => i.id === 'team-working');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Tvrtka / Brand Story & Vizija
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inženjering <span className="text-primary">povjerenja</span> od 1999.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Nismo samo web agencija. Mi smo tim inženjera, stratega i kreativaca koji vjeruju da je vlastita tehnologija jedini put do istinske digitalne neovisnosti.
            </p>
          </div>
        </section>

        {/* Brand Image & Philosophy */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] lg:aspect-square bg-slate-100 border-2 border-black overflow-hidden group">
               {teamImg && (
                 <Image 
                   src={teamImg.imageUrl} 
                   alt="WEB Marketing Team" 
                   fill 
                   className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-90"
                 />
               )}
               <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-all" />
            </div>
            <div className="space-y-12 lg:pl-12">
               <div>
                  <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-6 leading-none">
                    Zašto radimo <span className="text-primary">drugačije?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                    Dok se drugi oslanjaju na generička open-source rješenja, mi smo proveli četvrt stoljeća razvijajući vlastitu platformu. Zašto? Jer vaša sigurnost, brzina i skalabilnost ne smiju ovisiti o tuđim pluginovima.
                  </p>
               </div>
               <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                   <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                     <CheckCircle2 className="w-4 h-4 text-white" />
                   </div>
                   <p className="font-bold uppercase tracking-tight text-sm">Puna kontrola nad izvornim kodom</p>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-1">
                     <CheckCircle2 className="w-4 h-4 text-white" />
                   </div>
                   <p className="font-bold uppercase tracking-tight text-sm">Proaktivna zaštita bez vanjskih ranjivosti</p>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 mt-1">
                     <CheckCircle2 className="w-4 h-4 text-white" />
                   </div>
                   <p className="font-bold uppercase tracking-tight text-sm">Inženjerska podrška bez posrednika</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="bg-slate-50 py-24 border-y border-black mb-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-6">Naši <span className="text-secondary">stupovi.</span></h2>
              <p className="text-muted-foreground font-medium max-w-2xl mx-auto">Vrijednosti koje su nas vodile kroz 25 godina digitalne transformacije.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black">
              {VALUES.map((val, idx) => (
                <div key={idx} className="bg-white p-12 space-y-6 group hover:bg-muted transition-colors">
                  <div className="w-14 h-14 bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <val.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">{val.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="container mx-auto px-4 mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-16 text-center">Evolucija <span className="text-accent">izvrsnosti.</span></h2>
            <div className="space-y-12">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-8 items-start group">
                  <div className="w-32 shrink-0">
                    <span className="text-4xl font-black text-black/10 group-hover:text-primary transition-colors italic">{item.year}</span>
                  </div>
                  <div className="flex-grow pt-2">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats & Quality Section */}
        <section className="bg-black text-white py-24 relative overflow-hidden mb-32">
           <div className="absolute inset-0 opacity-10 pointer-events-none skew-x-12 translate-x-1/2 bg-primary" />
           <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                 <div className="space-y-2">
                    <p className="text-6xl font-black italic text-primary">25+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Godina iskustva</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-6xl font-black italic text-secondary">500+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Projekata</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-6xl font-black italic text-accent">27</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Nagrada struke</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-6xl font-black italic text-primary">ISO</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Security Ready</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
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
