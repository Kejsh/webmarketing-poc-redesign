
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layout, ShoppingCart, Settings, Share2, ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    title: "Web platforme",
    description: "Enterprise rješenja dizajnirana za visoke performanse, SEO i specifične poslovne tokove.",
    href: "/rjesenja/web-platforme",
    icon: Layout,
  },
  {
    title: "E-commerce sustavi",
    description: "B2B i B2C trgovine s naprednim integracijama i infrastrukturom za globalni rast.",
    href: "/rjesenja/ecommerce",
    icon: ShoppingCart,
  },
  {
    title: "Poslovni portali",
    description: "Custom softver za upravljanje podacima, klijentima i optimizaciju internih procesa.",
    href: "/rjesenja/poslovni-portali",
    icon: Settings,
  },
  {
    title: "Integracije",
    description: "Besprijekorno povezivanje s ERP (SAP, Navision), CRM, Payment i logističkim sustavima.",
    href: "/rjesenja/integracije",
    icon: Share2,
  },
];

export function SolutionCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-none italic">
              Digitalna rješenja <span className="text-primary">koja donose vrijednost.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              Ne isporučujemo samo kod, isporučujemo digitalne alate za rast i dugoročnu održivost vašeg poslovanja.
            </p>
          </div>
          <Button variant="link" className="text-black hover:text-primary gap-2 p-0 h-auto font-black uppercase text-xs tracking-widest" asChild>
            <Link href="/rjesenja">Sva rješenja <ArrowRight className="w-4 h-4"/></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-black bg-black gap-[2px]">
          {SOLUTIONS.map((sol, idx) => (
            <div key={idx} className="bg-white p-10 flex flex-col h-full group transition-all hover:bg-muted">
              <div className="mb-8">
                <sol.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-4 leading-none">
                {sol.title}
              </h3>
              <p className="text-sm text-muted-foreground font-medium leading-tight mb-8 flex-grow">
                {sol.description}
              </p>
              <Link href={sol.href} className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                Saznaj više <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
