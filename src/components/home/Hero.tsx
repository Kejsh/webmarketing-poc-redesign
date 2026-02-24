
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            Vlastita Tehnologija • Engineering Partner
          </div>
          
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
            Custom rješenja na <span className="text-primary">EasyEdit</span> platformi.
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12 leading-tight">
            Razvijamo stabilne, sigurne i skalabilne digitalne sustave s fokusom na Agile procese, duboke integracije i dugoročnu tehnološku podršku.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <Button size="lg" className="h-14 px-10 text-sm font-black uppercase tracking-widest rounded-none w-full sm:w-auto bg-primary hover:bg-primary/90 transition-transform hover:-translate-y-1" asChild>
              <Link href="/kontakt">Dogovori razgovor / Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-sm font-black uppercase tracking-widest rounded-none w-full sm:w-auto border-2 border-black hover:bg-black hover:text-white transition-transform hover:-translate-y-1" asChild>
              <Link href="/kontakt?type=brief">Pošalji brief <ArrowRight className="w-4 h-4 ml-2"/></Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/10">
            <div className="space-y-1">
              <p className="text-4xl font-black text-black">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Godina iskustva</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-black text-black">500+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Projekata</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-black text-black">270</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Aktivnih licenci</p>
            </div>
            <div className="flex items-center gap-4 border-l border-black/10 pl-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-white flex items-center justify-center text-[8px] font-bold">
                    LOGO
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-black leading-tight uppercase tracking-tighter">
                Vjeruju nam<br/>vodeće tvrtke
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract Tech Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/30 -z-10 skew-x-[-12deg] translate-x-1/2" />
    </section>
  );
}
