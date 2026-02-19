'use server';
/**
 * @fileOverview A Genkit flow for generating a structured project brief or asking clarifying questions
 * based on a user's free-form project idea. This helps potential clients effectively communicate
 * their requirements to WEB Marketing.
 *
 * - generateProjectBriefOrQuestions - A function that handles the generation process.
 * - IntelligentProjectBriefGeneratorInput - The input type for the function.
 * - IntelligentProjectBriefGeneratorOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const IntelligentProjectBriefGeneratorInputSchema = z.object({
  projectIdea: z.string().describe('A free-form description of the client\u0027s project idea.').min(1, 'Project idea cannot be empty.'),
});
export type IntelligentProjectBriefGeneratorInput = z.infer<typeof IntelligentProjectBriefGeneratorInputSchema>;

const ProjectBriefSchema = z.object({
  type: z.literal('brief').describe('Indicates that the output is a structured project brief.'),
  projectName: z.string().describe('The name or short title of the proposed project.'),
  projectDescription: z.string().describe('A detailed description of the project idea, its purpose, and what it aims to achieve, highlighting how it aligns with WEB Marketing\u0027s focus on stability, security, scalability, and integrations.'),
  projectType: z.enum(['Web Platform', 'E-commerce System', 'Custom Software/Portal', 'Integrations Only', 'Other']).describe('The primary type of solution needed, selected from predefined categories relevant to WEB Marketing\u0027s offerings.'),
  keyGoals: z.array(z.string()).describe('A list of key business goals and objectives the project is expected to fulfill (e.g., increase sales, improve operational efficiency, enhance online presence, ensure long-term stability).'),
  requiredIntegrations: z.array(z.string()).describe('A list of systems or services that need to be integrated (e.g., ERP, CRM, Payment Gateway, Logistics, 3rd party APIs).'),
  specificFeatures: z.array(z.string()).optional().describe('Any specific functionalities or modules required for the project (e.g., user management, content publishing, custom reporting, specific EasyEdit modules).'),
  budgetRange: z.string().optional().describe('An estimated budget range for the project (e.g., \u0022€10k-€20k\u0022, \u0022€50k+\u0022, \u0022Undecided\u0022).'),
  desiredTimeline: z.string().optional().describe('The desired timeframe for project completion (e.g., \u00223-6 months\u0022, \u0022ASAP\u0022, \u0022Flexible\u0022).'),
  strategicFit: z.string().optional().describe('How this project aligns with the client\u0027s long-term business strategy, emphasizing stability, security, and scalability as core benefits of partnering with WEB Marketing.'),
});

const ClarifyingQuestionsSchema = z.object({
  type: z.literal('questions').describe('Indicates that the output is a list of clarifying questions.'),
  questions: z.array(z.string()).describe('A list of specific clarifying questions to help gather more details about the project idea. These questions should aim to extract information necessary to complete a structured project brief, focusing on areas like project type, goals, desired integrations, and specific features.'),
});

const IntelligentProjectBriefGeneratorOutputSchema = z.union([
  ProjectBriefSchema,
  ClarifyingQuestionsSchema,
]).describe('Either a structured project brief if enough information is provided, or a list of clarifying questions if more details are needed to form a brief.');
export type IntelligentProjectBriefGeneratorOutput = z.infer<typeof IntelligentProjectBriefGeneratorOutputSchema>;

export async function generateProjectBriefOrQuestions(input: IntelligentProjectBriefGeneratorInput): Promise<IntelligentProjectBriefGeneratorOutput> {
  return intelligentProjectBriefGeneratorFlow(input);
}

const briefGeneratorPrompt = ai.definePrompt({
  name: 'intelligentProjectBriefGeneratorPrompt',
  input: { schema: IntelligentProjectBriefGeneratorInputSchema },
  output: { schema: IntelligentProjectBriefGeneratorOutputSchema },
  prompt: `You are an AI assistant for WEB Marketing, a Croatian company specializing in custom web platforms, e-commerce, and custom software based on its EasyEdit CMS. Your goal is to help potential clients articulate their project ideas into a structured brief or to ask clarifying questions to get there.

Based on the provided 'projectIdea': {{{projectIdea}}}, analyze if enough information is present to create a comprehensive project brief for WEB Marketing. WEB Marketing focuses on custom web solutions, e-commerce, and custom software using its EasyEdit CMS, emphasizing stability, security, scalability, and integrations. The company aims to be a long-term technological partner, not just a generic web agency.

If the project idea contains sufficient detail (e.g., clear purpose, type, goals, and potential integrations relevant to WEB Marketing's services), generate a structured project brief using the 'ProjectBriefSchema' structure. Ensure the brief reflects WEB Marketing's core values: custom development, EasyEdit differentiation, engineering focus, and emphasis on security, process, and standards.

If the project idea lacks critical information (e.g., unclear purpose, missing project type, vague goals, or no mention of integrations relevant to WEB Marketing's services), generate a list of specific clarifying questions using the 'ClarifyingQuestionsSchema' structure. These questions should probe for details that are crucial for understanding the project scope and client needs, especially regarding project type, key business goals, desired integrations, specific features, and any constraints like budget or timeline.

Ensure your output is a valid JSON object strictly conforming to either 'ProjectBriefSchema' or 'ClarifyingQuestionsSchema'. Do not include any conversational text or formatting outside the JSON block.`,
});

const intelligentProjectBriefGeneratorFlow = ai.defineFlow(
  {
    name: 'intelligentProjectBriefGeneratorFlow',
    inputSchema: IntelligentProjectBriefGeneratorInputSchema,
    outputSchema: IntelligentProjectBriefGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await briefGeneratorPrompt(input);
    if (!output) {
      throw new Error('Failed to generate project brief or questions.');
    }
    return output;
  },
);
