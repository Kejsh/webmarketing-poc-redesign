
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Zap, 
  Download,
  Users
} from "lucide-react";
import { notFound } from "next/navigation";

const GUIDE_SLUGS = [
  "enterprise-e-commerce-blueprint",
  "security-audit-checklist-2024",
  "easyedit-cms-technical-spec",
  "roi-of-custom-development",
];

export function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function GuideLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!GUIDE_SLUGS.includes(slug)) {
    notFound();
  }

  const guide = {
    title: "Enterprise E-commerce Blueprint",
    subtitle: "Vodič kroz arhitekturu robusnih prodajnih sustava s dubokim integracijama",
    benefits: [
      "Naučite kako projektirati middleware za SAP integraciju",
      "Otkrijte tajne 90+ Core Web Vitals ocjene u web shopu",
      "Smanjite troškove održavanja kroz modularnu arhitekturu"
    ],
    outline: [
      "Uvod u enterprise e-commerce trendove",
      "Mapiranje podataka između ERP-a i Weba",
      "Sigurnosni protokoli za online plaćanja",
      "Upravljanje s 100.000+ artikala bez usporavanja",
      "Personalizacija kao ključ konverzije",
      "Dugoročna skalabilnost i cloud infrastruktura"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  Ekskluzivni Vodič • 2024
                </span>
                <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
                  {guide.title}
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl italic border-l-4 border-primary pl-8">
                  "{guide.subtitle}"
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tight italic">Što ćete naučiti:</h3>
                <div className="grid gap-4">
                  {guide.benefits.map((b, i) => (
                    <div key={i} className="flex gap-4 items-start bg-slate-50 p-6 border-l-4 border-secondary">
                      <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                      <p className="font-bold uppercase tracking-tight text-sm">{b}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tight italic">Sadržaj vodiča:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guide.outline.map((o, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-black/20 rounded-full" /> {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-black text-white p-10 lg:p-12 border-2 border-black shadow-[20px_20px_0px_0px_rgba(0,174,239,0.1)] relative overflow-hidden sticky top-32">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
                
                <h3 className="text-2xl font-black uppercase tracking-tight italic mb-8">Preuzmi Besplatno</h3>
                <form className="space-y-6" action="#">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Ime i Prezime</label>
                    <Input className="bg-white/5 border-white/20 rounded-none h-14 text-white" placeholder="Npr. Ivan Horvat" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Poslovni Email</label>
                    <Input type="email" className="bg-white/5 border-white/20 rounded-none h-14 text-white" placeholder="ivan@tvrtka.hr" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Tvrtka</label>
                    <Input className="bg-white/5 border-white/20 rounded-none h-14 text-white" placeholder="Naziv vaše tvrtke" required />
                  </div>
                  <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs">
                    Zatraži Vodič <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-[8px] font-bold text-white/30 uppercase text-center tracking-widest leading-relaxed">
                    Preuzimanjem pristajete na našu politiku privatnosti i slanje edukativnog materijala.
                  </p>
                </form>
              </div>

              <div className="mt-12 p-8 border-2 border-black flex items-center gap-6">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-black/40" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Kome je namijenjeno?</p>
                  <p className="text-sm font-bold">CTO, E-commerce Manageri, CEO</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
