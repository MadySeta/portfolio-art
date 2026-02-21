import Competences from "../components/Competences";

interface HomeProps {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

const Home: React.FC<HomeProps> = ({ sectionRef }) => {

  return (
    <>
      <section ref={sectionRef}>
        <div style={{
          padding: "2rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <h1 className="text-center font-lobtser">Bienvenue dans mon univers artistique</h1>
          <p className="text-center text-grey-blue">
            Étudiante en Arts Numériques, je crée des illustrations et vidéos
            qui explorent les formes, la couleur et les mouvements
          </p>
        </div>

        <Competences />

      </section>
    </>
  );
};

export default Home;