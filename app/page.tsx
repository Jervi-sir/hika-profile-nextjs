import { ClientFeedback } from "./components/ClientFeedback";
import { ClientProject } from "./components/ClientProject";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-8 md:py-16 lg:py-18">
          <HeroSection />
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <ClientProject />
        </section>
        <section id="feedback" className="w-full py-12 md:py-24 lg:py-32">
          <ClientFeedback />
        </section>
        <section id="contact-form" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <ContactMe />
        </section>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}

