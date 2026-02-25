"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { searchKnowledgeBase, type KnowledgeSearchOutput } from "@/ai/flows/knowledge-search-flow";
import { Loader2, Search, ArrowRight, Sparkles, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<KnowledgeSearchOutput | null>(null);

  useEffect(() => {
    async function fetchResults() {
      if (!query) return;
      setLoading(true);
      try {
        const result = await searchKnowledgeBase({ query });
        setData(result);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchResults();
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-4 block">
              Pretraživanje baze znanja
            </span>
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic mb-4">
              Rezultati za: <span className="text-primary">"{query}"</span>
            </h1>
          </div>

          {loading ? (
            <div className="py-24 text-center space-y-6">
              <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
              <p className="text-sm font-black uppercase tracking-widest animate-pulse">Analiziram bazu podataka...</p>
            </div>
          ) : data ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* AI Summary Sidebar */}
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="bg-black text-white p-8 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-3xl" />
                  <div className="flex items-center gap-2 text-primary">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">AI Insights</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed italic border-l-2 border-primary/30 pl-4">
                    {data.aiSummary}
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest">
                      Ovaj odgovor je generiran automatizirano na temelju tehničke dokumentacije.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results List */}
              <div className="lg:col-span-8 order-1 lg:order-2 space-y-8">
                {data.results.length > 0 ? (
                  data.results.map((res, idx) => (
                    <Link 
                      href={res.url} 
                      key={idx} 
                      className="block group p-8 border-2 border-black hover:border-primary transition-all bg-slate-50 hover:bg-white"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{res.category}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                        {res.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {res.excerpt}
                      </p>
                    </Link>
                  ))
                ) : (
                  <div className="py-12 border-2 border-dashed border-black/10 text-center">
                    <p className="text-lg text-muted-foreground font-medium italic">Nismo pronašli izravne podudarnosti. Pokušajte s drugim ključnim riječima.</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="py-24 text-center">
              <p>Dogodila se pogreška pri pretraživanju.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Pretraživanje...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
