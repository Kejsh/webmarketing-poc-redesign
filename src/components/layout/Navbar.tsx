"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, Search, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_GROUPS = [
  {
    name: "Rješenja",
    href: "/rjesenja",
    subLinks: [
      { name: "Web platforme po mjeri", href: "/rjesenja/web-platforme" },
      { name: "E-commerce sustavi", href: "/rjesenja/ecommerce" },
      { name: "Poslovni portali", href: "/rjesenja/poslovni-portali" },
      { name: "Integracije sustava", href: "/rjesenja/integracije" },
      { name: "Održavanje i podrška", href: "/podrska" },
    ],
  },
  { 
    name: "EasyEdit CMS", 
    href: "/easyedit",
    subLinks: [
      { name: "Pregled platforme", href: "/easyedit" },
      { name: "Katalog modula", href: "/easyedit/moduli" },
      { name: "Sigurnost i Trust", href: "/easyedit/sigurnost" },
    ]
  },
  { name: "Studije slučaja", href: "/work" },
  { name: "Proces", href: "/proces" },
  { 
    name: "Resursi", 
    href: "/insights",
    subLinks: [
      { name: "Blog & Insights", href: "/insights" },
      { name: "Vodiči i Whitepapers", href: "/resursi/vodici" },
      { name: "Česta pitanja (FAQ)", href: "/faq" },
    ]
  },
  { 
    name: "Tvrtka", 
    href: "/o-nama",
    subLinks: [
      { name: "O nama", href: "/o-nama" },
      { name: "Nagrade i certifikati", href: "/tvrtka/nagrade" },
      { name: "EU projekti", href: "/tvrtka/eu-projekti" },
      { name: "Karijere", href: "/karijere" },
    ]
  },
  { name: "Kontakt", href: "/kontakt" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white",
        isScrolled ? "py-3 shadow-md" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary flex items-center justify-center text-white font-bold text-2xl">
              W
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-headline font-black text-xl tracking-tighter text-black">
                WEB MARKETING
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-secondary">
                ENGINEERING FIRST
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_GROUPS.map((link) => (
              link.subLinks ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider hover:text-primary transition-colors outline-none">
                    {link.name} <ChevronDown className="w-3 h-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="rounded-none border-2 border-black min-w-[240px] p-2 shadow-2xl">
                    {link.subLinks.map((sub) => (
                      <DropdownMenuItem key={sub.name} asChild className="rounded-none focus:bg-primary focus:text-white cursor-pointer py-2 px-4 transition-colors">
                        <Link href={sub.href}>{sub.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-bold uppercase tracking-wider hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 border-r pr-4 border-muted">
             <button className="p-2 hover:bg-muted transition-colors">
               <Search className="w-5 h-5" />
             </button>
             <div className="flex items-center gap-1 text-xs font-bold uppercase">
               <Globe className="w-3 h-3" />
               <span className="text-primary">HR</span>
               <span className="text-muted-foreground mx-1">/</span>
               <span className="text-muted-foreground hover:text-black cursor-pointer">EN</span>
             </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild className="text-xs font-bold uppercase tracking-widest border-2 border-black rounded-none hover:bg-black hover:text-white transition-all">
              <Link href="/kontakt?type=brief">Pošalji brief</Link>
            </Button>
            <Button asChild className="text-xs font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 rounded-none h-10 px-6 shadow-lg shadow-primary/20">
              <Link href="/kontakt">Dogovori Demo</Link>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="xl:hidden border-2 border-black rounded-none">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
