import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Puzzle, 
  Layout, 
  ShoppingCart, 
  BarChart3, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Settings, 
  Users, 
  Database,
  ArrowRight,
  Search,
  MessageSquare,
  FileText,
  Mail,
  Smartphone
} from "lucide-react";
import Link from "next/link";

const MODULE_CATEGORIES = [
  {
    title: "Core & Infrastructure",
    description: "Temeljni moduli za stabilnost, sigurnost i upravljanje podacima.",
    modules: [
      { name: "EasyEdit Core CMS", desc: "Središnji sustav za upravljanje sadržajem i dozvolama.", icon: Layout },
      { name: "Multilanguage Engine", desc: "Upravljanje neograničenim brojem jezika i lokalizacija.", icon: Globe },
      { name: "Backup & Restore", desc: "Automatizirana pohrana i brzi oporavak podataka.", icon: ShieldCheck },
      { name: "Advanced Analytics", desc: "Duboki uvid u ponašanje korisnika bez gubitka privatnosti.", icon: BarChart3 },
      { name: "DAM (Digital Asset Management)", desc: "Centralizirana arhiva slika, videa i dokumenata.", icon: FileText },
      { name: "Workflow Management", desc: "Definiranje procesa odobravanja sadržaja.", icon: Settings }
    ]
  },
  {
    title: "Commerce & Sales",
    description: "Moduli dizajnirani za maksimizaciju konverzija i automatizaciju prodaje.",
    modules: [
      { name: "Web Shop Engine", desc: "Snažan motor za B2B i B2C prodaju s custom logikom.", icon: ShoppingCart },
      { name: "Payment Gateway Sync", desc: "Sigurna integracija s vodećim procesorima plaćanja.", icon: Zap },
      { name: "Order Management", desc: "Automatizacija obrade narudžbi i statusa isporuke.", icon: Database },
      { name: "Inventory Sync", desc: "Sinkronizacija zaliha s ERP sustavima u realnom vremenu.", icon: Database },
      { name: "Discounts & Coupons", desc: "Fleksibilan sustav promocija i lojalnosti.", icon: Zap },
      { name: "Product Reviews", desc: "Napredni sustav recenzija i društvenog dokaza.", icon: MessageSquare }
    ]
  },
  {
    title: "Marketing & Growth",
    description: "Alati za vidljivost, personalizaciju i angažman korisnika.",
    modules: [
      { name: "Advanced SEO Manager", desc: "Tehnička optimizacija integrirana u srž koda.", icon: Search },
      { name: "Personalization Engine", desc: "Prikaz sadržaja temeljen na interesima posjetitelja.", icon: Users },
      { name: "A/B Testing Tool", desc: "Native alat za testiranje učinkovitosti sučelja.", icon: BarChart3 },
      { name: "Newsletter Automator", desc: "Integracija s email sustavima i automatizacija lista.", icon: Mail },
      { name: "Blog & Insights", desc: "Napredno uređivanje i distribucija edukativnog sadržaja.", icon: FileText },
      { name: "Ad Management", desc: "Upravljanje oglasnim prostorom na vlastitoj platformi.", icon: Smartphone }
    ]
  },
  {
    title: "Integrations & Ops",
    description: "Povezivanje EasyEdit platforme s vašim poslovnim ekosustavom.",
    modules: [
      { name: "ERP Bridge", desc: "Duboka integracija sa SAP, Navision, Pantheon i drugima.", icon: Database },
      { name: "CRM Connector", desc: "Povezivanje leadova s HubSpot, Salesforce ili custom CRM-om.", icon: Users },
      { name: "API Gateway", desc: "Robusni endpointovi za komunikaciju s vanjskim aplikacijama.", icon: Settings },
      { name: "Ticketing & Support", desc: "Interni sustav za podršku klijentima i korisnicima.", icon: MessageSquare },
      { name: "Geolocation & Maps", desc: "Napredno pretraživanje lokacija i mapiranje podataka.", icon: Globe },
      { name: "Project Management", desc: "Upravljanje zadacima i dokumentacijom unutar portala.", icon: FileText }
    ]
  }
];

export default function ModulesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              EasyEdit CMS / Katalog Modula
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Modularni <span className="text-primary">ekosustav.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Sastavite platformu točno prema svojim potrebama. Odaberite između 30+ provjerenih modula ili zatražite razvoj potpuno nove funkcionalnosti.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt">Zatražite ponudu za module</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/easyedit">Tehnički pregled platforme</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Modules Catalog */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              {MODULE_CATEGORIES.map((category, cidx) => (
                <div key={cidx} className="space-y-12">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter italic mb-4">{category.title}</h2>
                    <p className="text-muted-foreground font-medium">{category.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
                    {category.modules.map((module, midx) => (
                      <div key={midx} className="bg-white p-10 group hover:bg-muted transition-colors flex flex-col h-full">
                        <div className="w-12 h-12 bg-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                          <module.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 leading-none">{module.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium leading-tight mb-8 flex-grow">{module.desc}</p>
                        <div className="pt-6 border-t border-black/5">
                           <span className="text-[10px] font-black uppercase tracking-widest text-black/40 group-hover:text-primary transition-colors flex items-center gap-2">
                             Saznaj više o modulu <ArrowRight className="w-3 h-3" />
                           </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Module Development CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-black text-white p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 italic leading-none">
                  Trebate nešto <span className="text-primary">posebno?</span>
                </h2>
                <p className="text-white/60 text-lg font-medium">
                  EasyEdit arhitektura nam omogućuje razvoj potpuno novih modula prilagođenih vašim jedinstvenim poslovnim procesima. Naši inženjeri će pretvoriti vašu ideju u stabilan kod.
                </p>
              </div>
              <div className="relative z-10">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <Link href="/kontakt?type=brief">Započnite custom razvoj</Link>
                </Button>
              </div>
              <Puzzle className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -z-0 rotate-12" />
            </div>
          </div>
        </section>

        {/* FAQ - Quick Module Questions */}
        <section className="py-24 border-t border-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic text-center mb-16">Pitanja o modulima</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="font-black uppercase tracking-tight text-lg">Mogu li se moduli dodavati naknadno?</h4>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">Da. EasyEdit je projektiran tako da platforma može rasti s vašim poslovanjem. Moduli se mogu aktivirati i konfigurirati u bilo kojoj fazi životnog ciklusa projekta.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-black uppercase tracking-tight text-lg">Jesu li moduli optimizirani za brzinu?</h4>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">Apsolutno. Svaki modul prolazi rigorozne testove performansi. Ne koristimo "third-party" bloatware, već optimizirani native kod koji osigurava 90+ Core Web Vitals ocjene.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
