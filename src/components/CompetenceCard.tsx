import { Card, CardContent, Tooltip, Zoom } from "@mui/material";
import type { Logo } from "./Competences";

export default function CompetenceCard({
  title,
  logos,
  flipped,
  onFlip,
  onHoverChange, // Fonction pour informer le parent du hover
}: {
  title: string;
  logos: Logo[];
  flipped: boolean;
  onFlip: () => void;
  onHoverChange: (hovered: boolean) => void;
}) {
  return (
    <div
      className="w-65 h-60 cursor-pointer [perspective:1000px]"
      onClick={onFlip}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <div
        className={`relative w-full h-full duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
      >
        {/* Recto */}
        <Card className="absolute w-full h-full backface-hidden flex items-center justify-center">
          <CardContent className="text-center">
            <h3 className="text-xl font-semibold">{title}</h3>
          </CardContent>
        </Card>

        {/* Verso */}
        <Card className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden flex items-center justify-center p-4">
          <CardContent className="flex flex-wrap gap-4 items-center justify-center">
            {logos.map((logo, index) => (
              <Tooltip
                key={index}
                title={logo.logoName}
                slots={{
                  transition: Zoom,
                }}
                arrow>
                <img key={index} src={logo.logo} alt="logo" className="w-12 h-12 object-contain" />
              </Tooltip>

            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
