import Image from "next/image";
import Link from "next/link";
import { Manrope, Space_Grotesk } from "next/font/google";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  FileStack,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

import { AskAiButtons } from "./AskAiButtons";
import { homepageContent, type HomepageFaq, type HomepageMetric } from "./homepage-content";
import styles from "./home-v2.module.css";
import { ScrollReveal } from "./ScrollReveal";

const headlineFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-home-v2-headline",
  weight: ["500", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-home-v2-body",
  weight: ["400", "500", "600", "700", "800"],
});

const SERVICE_ICONS = [LayoutTemplate, BriefcaseBusiness, Workflow];
const PROCESS_ICONS = [Blocks, Workflow, ShieldCheck, Sparkles];

const TRUST_ICONS = [BadgeCheck, ShieldCheck, FileStack];

function getImage(imageId: string) {
  return PlaceHolderImages.find((item) => item.id === imageId);
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`text-[11px] font-bold uppercase text-black/46 ${styles.sectionLabel}`}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base font-medium leading-8 text-black/68 lg:text-lg">{description}</p>
    </div>
  );
}

function MetricGrid({ metrics }: { metrics: HomepageMetric[] }) {
  return (
    <div className={styles.metricGrid}>
      {metrics.map((metric) => (
        <div key={metric.label} className={`${styles.metricCard} rounded-[1.6rem] p-5`}>
          <p className="text-black">
            <span className={`${styles.metricValue} block text-2xl font-extrabold tracking-tight sm:text-3xl`}>
              {metric.value}
            </span>
            <span
              className={`${styles.metricLabel} mt-2 block text-[11px] font-semibold uppercase leading-5 tracking-[0.16em] text-black/58`}
            >
              {metric.label}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

function FaqJsonLd({ items }: { items: HomepageFaq[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function HomeV2Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main
        className={`${styles.shell} ${headlineFont.variable} ${bodyFont.variable} flex-grow pt-28 lg:pt-36`}
      >
        <FaqJsonLd items={homepageContent.faq.items} />

        <ScrollReveal className={`container mx-auto px-4 pb-20 pt-8 lg:pb-24 ${styles.revealBlock}`} id="hero" mode="hero">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            <div className="max-w-3xl pt-4 lg:pt-10">
              <div
                className={`${styles.signalPill} mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase text-black/72`}
              >
                <BadgeCheck className="h-4 w-4 text-primary" />
                {homepageContent.hero.eyebrow}
              </div>

              <h1 className="max-w-5xl text-4xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-[4.45rem]">
                {homepageContent.hero.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-black/72 lg:text-xl">
                {homepageContent.hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className={`${styles.primaryCta} h-14 rounded-full bg-black px-8 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-black/90`}
                  asChild
                >
                  <Link href={homepageContent.hero.primaryCtaHref}>
                    {homepageContent.hero.primaryCtaLabel}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border border-black/15 bg-white/80 px-8 text-xs font-black uppercase tracking-[0.22em] text-black hover:bg-white"
                  asChild
                >
                  <Link href={homepageContent.hero.secondaryCtaHref}>
                    {homepageContent.hero.secondaryCtaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-10">
                <MetricGrid metrics={homepageContent.hero.metrics} />
              </div>
            </div>

            <div className={styles.heroStage}>
              <div className={styles.heroGlow} />
              <div className={`${styles.heroPanel} ${styles.heroPanelPrimary}`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/42">
                  Početna analiza
                </p>
                <h2 className="mt-3 text-[clamp(1.8rem,2.4vw,2.5rem)] font-extrabold tracking-[-0.05em] text-black">
                  {homepageContent.hero.analysisTitle}
                </h2>
                <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-black/66">
                  {homepageContent.hero.analysisDescription}
                </p>
                <ul className="mt-6 space-y-3">
                  {homepageContent.hero.deliverables.map((deliverable) => (
                    <li key={deliverable.text} className="flex items-start gap-3 text-sm font-semibold text-black/78">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{deliverable.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.heroPanel} ${styles.heroPanelSecondary}`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  EasyEdit CMS
                </p>
                <p className="mt-2 text-lg font-extrabold tracking-[-0.03em] text-black">
                  Vlastita platforma daje veću kontrolu, prilagodbu i prostor za daljnji razvoj.
                </p>
              </div>

              <div className={`${styles.heroPanel} ${styles.heroPanelFloating}`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
                  Projektni fokus
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "web rješenja usklađena s poslovanjem",
                    "e-commerce i integracije s postojećim sustavima",
                    "funkcionalnosti i moduli po mjeri",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/76 px-4 py-3 text-sm font-semibold text-black/72">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-20 lg:pb-24 ${styles.revealBlock}`} id="what-we-do">
          <SectionIntro
            eyebrow="Što radimo"
            title={homepageContent.services.title}
            description={homepageContent.services.intro}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {homepageContent.services.items.map((service, index) => {
              const Icon = SERVICE_ICONS[index];

              return (
                <article key={service.title} className={`${styles.contentCard} rounded-[1.8rem] p-6 lg:p-7`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/38">
                        Usluga
                      </p>
                      <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em]">{service.title}</h3>
                    </div>
                    <div className="rounded-full bg-black p-3 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-4 text-base font-medium leading-7 text-black/68">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm font-semibold text-black/78">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-black/8 pt-5">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-black/58 transition-colors hover:text-primary"
                    >
                      Saznajte više
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={`${styles.glassPanel} mt-8 rounded-[2rem] px-6 py-7 lg:px-8`}>
            <h3 className="text-2xl font-bold tracking-[-0.04em]">{homepageContent.services.ctaTitle}</h3>
            <p className="mt-4 max-w-4xl text-base font-medium leading-8 text-black/68">
              {homepageContent.services.ctaDescription}
            </p>
            <Button
              size="lg"
              className={`${styles.primaryCta} mt-6 h-14 rounded-full bg-black px-8 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-black/90`}
              asChild
            >
              <Link href={homepageContent.services.ctaHref}>{homepageContent.services.ctaLabel}</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-20 lg:pb-24 ${styles.revealBlock}`} id="client-triggers">
          <div className={`${styles.spotlightPanel} rounded-[2rem] px-6 py-8 lg:px-10 lg:py-12`}>
            <SectionIntro
              eyebrow="Kada nam se klijenti javljaju"
              title={homepageContent.triggers.title}
              description={homepageContent.triggers.closingText}
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {homepageContent.triggers.items.map((item) => (
                <div key={item.text} className={`${styles.listCard} rounded-[1.5rem] p-5`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <p className="text-base font-semibold leading-7 text-black/78">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.04em]">{homepageContent.triggers.ctaTitle}</h3>
                <p className="mt-4 max-w-4xl text-base font-medium leading-8 text-black/68">
                  {homepageContent.triggers.ctaDescription}
                </p>
              </div>
              <Button
                size="lg"
                className={`${styles.primaryCta} h-14 rounded-full bg-black px-8 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-black/90`}
                asChild
              >
                <Link href={homepageContent.triggers.ctaHref}>{homepageContent.triggers.ctaLabel}</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-20 lg:pb-24 ${styles.revealBlock}`} id="featured-projects">
          <SectionIntro
            eyebrow="Istaknuti projekti"
            title={homepageContent.projects.title}
            description={homepageContent.projects.intro}
          />
          <p className="mt-6 max-w-4xl text-base font-medium leading-8 text-black/68">
            {homepageContent.projects.aboveCards}
          </p>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {homepageContent.projects.items.map((project) => {
              const image = getImage(project.imageId);

              return (
                <article key={project.client} className={`${styles.projectCard} rounded-[1.8rem]`}>
                  <div className={styles.projectImageWrap}>
                    {image ? (
                      <Image
                        src={image.imageUrl}
                        alt={project.client}
                        fill
                        className={styles.projectImage}
                        sizes="(max-width: 1279px) 100vw, 33vw"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-2xl font-bold tracking-[-0.04em] text-white">{project.client}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#eef7fb] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/72">
                        {project.industry}
                      </span>
                      <span className="rounded-full bg-[#eef9f8] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/72">
                        {project.solutionType}
                      </span>
                    </div>
                    <p className="mt-5 text-base font-medium leading-7 text-black/68">{project.description}</p>
                    <div className="mt-6 border-t border-black/8 pt-5">
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-black/58 transition-colors hover:text-primary"
                      >
                        Pogledajte case study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className={`${styles.glassPanel} mt-8 rounded-[2rem] px-6 py-7 lg:px-8`}>
            <h3 className="text-2xl font-bold tracking-[-0.04em]">{homepageContent.projects.ctaTitle}</h3>
            <p className="mt-4 max-w-4xl text-base font-medium leading-8 text-black/68">
              {homepageContent.projects.ctaDescription}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className={`${styles.primaryCta} h-14 rounded-full bg-black px-8 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-black/90`}
                asChild
              >
                <Link href={homepageContent.projects.primaryCtaHref}>
                  {homepageContent.projects.primaryCtaLabel}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border border-black/14 bg-white/82 px-8 text-xs font-black uppercase tracking-[0.22em] text-black hover:bg-white"
                asChild
              >
                <Link href={homepageContent.projects.secondaryCtaHref}>
                  {homepageContent.projects.secondaryCtaLabel}
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-20 lg:pb-24 ${styles.revealBlock}`} id="how-we-work">
          <SectionIntro
            eyebrow="Kako radimo"
            title={homepageContent.process.title}
            description={homepageContent.process.intro}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {homepageContent.process.steps.map((step, index) => {
              const Icon = PROCESS_ICONS[index];

              return (
                <article key={step.title} className={`${styles.contentCard} rounded-[1.7rem] p-6`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-black tracking-[-0.04em] text-primary">{step.number}</span>
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.04em]">{step.title}</h3>
                  <p className="mt-4 text-base font-medium leading-7 text-black/68">{step.description}</p>
                </article>
              );
            })}
          </div>

          <div className={`${styles.glassPanel} mt-8 rounded-[2rem] px-6 py-7 lg:px-8`}>
            <h3 className="text-2xl font-bold tracking-[-0.04em]">{homepageContent.process.ctaTitle}</h3>
            <p className="mt-4 max-w-4xl text-base font-medium leading-8 text-black/68">
              {homepageContent.process.ctaDescription}
            </p>
            <Button
              size="lg"
              className={`${styles.primaryCta} mt-6 h-14 rounded-full bg-black px-8 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-black/90`}
              asChild
            >
              <Link href={homepageContent.process.ctaHref}>{homepageContent.process.ctaLabel}</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-20 lg:pb-24 ${styles.revealBlock}`} id="easyedit-cms">
          <div className={`${styles.spotlightPanel} rounded-[2rem] px-6 py-8 lg:px-10 lg:py-12`}>
            <SectionIntro
              eyebrow="EasyEdit CMS"
              title={homepageContent.easyEdit.title}
              description={homepageContent.easyEdit.description}
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {homepageContent.easyEdit.benefits.map((benefit) => (
                  <div key={benefit} className={`${styles.listCard} rounded-[1.5rem] p-5`}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="text-base font-semibold leading-7 text-black/78">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`${styles.contentCard} rounded-[1.8rem] p-6 lg:p-7`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/38">Business kontekst</p>
                <p className="mt-4 text-lg font-semibold leading-8 text-black/74">
                  {homepageContent.easyEdit.businessSentence}
                </p>
                <div className="mt-8 border-t border-black/8 pt-6">
                  <h3 className="text-2xl font-bold tracking-[-0.04em]">{homepageContent.easyEdit.ctaTitle}</h3>
                  <p className="mt-4 text-base font-medium leading-8 text-black/68">
                    {homepageContent.easyEdit.ctaDescription}
                  </p>
                  <div className={`${styles.actionRow} ${styles.longActionRow} mt-6`}>
                    <Button
                      size="lg"
                      className={`${styles.primaryCta} h-14 w-full rounded-full bg-black px-8 text-[11px] font-black uppercase tracking-[0.18em] text-white hover:bg-black/90`}
                      asChild
                    >
                      <Link href={homepageContent.easyEdit.primaryCtaHref}>
                        {homepageContent.easyEdit.primaryCtaLabel}
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 w-full rounded-full border border-black/14 bg-white/82 px-8 text-[11px] font-black uppercase tracking-[0.18em] text-black hover:bg-white hover:text-black"
                      asChild
                    >
                      <Link href={homepageContent.easyEdit.secondaryCtaHref}>
                        {homepageContent.easyEdit.secondaryCtaLabel}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-20 lg:pb-24 ${styles.revealBlock}`} id="trust-proof">
          <SectionIntro
            eyebrow="Povjerenje i dokazi"
            title={homepageContent.trust.title}
            description={homepageContent.trust.intro}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className={`${styles.contentCard} rounded-[1.8rem] p-6 lg:p-7`}>
              <MetricGrid metrics={homepageContent.trust.metrics} />
              <p className="mt-6 text-base font-medium leading-8 text-black/68">
                {homepageContent.trust.description}
              </p>
            </div>

            <div className={`${styles.glassPanel} rounded-[1.8rem] p-6 lg:p-7`}>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/44">
                {homepageContent.trust.evidenceTitle}
              </p>
              <div className="mt-6 grid gap-4">
                {homepageContent.trust.evidenceItems.map((item, index) => {
                  const Icon = TRUST_ICONS[index];

                  return (
                    <article key={item.title} className={`${styles.listCard} rounded-[1.5rem] p-5`}>
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold tracking-tight text-black">{item.title}</h3>
                          <p className="mt-2 text-sm font-medium leading-7 text-black/66">{item.text}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <Button
                size="lg"
                className={`${styles.primaryCta} mt-6 h-14 rounded-full bg-black px-8 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-black/90`}
                asChild
              >
                <Link href={homepageContent.trust.ctaHref}>{homepageContent.trust.ctaLabel}</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-20 lg:pb-24 ${styles.revealBlock}`} id="faq">
          <SectionIntro
            eyebrow="FAQ"
            title={homepageContent.faq.title}
            description={homepageContent.faq.intro}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className={`${styles.contentCard} rounded-[1.8rem] p-6 lg:p-7`}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/38">
                Specifična pitanja
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-[-0.04em]">{homepageContent.faq.ctaQuestion}</h3>
              <p className="mt-4 text-base font-medium leading-8 text-black/68">
                {homepageContent.faq.ctaText}
              </p>
              <Button
                size="lg"
                className={`${styles.primaryCta} mt-6 h-14 rounded-full bg-black px-8 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-black/90`}
                asChild
              >
                <Link href={homepageContent.faq.ctaHref}>{homepageContent.faq.ctaLabel}</Link>
              </Button>
            </div>

            <Accordion type="single" collapsible className={`${styles.glassPanel} rounded-[1.8rem] px-6 py-2`}>
              {homepageContent.faq.items.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`} className="border-b border-black/8">
                  <AccordionTrigger className="text-left text-lg font-bold tracking-tight text-black hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base font-medium leading-8 text-black/68">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-20 lg:pb-24 ${styles.revealBlock}`} id="blog">
          <SectionIntro
            eyebrow="Stručni sadržaj"
            title={homepageContent.blog.title}
            description={homepageContent.blog.intro}
          />
          <p className="mt-6 max-w-4xl text-base font-medium leading-8 text-black/68">
            {homepageContent.blog.aboveCards}
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {homepageContent.blog.items.map((article) => (
              <article key={article.title} className={`${styles.contentCard} rounded-[1.8rem] p-6 lg:p-7`}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#eef7fb] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/72">
                    {article.category}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black/42">
                    {article.date}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.04em]">{article.title}</h3>
                <p className="mt-4 text-base font-medium leading-7 text-black/68">{article.description}</p>
                <div className="mt-6 border-t border-black/8 pt-5">
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-black/58 transition-colors hover:text-primary"
                  >
                    Pročitajte više
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <Button
            size="lg"
            variant="outline"
            className="mt-8 h-14 rounded-full border border-black/14 bg-white/82 px-8 text-xs font-black uppercase tracking-[0.22em] text-black hover:bg-white"
            asChild
          >
            <Link href={homepageContent.blog.ctaHref}>{homepageContent.blog.ctaLabel}</Link>
          </Button>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-20 lg:pb-24 ${styles.revealBlock}`} id="ask-ai">
          <div className={`${styles.glassPanel} rounded-[2rem] px-6 py-8 lg:px-10 lg:py-12`}>
            <SectionIntro
              eyebrow="Pitaj AI"
              title={homepageContent.askAi.title}
              description={homepageContent.askAi.text}
            />
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
              <div className={`${styles.contentCard} rounded-[1.8rem] p-6 lg:p-7`}>
                <p className="text-lg font-semibold leading-8 text-black/74">
                  {homepageContent.askAi.explanation}
                </p>
                <p className="mt-4 text-sm font-medium leading-7 text-black/62">
                  {homepageContent.askAi.note}
                </p>
              </div>
              <div className={`${styles.contentCard} rounded-[1.8rem] p-6 lg:p-7`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/38">
                  Prompt pripremljen za provjeru tvrdnji
                </p>
                <p className="mt-4 text-sm font-medium leading-7 text-black/68">
                  {homepageContent.askAi.prompt}
                </p>
                <div className="mt-6">
                  <AskAiButtons
                    providers={homepageContent.askAi.providers}
                    prompt={homepageContent.askAi.prompt}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className={`container mx-auto px-4 pb-24 lg:pb-28 ${styles.revealBlock}`} id="final-cta">
          <div className={`${styles.ctaPanel} surface-dark rounded-[2rem] px-6 py-8 lg:px-10 lg:py-12`}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div>
                <p className="surface-dark-soft text-[11px] font-bold uppercase tracking-[0.22em]">
                  Završni CTA
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                  {homepageContent.finalCta.title}
                </h2>
                <p className="surface-dark-muted mt-5 max-w-2xl text-base font-medium leading-8 lg:text-lg">
                  {homepageContent.finalCta.text}
                </p>
              </div>

              <div className="space-y-5">
                <div className="grid gap-3">
                  {homepageContent.finalCta.deliverables.map((deliverable) => (
                    <div key={deliverable.text} className="rounded-[1.4rem] border border-white/10 bg-white/8 p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <p className="text-sm font-semibold text-white/90">{deliverable.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Button
                    size="lg"
                    className="h-14 rounded-full bg-white px-8 text-xs font-black uppercase tracking-[0.22em] text-black hover:bg-white/90"
                    asChild
                  >
                    <Link href={homepageContent.finalCta.primaryCtaHref}>
                      {homepageContent.finalCta.primaryCtaLabel}
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full border border-white/16 bg-transparent px-8 text-xs font-black uppercase tracking-[0.22em] text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href={homepageContent.finalCta.secondaryCtaHref}>
                      {homepageContent.finalCta.secondaryCtaLabel}
                    </Link>
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {homepageContent.finalCta.contacts.map((contact) => (
                    <a
                      key={contact.value}
                      href={contact.href}
                      className="rounded-[1.4rem] border border-white/10 bg-white/8 p-4 text-sm font-semibold text-white/88 transition-colors hover:bg-white/12"
                    >
                      {contact.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
