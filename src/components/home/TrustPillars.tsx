
import { ShieldCheck, FileCheck, RefreshCw } from "lucide-react";

const PILLARS = [
  {
    title: "Standardi kvalitete i sigurnosti",
    description: "Naši procesi su usklađeni s vodećim industrijskim standardima (ISO spremnost). Kvaliteta nije slučajnost, već rezultat strogo definiranih protokola.",
    icon: FileCheck,
  },
  {
    title: "Security by Design",
    description: "Od hardeninga servera do audit logova i role-based dozvola. Sigurnost je integrirana u svaki red koda, a ne dodana naknadno.",
    icon: ShieldCheck,
  },
  {
    title: "Proces s enterprise kontrolom",
    description: "Kombiniramo Scrum agilnost s robusnim release managementom i transparentnim izvještavanjem. Vi ste uvijek u toku.",
    icon: RefreshCw,
  },
];

export function TrustPillars() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">
            Povjerenje temeljeno na procesima
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            U svijetu gdje su sigurnosni incidenti svakodnevica, mi nudimo mir kroz inženjersku disciplinu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
