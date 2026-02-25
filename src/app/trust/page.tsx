import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Workflow, 
  Headset, 
  Lock, 
  Activity, 
  ArrowRight,
  FileText,
  Zap,
  RefreshCw,
  Search,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";

const TRUST_PILLARS = [
  {
    title: "Sigurnost Podataka",
    desc: "Zatvorena EasyEdit arhitektura i RBAC kontrola pristupa eliminiraju 99% uobičajenih vektora napada.",
    icon: ShieldCheck,
    tag: "Security"
  },
  {
    title: "Kvaliteta & QA",
    desc: "Svaka linija koda prolazi automatizirane testove i manualni peer-review prije puštanja u produkciju.",
    icon: CheckCircle2,
    tag: "Quality"
  },
  {
    title: "Proces Isporuke",
    desc: "Agile/Scrum metodologija osigurava transparentnost kroz dvotjedne sprinteve i redovite demo sastanke.",
    icon: Workflow,
    tag: "Delivery"
  },
  {
    title: "Podrška & Promjene",
    desc: "Strukturirani SLA modeli i Change Management protokoli osiguravaju stabilnost sustava tijekom cijelog ciklusa.",
    icon: Headset,
    tag: "Support"
  },
  {
    title: "Privatnost (GDPR)",
    desc: "Privacy-by-design pristup osigurava punu usklađenost s uredbama i potpuno vlasništvo klijenta nad podacima.",
    icon: Lock,
    tag: "Privacy"
  },
  {
    title: "Dostupnost & Ops",
    desc: "Infrastruktura projektirana za 99.9% uptime uz definirane Disaster Recovery planove i 24/7 monitoring.",
    icon: Activity,
    tag: "Availability"
  }
];

const FAQ_TRUST = [
  { q: "Tko ima pristup izvornom kodu aplikacije?", a: "Pristup izvornom kodu imaju isključivo ovlašteni inženjeri WEB Marketinga dodijeljeni projektu, uz strogo kontrolirane SSH ključeve i VPN pristup." },
  { q: "Kako se upravlja sigurnosnim zakrpama?", a: "Proaktivno pratimo sve komponente sustava. Sigurnosne zakrpe za EasyEdit Core primjenjuju se centralno i testiraju prije distribucije na klijentske instance." },
  { q: "Gdje se fizički nalaze moji podaci?", a: "Podaci se pohranjuju unutar EU (obično u Frankfurtu ili Dublinu) na 'hardened' cloud infrastrukturi, osim ako klijent ne zahtijeva on-premise instalaciju." },
  { q: "Koja je procedura u slučaju incidenta?", a: "Imamo definiran Incident Response plan s jasnim eskalacijskim matricama. Klijenti pod SLA podrškom dobivaju obavijesti u realnom vremenu." },
  { q: "Kako se provode promjene na produkciji?", a: "Sve promjene prolaze kroz CI/CD pipeline: dev -> staging (UAT) -> production. Produkcijski deploy se vrši isključivo nakon odobrenja klijenta." },
  { q: "Je li EasyEdit CMS usklađen s ISO standardima?", a: "Arhitektura i interni procesi su usklađeni s ISO 27001 standardima upravljanja informacijskom sigurnošću [Compliance placeholder]." },
  { q: "Što se događa s podacima nakon raskida suradnje?", a: "Klijent je vlasnik podataka. Pri raskidu isporučujemo kompletan dump baze podataka i svu pripadajuću dokumentaciju." },
  { q: "Radite li penetracijska testiranja?", a: "Provodimo redovite interne audite, a surađujemo i s vanjskim certifikacijskim kućama za dubinska penetracijska testiranja na zahtjev klijenta." },
  { q: "Kako osiguravate stabilnost integracija?", a: "Kroz naš Integration Engine koji koristi queueing sustave. Ako vanjski ERP padne, web nastavlja raditi, a podaci se sinkroniziraju čim se veza uspostavi." },
  { q: "Podržavate li Multi-factor Authentication (MFA)?", a: "Da, EasyEdit CMS podržava MFA za sve administrativne korisnike kao standardnu postavku sigurnosti." }
];

export default function TrustCenterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Governance / Trust & Transparency
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Središte <span className="text-primary">Povjerenja.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              Inženjerska disciplina, transparentni procesi i beskompromisna sigurnost. Saznajte kako štitimo vaše poslovanje u digitalnom svijetu.
            </p>
            <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
              <Link href="/kontakt">Zakaži security audit</Link>
            </Button>
          </div>
        </section>

        {/* Trust Pillars Grid */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-2 border-black">
              {TRUST_PILLARS.map((pillar, idx) => (
                <div key={idx} className="bg-white p-12 space-y-6 group hover:bg-muted transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-black flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-black/20">{pillar.tag}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight italic">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Change Management Policy */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary mb-4 block">Operational Policy</span>
                <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic mb-8 leading-none">
                  Upravljanje <span className="text-secondary">Promjenama.</span>
                </h2>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
                  Svaka promjena na vašem sustavu je kontrolirana. Ne vjerujemo u "ad-hoc" intervencije na produkciji koje mogu ugroziti stabilnost.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Verzioniranje koda (Git)", desc: "Potpuna povijest svake promjene s mogućnošću trenutnog povratka (rollback)." },
                    { title: "UAT Okruženje", desc: "Svaka nova značajka se prvo testira na identičnoj kopiji sustava prije puštanja." },
                    { title: "Maintenance Windows", desc: "Planirane nadogradnje se izvode u terminima najnižeg prometa uz prethodnu najavu." }
                  ].map((policy, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <RefreshCw className="w-5 h-5 text-secondary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold uppercase text-sm tracking-tight">{policy.title}</h4>
                        <p className="text-xs text-muted-foreground">{policy.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-black text-white p-12 lg:p-16 relative group">
                  <div className="absolute top-0 right-0 w-full h-1 bg-primary" />
                  <AlertTriangle className="w-16 h-16 text-primary/20 mb-8" />
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6 leading-none">Zero-Downtime vizija</h3>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    Naši deployment procesi su dizajnirani da minimiziraju ili u potpunosti eliminiraju prekid rada tijekom nadogradnji. Za kritične sustave koristimo "blue-green" strategiju isporuke.
                  </p>
                  <ul className="space-y-3">
                    {["Load balanced clusters", "Database replication", "Stateless architecture"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary">
                        <div className="w-1 h-1 bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence & Case Preview */}
        <section className="py-24 bg-slate-50 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center mb-24">
               {[
                 { label: "Uptime (Prosjek)", val: "99.98%" },
                 { label: "Sigurnosnih incidenata", val: "0" },
                 { label: "Godina iskustva", val: "25+" },
                 { label: "Aktivnih licenci", val: "270" }
               ].map((stat, i) => (
                 <div key={i} className="space-y-2">
                   <p className="text-5xl font-black italic tracking-tighter text-black">{stat.val}</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                 </div>
               ))}
            </div>

            <div className="max-w-4xl mx-auto bg-white border-2 border-black p-12 flex flex-col md:flex-row items-center gap-12">
               <div className="w-24 h-24 bg-slate-100 flex items-center justify-center shrink-0 border border-black/5">
                  <Zap className="w-10 h-10 text-secondary" />
               </div>
               <div className="flex-grow text-center md:text-left">
                  <h4 className="text-2xl font-black uppercase tracking-tight italic mb-2">Sigurnost u praksi: Case Study</h4>
                  <p className="text-muted-foreground font-medium mb-6">Saznajte kako smo zaštitili podatke 5000+ zaposlenika za vodeću regionalnu retail grupu kroz oklopljeni intranet portal.</p>
                  <Button variant="link" className="p-0 h-auto font-black uppercase tracking-widest text-xs gap-2" asChild>
                    <Link href="/work/retail-intranet">Pogledaj rješenje <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
               </div>
            </div>
          </div>
        </section>

        {/* FAQ - Enterprise Trust */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic text-center mb-16">Enterprise FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_TRUST.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-black">
                  <AccordionTrigger className="text-left font-black uppercase tracking-tight hover:text-primary py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-medium text-lg leading-relaxed pb-8">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4">
          <div className="bg-primary p-12 lg:p-24 text-center text-white relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic mb-8 leading-none">
                  Mirna savjest za vaš <span className="text-black">IT tim.</span>
                </h2>
                <p className="text-xl font-medium max-w-2xl mx-auto mb-12">
                  Dopustite nam da preuzmemo brigu o tehnologiji dok se vi fokusirate na rast. Dogovorite sastanak s našim security leadom.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                    <Link href="/kontakt">Zakaži termin</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                    <Link href="/insights">Istraži resurse <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
