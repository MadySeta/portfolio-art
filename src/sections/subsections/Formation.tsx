import { TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import ProjectTitle from "../../components/ProjectTitle";

export default function Formation() {
  const formations = [
    {
      date: "2025 - 2026",
      title: "Étudiante 3e année de licence parcours arts numérique",
      subtitle: "Université Polytechnique Haut-de-France",
    },
    {
      date: "2025",
      title: "Formation certifiante Blender",
      subtitle: "Modélisation 3D et Rendu Réaliste – RS n°6042",
    },
    {
      date: "2023",
      title: "Baccalauréat série générale",
      subtitle: "Spécialités Maths – SES – PC",
    },
    {
      date: "2020",
      title: "Brevet série générale",
      subtitle: "",
    },
  ];

  return (
    <div className="flex justify-center w-full py-5 my-10">

      <div className="lg:w-[80%] bg-[#010e17] p-5 rounded-4xl">

        <ProjectTitle title="Formations" />

        <Timeline position="alternate">
          {formations.map((formation, i) => {
            return (
              <TimelineItem key={i}>

                <TimelineOppositeContent
                  sx={{ m: 'auto 0', color: '#8A52F7' }}
                  align="right"
                >
                  {formation.date}
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent sx={{
                  py: '12px',
                  px: 2,
                  // '&:hover': {
                  //   color: '#8A52F7',
                  // },
                }}>

                  <Typography variant="h6" component="span">
                    {formation.title}
                  </Typography>

                  <Typography>{formation.subtitle}</Typography>

                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>


    </div>
  );
}
