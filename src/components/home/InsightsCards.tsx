
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const INSIGHTS = [
  {
    title: "Budućnost AI u enterprise pretrazi",
    date: "12.05.2024",
    category: "AI & Tech",
    excerpt: "Kako generativni AI mijenja način na koji korisnici pretražuju unutar velikih kataloga.",
  },
  {
    title: "Sigurnost platforme: Open-source vs. Custom",
    date: "04.05.2024",
    category: "Security",
    excerpt: "Analiza rizika open-source rješenja u usporedbi sa zatvorenim sustavima.",
  },
  {
    title: "Integracija ERP-a s e-commerceom",
    date: "28.04.2024",
    category: "Business",
    excerpt: "Poboljšajte operativnu efikasnost kroz dvosmjernu sinkronizaciju podataka.",
  },
];

export function InsightsCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 text-primary">
              Insights & Znanje
            </h2>
            <p className="text-muted-foreground">
              Dijelimo iskustva o sigurnosti, stabilnosti platformi i digitalnoj transformaciji.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/insights">Svi članci</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((post, idx) => (
            <Card key={idx} className="border-slate-100 hover:border-accent transition-colors group cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors">
                  Pročitajte više <ArrowRight className="w-4 h-4"/>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
