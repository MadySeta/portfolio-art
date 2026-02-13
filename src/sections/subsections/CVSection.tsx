import Button from "@mui/material/Button";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

interface CV {
  pdfPath: string,
  imgPath: string,
  label: string,
  downloadFileName: string,
}


const CVSection: React.FC = () => {
  const CVs: CV[] = [
    {
      pdfPath: "images/cv/alternance-cm.pdf",
      imgPath: "images/cv/alternance-cm.jpeg",
      label: "Alternance Community Manager",
      downloadFileName: "CV Ava - Alternance Community Manager"
    },
    {
      pdfPath: "images/cv/alternance-md.pdf",
      imgPath: "images/cv/alternance-md.jpeg",
      label: "Alternance Motion Design",
      downloadFileName: "CV Ava - Alternance Motion Design"
    },
    {
      pdfPath: "images/cv/master.pdf",
      imgPath: "images/cv/master.jpeg",
      label: "Master",
      downloadFileName: "CV Ava - Master"
    },
    {
      pdfPath: "images/cv/stage-cm.pdf",
      imgPath: "images/cv/stage-cm.jpeg",
      label: "Stage Community Manager",
      downloadFileName: "CV Ava - Stage Community Manager"
    },
    {
      pdfPath: "images/cv/stage-md.pdf",
      imgPath: "images/cv/stage-md.jpeg",
      label: "Stage Motion Design",
      downloadFileName: "CV Ava - Stage Motion Design"
    },
  ];

  const [selectedCV, setSelectedCV] = useState(CVs[4]);

  return (
    <>
      <SectionTitle title="Mes CVs" />

      <div className="flex gap-2 justify-center">
        {CVs.map((cv, index) => (
          <Button variant="contained" size="large" sx={{ background: "#8A52F7" }} key={index} onClick={() => setSelectedCV(cv)}>
            <div className="font-sans">{cv.label}</div>
          </Button>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center w-full">

        <img src={selectedCV.imgPath} className="w-[50%] ring-4 ring-[#8A52F7] my-10" />

        <a href={selectedCV.pdfPath} download={selectedCV.downloadFileName}>
          <Button variant="contained" size="large" sx={{ background: "#8A52F7" }}>
            <div className="font-sans">Télécharger le CV</div>
          </Button>
        </a>
      </div>
    </>

  );
};

export default CVSection;