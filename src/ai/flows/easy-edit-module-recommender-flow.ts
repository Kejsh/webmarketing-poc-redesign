'use server';
/**
 * @fileOverview This file implements a Genkit flow for recommending EasyEdit CMS modules.
 *
 * - recommendEasyEditModules - A function that takes business needs and recommends relevant EasyEdit CMS modules.
 * - EasyEditModuleRecommenderInput - The input type for the recommendEasyEditModules function.
 * - EasyEditModuleRecommenderOutput - The return type for the recommendEasyEditModules function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const EasyEditModuleRecommenderInputSchema = z.object({
  businessNeeds: z.string().describe('Detaljan opis poslovnih potreba klijenta.'),
});
export type EasyEditModuleRecommenderInput = z.infer<typeof EasyEditModuleRecommenderInputSchema>;

const EasyEditModuleRecommendationSchema = z.object({
  moduleName: z.string().describe('Naziv preporučenog EasyEdit CMS modula.'),
  reason: z.string().describe('Objašnjenje zašto je ovaj modul prikladan za navedene poslovne potrebe.'),
});

const EasyEditModuleRecommenderOutputSchema = z.object({
  recommendations: z.array(EasyEditModuleRecommendationSchema)
    .describe('Lista preporučenih EasyEdit CMS modula s objašnjenjima.'),
  differentiation: z.string().describe('Objašnjenje kako EasyEdit platforma, sa svojim modulima, nudi superiorno rješenje u odnosu na generičke CMS-ove za specifične poslovne potrebe.'),
});
export type EasyEditModuleRecommenderOutput = z.infer<typeof EasyEditModuleRecommenderOutputSchema>;

// A representative list of EasyEdit CMS modules to guide the LLM.
// In a real application, this might come from a database or a configuration file.
const easyEditModulesList = [
  'Modul za upravljanje sadržajem (CMS Core)',
  'Modul za e-commerce (Web Shop)',
  'Modul za upravljanje korisnicima (CRM Lite)',
  'Modul za integraciju s ERP sustavima',
  'Modul za integraciju s Payment Gateway-ima',
  'Modul za naprednu SEO optimizaciju',
  'Modul za blog i novosti',
  'Modul za galeriju slika i videa',
  'Modul za upravljanje dokumentima',
  'Modul za ankete i obrasce',
  'Modul za upravljanje događajima',
  'Modul za personalizaciju sadržaja',
  'Modul za višestruke jezike (Multilanguage)',
  'Modul za sigurnosno kopiranje i vraćanje (Backup & Restore)',
  'Modul za analitiku i izvještavanje',
  'Modul za upravljanje projektima (Custom Project Management)',
  'Modul za ticketing i podršku klijentima',
  'Modul za upravljanje oglasima (Ad Management)',
  'Modul za geolokaciju i karte',
  'Modul za upravljanje mobilnim aplikacijama',
  'Modul za API integraciju (za third-party sustave)',
  'Modul za A/B testiranje',
  'Modul za upravljanje radnim tijekovima (Workflow Management)',
  'Modul za chat uživo (Live Chat)',
  'Modul za upravljanje inventarom (Inventory Management)',
  'Modul za upravljanje narudžbama (Order Management)',
  'Modul za recenzije proizvoda/usluga',
  'Modul za upravljanje članstvom (Membership Management)',
  'Modul za upravljanje digitalnom imovinom (DAM)',
  'Modul za upravljanje popustima i kuponima (Discounts & Coupons)',
];

const prompt = ai.definePrompt({
  name: 'easyEditModuleRecommenderPrompt',
  input: { schema: EasyEditModuleRecommenderInputSchema },
  output: { schema: EasyEditModuleRecommenderOutputSchema },
  prompt: `Vi ste stručnjak za EasyEdit CMS, snažnu platformu za razvoj prilagođenih web rješenja, e-commerce sustava i custom softvera.
Vaš zadatak je preporučiti najprikladnije EasyEdit CMS module na temelju opisa poslovnih potreba klijenta.
Naglasite kako EasyEdit, sa svojim jedinstvenim modulima i zatvorenim kodom, nudi stabilnost, sigurnost, skalabilnost i kontrolu koje generički CMS-ovi ne mogu pružiti.

Evo popisa dostupnih EasyEdit CMS modula:
${easyEditModulesList.map(m => `- ${m}`).join('\n')}

Poslovne potrebe klijenta: {{{businessNeeds}}}

Na temelju navedenih potreba, preporučite 3-5 najrelevantnijih modula iz gornjeg popisa i detaljno objasnite zašto je svaki modul prikladan. Također, objasnite kako EasyEdit platforma općenito rješava ove izazove bolje od generičkih CMS rješenja.

Molimo strukturirajte odgovor kao JSON objekt u sljedećem formatu, prateći Output Schema:
`,
});

const easyEditModuleRecommenderFlow = ai.defineFlow(
  {
    name: 'easyEditModuleRecommenderFlow',
    inputSchema: EasyEditModuleRecommenderInputSchema,
    outputSchema: EasyEditModuleRecommenderOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Nije dobiven izlaz iz modela za preporuku modula.');
    }
    return output;
  }
);

export async function recommendEasyEditModules(
  input: EasyEditModuleRecommenderInput
): Promise<EasyEditModuleRecommenderOutput> {
  return easyEditModuleRecommenderFlow(input);
}
