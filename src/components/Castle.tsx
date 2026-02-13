import { useState } from "react";
import ProjectTitle from "./ProjectTitle";

export default function Castle() {
    // Liste des vidéos
    const castles: string[] = Array.from({ length: 7 }, (_, i) => `images/castle/castle view ${i + 1}.jpg`);

    // Vidéo principale
    const [selectedImage, setSelectedImage] = useState(castles[0]);

    return (
        <div className="flex items-center">

            <div className="w-[30%]">
                <ProjectTitle title="Cathédrale" />
                <div className="text-center my-6">Projet académique : Fait et réalisé sur le logiciel Maya au cours de la License 3 | Texture/couleurs et rendue faits sur Arnold</div>
            </div>



            <div className="w-[70%] flex flex-col h-[70vh] max-h-[900px] min-h-[600px] rounded-xl mb-[40px] p-5">

                {/* Vidéo principale */}
                <div className="flex h-[80%] align-center justify-center mb-6">
                    <img
                        key={selectedImage}
                        src={selectedImage}
                        className="rounded-xl object-cover h-full"
                    >
                    </img>
                </div>

                {/* Miniatures */}
                <div className="p-2 rounded-xl h-[20%]">
                    <div className="flex align-center justify-between h-full">
                        {castles.map((castle, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedImage(castle)}
                                className="cursor-pointer rounded-lg overflow-hidden h-full
                           border-4 border-transparent hover:border-orange hover:scale-125 duration-1000 ease-out hover:mx-6"
                            >
                                <img className="h-full object-cover" src={castle}>
                                </img>

                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>

    );
}
