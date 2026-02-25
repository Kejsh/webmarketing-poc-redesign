import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
            Pravne informacije / Privatnost
          </div>
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-12 italic leading-none">
            Pravila <span className="text-primary">privatnosti.</span>
          </h1>
          
          <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black italic">1. Opće odredbe</h2>
              <p>WEB Marketing d.o.o. (dalje u tekstu: WEB Marketing) ozbiljno shvaća zaštitu vaših osobnih podataka. Ova Pravila privatnosti objašnjavaju kako prikupljamo, koristimo, štitimo i dijelimo vaše podatke kada posjetite naše web sjedište ili koristite naše usluge.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black italic">2. Podaci koje prikupljamo</h2>
              <p>Prikupljamo podatke koje nam dobrovoljno dajete putem kontakt formi, prijava na newsletter ili brief generatora. To uključuje:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ime i prezime</li>
                <li>Adresa e-pošte</li>
                <li>Broj telefona</li>
                <li>Podaci o vašoj tvrtki i projektu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black italic">3. Svrha obrade</h2>
              <p>Vaše podatke koristimo isključivo u svrhe:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Odgovaranja na vaše upite i izradu ponuda</li>
                <li>Slanja stručnih insights materijala i novosti (uz vašu privolu)</li>
                <li>Poboljšanja korisničkog iskustva na našem web sjedištu</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black italic">4. Vaša prava</h2>
              <p>Sukladno GDPR uredbi, imate pravo na pristup, ispravak, brisanje ili ograničenje obrade vaših podataka. Za sve zahtjeve vezane uz privatnost možete nam se obratiti na info@webmarketing.hr.</p>
            </section>

            <p className="pt-8 text-xs italic">Zadnja izmjena: 20. svibnja 2024.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
