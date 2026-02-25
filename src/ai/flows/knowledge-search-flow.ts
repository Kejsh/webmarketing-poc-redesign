'use server';
/**
 * @fileOverview A Genkit flow for intelligent knowledge base search.
 * Searches across FAQ, Insights, and EasyEdit modules to find relevant information.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const KnowledgeSearchInputSchema = z.object({
  query: z.string().describe('Korisnički upit za pretraživanje baze znanja.'),
});
export type KnowledgeSearchInput = z.infer<typeof KnowledgeSearchInputSchema>;

const SearchResultSchema = z.object({
  title: z.string().describe('Naslov pronađenog rezultata.'),
  excerpt: z.string().describe('Kratki isječak ili sažetak rezultata.'),
  url: z.string().describe('Relativni URL do stranice.'),
  category: z.enum(['Tehnologija', 'Sigurnost', 'Podrška', 'E-commerce', 'Moduli']).describe('Kategorija rezultata.'),
});

const KnowledgeSearchOutputSchema = z.object({
  aiSummary: z.string().describe('Kratki AI sažetak odgovora na temelju upita.'),
  results: z.array(SearchResultSchema).describe('Lista najrelevantnijih stranica.'),
});
export type KnowledgeSearchOutput = z.infer<typeof KnowledgeSearchOutputSchema>;

// Mock data representing the site's content for the LLM to "search" through
const siteContentContext = `
- EasyEdit CMS: Vlastita platforma, zatvoreni kod, visoka sigurnost, 30+ modula. URL: /easyedit
- Moduli: Web Shop, ERP Bridge, SEO Manager, DAM, CRM Connector. URL: /easyedit/moduli
- Sigurnost: ISO 27001, RBAC, Audit logovi, Hardened Cloud. URL: /easyedit/sigurnost
- Proces: Agile/Scrum, dvotjedni sprintevi, Code Review. URL: /proces
- Podrška: SLA paketi (Standard, Business, Enterprise), Ticketing sustav. URL: /podrska
- E-commerce: SAP/Navision integracija, B2B/B2C hibrid. URL: /rjesenja/ecommerce
- Integracije: Middleware arhitektura, real-time sync. URL: /rjesenja/integracije
- FAQ: Escrow klauzule, vlasništvo podataka, trajanje projekta. URL: /faq
`;

const prompt = ai.definePrompt({
  name: 'knowledgeSearchPrompt',
  input: { schema: KnowledgeSearchInputSchema },
  output: { schema: KnowledgeSearchOutputSchema },
  prompt: `Vi ste AI asistent za pretraživanje baze znanja WEB Marketinga. 
Korisnik je postavio upit: "{{{query}}}"

Na temelju sljedećeg konteksta web stranice:
${siteContentContext}

Vaš zadatak:
1. Generirajte kratki, stručan "AI sažetak" (1-2 rečenice) koji izravno odgovara na korisnikov upit ili ga usmjerava.
2. Odaberite 2-4 najrelevantnija linka iz konteksta koji najbolje odgovaraju upitu.

Odgovorite isključivo u JSON formatu prema shemi.`,
});

const knowledgeSearchFlow = ai.defineFlow(
  {
    name: 'knowledgeSearchFlow',
    inputSchema: KnowledgeSearchInputSchema,
    outputSchema: KnowledgeSearchOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) throw new Error('Nema rezultata pretraživanja.');
    return output;
  }
);

export async function searchKnowledgeBase(input: KnowledgeSearchInput): Promise<KnowledgeSearchOutput> {
  return knowledgeSearchFlow(input);
}
