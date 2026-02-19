
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Globalni B2B E-commerce",
    category: "E-commerce & ERP Integration",
    impact: "Smanjenje operativnih troškova za 40% kroz automatizaciju narudžbi.",
    imgId: "case-study-1",
  },
  {
    title: "Nacionalni portal za osiguranje",
    category: "Custom Software",
    impact: "Stabilna platforma s 1M+ mjesečnih pregleda i ISO standardom sigurnosti.",
    imgId: "case-study-2",
  },
  {
    title: "Supply Chain IoT Dashboard",
    category: "Integrations & Custom Logic",
    impact: "Praćenje flote u realnom vremenu uz prediktivnu analitiku.",
    imgId: "case-study-3",
  },
];

export function CaseStudyGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 text-primary">
            Izdvojene reference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pogledajte kako smo pomogli klijentima u rješavanju kompleksnih tehnoloških izazova.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PROJECTS.map((project, idx) => {
            const img = PlaceHolderImages.find((i) => i.id === project.imgId);
            return (
              <Card key={idx} className="overflow-hidden border-none shadow-sm hover:shadow-lg transition-shadow bg-white">
                <div className="relative aspect-video overflow-hidden">
                  {img && (
                    <Image
                      src={img.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={img.imageHint}
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.impact}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold gap-2" asChild>
                    <Link href="/work">Prikaži detalje <ExternalLink className="w-3.5 h-3.5"/></Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/work">Pogledajte sve projekte</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
