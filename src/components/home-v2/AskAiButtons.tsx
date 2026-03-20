"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

import type { HomepageAiProvider } from "./homepage-content";

type AskAiButtonsProps = {
  providers: HomepageAiProvider[];
  prompt: string;
};

export function AskAiButtons({ providers, prompt }: AskAiButtonsProps) {
  const [copiedProvider, setCopiedProvider] = useState<string | null>(null);

  async function handleClick(provider: HomepageAiProvider) {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedProvider(provider.provider);
      window.setTimeout(() => {
        setCopiedProvider((current) => (current === provider.provider ? null : current));
      }, 2500);
    } catch {}
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        {providers.map((provider) => {
          const isCopied = copiedProvider === provider.provider;

          return (
            <a
              key={provider.provider}
              href={provider.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-black/14 bg-white/85 px-6 text-xs font-black uppercase tracking-[0.18em] text-black transition-colors hover:bg-white"
              onClick={() => handleClick(provider)}
            >
              {provider.label}
              {isCopied ? <Check className="h-4 w-4 text-primary" /> : <ArrowUpRight className="h-4 w-4" />}
            </a>
          );
        })}
      </div>
      <p className="flex items-center gap-2 text-sm font-medium text-black/62">
        <Copy className="h-4 w-4 text-primary" />
        {copiedProvider
          ? "Prompt je kopiran. AI alat je otvoren u novom tabu."
          : "Klik kopira pripremljeni prompt i otvara odabrani AI alat u novom tabu."}
      </p>
    </div>
  );
}
