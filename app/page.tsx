import { Background1 } from "./backgrounds/Background1";
import { BioSection } from "./sections/BioSection";
import ClientFeedback from "./sections/ClientFeedback";
import { ClientProject } from "./sections/ClientProject";
import { ContactMe } from "./sections/ContactMe";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Background1 />
      <Header />
      <main className="flex-1 z-10">
        <section className="w-full py-8 md:py-16 lg:py-18">
          <HeroSection />
        </section>
        <section className="w-full py-0 ">
          <BioSection />
        </section>
        <section id="projects" className="w-full pb-10 md:pb-12 lg:pb-24">
          <ClientProject />
        </section>
        <section id="feedback" className="w-full py-10 md:py-12 lg:py-24">
          <ClientFeedback />
        </section>
        <section id="contact-form" className="w-full py-10 md:py-12 lg:py-24">
          <ContactMe />
        </section>
      </main>
      <div id="contact" className="z-10">
        <Footer />
      </div>
    </div>
  )
}

