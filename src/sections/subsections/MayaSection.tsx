
import Castle from "../../components/Castle";
import Lego from "../../components/Lego";
import Rooms from "../../components/Rooms";
import SectionTitle from "../../components/SectionTitle";


const MayaSection: React.FC = () => {
  return (
    <>
      <div className="bg-[#010e17] p-6 rounded-2xl mb-12">
        <SectionTitle title="Maya Projects" />

        <Castle />

        <Lego />

        <Rooms />
      </div>


    </>

  );
};

export default MayaSection;