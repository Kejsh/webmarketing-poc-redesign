
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Check } from "lucide-react";

const BENEFITS = [
  "Zatvoreni kod / kontrola i stabilnost",
  "30+ modula spremnih za customizaciju",
  "Automatska SEO optimizacija (Core level)",
  "Integracije (ERP/CRM/Payment/Logistika)",
  "Skalabilnost i dugoročna održivost",
];

export function EasyEditDifferentiator() {
  const dashImg = PlaceHolderImages.find((img) => img.id === "easyedit-dashboard");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-xl -rotate-2 -z-10" />
            <div className="relative rounded-lg shadow-2xl overflow-hidden border border-slate-200">
              {dashImg && (
                <Image
                  src={dashImg.imageUrl}
                  alt={dashImg.description}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  data-ai-hint={dashImg.imageHint}
                />
              )}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-6 uppercase tracking-wider">
              Vlastita Platforma
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-6 text-primary">
              EasyEdit CMS — Sloboda koju generički sustavi ne poznaju
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              EasyEdit nije samo CMS, to je moćna platforma za razvoj složenih digitalnih proizvoda. Omogućuje nam bržu isporuku uz zadržavanje potpune kontrole nad sigurnošću i performansama.
            </p>

            <ul className="space-y-4 mb-10">
              {BENEFITS.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/easyedit">Saznajte više o EasyEditu</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/easyedit#demo">Zatražite demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
