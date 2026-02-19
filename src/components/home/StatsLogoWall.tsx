
export function StatsLogoWall() {
  const LOGO_PLACEHOLDERS = Array.from({ length: 6 });

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-12">
            Vjeruju nam vodeće tvrtke i institucije
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
            {LOGO_PLACEHOLDERS.map((_, idx) => (
              <div key={idx} className="h-12 flex items-center justify-center">
                <div className="w-full h-8 bg-slate-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-12 bg-slate-50 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <blockquote className="text-xl font-medium text-primary italic leading-relaxed">
                "WEB Marketing nam nije samo isporučio web stranicu, već kompletan sustav koji je transformirao našu prodaju. EasyEdit je platforma koja nam je dala neovisnost."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-300" />
                <div>
                  <p className="font-bold text-primary">Direktor Marketinga</p>
                  <p className="text-sm text-muted-foreground">Vodeća Retail Mreža</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-1">270</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Aktivnih Licenci</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-1">ISO</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Pripravnost</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-1">50+</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Certifikata</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-1">99.9%</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
