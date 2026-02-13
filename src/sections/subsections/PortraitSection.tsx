import Divider from "@mui/material/Divider";
import Carousel3D from "../../components/Carrousel";
import SectionTitle from "../../components/SectionTitle";

const PortraitSection: React.FC = () => {
  const portraits: string[] = Array.from({ length: 13 }, (_, i) => `images/portraits/portrait${i + 1}.jpeg`);

  return (
    <>
      <Divider variant="middle" />

      <div className="mt-48">
        <div className="mt-12">
          <SectionTitle title="Série d'étude de portraits réalisée sur Procreate et Ibispaint" />
        </div>


        <Carousel3D images={portraits} radius={650} speed={4000} />
      </div>


    </>

  );
};

export default PortraitSection;