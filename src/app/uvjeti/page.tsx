import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Pravne informacije / Uvjeti
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-12 italic leading-none">
            Uvjeti <span className="text-primary">korištenja.</span>
          </h1>
          
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black italic">1. Korištenje sadržaja</h2>
              <p>Sav sadržaj objavljen na ovom web sjedištu intelektualno je vlasništvo tvrtke WEB Marketing d.o.o. Zabranjeno je neovlašteno kopiranje, distribucija ili korištenje materijala bez pismenog dopuštenja.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black italic">2. Točnost informacija</h2>
              <p>Iako nastojimo osigurati točnost svih informacija, WEB Marketing ne preuzima odgovornost za eventualne nenamjerne pogreške u opisima usluga, modula ili tehničkih specifikacija.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black italic">3. Vanjske poveznice</h2>
              <p>Naše web sjedište može sadržavati poveznice na vanjske stranice. WEB Marketing nema kontrolu nad sadržajem tih stranica niti preuzima odgovornost za njihovu dostupnost ili sigurnost.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black italic">4. Promjene uvjeta</h2>
              <p>WEB Marketing zadržava pravo izmjene ovih uvjeta u bilo kojem trenutku. Promjene stupaju na snagu trenutkom objave na ovom web sjedištu.</p>
            </section>

            <p className="pt-8 text-xs italic">Zadnja izmjena: 20. svibnja 2024.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
