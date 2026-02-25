import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  LifeBuoy, 
  BarChart3, 
  Settings, 
  ArrowRight,
  Headset,
  CheckCircle2,
  Lock,
  Cpu,
  RefreshCw
} from "lucide-react";
import Link from "next/link";

const SLA_TIERS = [
  {
    name: "Standard Care",
    desc: "Idealno za stabilne informativne platforme.",
    features: [
      "Sigurnosne zakrpe (Security Patches)",
      "Mjesečni Backup sustava",
      "Email podrška (8/5)",
      "Odziv unutar 24h",
      "Monitoring dostupnosti"
    ],
    level: "Basic"
  },
  {
    name: "Business Engine",
    desc: "Za rastuće e-commerce i portal sustave.",
    features: [
      "Sve iz Standard paketa",
      "Tjedni Backup na 3 lokacije",
      "Prioritetno rješavanje bugova",
      "Odziv unutar 4h (Critical)",
      "Performance optimization audit",
      "Tehničko savjetovanje (2h/mj)"
    ],
    level: "Recommended",
    featured: true
  },
  {
    name: "Enterprise SLA",
    desc: "Za kritične sustave s nultom tolerancijom na downtime.",
    features: [
      "Sve iz Business paketa",
      "Real-time Remote Backup",
      "Support 24/7 (Critical issues)",
      "Odziv unutar 1h (Critical)",
      "Dedicated account engineer",
      "Usklađenost s ISO standardima",
      "Custom development bucket"
    ],
    level: "Mission Critical"
  }
];

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Partnering / Podrška & Održavanje
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inženjering <span className="text-primary">kontinuiteta.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Lansiranjem projekta naša suradnja tek počinje. Osiguravamo stabilnost, sigurnost i evoluciju vašeg digitalnog sustava kroz strukturirane SLA modele.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt">Zatražite SLA ponudu</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="#sla">Pregled razina podrške</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Value Pillars */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black">
              {[
                {
                  title: "Proaktivna Zaštita",
                  desc: "Ne čekamo da se problem dogodi. Naši inženjeri proaktivno prate sustav i primjenjuju zakrpe prije nego što postanu ranjivosti.",
                  icon: ShieldCheck
                },
                {
                  title: "Responzivni Inženjering",
                  desc: "Kada trebate pomoć, ne razgovarate s botom. Dobivate izravan pristup inženjerima koji poznaju vašu arhitekturu.",
                  icon: Headset
                },
                {
                  title: "Evolucijski Razvoj",
                  desc: "Tehnologija se mijenja. Osiguravamo da vaša platforma raste i prilagođava se novim verzijama preglednika i API-ja.",
                  icon: RefreshCw
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 space-y-6">
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLA Tiers */}
        <section id="sla" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic">Razine <span className="text-secondary">odgovornosti.</span></h2>
              <p className="text-xl text-muted-foreground font-medium">
                Odaberite razinu podrške koja odgovara kritičnosti vašeg poslovanja.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {SLA_TIERS.map((tier, idx) => (
                <div 
                  key={idx} 
                  className={`border-2 border-black p-10 flex flex-col relative ${tier.featured ? 'bg-black text-white shadow-[20px_20px_0px_0px_rgba(0,170,166,0.1)]' : 'bg-white'}`}
                >
                  {tier.featured && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1">
                      Najčešći odabir
                    </span>
                  )}
                  <div className="mb-8">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${tier.featured ? 'text-secondary' : 'text-primary'}`}>
                      {tier.level}
                    </span>
                    <h3 className="text-3xl font-black uppercase tracking-tighter italic mt-2">{tier.name}</h3>
                    <p className={`text-sm mt-4 font-medium ${tier.featured ? 'text-white/60' : 'text-muted-foreground'}`}>
                      {tier.desc}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-12 flex-grow">
                    {tier.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-3 text-sm font-medium leading-tight">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.featured ? 'text-secondary' : 'text-primary'}`} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`rounded-none font-black uppercase tracking-widest text-xs h-12 w-full ${tier.featured ? 'bg-secondary hover:bg-secondary/90' : 'bg-black'}`}
                    asChild
                  >
                    <Link href="/kontakt">Odaberi ovaj paket</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Portal Teaser */}
        <section className="py-24 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic mb-8 leading-none">
                    Transparentan <span className="text-primary">workflow.</span>
                  </h2>
                  <p className="text-white/60 text-lg font-medium leading-relaxed">
                    Svim klijentima pod podrškom omogućujemo pristup našem internom Ticketing sustavu. Pratite status svakog zahtjeva, povijest izmjena i utrošene sate u realnom vremenu.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center">
                      <LifeBuoy className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold uppercase text-sm tracking-widest text-primary">Ticketing System</h4>
                    <p className="text-xs text-white/40 leading-relaxed">Centralizirano upravljanje svim tehničkim zahtjevima i incidentima.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-bold uppercase text-sm tracking-widest text-primary">Monthly Reports</h4>
                    <p className="text-xs text-white/40 leading-relaxed">Detaljan uvid u zdravlje sustava, promet i izvršene optimizacije.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-primary/5 border border-primary/20 p-12 aspect-square flex flex-col justify-center relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  <Settings className="w-32 h-32 text-primary/20 absolute -right-10 -bottom-10 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                  
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6">ISO 27001 Ready Support</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Naši procesi održavanja usklađeni su s međunarodnim standardima informacijske sigurnosti, osiguravajući da vaši podaci ostanu zaštićeni tijekom svakog tehničkog zahvata.
                  </p>
                  
                  <ul className="space-y-3">
                    {["Change Management protokol", "Incident Response plan", "Zatvoreni SSH pristup", "Audit logiranje izmjena"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary">
                        <div className="w-1 h-1 bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-24 bg-white border-t border-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 italic leading-none">
              Tehnička sigurnost za <span className="text-primary">vaš mir.</span>
            </h2>
            <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto mb-12">
              Ne prepuštajte stabilnost vašeg poslovanja slučaju. Dogovorite paket podrške prilagođen vašim potrebama.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                <Link href="/kontakt">Zakaži konzultacije</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                <Link href="/o-nama">Upoznajte naš tim <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
