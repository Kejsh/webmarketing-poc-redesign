"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isHomepage
          ? "border-b border-white/10 bg-[#08122B]/82 backdrop-blur-2xl"
          : "border-b border-black/8 bg-white/92 backdrop-blur-xl",
        isScrolled ? "py-3 shadow-md" : "py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-6 px-4">
        <Link href="/" className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-md border text-2xl font-bold shadow-[0_10px_24px_rgba(7,17,31,0.08)]",
              isHomepage ? "bg-white text-[#08122B]" : "bg-primary text-white"
            )}
          >
            W
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                "font-headline text-xl font-black uppercase tracking-tighter",
                isHomepage ? "brand-lockup-home" : "text-black"
              )}
            >
              WEB MARKETING
            </span>
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em]",
                isHomepage ? "brand-lockup-home-subtle" : "text-secondary"
              )}
            >
              ENGINEERING FIRST
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {MAIN_NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-[13px] font-bold uppercase tracking-wider transition-colors",
                isHomepage ? "text-white/78 hover:text-white" : "text-black/68 hover:text-primary",
                isActive(item.href) && (isHomepage ? "text-white" : "text-black")
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex">
          <Button
            asChild
            className={cn(
              "h-11 rounded-full px-6 text-xs font-black uppercase tracking-[0.22em]",
              isHomepage
                ? "bg-white text-[#08122B] hover:bg-white/92 shadow-[0_18px_40px_rgba(7,17,31,0.18)]"
                : "bg-black text-white hover:bg-black/90"
            )}
          >
            <Link href="/kontakt">Zatražite besplatnu analizu</Link>
          </Button>
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "xl:hidden",
                isHomepage
                  ? "rounded-full border border-white/16 text-white hover:bg-white/10"
                  : "rounded-full border border-black/12 text-black hover:bg-black/5"
              )}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className={cn(
              "w-full p-0 sm:max-w-md",
              isHomepage
                ? "border-l border-white/10 bg-[#08122B] text-white"
                : "border-l border-black/10 bg-white text-black"
            )}
          >
            <SheetHeader
              className={cn(
                "border-b px-6 py-6",
                isHomepage ? "border-white/10" : "border-black/10"
              )}
            >
              <SheetTitle className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-md text-lg font-bold",
                    isHomepage ? "bg-white text-[#08122B]" : "bg-primary text-white"
                  )}
                >
                  W
                </div>
                <span className={cn("font-headline text-lg font-black uppercase tracking-tight", isHomepage ? "text-white" : "text-black")}>
                  Navigacija
                </span>
              </SheetTitle>
            </SheetHeader>

            <div className="flex h-[calc(100vh-84px)] flex-col justify-between">
              <nav className="space-y-3 px-6 py-8">
                {MAIN_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-black uppercase tracking-tight transition-colors",
                      isHomepage
                        ? "bg-white/5 text-white/84 hover:bg-white/10 hover:text-white"
                        : "bg-black/[0.03] text-black/78 hover:bg-black/[0.05] hover:text-black"
                    )}
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </nav>

              <div className={cn("p-6", isHomepage ? "bg-[#060f26]" : "bg-slate-50")}>
                <Button
                  asChild
                  className={cn(
                    "h-14 w-full rounded-full text-xs font-black uppercase tracking-[0.22em]",
                    isHomepage ? "bg-white text-[#08122B] hover:bg-white/92" : "bg-black text-white hover:bg-black/90"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/kontakt">Zatražite besplatnu analizu</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
