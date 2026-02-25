
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, FileText, Globe, Info, Zap } from "lucide-react";
import Image from "next/image";

const EU_PROJECTS = [
  {
    title: "Implementacija EasyEdit AI Engine-a",
    status: "U provedbi",
    desc: "Projekt fokusiran na razvoj i integraciju velikih jezičnih modela (LLM) unutar EasyEdit CMS platforme za automatizaciju upravljanja enterprise sadržajem.",
    goal: "Povećanje konkurentnosti kroz uvođenje inovativnih AI rješenja u vlastitu platformu.",
    duration: "2023 - 2025",
    value: "€150.000,00"
  },
  {
    title: "Internacionalizacija WEB Marketing rješenja",
    status: "Završen",
    desc: "Nastup na vodećim svjetskim tehnološkim sajmovima (Web Summit, CES) s ciljem širenja mreže enterprise klijenata na globalnom tržištu.",
    goal: "Povećanje izvoza softverskih usluga i širenje prepoznatljivosti hrvatskog inženjeringa.",
    duration: "2021 - 2023",
    value: "€85.000,00"
  }
];

export default function EUProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Tvrtka / EU Fondovi & Razvoj
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inovacije uz <span className="text-primary">podršku EU.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl">
              Vjerujemo u snagu tehnološkog razvoja. Koristimo sredstva iz europskih fondova kako bismo ubrzali evoluciju naše platforme i ponudili najsuvremenija rješenja našim klijentima.
            </p>
          </div>
        </section>

        {/* EU Funding Disclaimer / Banner */}
        <section className="container mx-auto px-4 mb-24">
          <div className="bg-slate-50 border-2 border-black p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-48 h-32 relative bg-white border border-black/10 p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
               {/* Placeholder for EU/NPOO flags */}
               <div className="text-[10px] font-black uppercase text-center text-muted-foreground">Logotip EU Fondova</div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-black uppercase tracking-tight italic">Ulaganje u budućnost</h3>
              <p className="text-muted-foreground font-medium max-w-2xl">
                Projekt je sufinancirala Europska unija iz Europskog fonda za regionalni razvoj. Sadržaj emitiranog materijala isključiva je odgovornost tvrtke WEB Marketing d.o.o.
              </p>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary">
                <Globe className="w-4 h-4" /> strukturnifondovi.hr
              </div>
            </div>
          </div>
        </section>

        {/* Projects List */}
        <section className="container mx-auto px-4">
          <div className="space-y-16">
            {EU_PROJECTS.map((project, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t-2 border-black pt-16 group">
                <div className="lg:col-span-4">
                  <span className={`inline-block px-4 py-1 text-[10px] font-black uppercase tracking-widest mb-4 ${project.status === 'Završen' ? 'bg-secondary text-white' : 'bg-primary text-white'}`}>
                    {project.status}
                  </span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4 leading-none group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="space-y-2 pt-6">
                     <p className="text-[10px] font-black uppercase tracking-widest text-black/40">Trajanje projekta</p>
                     <p className="font-bold text-lg">{project.duration}</p>
                     <p className="text-[10px] font-black uppercase tracking-widest text-black/40 pt-4">Vrijednost investicije</p>
                     <p className="font-bold text-lg">{project.value}</p>
                  </div>
                </div>
                <div className="lg:col-span-8 space-y-12">
                  <div className="space-y-4">
                    <h4 className="text-xl font-black uppercase tracking-tight italic flex items-center gap-3">
                      <Info className="w-5 h-5 text-primary" /> Opis projekta
                    </h4>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="p-8 bg-black text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl" />
                    <h4 className="text-xl font-black uppercase tracking-tight italic mb-6 flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" /> Ciljevi i rezultati
                    </h4>
                    <p className="text-white/70 font-medium leading-relaxed italic">
                      {project.goal}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {["Tehnološka modernizacija", "Povećanje broja zaposlenih", "Širenje na nova tržišta"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary">
                           <div className="w-1.5 h-1.5 bg-primary" />
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-32 container mx-auto px-4 text-center">
           <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8">Trebate više informacija?</h2>
           <p className="text-muted-foreground font-medium max-w-2xl mx-auto mb-12">
             Za sve upite vezane uz naše razvojne projekte i EU partnerstva, slobodno kontaktirajte naš projektni ured.
           </p>
           <button className="px-12 h-16 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors">
             Kontaktirajte nas
           </button>
        </section>

      </main>
      <Footer />
    </div>
  );
}
