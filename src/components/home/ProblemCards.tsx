
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Lock, Cpu } from "lucide-react";

const PROBLEMS = [
  {
    title: "Zastarjeli sustavi i tehnički dug",
    description: "Vaše poslovanje pati zbog sporih procesa i tehnologije koja više ne podržava rast.",
    outcome: "Postižemo stabilnost kroz modernu arhitekturu.",
    icon: Cpu,
  },
  {
    title: "Ograničenja generičkih CMS-ova",
    description: "Open-source rješenja vas usporavaju i zahtijevaju stalne zakrpe i kompromise u funkcionalnosti.",
    outcome: "EasyEdit CMS pruža potpunu kontrolu i skaliranje.",
    icon: AlertCircle,
  },
  {
    title: "Sigurnosni rizici i nepovezanost",
    description: "Silosi podataka i nesigurni sustavi izlažu vas rizicima i otežavaju automatizaciju.",
    outcome: "Integrirani sustavi s enterprise razinom sigurnosti.",
    icon: Lock,
  },
];

export function ProblemCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 text-primary">
            Rješavamo izazove digitalne transformacije
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nismo još jedna web agencija. Mi smo inženjerski tim koji razumije da je stabilan softver temelj vašeg poslovanja.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((item, idx) => (
            <Card key={idx} className="border-none bg-slate-50 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <p className="text-sm font-semibold text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item.outcome}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
