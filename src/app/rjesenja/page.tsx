import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layout, ShoppingCart, Settings, Share2, ShieldCheck, Zap, Database } from "lucide-react";
import Link from "next/link";

const CORE_SOLUTIONS = [
  {
    title: "Web Platforme",
    description: "Kompleksna web rješenja visokih performansi temeljena na specifičnim poslovnim procesima.",
    features: ["Enterprise arhitektura", "Advanced SEO Core", "Scalable infrastructure"],
    icon: Layout,
    href: "/rjesenja/web-platforme",
    color: "text-primary"
  },
  {
    title: "E-commerce Sustavi",
    description: "B2B i B2C trgovine s dubokim integracijama koje pokreću rast prodaje i automatizaciju.",
    features: ["Omnichannel prodaja", "ERP/LMS Integracije", "Globalne transakcije"],
    icon: ShoppingCart,
    href: "/rjesenja/ecommerce",
    color: "text-secondary"
  },
  {
    title: "Poslovni Portali",
    description: "Custom softver za upravljanje podacima, klijentima (CRM) i internu digitalizaciju procesa.",
    features: ["Self-service klijent zona", "Data-driven dashboards", "High security"],
    icon: Settings,
    href: "/rjesenja/poslovni-portali",
    color: "text-accent"
  },
  {
    title: "Sistemske Integracije",
    description: "Besprijekorno povezivanje heterogenih sustava u jedinstvenu, funkcionalnu cjelinu.",
    features: ["SAP / Navision Sync", "API Economy", "Legacy Modernization"],
    icon: Share2,
    href: "/rjesenja/integracije",
    color: "text-primary"
  }
];

export default function SolutionsHub() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inženjering <span className="text-primary">digitalnog rasta.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Ne gradimo samo web stranice. Projektiramo stabilne digitalne ekosustave koji transformiraju poslovanje kroz vlastitu tehnologiju i Agile pristup.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10 shadow-xl shadow-primary/20" asChild>
                <Link href="/kontakt">Započnite projekt</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/work">Pogledaj reference</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Solutions Grid */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-4 italic">
                  Digitalni stupovi <span className="text-secondary">vašeg uspjeha.</span>
                </h2>
                <p className="text-muted-foreground font-medium">
                  Svako rješenje je rezultat duboke inženjerske analize i prilagođeno vašim specifičnim ciljevima.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border-2 border-black">
              {CORE_SOLUTIONS.map((sol, idx) => (
                <div key={idx} className="bg-white p-10 flex flex-col group hover:bg-muted transition-colors h-full">
                  <sol.icon className={cn("w-12 h-12 mb-8 group-hover:scale-110 transition-transform", sol.color)} />
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none">{sol.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-tight mb-8 flex-grow">{sol.description}</p>
                  
                  <ul className="space-y-2 mb-10">
                    {sol.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/60">
                        <div className="w-1 h-1 bg-accent" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link href={sol.href} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:translate-x-2 transition-transform">
                    Detalji rješenja <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EasyEdit Differentiation */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 italic leading-[0.95]">
                  Zašto svako naše rješenje koristi <span className="text-primary">EasyEdit Core?</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-black flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-tight text-xl mb-2">Sigurnost zatvorenog koda</h4>
                      <p className="text-sm text-muted-foreground font-medium">Za razliku od open-source platformi, EasyEdit nudi kontrolirani stack koji je drastično otporniji na vanjske napade.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-black flex items-center justify-center shrink-0">
                      <Zap className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-tight text-xl mb-2">Performanse bez bloatwarea</h4>
                      <p className="text-sm text-muted-foreground font-medium">Nema nepotrebnih pluginova. Svaka linija koda služi vašem projektu, osiguravajući vrhunske rezultate na Core Web Vitals testovima.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-black flex items-center justify-center shrink-0">
                      <Database className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-tight text-xl mb-2">Neograničena integracija</h4>
                      <p className="text-sm text-muted-foreground font-medium">EasyEdit je projektiran da bude "hub" vašeg digitalnog poslovanja, lako se povezujući s bilo kojim vanjskim sustavom.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <Button asChild className="rounded-none font-black uppercase tracking-widest text-xs h-12 px-8">
                    <Link href="/easyedit">Istražite EasyEdit platformu</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-black aspect-square lg:aspect-auto lg:h-[600px] relative overflow-hidden flex items-center justify-center">
                 {/* Abstract engineering pattern placeholder */}
                 <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="w-full h-full border-[20px] border-white/10 skew-x-12 translate-x-1/2" />
                    <div className="w-full h-full border-[40px] border-white/5 -skew-x-12 -translate-x-1/4" />
                 </div>
                 <div className="relative z-10 text-center p-12">
                    <span className="text-[10rem] font-black text-white/5 absolute -top-20 left-0 leading-none">EE</span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-4">Inženjering, ne samo kod.</h3>
                    <p className="text-white/60 font-medium">25 godina evolucije u svakom projektu.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Hub CTA */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 italic text-white leading-none">
              Trebate procjenu <span className="text-black">arhitekture?</span>
            </h2>
            <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-12">
              Naši tech leadovi će analizirati vašu ideju i predložiti optimalno tehnološko rješenje.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                <Link href="/kontakt">Zakažite tech konzultacije</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                <Link href="/kontakt?type=brief">Pošalji brief <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
