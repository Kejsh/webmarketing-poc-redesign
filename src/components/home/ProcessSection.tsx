
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    desc: "Duboka analiza, arhitektura i roadmap bez pretpostavki.",
  },
  {
    number: "02",
    title: "Development",
    desc: "Iterativni razvoj kroz Agile/Scrum sprinteve.",
  },
  {
    number: "03",
    title: "QA & Security",
    desc: "Stroge provjere kvalitete i sigurnosni auditi.",
  },
  {
    number: "04",
    title: "Launch",
    desc: "Migracija, optimizacija i sigurno puštanje u rad.",
  },
  {
    number: "05",
    title: "Growth",
    desc: "SLA podrška i kontinuirano strateško unapređenje.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4 leading-none italic">
              Agile proces, <span className="text-secondary">jasne isporuke.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              Transparentna suradnja temeljena na iterativnom razvoju i stalnoj komunikaciji.
            </p>
          </div>
          <Button variant="outline" className="border-2 border-black rounded-none font-black uppercase text-xs tracking-widest h-12 px-8" asChild>
            <Link href="/proces">Pogledaj proces</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-6 flex items-end gap-2">
                <span className="text-6xl font-black text-black leading-none">{step.number}</span>
                <div className="h-2 w-full bg-muted group-hover:bg-secondary transition-colors mb-2" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-3 leading-none">{step.title}</h3>
              <p className="text-xs text-muted-foreground font-medium leading-tight">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
