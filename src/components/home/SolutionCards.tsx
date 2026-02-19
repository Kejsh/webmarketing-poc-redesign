
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, ShoppingCart, Settings, Share2, ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    title: "Web platforme po mjeri",
    description: "Sustavi dizajnirani za specifične poslovne procese, visoke performanse i SEO.",
    href: "/rjesenja/web-platforme",
    icon: Layout,
  },
  {
    title: "E-commerce sustavi",
    description: "B2B i B2C trgovine s naprednim integracijama i skalabilnom infrastrukturom.",
    href: "/rjesenja/ecommerce",
    icon: ShoppingCart,
  },
  {
    title: "Custom softver i portali",
    description: "Složena rješenja za upravljanje podacima, klijentima i internim procesima.",
    href: "/rjesenja/custom-softver",
    icon: Settings,
  },
  {
    title: "Integracije",
    description: "Besprijekorno povezivanje s ERP, CRM, Payment i logističkim sustavima.",
    href: "/rjesenja/integracije",
    icon: Share2,
  },
];

export function SolutionCards() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 text-primary">
              Digitalna rješenja koja donose vrijednost
            </h2>
            <p className="text-muted-foreground">
              Svako rješenje razvijamo s fokusom na dugoročnu održivost. Ne isporučujemo samo kod, isporučujemo digitalni alat za rast.
            </p>
          </div>
          <Button variant="link" className="text-accent gap-2 p-0 h-auto font-semibold" asChild>
            <Link href="/rjesenja">Pogledajte sva rješenja <ArrowRight className="w-4 h-4"/></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((sol, idx) => (
            <Link key={idx} href={sol.href} className="group">
              <Card className="h-full border-border bg-white group-hover:border-accent transition-colors duration-300">
                <CardHeader>
                  <sol.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  <CardTitle className="text-lg pt-4 font-bold">{sol.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sol.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
