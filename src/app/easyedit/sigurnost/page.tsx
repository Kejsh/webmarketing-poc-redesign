import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  History, 
  Server, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Fingerprint,
  HardDrive,
  FileLock
} from "lucide-react";
import Link from "next/link";

const SECURITY_LAYERS = [
  {
    title: "Core Hardening",
    desc: "Zatvorena arhitektura onemogućuje 99% automatiziranih bot napada koji ciljaju poznate ranjivosti open-source platformi.",
    icon: Lock
  },
  {
    title: "Granularna Prava",
    desc: "Role-based access control (RBAC) na razini pojedinačnog polja u bazi podataka osigurava da podaci budu dostupni samo ovlaštenima.",
    icon: Fingerprint
  },
  {
    title: "Audit Log Engine",
    desc: "Svaka izmjena u sustavu se bilježi s potpunim tragom: tko, kada, s koje IP adrese i što je točno promijenjeno.",
    icon: History
  },
  {
    title: "ISO 27001 Readiness",
    desc: "Arhitektura sustava i razvojni procesi usklađeni su s najvišim standardima informacijske sigurnosti.",
    icon: FileLock
  }
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Tehnologija / Sigurnost & Trust
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Inženjering <span className="text-primary">povjerenja.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl mb-12">
              U svijetu gdje je sigurnost kritična, EasyEdit CMS nudi oklopljenu okolinu za vaše najvažnije digitalne podatke. Sigurnost nije dodatak — ona je temelj naše arhitekture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt">Zatražite security audit report</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/easyedit">Tehnički pregled platforme</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison: Open Source vs EasyEdit */}
        <section className="bg-slate-50 py-24 border-y border-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic mb-6">Zašto ne koristimo <span className="text-destructive">open-source?</span></h2>
              <p className="text-muted-foreground font-medium">Usporedba stabilnosti i rizika za enterprise projekte.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black max-w-5xl mx-auto">
              {/* Open Source Column */}
              <div className="bg-white p-12">
                <div className="flex items-center gap-3 mb-8 text-destructive">
                  <AlertTriangle className="w-6 h-6" />
                  <span className="font-black uppercase tracking-widest text-sm text-black">Generički sustavi</span>
                </div>
                <ul className="space-y-6">
                  {[
                    "Javno dostupan izvorni kod (olakšava hakiranje)",
                    "Ovisnost o neprovjerenim third-party pluginovima",
                    "Stalna potreba za hitnim sigurnosnim zakrpama",
                    "Tehnički dug i bloatware koji usporava rad",
                    "Nepoznata struktura baze podataka klijentu"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground font-medium leading-tight">
                      <span className="text-destructive font-bold">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* EasyEdit Column */}
              <div className="bg-black text-white p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-0" />
                <div className="flex items-center gap-3 mb-8 text-primary relative z-10">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="font-black uppercase tracking-widest text-sm text-white">EasyEdit CMS</span>
                </div>
                <ul className="space-y-6 relative z-10">
                  {[
                    "Zatvoreni kod (vlastita arhitektura bez javnih rupa)",
                    "Native moduli razvijeni od strane naših inženjera",
                    "Proaktivno održavanje i hardening servera",
                    "Vrhunske performanse bez nepotrebnog koda",
                    "Puna kontrola nad podacima i strukturom"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/70 font-medium leading-tight">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Security Pillars */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {SECURITY_LAYERS.map((layer, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="w-14 h-14 bg-black flex items-center justify-center">
                    <layer.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight italic">{layer.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure & GDPR */}
        <section className="py-24 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic mb-8 leading-none">
                    Oklopljena <span className="text-primary">infrastruktura.</span>
                  </h2>
                  <p className="text-white/60 text-lg font-medium leading-relaxed">
                    Sigurnost nije samo softver. Naš hosting stack je konfiguriran za maksimalnu otpornost na vanjske napade i gubitak podataka.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Server className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-sm tracking-widest text-primary mb-2">Hardened Cloud</h4>
                      <p className="text-xs text-white/40 leading-relaxed italic">Optimizirani OS, Web Application Firewall (WAF) i izolirani kontejneri za svaki projekt.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <HardDrive className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-sm tracking-widest text-primary mb-2">Real-time Backups</h4>
                      <p className="text-xs text-white/40 leading-relaxed italic">Automatizirana pohrana na tri geografski odvojene lokacije uz Disaster Recovery plan od 4h.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-primary/5 border border-primary/20 p-12 lg:p-20 relative group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  <ShieldAlert className="w-24 h-24 text-primary/40 mb-10 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6">Usklađenost je norma.</h3>
                  <p className="text-lg text-white/70 font-medium mb-8">
                    EasyEdit platforma je od početka građena s "Privacy by Design" principima, osiguravajući punu usklađenost s GDPR uredbom i lokalnim zakonodavstvom.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Anonimizacija osobnih podataka",
                      "Upravljanje privolama (Consent Management)",
                      "Zaborav korisnika jednim klikom",
                      "Šifriranje podataka u mirovanju (AES-256)"
                    ].map((item, i) => (
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

        {/* Final Trust CTA */}
        <section className="py-24 bg-white border-t border-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10 italic leading-none">
              Miran san za vaš <span className="text-primary">IT tim.</span>
            </h2>
            <p className="text-muted-foreground text-xl font-medium max-w-2xl mx-auto mb-12">
              Osigurajte svoje poslovanje na platformi koja ne pravi kompromise sa sigurnošću. Dogovorite tehničke konzultacije s našim security stručnjacima.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-16 px-12" asChild>
                <Link href="/kontakt">Zakaži security audit</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-16 px-12 bg-transparent" asChild>
                <Link href="/kontakt?type=brief">Pošalji brief <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
