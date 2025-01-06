import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";
import { C_V, Status } from "./_components/Status";
import { Skills } from "./_components/Skills";
import { Footer } from "./_components/Footer";
import { Contact } from "./_components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing height={200}></Spacing>
      <Hero />
      <Spacing height={150}></Spacing>
      <Status/>
      <Spacing height={150}></Spacing>
      <Skills/>
      <Spacing height={150}></Spacing>
      <Contact/>
      <Spacing height={150}></Spacing>
      <Footer/>
    </main>
  );
}
