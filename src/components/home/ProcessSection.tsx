
const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "Definiramo ciljeve, arhitekturu i roadmap. Bez pretpostavki, samo podaci.",
    deliverable: "Product Spec & Roadmap",
  },
  {
    number: "02",
    title: "Build",
    description: "Iterativni razvoj kroz sprinteve uz stalni QA i integracijske testove.",
    deliverable: "Beta verzija sustava",
  },
  {
    number: "03",
    title: "Launch",
    description: "Migracija podataka, sigurnosne provjere i optimizacija performansi.",
    deliverable: "Live Sustav",
  },
  {
    number: "04",
    title: "Improve",
    description: "SLA podrška, proaktivni monitoring i strateške nadogradnje.",
    deliverable: "Maintenance & Growth",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 text-primary">
            Kako radimo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparentnost i predvidljivost u svakoj fazi suradnje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-6">
                <span className="text-5xl font-bold text-slate-100 group-hover:text-accent/10 transition-colors">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {step.description}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent">Deliverable:</span>
                <p className="text-sm font-medium mt-1">{step.deliverable}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
