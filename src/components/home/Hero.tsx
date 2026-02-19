
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-tech");

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 uppercase tracking-wider">
            <span>Engineering Partner • Custom Development</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-headline font-bold mb-8 text-primary leading-[1.1]">
            Custom rješenja na platformi koja uklanja ograničenja generičkih CMS-ova
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Razvijamo stabilne, sigurne i skalabilne digitalne sustave temeljene na vlastitom EasyEdit CMS-u. Fokusirani na inženjerske standarde i dugoročna partnerstva.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto" asChild>
              <Link href="/kontakt">Zatražite razgovor</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto" asChild>
              <Link href="/easyedit">Zatražite demo</Link>
            </Button>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">25+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-tight leading-none text-left">Godina<br/>Iskustva</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">500+</span>
              <span className="text-xs text-muted-foreground uppercase tracking-tight leading-none text-left">Realiziranih<br/>Projekata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">27</span>
              <span className="text-xs text-muted-foreground uppercase tracking-tight leading-none text-left">Strukovnih<br/>Nagrada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">250</span>
              <span className="text-xs text-muted-foreground uppercase tracking-tight leading-none text-left">Zadovoljnih<br/>Klijenata</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-5 pointer-events-none">
        {heroImg && (
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImg.imageHint}
          />
        )}
      </div>
    </section>
  );
}
