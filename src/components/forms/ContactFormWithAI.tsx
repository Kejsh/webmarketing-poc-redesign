
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, HelpCircle, CheckCircle2, Send, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";

type IntelligentProjectBriefGeneratorOutput =
  | {
      type: "brief";
      projectName: string;
      projectDescription: string;
      projectType: string;
      budgetRange?: string;
      keyGoals: string[];
      requiredIntegrations: string[];
    }
  | {
      type: "questions";
      questions: string[];
    };

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [aiResult, setAiResult] = useState<IntelligentProjectBriefGeneratorOutput | null>(null);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "brief") {
      setIdea("Trebamo izradu custom rješenja na EasyEdit platformi. Naš projekt uključuje...");
    }
  }, [searchParams]);

  const handleProcessIdea = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    try {
      const hasEnoughContext = idea.length > 140 || /erp|crm|integracij|budžet|rok|api/i.test(idea);
      const output: IntelligentProjectBriefGeneratorOutput = hasEnoughContext
        ? {
            type: "brief",
            projectName: "Custom EasyEdit implementacija",
            projectDescription: idea,
            projectType: "Web platforma i integracije",
            budgetRange: "20.000€ - 50.000€",
            keyGoals: [
              "Digitalizacija ključnih procesa",
              "Brža obrada upita i narudžbi",
              "Mjerljiv rast kroz stabilnu platformu",
            ],
            requiredIntegrations: ["ERP", "CRM", "Email sustav"],
          }
        : {
            type: "questions",
            questions: [
              "Koji je glavni poslovni cilj projekta u prvih 6 mjeseci?",
              "Koje postojeće sustave trebamo integrirati (ERP, CRM, billing)?",
              "Postoji li ciljani rok lansiranja i okvirni budžet?",
            ],
          };
      await new Promise((resolve) => setTimeout(resolve, 500));
      setAiResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFinalSubmit = () => {
    setLoading(true);
    // Simulate final submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-black text-white p-12 lg:p-20 text-center space-y-8 animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-primary mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-4xl font-black uppercase tracking-tighter italic">Hvala vam na povjerenju.</h2>
        <p className="text-white/60 text-lg font-medium max-w-md mx-auto">
          Vaš brief je zaprimljen. Naši inženjeri će analizirati podatke i javiti vam se unutar 24 sata s prijedlogom termina za konzultacije.
        </p>
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white hover:text-black rounded-none font-black uppercase tracking-widest text-xs h-12"
          onClick={() => {
            setSubmitted(false);
            setAiResult(null);
            setIdea("");
          }}
        >
          Pošalji novi upit
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Input Section */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Opišite svoj <span className="text-primary">projekt.</span></h2>
          <p className="text-muted-foreground font-medium leading-relaxed">
            Koristimo AI za analizu vaših potreba. Slobodno pišite o ciljevima, željenim integracijama ili specifičnim funkcionalnostima. Što više detalja date, brief će biti precizniji.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="idea-input" className="text-[10px] font-black uppercase tracking-widest text-black/40">Vaša Vizija (Slobodni tekst)</Label>
            <Textarea
              id="idea-input"
              placeholder="Npr. Planiramo lansirati B2B portal za distributere koji mora biti sinkroniziran s našim SAP ERP-om..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="min-h-[250px] rounded-none border-2 border-black bg-slate-50 p-6 text-lg focus:ring-primary focus:border-primary placeholder:text-black/10"
            />
          </div>
          
          <Button
            onClick={handleProcessIdea}
            disabled={loading || !idea.trim()}
            className="w-full h-16 bg-black hover:bg-black/90 text-white rounded-none font-black uppercase tracking-widest text-xs shadow-xl transition-all hover:-translate-y-1"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
            )}
            Analiziraj i strukturiraj projekt
          </Button>
        </div>
      </div>

      {/* Right: AI Output Section */}
      <div className="relative">
        {aiResult ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500 sticky top-32">
            {aiResult.type === "brief" ? (
              <Card className="rounded-none border-2 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,174,239,0.1)]">
                <CardHeader className="bg-black text-white p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">AI Generirani Brief</span>
                  </div>
                  <CardTitle className="text-2xl font-black uppercase tracking-tight italic">
                    {aiResult.projectName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Opis Projekta</p>
                    <p className="text-sm font-medium leading-relaxed">{aiResult.projectDescription}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Tip Rješenja</p>
                      <p className="text-xs font-black uppercase text-primary">{aiResult.projectType}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Budžet (Est.)</p>
                      <p className="text-xs font-black uppercase">{aiResult.budgetRange || "Na upit"}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Ključni Ciljevi</p>
                    <ul className="space-y-2">
                      {aiResult.keyGoals.map((g, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight">
                          <div className="w-1.5 h-1.5 bg-accent shrink-0" /> {g}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {aiResult.requiredIntegrations.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Integracije</p>
                      <div className="flex flex-wrap gap-2">
                        {aiResult.requiredIntegrations.map((g, i) => (
                          <span key={i} className="px-3 py-1 bg-muted text-[8px] font-black uppercase tracking-widest">
                            {g}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-8 border-t-2 border-black/5">
                    <div className="grid gap-4">
                       <Input 
                        placeholder="Vaše ime i prezime" 
                        className="rounded-none border-black/10 focus:border-primary"
                       />
                       <Input 
                        type="email" 
                        placeholder="Vaša email adresa" 
                        className="rounded-none border-black/10 focus:border-primary"
                       />
                       <Button 
                        onClick={handleFinalSubmit}
                        className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs"
                       >
                         Pošalji Brief Inženjerima <Send className="w-4 h-4 ml-2" />
                       </Button>
                    </div>
                    <p className="mt-4 text-[8px] font-bold text-black/30 uppercase text-center tracking-widest">
                      Slanjem briefa pristajete na obradu podataka u svrhu izrade ponude.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="rounded-none border-2 border-black bg-slate-50 shadow-[20px_20px_0px_0px_rgba(0,170,166,0.1)] sticky top-32">
                <CardHeader className="bg-secondary text-white p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <HelpCircle className="w-6 h-6 text-white" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Potrebno pojašnjenje</span>
                  </div>
                  <CardTitle className="text-2xl font-black uppercase tracking-tight italic leading-none">
                    Razjasnimo viziju.
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                    Vaša ideja ima potencijala, ali kako bismo izradili točnu procjenu arhitekture, trebali bismo odgovore na sljedeća pitanja:
                  </p>
                  <ul className="space-y-4">
                    {aiResult.questions.map((q, i) => (
                      <li key={i} className="flex gap-4 p-4 bg-white border border-black/5 group hover:border-secondary transition-colors">
                        <span className="text-secondary font-black">?</span>
                        <p className="text-xs font-bold leading-tight group-hover:text-secondary transition-colors">{q}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-black/5">
                    <Button 
                      variant="outline" 
                      className="w-full border-2 border-black rounded-none font-black uppercase tracking-widest text-xs h-12 bg-transparent"
                      onClick={() => {
                        const textarea = document.getElementById("idea-input") as HTMLTextAreaElement;
                        textarea?.focus();
                      }}
                    >
                      Dopunite opis lijevo <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-slate-50 rounded-none border-2 border-dashed border-black/10 min-h-[500px]">
            <div className="w-20 h-20 bg-white border-2 border-dashed border-black/10 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-black/10" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-black/20 italic mb-2 leading-none">Vaš inteligentni brief.</h3>
            <p className="text-xs text-black/30 font-medium max-w-[200px] uppercase tracking-widest leading-relaxed">
              Upišite opis projekta s lijeve strane kako biste pokrenuli AI analizu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ContactFormWithAI() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Učitavanje forme...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
