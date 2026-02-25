import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Settings, 
  Users, 
  Database, 
  ShieldAlert, 
  Fingerprint, 
  ArrowRight,
  MonitorCheck,
  FileText,
  Workflow
} from "lucide-react";
import Link from "next/link";

const PORTAL_FEATURES = [
  {
    title: "Self-service klijent zona",
    desc: "Smanjite opterećenje podrške omogućujući klijentima uvid u statuse, dokumente i povijest suradnje u realnom vremenu.",
    icon: Users
  },
  {
    title: "Data-driven Dashboardi",
    desc: "Centralizirani prikaz ključnih poslovnih metrika (KPI) s mogućnošću izvoza podataka u PDF ili Excel formate.",
    icon: Database
  },
  {
    title: "Custom CRM integracija",
    desc: "Upravljajte leadovima i klijentima kroz sučelje koje je točno prilagođeno vašem prodajnom procesu, bez nepotrebnih polja.",
    icon: Fingerprint
  },
  {
    title: "Automatizacija workflowa",
    desc: "Digitalizirajte odobravanje dokumenata, zahtjeva ili narudžbi kroz sustav s jasno definiranim ulogama (Role-based access).",
    icon: Workflow
  }
];

export default function BusinessPortalsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Rješenja / Poslovni Portali
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Digitalna <span className="text-accent">arhitektura procesa.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Transformiramo kompleksne interne procese u intuitivna web rješenja koja povećavaju produktivnost i osiguravaju potpunu kontrolu nad podacima.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-14 px-10 shadow-xl shadow-accent/20" asChild>
                <Link href="/kontakt">Zatraži demo sustava</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt?type=brief">Pošalji brief</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Operational Excellence */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-10 italic leading-none text-black">
                  Uklonite <span className="text-accent">uska grla.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {PORTAL_FEATURES.map((feat, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="w-12 h-12 bg-black flex items-center justify-center">
                        <feat.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="font-black uppercase tracking-tight text-lg leading-none">{feat.title}</h4>
                      <p className="text-sm text-muted-foreground font-medium leading-tight">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white border-2 border-black p-8 lg:p-12 shadow-[20px_20px_0px_0px_rgba(173,32,142,0.1)]">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-black">EasyEdit Business Core</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-8 leading-relaxed">
                    Za razliku od gotovih SaaS rješenja, EasyEdit nam omogućuje razvoj portala koji se savršeno prilagođavaju vašoj terminologiji, hijerarhiji i sigurnosnim protokolima.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Napredni audit logovi za svaku akciju",
                      "LDAP / Active Directory integracija",
                      "Custom reporting engine",
                      "Privatna cloud ili on-premise pohrana",
                      "GDPR-ready upravljanje dozvolama"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-black/80">
                        <MonitorCheck className="w-4 h-4 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="text-accent p-0 h-auto font-black uppercase tracking-widest text-xs gap-2" asChild>
                    <Link href="/easyedit">Tehnička specifikacija platforme <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security / Trust in Portals */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 italic text-black">Podaci su <span className="text-accent">sigurni.</span></h2>
              <p className="text-xl text-muted-foreground font-medium">
                Poslovni portali često sadrže najosjetljivije podatke tvrtke. Zato sigurnost ne dodajemo na kraju — ona je temelj arhitekture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black">
              {[
                { 
                  label: "Role-Based Control", 
                  icon: ShieldAlert, 
                  text: "Granularna kontrola prava pristupa od razine modula do pojedinačnog polja u bazi." 
                },
                { 
                  label: "Document Vault", 
                  icon: FileText, 
                  text: "Sigurna pohrana i enkripcija dokumenata uz praćenje verzija i autorstva." 
                },
                { 
                  label: "API Security", 
                  icon: Settings, 
                  text: "Oklopljeni API-ji za sigurnu komunikaciju s vašim internim bazama podataka." 
                }
              ].map((box, idx) => (
                <div key={idx} className="bg-white p-12 group hover:bg-muted transition-colors">
                  <box.icon className="w-10 h-10 text-accent mb-6" />
                  <h4 className="font-black uppercase tracking-tight text-xl mb-4">{box.label}</h4>
                  <p className="text-sm text-muted-foreground font-medium leading-tight">{box.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-24 bg-accent text-white">
          <div className="container mx-auto px-4">
            <div className="bg-black p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] italic">
                  Digitalizirajte <span className="text-accent">danas.</span>
                </h2>
                <p className="text-white/60 text-lg font-medium">
                  Prestanite gubiti vrijeme na tablice i mailove. Projektirajmo sustav koji radi za vas.
                </p>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                  <Link href="/kontakt">Zatraži tech konzultacije</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
