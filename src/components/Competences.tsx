import { useState, useEffect } from "react";
import CompetenceCard from "./CompetenceCard";
import ProjectTitle from "./ProjectTitle";

interface Competence {
  title: string;
  logos: Logo[];
}

export interface Logo {
  logo: string;
  logoName: string;
}

export default function Competences() {
  const competenceGroup: Competence[] = [
    {
      title: "Illustration",
      logos: [
        { logo: "images/competence-logo/photoshop.png", logoName: "Photoshop" },
        { logo: "images/competence-logo/illustrator.png", logoName: "Illustrator" },
        { logo: "images/competence-logo/indesign.png", logoName: "Indesign" },
        { logo: "images/competence-logo/after-effect.png", logoName: "After effect" },
        { logo: "images/competence-logo/figma.jpg", logoName: "Figma" },
      ],
    },
    {
      title: "Animation",
      logos: [
        { logo: "images/competence-logo/after-effect.png", logoName: "After effect" },
        { logo: "images/competence-logo/maya.png", logoName: "Maya" },
        { logo: "images/competence-logo/blender.png", logoName: "Blender" },
        { logo: "images/competence-logo/procreate.png", logoName: "Procreate" },
        { logo: "images/competence-logo/flipaclip.png", logoName: "Flipaclip" },
        { logo: "images/competence-logo/capcut.jpg", logoName: "Capcut" },
        { logo: "images/competence-logo/alight-motion.png", logoName: "Alight Motion" },

      ],
    },
    {
      title: "Modélisation 3D",
      logos: [
        { logo: "images/competence-logo/maya.png", logoName: "Maya" },
        { logo: "images/competence-logo/blender.png", logoName: "Blender" },
        { logo: "images/competence-logo/fusion-360.png", logoName: "Fusion 360" },
        { logo: "images/competence-logo/realityscan.png", logoName: "Reality Scan" },

      ],
    },
    {
      title: "Texturing",
      logos: [
        { logo: "images/competence-logo/substance-painter.png", logoName: "Substance Painter" },
        { logo: "images/competence-logo/photoshop.png", logoName: "Photoshop" },
      ],
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return; // Stoppe l'auto-flip si hover

    const interval = setInterval(() => {
      setFlippedIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % competenceGroup.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [hovered, competenceGroup.length]);

  return (
    <div className="flex justify-center w-full py-5 my-10">
      <div className="w-[90%] bg-[#010e17]  p-5 rounded-4xl">

        <>
          <ProjectTitle title="Compétences techniques" />

          <div className="flex flex-wrap gap-5 justify-center items-center mt-12">
            {competenceGroup.map((competence, i) => (
              <CompetenceCard
                key={competence.title}
                title={competence.title}
                logos={competence.logos}
                flipped={flippedIndex === i}
                onFlip={() => setFlippedIndex(flippedIndex === i ? null : i)}
                onHoverChange={(isHovered) => setHovered(isHovered)}
              />
            ))}
          </div>
        </>

        {/* Langues */}
        <div className="mt-24">
          <ProjectTitle title="Langues" />
          <div className="flex flex-wrap gap-10 justify-center items-center">
            <div>
              <img src="images/flag/french.png" alt="logo" className="w-24 h-24 object-contain" />
            </div>

            <div>
              <img src="images/flag/british.png" alt="logo" className="w-24 h-24 object-contain" />
            </div>

            <div>
              <img src="images/flag/malgachy.png" alt="logo" className="w-24 h-24 object-contain" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
