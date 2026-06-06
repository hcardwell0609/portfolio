import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import AboutMe from "@/components/layout/AboutMe";
import Projects from "@/components/layout/Projects";
import BehindTheCode from "@/components/layout/BehindTheCode";

export default function Home() {
  return (
    <>
      <Navbar />

      <Header />

      <AboutMe />

      <Projects />

      <BehindTheCode />
    </>
  );
}
