
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  {
    name: "Rješenja",
    href: "#",
    subLinks: [
      { name: "Web platforme po mjeri", href: "/rjesenja/web-platforme" },
      { name: "E-commerce sustavi", href: "/rjesenja/ecommerce" },
      { name: "Custom softver i portali", href: "/rjesenja/custom-softver" },
      { name: "Integracije", href: "/rjesenja/integracije" },
    ],
  },
  { name: "EasyEdit", href: "/easyedit" },
  { name: "Proces", href: "/proces" },
  { name: "Reference", href: "/work" },
  { name: "Trust", href: "/trust" },
  { name: "Insights", href: "/insights" },
  { name: "O nama", href: "/o-nama" },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-border"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-bold text-xl group-hover:bg-accent transition-colors">
            W
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-primary">
            WEB Marketing
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            link.subLinks ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors outline-none">
                  {link.name} <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[200px]">
                  {link.subLinks.map((sub) => (
                    <DropdownMenuItem key={sub.name} asChild>
                      <Link href={sub.href}>{sub.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" asChild className="text-sm">
            <Link href="/easyedit">Zatražite demo</Link>
          </Button>
          <Button asChild className="text-sm">
            <Link href="/kontakt">Zatražite razgovor</Link>
          </Button>
        </div>

        {/* Mobile Nav Trigger */}
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
}
