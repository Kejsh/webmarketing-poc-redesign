"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, Linkedin, Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={cn("surface-dark pb-10 pt-20", isHomepage ? "bg-[#08122B]" : "bg-primary")}>
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-sm text-xl font-bold",
                  isHomepage ? "bg-white text-[#08122B]" : "bg-white text-primary"
                )}
              >
                W
              </div>
              <span className={cn("font-headline font-bold tracking-tight text-white", isHomepage ? "text-2xl" : "text-xl")}>
                WEB Marketing
              </span>
            </div>
            <p className={cn("leading-relaxed", isHomepage ? "text-base surface-dark-muted" : "text-sm surface-dark-muted")}>
              Razvijamo web rješenja, e-commerce sustave i funkcionalnosti po mjeri na vlastitom EasyEdit CMS sustavu.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full transition-colors",
                  isHomepage ? "bg-white/10 hover:bg-white/16" : "bg-white/5 hover:bg-white/10"
                )}
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <a
                href="mailto:prodaja@wem.hr"
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full transition-colors",
                  isHomepage ? "bg-white/10 hover:bg-white/16" : "bg-white/5 hover:bg-white/10"
                )}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className={cn("mb-6 font-headline font-bold text-white", isHomepage ? "text-xl" : "text-lg")}>
              Brzi linkovi
            </h4>
            <ul className={cn("space-y-4", isHomepage ? "text-base text-white/78" : "text-sm text-white/70")}>
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Naslovnica
                </Link>
              </li>
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={cn("mb-6 font-headline font-bold text-white", isHomepage ? "text-xl" : "text-lg")}>
              Kontakt
            </h4>
            <ul className={cn("space-y-5", isHomepage ? "text-base text-white/80" : "text-sm text-white/70")}>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <a href="tel:+38513817757" className="transition-colors hover:text-white">
                  +385 1 3817 757
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-accent" />
                <a href="mailto:prodaja@wem.hr" className="transition-colors hover:text-white">
                  prodaja@wem.hr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={cn("mb-6 font-headline font-bold text-white", isHomepage ? "text-xl" : "text-lg")}>
              Radno vrijeme
            </h4>
            <ul className={cn("space-y-5", isHomepage ? "text-base text-white/80" : "text-sm text-white/70")}>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-accent" />
                <div>
                  <p>Pon - Pet: 08:00 - 16:00</p>
                  <p className={cn("mt-1", isHomepage ? "text-xs surface-dark-soft" : "text-[10px] surface-dark-soft")}>
                    Vikendom i praznicima zatvoreno
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-10 md:flex-row",
            isHomepage ? "text-sm surface-dark-soft" : "text-xs surface-dark-soft"
          )}
        >
          <p>© {currentYear || "..."} WEB Marketing d.o.o. Sva prava pridržana.</p>
          <div className="flex gap-6">
            <Link href="/privatnost" className="hover:text-white">
              Pravila privatnosti
            </Link>
            <Link href="/uvjeti" className="hover:text-white">
              Uvjeti korištenja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
