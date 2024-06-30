import ClientFeedback from "./sections/ClientFeedback";
import { ClientProject } from "./sections/ClientProject";
import { ContactMe } from "./sections/ContactMe";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";

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

