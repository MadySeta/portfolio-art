



import type { Section } from "../App";
import AdobeSection from "./subsections/AdobeSection";
import BlenderSection from "./subsections/BlenderSection";
import FeatherSection from "./subsections/FeatherSection";
import MayaSection from "./subsections/MayaSection";
import PortraitSection from "./subsections/PortraitSection";
import ScaleOneSection from "./subsections/ScaleOneSection";

interface PortfolioProps {
    sections: Section[];
}

const Portfolio: React.FC<PortfolioProps> = ({ sections }) => {

    const getSectionRef = (label: string): React.RefObject<HTMLDivElement | null> | null => {
        const section = sections.find(s => s.label === label);
        return section ? section.ref : null;
    };


    return (
        <>
            <section>
                <div ref={getSectionRef("Projets Blender")}>
                    <BlenderSection />
                </div>

                <div ref={getSectionRef("Projets Maya")}>
                    <MayaSection />
                </div>

                <div ref={getSectionRef("Projets Feather")}>
                    <FeatherSection />
                </div>

                <div ref={getSectionRef("Projets Adobe")}>
                    <AdobeSection />
                </div>

                <div ref={getSectionRef("Portrait")}>
                    <PortraitSection />
                </div>

                <div ref={getSectionRef("Echelle 1")}>
                    <ScaleOneSection />
                </div>

            </section>
        </>
    );
};

export default Portfolio;