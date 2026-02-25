
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  RefreshCw, 
  ShieldCheck, 
  BarChart3, 
  Globe2, 
  Zap, 
  ArrowRight,
  Database,
  Truck,
  CreditCard
} from "lucide-react";
import Link from "next/link";

const ECOM_FEATURES = [
  {
    title: "Duboka ERP Integracija",
    desc: "Sinkronizacija zaliha, cijena i narudžbi u realnom vremenu s vašim SAP, Navision ili custom ERP sustavom.",
    icon: RefreshCw
  },
  {
    title: "B2B & B2C Hibrid",
    desc: "Personalizirani cjenici, rabatne skupine i workflow odobravanja narudžbi unutar jedinstvene platforme.",
    icon: Database
  },
  {
    title: "Globalni Scale",
    desc: "Multi-currency, multi-language i automatizirani izračuni poreza za nesmetano međunarodno poslovanje.",
    icon: Globe2
  },
  {
    title: "High-Performance Checkout",
    desc: "Optimizirani proces plaćanja bez trenja koji drastično povećava stopu konverzije i povjerenje kupaca.",
    icon: CreditCard
  }
];

export default function EcommercePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Rješenja / E-commerce Sustavi
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inženjering <span className="text-secondary">prodajnog rasta.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Projektiramo robusne e-commerce ekosustave koji automatiziraju vaše poslovanje i pretvaraju kompleksne procese u besprijekorno korisničko iskustvo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10 shadow-xl shadow-secondary/20" asChild>
                <Link href="/kontakt">Započnite projekt</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt?type=brief">Pošalji brief</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Technical Value Proposition */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-10 italic leading-none">
                  Više od <span className="text-secondary">web shopa.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {ECOM_FEATURES.map((feat, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="w-12 h-12 bg-black flex items-center justify-center">
                        <feat.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-black uppercase tracking-tight text-lg leading-none">{feat.title}</h4>
                      <p className="text-sm text-muted-foreground font-medium leading-tight">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white border-2 border-black p-8 lg:p-12 shadow-[20px_20px_0px_0px_rgba(0,170,166,0.1)]">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-6">EasyEdit E-com Engine</h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Custom logika obračuna cijena",
                      "Napredni sustav vaučera i lojalnosti",
                      "Integracija s logističkim sustavima",
                      "Zatvoreni kod za maksimalnu sigurnost",
                      "Bez ograničenja u broju artikala"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
                        <Zap className="w-4 h-4 text-secondary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="text-secondary p-0 h-auto font-black uppercase tracking-widest text-xs gap-2" asChild>
                    <Link href="/easyedit">Tehnička specifikacija platforme <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Ecosystem */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic">Besprijekorno <span className="text-primary">povezani.</span></h2>
              <p className="text-xl text-muted-foreground font-medium">
                Vaša trgovina ne smije biti otok. Integriramo je u vaš postojeći IT ekosustav.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black border-2 border-black">
              {[
                { label: "ERP sustavi", icon: RefreshCw, list: ["SAP", "Navision", "Pantheon"] },
                { label: "Plaćanja", icon: CreditCard, list: ["Corvus", "Stripe", "PayPal"] },
                { label: "Dostava", icon: Truck, list: ["GLS", "DPD", "DHL"] },
                { label: "Marketing", icon: BarChart3, list: ["GA4", "GTM", "FB Pixel"] }
              ].map((box, idx) => (
                <div key={idx} className="bg-white p-10 group hover:bg-muted transition-colors">
                  <box.icon className="w-8 h-8 text-primary mb-6" />
                  <h4 className="font-black uppercase tracking-tight text-xl mb-4">{box.label}</h4>
                  <ul className="space-y-1">
                    {box.list.map((item, li) => (
                      <li key={li} className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="bg-black p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] italic">
                  Spremni za <span className="text-secondary">skaliranje?</span>
                </h2>
                <p className="text-white/60 text-lg font-medium">
                  Naši tech leadovi će analizirati vaš prodajni proces i predložiti optimalno arhitekturno rješenje.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <Link href="/kontakt">Zakaži tech konzultacije</Link>
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
