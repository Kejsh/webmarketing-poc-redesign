
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, CheckCircle } from "lucide-react";
import { recommendEasyEditModules, type EasyEditModuleRecommenderOutput } from "@/ai/flows/easy-edit-module-recommender-flow";

export function ModuleRecommender() {
  const [needs, setNeeds] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EasyEditModuleRecommenderOutput | null>(null);

  const handleRecommend = async () => {
    if (!needs.trim()) return;
    setLoading(true);
    try {
      const output = await recommendEasyEditModules({ businessNeeds: needs });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Inteligentna preporuka modula
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Opišite vaše poslovne potrebe ili izazove, a naš AI asistent će preporučiti najprikladnije EasyEdit module.
          </p>
          <Textarea
            placeholder="Npr. Trebamo web shop s integracijom za SAP, podrškom za 3 jezika i naprednim sustavom za recenzije klijenta."
            value={needs}
            onChange={(e) => setNeeds(e.target.value)}
            className="bg-white"
            rows={4}
          />
          <Button
            onClick={handleRecommend}
            disabled={loading || !needs.trim()}
            className="w-full"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
            Generiraj preporuku
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.recommendations.map((rec, idx) => (
              <Card key={idx} className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    {rec.moduleName}
                  </h4>
                  <p className="text-sm text-muted-foreground">{rec.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-primary text-white border-none">
            <CardContent className="p-6">
              <h4 className="font-bold mb-3">Zašto EasyEdit za vas?</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                {result.differentiation}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
