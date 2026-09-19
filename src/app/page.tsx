import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Education } from "@/components/Education";
import { Community } from "@/components/Community";
import { More } from "@/components/More";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-raised focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Nav />
      <main className="mx-auto w-full max-w-3xl grow px-6">
        <Hero />
        <Work />
        <Projects />
        <Stack />
        <Community />
        <Education />
        <More />
        <Contact />
      </main>
    </>
  );
}
