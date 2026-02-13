import { useState } from "react";
import ProjectTitle from "./ProjectTitle";

export default function Rooms() {
  // Liste des vidéos
  const images: string[] = Array.from({ length: 4 }, (_, i) => `images/room/room ${i + 1}.jpg`);

  // Vidéo principale
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <div className="flex mt-26">
        <div className="flex w-[70%]">

          {/* Miniatures */}
          <div className="w-[20%] pr-2">
            <div className="flex flex-col align-center justify-between h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="cursor-pointer rounded-xl overflow-hidden h-full my-1
                           border-4 border-transparent hover:border-orange duration-1000 ease-out"
                >
                  <img className="h-full object-contain" src={image}>
                  </img>

                </div>
              ))}
            </div>
          </div>

          {/* Vidéo principale */}
          <div className="w-[80%] my-1">
            <img
              key={selectedImage}
              src={selectedImage}
              className="rounded-xl object-cover h-full"
            >
            </img>
          </div>
        </div>

        <div className="flex flex-col justify-center w-[30%] ml-6">
          <ProjectTitle title="Chambre low-poly" />
          <div className="text-center">Projet personnel: initiative et exercice pratique simple sur Maya</div>
        </div>
      </div>

    </>


  );
}
