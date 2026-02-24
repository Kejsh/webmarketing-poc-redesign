
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-white border-t border-black">
      <div className="container mx-auto px-4">
        <div className="bg-primary p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 text-white relative overflow-hidden">
           {/* Abstract pattern placeholder */}
           <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none skew-x-12 translate-x-1/2 bg-black" />
           
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] italic">
                Recite nam što gradite — <span className="text-black">predložit ćemo najbolji put.</span>
              </h2>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/30">
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Besplatne tech konzultacije</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Procjena arhitekture</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black" />
                    <span className="text-[10px] font-black uppercase tracking-widest">EasyEdit Demo</span>
                 </div>
              </div>
           </div>

           <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                <Link href="/kontakt">Dogovori razgovor</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                <Link href="/kontakt?type=brief">Pošalji brief <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
           </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-muted">
           <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary">Email</p>
              <p className="text-xl font-black text-black">info@webmarketing.hr</p>
           </div>
           <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-secondary">Telefon</p>
              <p className="text-xl font-black text-black">+385 1 123 4567</p>
           </div>
           <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent">Lokacija</p>
              <p className="text-xl font-black text-black">Zagreb, Hrvatska</p>
           </div>
        </div>
      </div>
    </section>
  );
}
