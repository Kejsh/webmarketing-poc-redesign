
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CASES = [
  {
    title: "Globalni B2B E-commerce",
    industry: "Proizvodnja",
    type: "Platforma & Integracija",
    outcome: "40% uštede kroz automatizaciju.",
    imgId: "case-study-1",
  },
  {
    title: "Portal za osiguranje",
    industry: "Financije",
    type: "Custom Software",
    outcome: "1M+ mjesečnih sesija.",
    imgId: "case-study-2",
  },
  {
    title: "IoT Supply Chain Dashboard",
    industry: "Logistika",
    type: "Integracije",
    outcome: "Praćenje u realnom vremenu.",
    imgId: "case-study-3",
  },
  {
    title: "Enterprise Intranet",
    industry: "Retail",
    type: "Poslovni portal",
    outcome: "Poboljšana interna komunikacija.",
    imgId: "case-study-1",
  },
];

export function CaseStudyGrid() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4 italic">
            Studije <span className="text-accent">Slučaja</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Dokazana rješenja za kompleksne poslovne izazove vodećih regionalnih tvrtki.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border-2 border-black mb-20">
          {CASES.map((item, idx) => {
            const img = PlaceHolderImages.find((i) => i.id === item.imgId);
            return (
              <div key={idx} className="bg-white group cursor-pointer overflow-hidden">
                <div className="relative aspect-video bg-muted overflow-hidden">
                   {img && (
                     <Image 
                       src={img.imageUrl} 
                       alt={item.title} 
                       fill 
                       className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                     />
                   )}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[8px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5">{item.industry}</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">{item.type}</span>
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-4 leading-none group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent">{item.outcome}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-black text-white p-12 lg:p-20 relative overflow-hidden mb-12">
           <Quote className="absolute top-10 right-10 w-40 h-40 text-white/5 -z-0" />
           <div className="relative z-10 max-w-4xl">
              <p className="text-2xl lg:text-4xl font-black italic tracking-tight leading-tight mb-8 uppercase">
                "WEB Marketing nam nije isporučio samo web, već kompletan sustav koji je transformirao našu prodaju i dao nam potpunu tehnološku neovisnost."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary" />
                <div>
                   <p className="font-black uppercase tracking-widest text-xs">Direktor Marketinga</p>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Vodeća Retail Mreža</p>
                </div>
              </div>
           </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase text-xs tracking-widest h-14 px-12" asChild>
            <Link href="/work">Sve studije slučaja</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
