import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Terminal, Home, ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto border-2 border-black bg-slate-50 p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive" />
            <Terminal className="w-16 h-16 text-black/10 absolute top-10 right-10" />
            
            <div className="space-y-8 relative z-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-destructive mb-4 block">Error 404 / Page Not Found</span>
                <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter italic leading-none mb-6">
                  Izgubljeni <span className="text-destructive">paket.</span>
                </h1>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Stranica koju tražite ne postoji ili je premještena tijekom sistemske optimizacije. Naš "debug" sustav predlaže povratak na sigurno.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button size="lg" className="bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" /> Povratak na početnu
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-14 px-10 bg-transparent" asChild>
                  <Link href="/insights">
                    <Search className="w-4 h-4 mr-2" /> Pretraži bazu znanja
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-black/5 font-mono text-[10px] text-black/20 uppercase tracking-widest">
              Stack Trace: Route_Not_Resolved // Exception_Thrown // EE_Core_Safe_Exit
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
