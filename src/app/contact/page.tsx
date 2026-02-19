
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactFormWithAI } from "@/components/forms/ContactFormWithAI";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <section className="container mx-auto px-4">
          <ContactFormWithAI />
        </section>
      </main>
      <Footer />
    </div>
  );
}
