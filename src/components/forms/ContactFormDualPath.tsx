"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Loader2, Send, Calendar, ArrowRight, ArrowLeft } from "lucide-react";

export function ContactFormDualPath() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulacija slanja
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleNextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const handlePrevStep = () => setStep(prev => Math.max(prev - 1, 1));

  if (success) {
    return (
      <div className="bg-slate-50 border-2 border-black p-12 lg:p-24 text-center space-y-8 animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-primary mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-4xl font-black uppercase tracking-tighter italic">Zahtjev zaprimljen.</h2>
        <p className="text-muted-foreground text-lg font-medium max-w-md mx-auto">
          Vaš upit je uspješno poslan. Naš tim inženjera će analizirati podatke i kontaktirati vas u najkraćem roku.
        </p>
        <Button 
          className="rounded-none font-black uppercase tracking-widest text-xs h-12 px-10"
          onClick={() => { setSuccess(false); setStep(1); }}
        >
          Pošalji novi upit
        </Button>
      </div>
    );
  }

  return (
    <Tabs defaultValue="demo" className="w-full">
      <div className="flex flex-col items-center mb-12">
        <TabsList className="bg-slate-100 rounded-none h-auto p-1 border-2 border-black">
          <TabsTrigger 
            value="demo" 
            className="rounded-none px-8 py-4 font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-black data-[state=active]:text-white"
          >
            1. Dogovor Razgovora / Demo
          </TabsTrigger>
          <TabsTrigger 
            value="brief" 
            className="rounded-none px-8 py-4 font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            2. Pošalji Detaljan Brief
          </TabsTrigger>
        </TabsList>
      </div>

      {/* Path 1: Brzi Demo / Razgovor */}
      <TabsContent value="demo">
        <Card className="rounded-none border-2 border-black bg-white max-w-2xl mx-auto shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)]">
          <CardContent className="p-10 lg:p-16">
            <div className="mb-10 text-center">
              <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4">Zakažite termin</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Ostavite svoje podatke za brzi 15-minutni uvodni razgovor ili prezentaciju EasyEdit CMS-a.
              </p>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest">Ime i Prezime</Label>
                  <Input className="rounded-none border-2 border-black h-12" placeholder="Ivan Horvat" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest">Poslovni Email</Label>
                  <Input type="email" className="rounded-none border-2 border-black h-12" placeholder="ivan@tvrtka.hr" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Tvrtka</Label>
                <Input className="rounded-none border-2 border-black h-12" placeholder="Naziv vaše organizacije" required />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Što vas najviše zanima?</Label>
                <Select>
                  <SelectTrigger className="rounded-none border-2 border-black h-12">
                    <SelectValue placeholder="Odaberite temu" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-2 border-black">
                    <SelectItem value="demo">Generalni Demo Sustava</SelectItem>
                    <SelectItem value="ecom">E-commerce Specifičnosti</SelectItem>
                    <SelectItem value="integration">Mogućnosti Integracije</SelectItem>
                    <SelectItem value="security">Sigurnost i Hosting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full h-16 bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs">
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Calendar className="w-4 h-4 mr-2 text-primary" />}
                Zakaži razgovor / Demo
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Path 2: Strukturirani Multi-step Brief */}
      <TabsContent value="brief">
        <Card className="rounded-none border-2 border-black bg-white max-w-4xl mx-auto shadow-[20px_20px_0px_0px_rgba(0,174,239,0.1)] overflow-hidden">
          <div className="bg-primary h-2 w-full transition-all duration-500" style={{ width: `${(step / 5) * 100}%` }} />
          <CardContent className="p-10 lg:p-16">
            
            {/* Step 1: Tip Projekta */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">KORAK 01/05 — TIP RJEŠENJA</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Koji tip platforme projektiramo?</h3>
                </div>
                <RadioGroup defaultValue="web" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: "web", label: "Custom Web Platforma", desc: "Složeni web sustavi i portali" },
                    { id: "ecom", label: "E-commerce Sustav", desc: "B2B/B2C trgovine i prodaja" },
                    { id: "portal", label: "Poslovni Portal", desc: "CRM, B2B zone, interni alati" },
                    { id: "int", label: "Sistemske Integracije", desc: "Povezivanje ERP/CRM sustava" }
                  ].map((item) => (
                    <div key={item.id} className="relative">
                      <RadioGroupItem value={item.id} id={item.id} className="peer sr-only" />
                      <Label
                        htmlFor={item.id}
                        className="flex flex-col p-6 border-2 border-black cursor-pointer peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white hover:bg-slate-50 transition-all h-full"
                      >
                        <span className="font-black uppercase tracking-tight text-lg mb-1">{item.label}</span>
                        <span className="text-[10px] font-medium uppercase tracking-widest opacity-60">{item.desc}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                <div className="pt-8 border-t border-black/5 flex justify-end">
                  <Button onClick={handleNextStep} className="h-14 px-10 rounded-none font-black uppercase tracking-widest text-xs">
                    Nastavi <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Integracije */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">KORAK 02/05 — INTEGRACIJE</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Koje sustave trebamo povezati?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "erp", label: "ERP (SAP, Navision, Pantheon...)" },
                    { id: "crm", label: "CRM (Salesforce, HubSpot...)" },
                    { id: "pay", label: "Payment (Stripe, Corvus...)" },
                    { id: "log", label: "Logistika (GLS, DPD...)" },
                    { id: "pim", label: "PIM / Digital Assets" },
                    { id: "other", label: "Custom API / Drugo" }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-4 border border-black/5 hover:border-black/20 transition-colors">
                      <Checkbox id={item.id} className="rounded-none border-2 border-black" />
                      <Label htmlFor={item.id} className="text-xs font-bold uppercase tracking-tight cursor-pointer">{item.label}</Label>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-black/5 flex justify-between">
                  <Button variant="ghost" onClick={handlePrevStep} className="h-14 px-10 rounded-none font-black uppercase tracking-widest text-xs">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Nazad
                  </Button>
                  <Button onClick={handleNextStep} className="h-14 px-10 rounded-none font-black uppercase tracking-widest text-xs">
                    Nastavi <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Ciljevi */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">KORAK 03/05 — CILJEVI</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Što su ključni prioriteti?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "sales", label: "Povećanje prodaje" },
                    { id: "process", label: "Optimizacija procesa" },
                    { id: "security", label: "Sigurnost podataka" },
                    { id: "scaling", label: "Skaliranje sustava" },
                    { id: "ux", label: "Korisničko iskustvo" },
                    { id: "tech", label: "Tehnička stabilnost" }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-4 border border-black/5 hover:border-black/20 transition-colors">
                      <Checkbox id={item.id} className="rounded-none border-2 border-black" />
                      <Label htmlFor={item.id} className="text-xs font-bold uppercase tracking-tight cursor-pointer">{item.label}</Label>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-black/5 flex justify-between">
                  <Button variant="ghost" onClick={handlePrevStep} className="h-14 px-10 rounded-none font-black uppercase tracking-widest text-xs">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Nazad
                  </Button>
                  <Button onClick={handleNextStep} className="h-14 px-10 rounded-none font-black uppercase tracking-widest text-xs">
                    Nastavi <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Rok + Budžet */}
            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">KORAK 04/05 — RESURSI</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Planirani rokovi i budžet?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-black/40">Okvirni Rok</Label>
                    <Select>
                      <SelectTrigger className="rounded-none border-2 border-black h-14">
                        <SelectValue placeholder="Odaberite vrijeme" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-2 border-black">
                        <SelectItem value="3m">Unutar 3 mjeseca</SelectItem>
                        <SelectItem value="6m">3 - 6 mjeseci</SelectItem>
                        <SelectItem value="12m">6 - 12 mjeseci</SelectItem>
                        <SelectItem value="flex">Fleksibilno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-black/40">Procjena investicije</Label>
                    <Select>
                      <SelectTrigger className="rounded-none border-2 border-black h-14">
                        <SelectValue placeholder="Odaberite raspon" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none border-2 border-black">
                        <SelectItem value="10k">€10k - €30k</SelectItem>
                        <SelectItem value="50k">€30k - €70k</SelectItem>
                        <SelectItem value="100k">€70k+</SelectItem>
                        <SelectItem value="na">Na upit / Neodređeno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="pt-8 border-t border-black/5 flex justify-between">
                  <Button variant="ghost" onClick={handlePrevStep} className="h-14 px-10 rounded-none font-black uppercase tracking-widest text-xs">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Nazad
                  </Button>
                  <Button onClick={handleNextStep} className="h-14 px-10 rounded-none font-black uppercase tracking-widest text-xs">
                    Nastavi <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 5: Kontakt */}
            {step === 5 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">KORAK 05/05 — KONTAKT</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Tko je nositelj projekta?</h3>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest">Ime i Prezime</Label>
                      <Input className="rounded-none border-2 border-black h-14" placeholder="Vaše ime" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest">Poslovni Email</Label>
                      <Input type="email" className="rounded-none border-2 border-black h-14" placeholder="email@tvrtka.hr" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest">Opis projekta (Slobodni unos)</Label>
                    <Textarea className="rounded-none border-2 border-black min-h-[120px]" placeholder="Ukratko o vašim specifičnim zahtjevima..." />
                  </div>
                </div>
                <div className="pt-8 border-t border-black/5 flex justify-between items-center">
                  <Button variant="ghost" onClick={handlePrevStep} className="h-14 px-10 rounded-none font-black uppercase tracking-widest text-xs">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Nazad
                  </Button>
                  <Button onClick={handleFormSubmit} className="h-16 px-12 bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
                    Pošalji Brief <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
