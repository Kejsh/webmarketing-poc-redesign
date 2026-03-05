
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLOG_POST_SLUGS = ["ai-u-enterprise-pretrazi"];

export function generateStaticParams() {
  return BLOG_POST_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!BLOG_POST_SLUGS.includes(slug)) {
    notFound();
  }

  // Mock data for the article
  const article = {
    title: "AI u Enterprise pretrazi: Kako EasyEdit mijenja način na koji korisnici pronalaze podatke",
    date: "15.05.2024.",
    author: "Marko Babić, Lead Engineer",
    category: "Tehnologija",
    tags: ["AI", "Enterprise Search", "EasyEdit"],
    intro: "U svijetu eksponencijalnog rasta podataka, tradicionalna pretraga više nije dovoljna. Analiziramo kako integracija velikih jezičnih modela unutar CMS-a transformira korisničko iskustvo.",
    takeaways: [
      "Semantička pretraga razumije namjeru, a ne samo ključne riječi.",
      "Smanjenje vremena pretrage za zaposlenike do 60%.",
      "Integracija AI unutar zatvorenog sustava osigurava privatnost podataka.",
      "Mogućnost automatiziranog sažimanja dugih tehničkih dokumenata.",
      "Skalabilnost sustava na milijune zapisa bez gubitka brzine."
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-32 lg:pt-48 pb-24">
        <article className="container mx-auto px-4 max-w-4xl">
          
          {/* Article Header */}
          <header className="mb-16">
            <Link href="/insights" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Povratak na Insights
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-[10px] font-bold text-black/40 uppercase tracking-widest">
                <Clock className="w-3 h-3" /> 8 min čitanja
              </div>
            </div>
            <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none mb-8">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 border-y border-black/10 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-black/40" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Autor</p>
                  <p className="text-sm font-bold">{article.author}</p>
                </div>
              </div>
              <div className="ml-auto">
                <p className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1 text-right">Objavljeno</p>
                <p className="text-sm font-bold">{article.date}</p>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-slate max-w-none">
            <p className="text-xl lg:text-2xl font-medium leading-relaxed text-black mb-12 border-l-4 border-primary pl-8">
              {article.intro}
            </p>

            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-medium">
              <h2 className="text-3xl font-black uppercase tracking-tight text-black italic mt-16">Evolucija pretraživanja</h2>
              <p>
                Kada govorimo o enterprise sustavima, podaci su često razbacani u različitim modulima, od dokumentacije do opisa proizvoda i korisničkih profila. Klasični sustavi za pretraživanje temelje se na točnom podudaranju riječi (keyword matching), što često rezultira irelevantnim rezultatima ili potpunim promašajem ako korisnik ne zna točan termin.
              </p>
              
              <h3 className="text-2xl font-black uppercase tracking-tight text-black italic">Kako AI mijenja pravila igre?</h3>
              <p>
                Integracijom modela poput Gemini-ja unutar **EasyEdit CMS-a**, omogućujemo sustavu da "razumije" kontekst. Umjesto da traži riječ "pumpa", sustav razumije da korisnik traži "tehničku specifikaciju za hidraulički potisnik" jer su ti pojmovi semantički povezani.
              </p>

              <div className="bg-slate-50 border-2 border-black p-10 my-12">
                <h4 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" /> Key Takeaways
                </h4>
                <ul className="space-y-4">
                  {article.takeaways.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm">
                      <div className="w-1.5 h-1.5 bg-primary shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Osim same pretrage, AI omogućuje i tzv. *Contextual Help* unutar admin sučelja. Urednici sadržaja više ne moraju čitati manuale; mogu jednostavno pitati sustav: "Kako da optimiziram ovu sliku za mobilne uređaje?" i dobiti trenutačni odgovor ili akciju.
              </p>
            </div>
          </div>

          {/* Soft CTA */}
          <div className="mt-20 p-12 bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4">Želite procjenu za vaš slučaj?</h3>
              <p className="text-white/60 mb-8 font-medium">Dogovorite kratki razgovor s našim inženjerima i saznajte kako AI može unaprijediti vaš CMS.</p>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-black uppercase tracking-widest text-xs h-14 px-10" asChild>
                <Link href="/kontakt">Dogovorimo termin <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>

          {/* Related */}
          <div className="mt-32 pt-16 border-t-2 border-black">
            <h4 className="text-2xl font-black uppercase tracking-tighter italic mb-12">Povezani sadržaj</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Sigurnost zatvorenog koda u 2024.", cat: "Sigurnost" },
                { title: "Optimizacija checkout procesa", cat: "E-commerce" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">{item.cat}</span>
                  <h5 className="text-xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{item.title}</h5>
                </div>
              ))}
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}
