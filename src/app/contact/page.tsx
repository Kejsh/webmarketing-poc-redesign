
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactFormWithAI } from "@/components/forms/ContactFormWithAI";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        
        {/* Contact Hero */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Kontakt / Projektne Konzultacije
            </div>
            <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 italic leading-[0.9]">
              Započnimo <span className="text-primary">evoluciju.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium max-w-3xl">
              Bez obzira trebate li procjenu arhitekture, demo EasyEdit sustava ili kompletan razvoj platforme — naši inženjeri su spremni za razgovor.
            </p>
          </div>
        </section>

        {/* Main Content: AI Form + Info */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form Section */}
            <div className="lg:col-span-8">
              <ContactFormWithAI />
            </div>

            {/* Side Info Section */}
            <div className="lg:col-span-4 space-y-12">
              <div className="bg-black text-white p-10 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
                <h3 className="text-2xl font-black uppercase tracking-tight italic relative z-10">Direktni Kanali</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Centrala</p>
                      <p className="font-bold">+385 1 123 4567</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Upiti & Briefovi</p>
                      <p className="font-bold">info@webmarketing.hr</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Ured Zagreb</p>
                      <p className="font-bold leading-tight">Ulica Tehnologije 123,<br/>10000 Zagreb, Hrvatska</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 border-2 border-black space-y-6">
                <h4 className="font-black uppercase tracking-tight text-lg italic">Tehnička Podrška</h4>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  Postojeći klijenti s aktivnim SLA ugovorom mogu pristupiti Ticketing sustavu direktno putem korisničkog portala ili pozivom na namjenski broj podrške.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary">
                  <Globe className="w-3 h-3" /> 24/7 Monitoring Aktivan
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
