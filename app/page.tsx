import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Street } from "@/components/Street";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";

export default function Page() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Street />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
