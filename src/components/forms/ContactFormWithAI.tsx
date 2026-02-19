
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, Send, HelpCircle, CheckCircle2 } from "lucide-react";
import { generateProjectBriefOrQuestions, type IntelligentProjectBriefGeneratorOutput } from "@/ai/flows/intelligent-project-brief-generator";
import { Label } from "@/components/ui/label";

export function ContactFormWithAI() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState<IntelligentProjectBriefGeneratorOutput | null>(null);

  const handleProcessIdea = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    try {
      const output = await generateProjectBriefOrQuestions({ projectIdea: idea });
      setAiResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-headline font-bold text-primary mb-4">Recite nam o svom projektu</h2>
          <p className="text-muted-foreground">
            Opišite vašu ideju onako kako je vidite. Naš AI asistent će vam pomoći strukturirati zahtjeve ili postaviti ključna pitanja kako bismo što brže došli do rješenja.
          </p>
        </div>

        <div className="space-y-4">
          <Label htmlFor="idea-input">Vaša vizija projekta</Label>
          <Textarea
            id="idea-input"
            placeholder="Npr. Želimo izgraditi novu e-commerce platformu za naše partnere koja se sinkronizira s ERP-om i ima personalizirani prikaz cijena za svakog kupca..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="min-h-[200px]"
          />
          <Button
            onClick={handleProcessIdea}
            disabled={loading || !idea.trim()}
            className="w-full bg-accent hover:bg-accent/90"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
            Analiziraj i strukturiraj projekt
          </Button>
        </div>

        <div className="pt-8 border-t space-y-4">
          <h4 className="font-bold">Izravni kontakt</h4>
          <p className="text-sm text-muted-foreground">Uvijek nas možete dobiti direktno:</p>
          <div className="space-y-2 text-sm">
            <p><strong>Telefon:</strong> +385 1 123 4567</p>
            <p><strong>Email:</strong> info@webmarketing.hr</p>
          </div>
        </div>
      </div>

      <div>
        {aiResult ? (
          <div className="space-y-6 animate-in fade-in duration-500">
            {aiResult.type === "brief" ? (
              <Card className="border-accent">
                <CardHeader className="bg-accent/5">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="w-5 h-5 text-accent" /> Strukturirani Brief
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4 text-sm">
                  <div>
                    <h5 className="font-bold text-primary">Projekt: {aiResult.projectName}</h5>
                    <p className="text-muted-foreground mt-1">{aiResult.projectDescription}</p>
                  </div>
                  <div>
                    <p className="font-bold">Tip: <span className="font-normal">{aiResult.projectType}</span></p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Ključni ciljevi:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {aiResult.keyGoals.map((g, i) => <li key={i}>{g}</li>)}
                    </ul>
                  </div>
                  {aiResult.requiredIntegrations.length > 0 && (
                    <div>
                      <p className="font-bold mb-1">Potrebne integracije:</p>
                      <ul className="list-disc list-inside text-muted-foreground">
                        {aiResult.requiredIntegrations.map((g, i) => <li key={i}>{g}</li>)}
                      </ul>
                    </div>
                  )}
                  <div className="pt-4 border-t">
                    <p className="font-bold text-accent mb-2">Brief je spreman!</p>
                    <Button className="w-full">Pošaljite ovaj brief našem timu</Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-primary/20 bg-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <HelpCircle className="w-5 h-5 text-primary/50" /> Razjasnimo detalje
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Vaša ideja je zanimljiva, ali trebamo još nekoliko informacija kako bismo izradili točnu ponudu:
                  </p>
                  <ul className="space-y-3">
                    {aiResult.questions.map((q, i) => (
                      <li key={i} className="flex gap-2 text-sm bg-white p-3 rounded border">
                        <span className="font-bold text-accent">?</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button variant="outline" className="w-full" onClick={() => setAiResult(null)}>
                      Dopunite vaš opis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <Sparkles className="w-12 h-12 text-slate-300 mb-4" />
            <h3 className="font-headline font-bold text-slate-400 mb-2">Čekamo vašu ideju</h3>
            <p className="text-sm text-slate-400 max-w-xs">
              Upišite opis projekta lijevo kako bismo vam pomogli strukturirati zahtjeve.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
