import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  Info, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  TrendingUp, 
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

const EU_PROJECTS = [
  {
    title: "Implementacija EasyEdit AI Engine-a",
    program: "Nacionalni plan oporavka i otpornosti (NPOO)",
    duration: "01.09.2023. - 01.09.2025.",
    goal: "Razvoj i integracija AI modela unutar CMS platforme za automatizaciju obrade enterprise podataka.",
    role: "Nositelj projekta",
    status: "U provedbi",
    value: "€150.000,00",
    eu_share: "€105.000,00"
  },
  {
    title: "Internacionalizacija WEB Marketing rješenja",
    program: "Operativni program Konkurentnost i kohezija",
    duration: "15.05.2021. - 15.05.2023.",
    goal: "Povećanje izvoza softverskih usluga kroz nastupe na ključnim svjetskim tehnološkim sajmovima.",
    role: "Nositelj projekta",
    status: "Završen",
    value: "€85.000,00",
    eu_share: "€68.000,00"
  }
];

const DOCUMENTS = [
  { name: "Pravila o privatnosti i zaštiti podataka - EU projekti", size: "1.2 MB", type: "PDF" },
  { name: "Izjava o sukobu interesa", size: "450 KB", type: "PDF" },
  { name: "Opći uvjeti nabave za dobavljače", size: "890 KB", type: "PDF" },
  { name: "Godišnje izvješće o održivosti i razvoju 2023.", size: "3.1 MB", type: "PDF" }
];

const FAQ_EU = [
  {
    q: "Kako EU fondovi utječu na cijenu usluge za klijente?",
    a: "Sredstva iz EU fondova koristimo isključivo za razvoj vlastite infrastrukture i inovacije unutar EasyEdit platforme. To nam omogućuje da klijentima ponudimo naprednije module (poput AI Engine-a) bez povećanja troškova licence."
  },
  {
    q: "Tko vrši nadzor nad provedbom vaših EU projekata?",
    a: "Svi projekti su pod strogim nadzorom nadležnih tijela poput SAFU-a ili nadležnih ministarstava, što dodatno jamči transparentnost našeg poslovanja i financijsku stabilnost."
  },
  {
    q: "Jesu li vaši moduli razvijeni kroz EU projekte vlasništvo klijenta?",
    a: "Klijent je vlasnik podataka i korisnik licence razvijenih modula prema standardnim ugovorima o korištenju EasyEdit CMS-a, dok autorska prava na samu platformu ostaju u vlasništvu WEB Marketinga."
  },
  {
    q: "Kako mogu postati dobavljač na vašim EU projektima?",
    a: "Svi postupci nabave provode se sukladno propisanim procedurama za neobveznike Zakona o javnoj nabavi (NOJN). Pozive za dostavu ponuda objavljujemo na našim stranicama i službenim portalima fondova."
  }
];

export default function EUProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* A) Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Compliance / Transparentnost
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inovacije uz <span className="text-primary">podršku EU.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl">
              Pristupom europskim fondovima ubrzavamo razvoj naše vlastite tehnologije i osiguravamo najviše standarde digitalne transformacije za naše klijente.
            </p>
          </div>
        </section>

        {/* EU Funding Header / Disclaimer */}
        <section className="container mx-auto px-4 mb-24">
          <div className="bg-slate-50 border-2 border-black p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-0" />
            <div className="w-48 h-32 relative bg-white border-2 border-black flex items-center justify-center grayscale shrink-0">
               <div className="text-[10px] font-black uppercase text-center p-4">Europski strukturni i investicijski fondovi</div>
            </div>
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-black uppercase tracking-tight italic">Ulaganje u budućnost</h3>
              <p className="text-muted-foreground font-medium max-w-3xl leading-relaxed">
                Projekt je sufinancirala Europska unija iz Europskog fonda za regionalni razvoj. Sadržaj ove stranice isključiva je odgovornost tvrtke WEB Marketing d.o.o. i ni pod kojim uvjetima ne odražava stav Europske unije.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://strukturnifondovi.hr" target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                  <ExternalLink className="w-3 h-3" /> strukturnifondovi.hr
                </a>
                <a href="https://planoporavka.gov.hr" target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                  <ExternalLink className="w-3 h-3" /> planoporavka.gov.hr
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* B) Projects Listing */}
        <section className="container mx-auto px-4 mb-32">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-12 border-b-2 border-black pb-4">Lista projekata</h2>
          <div className="space-y-12">
            {EU_PROJECTS.map((project, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-black border-2 border-black group">
                {/* Left side: Basic info */}
                <div className="lg:col-span-4 bg-white p-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest ${project.status === 'Završen' ? 'bg-secondary text-white' : 'bg-primary text-white'}`}>
                      {project.status}
                    </span>
                    <TrendingUp className="w-6 h-6 text-black/10 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-tight">{project.title}</h3>
                  <div className="space-y-4 pt-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Program</p>
                      <p className="text-xs font-bold uppercase">{project.program}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Trajanje</p>
                      <p className="text-xs font-bold">{project.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Right side: Detailed info */}
                <div className="lg:col-span-8 bg-slate-50 p-10 lg:p-16 space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                        <Zap className="w-4 h-4" /> Cilj projekta
                      </h4>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed italic">
                        "{project.goal}"
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Uloga i vrijednost
                      </h4>
                      <div className="space-y-2">
                        <p className="text-xs font-bold uppercase">{project.role}</p>
                        <div className="flex justify-between border-t border-black/5 pt-2">
                          <span className="text-[10px] text-muted-foreground uppercase">Ukupna vrijednost</span>
                          <span className="text-[10px] font-black">{project.value}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[10px] text-muted-foreground uppercase">EU sufinanciranje</span>
                          <span className="text-[10px] font-black text-secondary">{project.eu_share}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* C) Documents Section */}
        <section className="container mx-auto px-4 mb-32">
          <div className="max-w-4xl mx-auto bg-black text-white p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-3xl" />
            <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-12">Službena dokumentacija</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DOCUMENTS.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight max-w-[200px]">{doc.name}</p>
                      <p className="text-[8px] font-black uppercase tracking-widest text-white/40 mt-1">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* D) FAQ Section */}
        <section className="container mx-auto px-4 mb-32 max-w-4xl">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic text-center mb-16">Česta pitanja o projektima</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {FAQ_EU.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="font-black uppercase tracking-tight text-lg italic border-l-2 border-primary pl-4">{item.q}</h4>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* E) Soft CTA */}
        <section className="container mx-auto px-4 text-center border-t-2 border-black pt-24">
           <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-8">Zanima vas suradnja?</h2>
           <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-12">
             Naš projektni ured otvoren je za razgovor o partnerstvima, konzorcijima i inovativnim tehnološkim inicijativama.
           </p>
           <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
             <Link href="/kontakt">Zakaži razgovor s projektnim uredom</Link>
           </Button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
