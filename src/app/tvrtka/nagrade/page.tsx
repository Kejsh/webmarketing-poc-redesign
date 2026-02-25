import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Globe, 
  Cpu, 
  ArrowRight,
  Medal,
  BadgeCheck,
  Zap,
  Building2
} from "lucide-react";
import Link from "next/link";

const CERTIFICATES = [
  {
    title: "ISO/IEC 27001",
    desc: "Međunarodni standard za sustav upravljanja informacijskom sigurnošću. Vaši podaci su pohranjeni i obrađeni prema najstrožim protokolima.",
    icon: ShieldCheck,
    color: "text-primary"
  },
  {
    title: "ISO 9001:2015",
    desc: "Standard za upravljanje kvalitetom koji osigurava dosljednost u svim našim razvojnim i operativnim procesima.",
    icon: CheckCircle2,
    color: "text-secondary"
  },
  {
    title: "AWS Certified Partner",
    desc: "Naši inženjeri posjeduju certifikate za projektiranje i upravljanje kompleksnim cloud infrastrukturama.",
    icon: CloudIcon,
    color: "text-accent"
  }
];

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-1.5-1-2.8-2.4-3.3a5 5 0 0 0-9.1-2.2A4.5 4.5 0 0 0 10 19Z" />
    </svg>
  );
}

const AWARDS = [
  {
    year: "2023",
    title: "Best Enterprise Solution",
    org: "Regional Tech Summit",
    desc: "Nagrada za implementaciju EasyEdit platforme u kompleksne industrijske sustave."
  },
  {
    year: "2021",
    title: "Digital Innovation Award",
    org: "Vidi e-novation",
    desc: "Priznanje za inovativni pristup integraciji ERP sustava s custom e-commerce rješenjima."
  },
  {
    year: "2019",
    title: "Web Strategy Excellence",
    org: "Web Strategija",
    desc: "Zlatna nagrada za najbolju strategiju online prodaje u B2B sektoru."
  }
];

export default function AwardsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Tvrtka / Izvrsnost & Priznanja
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Standardi <span className="text-primary">kvalitete.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Kvaliteta nije cilj, već proces. Ponosni smo na certifikate i nagrade koji potvrđuju našu predanost inženjerskoj disciplini i sigurnosti.
            </p>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="bg-slate-50 py-24 border-y border-black mb-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-6">ISO & <span className="text-secondary">Security.</span></h2>
              <p className="text-muted-foreground font-medium max-w-2xl mx-auto">Međunarodno priznati standardi koji jamče sigurnost vašeg poslovanja.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black">
              {CERTIFICATES.map((cert, idx) => (
                <div key={idx} className="bg-white p-12 space-y-6 group hover:bg-muted transition-colors">
                  <div className="w-16 h-16 bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <cert.icon className={`w-8 h-8 ${cert.color}`} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Awards */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-6 leading-none">
                Nagrade <span className="text-accent">Struke.</span>
              </h2>
              <p className="text-muted-foreground font-medium mb-8">
                Priznanja kolega i industrije za rješenja koja pomiču granice mogućeg u digitalnom svijetu.
              </p>
              <Award className="w-24 h-24 text-accent/20" />
            </div>
            <div className="lg:col-span-8 space-y-8">
              {AWARDS.map((award, idx) => (
                <div key={idx} className="bg-white border-2 border-black p-10 flex flex-col md:flex-row gap-8 items-center group hover:border-primary transition-all">
                  <div className="w-20 h-20 bg-slate-50 flex items-center justify-center shrink-0 border border-black/5">
                    <Medal className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-black text-primary">{award.year}</span>
                      <span className="w-1 h-1 bg-black/20 rounded-full" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">{award.org}</span>
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight mb-2 italic">{award.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Partners */}
        <section className="container mx-auto px-4">
          <div className="bg-black text-white p-12 lg:p-24 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none skew-x-12 translate-x-1/2 bg-primary" />
             <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-16">Tehnološki <span className="text-primary">Ecosustav.</span></h2>
                <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 grayscale hover:opacity-100 transition-all">
                   {["Google Cloud", "Microsoft Azure", "AWS Partner", "Cisco Security", "Oracle Java"].map((p, i) => (
                     <div key={i} className="text-xl font-black uppercase tracking-[0.2em]">{p}</div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-32 container mx-auto px-4 text-center">
           <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-8">Povjerite nam svoj <span className="text-primary">sljedeći projekt.</span></h2>
           <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto mb-12">
             Naša dokazana kvaliteta je vaša garancija za stabilan i siguran sustav.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                <Link href="/kontakt">Zakaži konzultacije</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                <Link href="/work">Pogledaj portfolio <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
