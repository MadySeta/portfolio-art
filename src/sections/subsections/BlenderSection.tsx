
import { useEffect, useState } from "react";
import ProjectTitle from "../../components/ProjectTitle";
import SectionTitle from "../../components/SectionTitle";
import VideoGallery from "../../components/VideoGallery";

const BlenderSection: React.FC = () => {
  // État pour la vidéo en plein écran (null si rien n'est sélectionné)
  const [fullScreenVideo, setFullScreenVideo] = useState<string | null>(null);

  // Empeche le scroll quand on es en visualisation plein écran
  useEffect(() => {
    if (fullScreenVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [fullScreenVideo]);

  const tubeVideos = [
    "videos/tube-spiral.mp4",
    "videos/tube.mp4",
    "videos/tube-rotation.mp4"
  ];

  return (
    <>
      <div className="bg-[#010e17] p-6 rounded-2xl mb-12">
        <SectionTitle title="Blender Projects" />

        <VideoGallery />

        <ProjectTitle title="Ava Fragrance" />

        <div className="my-6 text-center z-2">
          Expérimentation du Motion Design 3D sur Blender en autodidacte pour la promotion d’un exemplaire de produit
        </div>

        <div className="grid grid-cols-3 gap-5 w-full">
          {tubeVideos.map((src, index) => (
            <div
              key={index}
              onClick={() => setFullScreenVideo(src)}
              className="cursor-zoom-in hover:scale-[1.02] transition-transform duration-300 rounded-lg overflow-hidden border-4 border-transparent hover:border-orange"
            >
              <video className="w-full aspect-square object-cover" muted autoPlay loop playsInline>
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>

        {/* Overlay Plein Écran (Modale) */}
        {fullScreenVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#010e17] backdrop-blur-sm p-4 md:p-20"
            onClick={() => setFullScreenVideo(null)} // Ferme au clic sur le fond
          >
            <button
              className="absolute top-10 right-10 text-white text-4xl hover:text-orange transition-colors"
              onClick={() => setFullScreenVideo(null)}
            >
              &times;
            </button>

            <video
              className="w-full h-full rounded-lg shadow-2xl"
              controls
              autoPlay
              loop
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique sur la vidéo elle-même
            >
              <source src={fullScreenVideo} type="video/mp4" />
            </video>
          </div>
        )}

      </div>


    </>

  );
};

export default BlenderSection;