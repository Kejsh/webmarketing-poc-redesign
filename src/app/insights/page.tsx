
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  Newspaper, 
  ShieldCheck, 
  Zap, 
  Search,
  Mail,
  Clock,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CATEGORIES = ["Sve", "Tehnologija", "Sigurnost", "E-commerce", "Poslovni procesi"];

const FEATURED_POST = {
  title: "AI u Enterprise pretrazi: Kako EasyEdit mijenja način na koji korisnici pronalaze podatke",
  desc: "Analiziramo integraciju velikih jezičnih modela (LLM) unutar zatvorenih sustava upravljanja sadržajem i prednosti za velike baze podataka.",
  date: "15.05.2024",
  cat: "Tehnologija",
  imgId: "insight-1",
  readTime: "8 min čitanja"
};

const INSIGHTS = [
  {
    title: "Sigurnost zatvorenog koda u 2024.",
    desc: "Zašto enterprise klijenti napuštaju open-source platforme u korist custom rješenja.",
    date: "10.05.2024",
    cat: "Sigurnost",
    readTime: "6 min"
  },
  {
    title: "Optimizacija checkout procesa",
    desc: "Inženjerski pristup smanjenju napuštanja košarice kroz performance tuning.",
    date: "02.05.2024",
    cat: "E-commerce",
    readTime: "5 min"
  },
  {
    title: "ERP Sinkronizacija bez greške",
    desc: "Vodič kroz middleware arhitekturu i transformaciju podataka u realnom vremenu.",
    date: "25.04.2024",
    cat: "Tehnologija",
    readTime: "10 min"
  },
  {
    title: "Agile vs. Waterfall u razvoju weba",
    desc: "Kako Scrum metodologija osigurava isporuku projekta na vrijeme i unutar budžeta.",
    date: "18.04.2024",
    cat: "Poslovni procesi",
    readTime: "7 min"
  }
];

const GUIDES = [
  { title: "Enterprise E-commerce Blueprint", type: "Whitepaper", size: "2.4 MB" },
  { title: "Security Audit Checklist for CTOs", type: "Vodič", size: "1.1 MB" },
  { title: "EasyEdit CMS Technical Spec", type: "Dokumentacija", size: "4.8 MB" }
];

export default function InsightsHub() {
  const featuredImg = PlaceHolderImages.find(i => i.id === FEATURED_POST.imgId);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Header Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Knowledge Hub / Insights & Znanje
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inženjerska <span className="text-primary">perspektiva.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl">
              Dubinske analize, tehnički vodiči i strateški uvid u budućnost digitalnog poslovanja. Bez "buzzworda", samo inženjersko iskustvo.
            </p>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="border-y border-black bg-slate-50 sticky top-[72px] z-40 mb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-2 py-4">
              <Search className="w-4 h-4 text-black/20 mr-4 hidden md:block" />
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className="px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all border-2 border-transparent hover:border-black/10 hover:bg-white"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Insight */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-black text-white p-0 relative overflow-hidden group">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden">
               {featuredImg && (
                 <Image 
                   src={featuredImg.imageUrl} 
                   alt={FEATURED_POST.title} 
                   fill 
                   className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                 />
               )}
            </div>
            <div className="p-12 lg:p-20 space-y-8 relative z-10">
               <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{FEATURED_POST.cat}</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {FEATURED_POST.readTime}
                  </span>
               </div>
               <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter italic leading-[0.95]">
                 {FEATURED_POST.title}
               </h2>
               <p className="text-lg text-white/60 font-medium leading-relaxed">
                 {FEATURED_POST.desc}
               </p>
               <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-14 px-10">
                 Pročitaj članak <ArrowRight className="w-4 h-4 ml-2" />
               </Button>
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border-2 border-black">
            {INSIGHTS.map((post, idx) => (
              <div key={idx} className="bg-white p-10 group hover:bg-muted transition-colors flex flex-col h-full cursor-pointer">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{post.cat}</span>
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">{post.date}</span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 leading-tight group-hover:text-primary transition-colors flex-grow">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium leading-tight mb-8">
                  {post.desc}
                </p>
                <div className="pt-6 border-t border-black/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest group-hover:text-primary transition-colors">
                  Čitaj više <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources & Guides */}
        <section className="bg-slate-50 py-32 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
              
              {/* Guides column */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-4">Vodiči i <span className="text-primary">Whitepapers.</span></h2>
                  <p className="text-muted-foreground font-medium">Strateški resursi za IT direktore i marketing menadžere.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {GUIDES.map((guide, idx) => (
                    <div key={idx} className="bg-white border-2 border-black p-8 flex items-start gap-6 group hover:shadow-[10px_10px_0px_0px_rgba(0,174,239,0.1)] transition-all">
                      <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-4">
                        <span className="text-[8px] font-black uppercase tracking-widest text-primary">{guide.type} • {guide.size}</span>
                        <h4 className="font-black uppercase tracking-tight text-lg leading-none">{guide.title}</h4>
                        <button className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                          Preuzmi PDF <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter column */}
              <div className="bg-black text-white p-12 flex flex-col justify-center relative overflow-hidden">
                <Mail className="w-12 h-12 text-primary mb-8" />
                <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6 leading-none">Pratite <span className="text-primary">evoluciju.</span></h3>
                <p className="text-white/60 font-medium mb-12">
                  Najnovija inženjerska rješenja i tech insights jednom mjesečno u vašem inboxu.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <Input 
                    className="bg-white/5 border-white/20 rounded-none h-14 text-white placeholder:text-white/20" 
                    placeholder="Vaša email adresa" 
                   />
                   <Button className="w-full h-14 bg-primary hover:bg-primary/90 rounded-none font-black uppercase tracking-widest text-xs">
                     Pretplatite se
                   </Button>
                </form>
                <p className="mt-8 text-[10px] font-bold text-white/30 uppercase tracking-widest italic text-center">
                  Pridružite se 1500+ profesionalaca.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Tech Partner CTA */}
        <section className="pt-32 container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 italic leading-none">
            Znanje je <span className="text-primary">besplatno.</span> <br className="hidden lg:block" /> Inženjering je <span className="text-black">naš posao.</span>
          </h2>
          <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto mb-12">
            Imate specifičan tehnički izazov o kojem nismo pisali? Naši inženjeri su spremni za direktan razgovor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
              <Link href="/kontakt">Zakaži razgovor</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
              <Link href="/kontakt?type=brief">Pošalji brief <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
