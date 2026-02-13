
import ProjectTitle from "../../components/ProjectTitle";
import SectionTitle from "../../components/SectionTitle";
import VideoGallery from "../../components/VideoGallery";

const BlenderSection: React.FC = () => {
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
          <video className="object-cover" muted autoPlay loop>
            <source src="videos/tube-spiral.mp4" type="video/mp4" />
          </video>

          <video className="object-cover" muted autoPlay loop>
            <source src="videos/tube.mp4" type="video/mp4" />
          </video>

          <video className="object-cover" muted autoPlay loop>
            <source src="videos/tube-rotation.mp4" type="video/mp4" />
          </video>
        </div>

      </div>


    </>

  );
};

export default BlenderSection;