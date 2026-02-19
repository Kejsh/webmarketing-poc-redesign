
"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center text-primary font-bold text-xl">
                W
              </div>
              <span className="font-headline font-bold text-xl tracking-tight">
                WEB Marketing
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Dugoročni tehnološki partner fokusiran na stabilnost, sigurnost i skalabilnost digitalnih sustava. Razvijamo custom rješenja na vlastitoj EasyEdit platformi.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-lg">Brzi linkovi</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><Link href="/rjesenja" className="hover:text-white transition-colors">Rješenja</Link></li>
              <li><Link href="/easyedit" className="hover:text-white transition-colors">EasyEdit CMS</Link></li>
              <li><Link href="/proces" className="hover:text-white transition-colors">Naš proces</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Reference</Link></li>
              <li><Link href="/trust" className="hover:text-white transition-colors">Sigurnost i Trust</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-lg">Kontakt</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span>+385 1 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span>info@webmarketing.hr</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>Ulica 123, 10000 Zagreb, Hrvatska</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-lg">Radno vrijeme</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-accent" />
                <div>
                  <p>Pon - Pet: 08:00 - 16:00</p>
                  <p className="text-[10px] mt-1 text-white/40">Vikendom i praznicima zatvoreno</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} WEB Marketing d.o.o. Sva prava pridržana.</p>
          <div className="flex gap-6">
            <Link href="/privatnost" className="hover:text-white">Pravila privatnosti</Link>
            <Link href="/uvjeti" className="hover:text-white">Uvjeti korištenja</Link>
            <button className="hover:text-white">Postavke kolačića</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
