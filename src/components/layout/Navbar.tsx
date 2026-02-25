
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronDown, Menu, Search, Globe, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const NAV_GROUPS = [
  {
    name: "Rješenja",
    href: "/rjesenja",
    subLinks: [
      { name: "Sva rješenja", href: "/rjesenja" },
      { name: "Web platforme", href: "/rjesenja/web-platforme" },
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
  { name: "Klijenti", href: "/klijenti" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchDialogOpen(false);
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
  };

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
              <span className="font-headline font-black text-xl tracking-tighter text-black uppercase">
                WEB MARKETING
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">
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
             <Dialog open={searchDialogOpen} onOpenChange={setSearchDialogOpen}>
               <DialogTrigger asChild>
                 <button className="p-2 hover:bg-muted transition-colors">
                   <Search className="w-5 h-5" />
                 </button>
               </DialogTrigger>
               <DialogContent className="rounded-none border-2 border-black max-w-2xl">
                 <DialogHeader>
                   <DialogTitle className="font-black uppercase tracking-tight italic">Pretražite Knowledge Base</DialogTitle>
                 </DialogHeader>
                 <div className="py-8">
                   <form onSubmit={handleSearchSubmit} className="relative">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                     <Input 
                       placeholder="Unesite pojam (npr. ERP integracija, SEO, modula...)" 
                       className="h-16 pl-12 rounded-none border-2 border-black text-lg focus:ring-primary"
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                       autoFocus
                     />
                     <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white rounded-none font-black uppercase text-[10px] px-4">Traži</Button>
                   </form>
                   <div className="mt-6 flex flex-wrap gap-4">
                     <span className="text-[10px] font-black uppercase text-black/40">Često traženo:</span>
                     {["SAP", "EasyEdit", "Sigurnost", "E-commerce"].map(t => (
                       <button 
                        key={t} 
                        onClick={() => { setSearchQuery(t); }}
                        className="text-[10px] font-bold uppercase hover:text-primary transition-colors"
                       >
                         {t}
                       </button>
                     ))}
                   </div>
                 </div>
               </DialogContent>
             </Dialog>
             
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

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden border-2 border-black rounded-none">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md p-0 rounded-none border-l-2 border-black">
              <SheetHeader className="p-6 border-b border-black">
                <SheetTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center text-white font-bold text-lg">
                    W
                  </div>
                  <span className="font-headline font-black uppercase tracking-tighter">NAVIGACIJA</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-[calc(100vh-80px)]">
                <div className="flex-grow overflow-y-auto p-6">
                  <nav className="space-y-8">
                    {NAV_GROUPS.map((group) => (
                      <div key={group.name} className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">{group.name}</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {group.subLinks ? (
                            group.subLinks.map((sub) => (
                              <Link 
                                key={sub.name} 
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-black uppercase tracking-tight hover:text-primary transition-colors flex items-center justify-between group"
                              >
                                {sub.name}
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                              </Link>
                            ))
                          ) : (
                            <Link 
                              href={group.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-lg font-black uppercase tracking-tight hover:text-primary transition-colors flex items-center justify-between group"
                            >
                              {group.name}
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="p-6 bg-black mt-auto">
                  <Button className="w-full rounded-none bg-primary hover:bg-primary/90 font-black uppercase tracking-widest text-xs h-14" asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/kontakt">Započnite Projekt</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
