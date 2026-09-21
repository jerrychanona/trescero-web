import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Roster from "@/components/Roster";
import Live from "@/components/Live";
import Booking from "@/components/Booking";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SiteExperience from "@/components/SiteExperience";

export default function Home() {
  return (
    <>
      <SiteExperience />
      <Header />

      <main>
        <Hero />
        <Intro />
        <Roster />
        <Live />
        <Booking />
        <About />
        <Contact />
      </main>
    </>
  );
}