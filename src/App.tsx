import { useRef, type RefObject } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import MobileBlocker from "./components/MobileBlocker";

export interface Section {
  label: string;
  ref: RefObject<HTMLDivElement | null>;
}

const App: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);

  const portfolioSections: Section[] = [
    {
      label: "Projets Blender",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      label: "Projets Maya",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      label: "Projets Feather",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      label: "Projets Adobe",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      label: "Portrait",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      label: "Echelle 1",
      ref: useRef<HTMLDivElement | null>(null),
    },
  ];

  const aboutSections: Section[] = [
    {
      label: "Mes formations",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      label: "Expériences",
      ref: useRef<HTMLDivElement | null>(null),
    },
    {
      label: "CVs",
      ref: useRef<HTMLDivElement | null>(null),
    },
  ];

  return (
    <>

      <MobileBlocker />

      <div className="hidden md:block h-full max-w-480 mx-auto w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] 
                  border-x border-white/5">

        <Header sectionRef={headerRef} />

        <NavBar
          headerRef={headerRef}
          homeRef={homeRef}
          portfolioSections={portfolioSections}
          aboutSections={aboutSections}
        />

        <Home sectionRef={homeRef} />

        <Portfolio sections={portfolioSections} />

        <About sections={aboutSections} />

        <Footer />
      </div>

    </>
  );
};

export default App;