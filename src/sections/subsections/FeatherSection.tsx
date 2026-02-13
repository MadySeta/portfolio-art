import SectionTitle from "../../components/SectionTitle";
import VideoCarousel from "../../components/VideoCarrousel";


const FeatherSection: React.FC = () => {
  return (
    <>

      <div className="bg-[#010e17] p-6 rounded-2xl">
        <SectionTitle title="Feather Projects" />

        <VideoCarousel />
      </div>

    </>

  );
};

export default FeatherSection;