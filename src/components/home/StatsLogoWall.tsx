
export function StatsLogoWall() {
  const LOGO_COUNT = 6;

  return (
    <section className="py-20 bg-white border-y border-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none">
              WEB Marketing u brojkama
            </h2>
            <p className="text-sm text-muted-foreground font-medium mb-8">
              Pouzdanost potvrđena kroz četvrt stoljeća inženjerske izvrsnosti i strateških partnerstava.
            </p>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
               <div className="space-y-1">
                 <p className="text-3xl font-black text-black">25</p>
                 <p className="text-[9px] font-bold uppercase tracking-widest text-secondary">Godina rada</p>
               </div>
               <div className="space-y-1">
                 <p className="text-3xl font-black text-black">27</p>
                 <p className="text-[9px] font-bold uppercase tracking-widest text-accent">Nagrada struke</p>
               </div>
               <div className="space-y-1">
                 <p className="text-3xl font-black text-black">250+</p>
                 <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">B2B klijenata</p>
               </div>
               <div className="space-y-1">
                 <p className="text-3xl font-black text-black">ISO</p>
                 <p className="text-[9px] font-bold uppercase tracking-widest text-primary">Security ready</p>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1px bg-muted border border-muted">
              {Array.from({ length: LOGO_COUNT }).map((_, idx) => (
                <div key={idx} className="bg-white aspect-[3/2] flex items-center justify-center p-8 group hover:bg-black transition-colors">
                  <div className="w-full h-8 bg-muted group-hover:bg-white/20 transition-colors" />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest mt-6 text-center text-muted-foreground">
              Partneri u digitalnoj transformaciji
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
