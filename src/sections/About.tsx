import type { Section } from "../App";
import Competences from "../components/Competences";
import Experiences from "../components/Experiences";
import SectionTitle from "../components/SectionTitle";
import CVSection from "./subsections/CVSection";
import Formation from "./subsections/Formation";

interface AboutProps {
  sections: Section[];
}

const About: React.FC<AboutProps> = ({ sections }) => {

  const getSectionRef = (label: string): React.RefObject<HTMLDivElement | null> | null => {
    const section = sections.find(s => s.label === label);
    return section ? section.ref : null;
  };

  return (
    <>
      <section>
        <div style={{ padding: "2rem" }}>
          <div ref={getSectionRef("Mes formations")}>
            <SectionTitle title="Ravaka RAMANANJARANIHOBY (Ava)" />
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3 bg-[#010e17] shadow-xl px-6 py-4 rounded-xl border">
              {/* Voyant vert clignotant */}
              <span className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />

              {/* Texte statut */}
              <p className="font-medium text-white">
                Statut actuel : <span className="font-semibold">En recherche de stage | alternance - Motion Designer | Community Manager </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center lg:w-[70%]">
              <p className="text-center">
                Je m'appelle <strong> Ava </strong>, étudiante en Arts Numériques passionnée par
                l’univers du motion design. Je suis actuellement à la recherche d’un stage — idéalement
                évolutif vers un contrat d'alternance — au sein d’une chaîne de production, afin de mettre
                en pratique mes compétences et de participer à des projets concrets dans un environnement professionnel.
              </p>

              <br />

              <p className="text-center">
                Intégrer votre entreprise représenterait pour moi une première expérience précieuse. Curieuse, motivée
                et prête à m’investir pleinement, je suis déterminée à apprendre et à contribuer activement, au sein d’une équipe créative et expérimentée.
              </p>

            </div>
          </div>

          <Formation />

          <div ref={getSectionRef("Expériences/Compétences")}>
            <Experiences />

            <Competences />
          </div>


          <div ref={getSectionRef("CVs")}>
            <CVSection />
          </div>

        </div>

      </section>

    </>

  );
};

export default About;