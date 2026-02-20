import ProjectTitle from "./ProjectTitle";

export interface Experience {
  type: string;        // CDD, Stage...
  period: string;      // Dates
  company: string;     // Nom de l'entreprise
  position: string;    // Poste occupé
  details: string[];   // Liste des missions / observations
}

export default function Experiences() {

  const experiences: Experience[] = [
    {
      type: "Bénévolat",
      period: "12/2025 - en cours",
      company: "GSLille",
      position: "Commissionaire numérique",
      details: [
        "Prise de photos et vidéos des évènements organisés",
        "Création de contenus multimédias",
        "Création en équipe d'affiches évènementielles",
      ],
    },
    {
      type: "CDD",
      period: "07/2024 - 08/2024",
      company: "CACF Sofinco",
      position: "Conseillère crédit",
      details: [
        "Analyse/étude de dossiers",
        "Appel/relance clients",
        "Mise à jour des données clients",
      ],
    },
    {
      type: "Stage",
      period: "03/2020",
      company: "Kolo TV",
      position: "Stage d'observation",
      details: [
        "Observation de la chaîne de production dans une chaîne télévisée",
        "Travail au département diffusion",
        "Réflexion et programmation des programmes de diffusion future",
      ],
    },
  ];


  return (
    <div className="flex justify-center w-full py-5 my-10">
      <div className="lg:w-[80%] p-5 rounded-4xl">

        {/* Compétences techniques */}
        <ProjectTitle title="Expériences professionnelles" />

        <div className="flex flex-wrap gap-5 justify-center items-center mt-12">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="p-5 rounded-2xl border-4 w-87.5 h-100">
      <div className="text-sm text-gray-500">{experience.type} | {experience.period}</div>
      <div className="text-lg font-semibold mt-1">{experience.position}</div>
      <div className="text-md text-[#8A52F7]">{experience.company}</div>
      <ul className="list-disc list-inside mt-3 space-y-1">
        {experience.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
