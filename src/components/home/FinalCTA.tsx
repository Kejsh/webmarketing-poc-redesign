
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function FinalCTA() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="p-12 lg:w-1/2 bg-primary text-white flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-6">
              Recite što gradite
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Bilo da trebate stabilnu e-commerce platformu ili custom softver za interni proces, tu smo da osiguramo inženjersku razinu kvalitete.
            </p>
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Termin za besplatne tech konzultacije
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Demonstracija EasyEdit CMS platforme
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Strateški plan razvoja i procjena troškova
              </li>
            </ul>
          </div>

          <div className="p-12 lg:w-1/2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ime i prezime</Label>
                  <Input id="name" placeholder="Ivan Horvat" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email adresa</Label>
                  <Input id="email" type="email" placeholder="ivan@tvrtka.hr" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Tip projekta</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Odaberite..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Platforma</SelectItem>
                    <SelectItem value="ecommerce">E-commerce Sustav</SelectItem>
                    <SelectItem value="softver">Custom Softver</SelectItem>
                    <SelectItem value="other">Ostalo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Ukratko o projektu</Label>
                <Textarea id="message" placeholder="Vaša poruka..." className="min-h-[100px]" />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-xs text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Prihvaćam pravila o zaštiti podataka. Podaci će se koristiti isključivo za kontakt.
                </Label>
              </div>
              <Button className="w-full h-12 text-base font-bold">Pošaljite upit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
