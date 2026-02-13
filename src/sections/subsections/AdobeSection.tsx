import ProjectTitle from "../../components/ProjectTitle";
import SectionTitle from "../../components/SectionTitle";

const AdobeSection: React.FC = () => {
  const images: string[] = [
    'images/duck/duck.png',
    'images/duck/b-duck.jpg',
    'images/duck/hat.jpg',
    'images/duck/turtle.jpg',
  ];

  return (
    <>

      <div className="p-6 rounded-2xl mb-12">
        <SectionTitle title="Adobe Projects" />

        <div className="flex justify-between items-center h-[70vh] max-h-170">
          <div className="h-full w-[30%]">
            <img src="images/kabuki-v2.jpg" alt="Affiche kabuki" className="h-full object-contain" />
            <ProjectTitle title="Affiche Kabuki" />
            <div className="text-center">Réalisation d’une affiche promotionnelle d’un événement réel sur Adobe Illustrator</div>
          </div>


          <div className="h-full w-[30%]">
            <div className="grid grid-flow-col grid-rows-2 h-full w-full">
              {images.map((room, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img className="object-cover h-full w-full" src={room}>
                  </img>
                </div>
              ))}
            </div>
            <ProjectTitle title="Projet livre d’illustration" />
            <div className="text-center">Création d’un livre d’illustration pour enfants simple sur Adobe Illustrator et Indesign</div>
          </div>


          <div className="h-full w-[30%]">
            <img src="images/pic-me.jpg" alt="Portrait" className="h-full object-contain" />
            <ProjectTitle title="Autoportrait" />
            <div className="text-center">Réalisation sur Adobe Illustrator</div>
          </div>

        </div>

      </div>

    </>

  );
};

export default AdobeSection;