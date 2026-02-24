
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ShieldCheck, Mail } from "lucide-react";

const POSTS = [
  {
    title: "AI u enterprise pretrazi",
    date: "12.05.2024",
    cat: "Tech",
  },
  {
    title: "Sigurnost: Open-source vs. Custom",
    date: "04.05.2024",
    cat: "Security",
  },
  {
    title: "Integracija ERP-a s e-commerceom",
    date: "28.04.2024",
    cat: "Business",
  },
];

export function InsightsCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic">Insights & Znanje</h2>
              <Link href="/insights" className="text-[10px] font-black uppercase tracking-widest hover:text-primary">Svi članci</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-muted border border-muted">
              {POSTS.map((post, idx) => (
                <div key={idx} className="bg-white p-8 group hover:bg-muted transition-colors cursor-pointer">
                  <span className="text-[8px] font-black uppercase tracking-widest text-primary mb-4 block">{post.cat}</span>
                  <h3 className="text-base font-black uppercase tracking-tight mb-8 leading-tight group-hover:text-primary">{post.title}</h3>
                  <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-widest text-muted-foreground">
                    <span>{post.date}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-accent/5 p-8 border-l-4 border-accent flex items-start gap-6">
              <ShieldCheck className="w-12 h-12 text-accent shrink-0" />
              <div>
                <h4 className="font-black uppercase tracking-tight mb-2">Security Spotlight</h4>
                <p className="text-sm text-muted-foreground font-medium mb-4">
                  Analiza rizika open-source rješenja u usporedbi sa zatvorenim sustavima. Kako zaštititi enterprise podatke u 2024.
                </p>
                <Link href="/trust" className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-1 hover:underline">
                  Pročitaj report <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-10 flex flex-col justify-center">
            <Mail className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-tight">Postanite dio digitalne elite.</h3>
            <p className="text-sm text-white/50 font-medium mb-8">
              Kurirani tech & biz insights jednom mjesečno direktno u vaš inbox.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <Input className="bg-white/10 border-white/20 rounded-none text-white placeholder:text-white/30 h-12" placeholder="Vaš email" />
               <Button className="w-full bg-primary hover:bg-primary/90 rounded-none font-black uppercase tracking-widest text-xs h-12">Prijava na newsletter</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
