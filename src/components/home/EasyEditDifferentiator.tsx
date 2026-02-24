
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Puzzle, LayoutTemplate, Maximize } from "lucide-react";

const BENEFITS = [
  {
    title: "Vlastita tehnologija",
    desc: "Neovisnost o open-source ograničenjima i sigurnosnim ranjivostima.",
    icon: Zap,
  },
  {
    title: "Sigurnost i stabilnost",
    desc: "Controlled stack i zatvoreni kod za maksimalnu zaštitu vaših podataka.",
    icon: Shield,
  },
  {
    title: "Modularnost",
    desc: "Sustav koji se prilagođava vašem rastu kroz 30+ specijaliziranih modula.",
    icon: Puzzle,
  },
  {
    title: "Upravljanje sadržajem",
    desc: "Intuitivno sučelje razvijeno prema potrebama modernih marketing timova.",
    icon: LayoutTemplate,
  },
  {
    title: "Enterprise integracije",
    desc: "Nativni konektori za SAP, CRM sustave i payment gateway rješenja.",
    icon: Maximize,
  },
];

export function EasyEditDifferentiator() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.8] italic">
            EasyEdit CMS: <span className="text-primary">Tehnološka sloboda.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl font-medium">
            Vlastita platforma za stabilne i sigurne projekte koja uklanja kompromise generičkih rješenja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 mb-16">
          {BENEFITS.map((item, idx) => (
            <div key={idx} className="bg-black p-8 group hover:bg-white transition-all">
              <item.icon className="w-8 h-8 text-primary mb-6 group-hover:text-black transition-colors" />
              <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-black transition-colors leading-none">
                {item.title}
              </h3>
              <p className="text-xs text-white/50 font-medium group-hover:text-black/60 transition-colors leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="h-12 px-10 text-xs font-black uppercase tracking-widest rounded-none bg-primary hover:bg-primary/90" asChild>
            <Link href="/easyedit">Istraži EasyEdit</Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-10 text-xs font-black uppercase tracking-widest rounded-none border-2 border-white hover:bg-white hover:text-black" asChild>
            <Link href="/kontakt">Zatraži Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
