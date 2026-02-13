import ProjectTitle from "./ProjectTitle";

export default function Lego() {
  // Liste des vidéos
  const images1: string[] = Array.from({ length: 3 }, (_, i) => `images/Lego/lego ${i + 1}.jpg`);
  const images2: string[] = Array.from({ length: 3 }, (_, i) => `images/Lego/lego ${i + 3}.jpg`);
  return (
    <>
      <div className="flex gap-2 w-full justify-around my-12">
        {images1.map((duck, index) => (
          <div
            key={index}
            className="bg-red-200"
          >
            <img className="w-400 object-contain" src={duck}>
            </img>
          </div>
        ))}
      </div>

      <ProjectTitle title="Le voyage de Chihiro en Lego" />
      <div className="text-center">Projet académique: Modélisation personnage lego sur Maya et textures appliquées sur Substance Painter</div>


      <div className="flex gap-2 w-full justify-around my-12">
        {images2.map((duck, index) => (
          <div
            key={index}
            className="bg-red-200"
          >
            <img className="w-400 object-contain" src={duck}>
            </img>
          </div>
        ))}
      </div>

    </>

  );


}
