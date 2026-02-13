import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import type { Section } from "../App";

interface NavBarProps {
  headerRef: React.RefObject<HTMLDivElement | null>;
  homeRef: React.RefObject<HTMLDivElement | null>;
  portfolioSections: Section[];
  aboutSections: Section[];
}

const NavBar: React.FC<NavBarProps> = ({ headerRef, homeRef, portfolioSections, aboutSections }) => {

  const [portfolioEl, setPortfolioAnchorEl] = useState<null | HTMLElement>(null);
  const [aboutEl, setAboutAnchorEl] = useState<null | HTMLElement>(null);

  const portfolioOpen = Boolean(portfolioEl);
  const AboutOpen = Boolean(aboutEl);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPortfolioAnchorEl(event.currentTarget); // On cible le bouton cliqué
  };

  const handlePClose = () => {
    setPortfolioAnchorEl(null);
  };

  const handleAClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAboutAnchorEl(event.currentTarget); // On cible le bouton cliqué
  };

  const handleAClose = () => {
    setAboutAnchorEl(null);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full p-4 bg-[#010e17] flex justify-between items-center sticky top-0 z-50 border-y-4">
        <div onClick={() => scrollTo(headerRef)} className="font-bold text-lg hover:text-orange">Ava's Project</div>
        <div className="flex gap-6">
          <button onClick={() => scrollTo(homeRef)} className="hover:text-[#8A52F7] hover:underline transition-colors">
            Accueil
          </button>
          <button onClick={handlePClick} className="hover:text-[#8A52F7] hover:underline transition-colors">
            Portfolio
          </button>

          <Menu
            anchorEl={portfolioEl}
            open={portfolioOpen}
            onClose={handlePClose}
            // Personnalisation du style pour coller à ton thème sombre
            PaperProps={{
              style: {
                backgroundColor: "#010e17",
                color: "white",
                border: "1px solid #8A52F7",
              },
            }}
          >
            {
              portfolioSections.map((section, index) => (
                <MenuItem key={index} onClick={() => { scrollTo(section.ref); handlePClose() }} >
                  <div className="hover:text-orange transition-colors">{section.label}</div>
                </MenuItem>
              ))
            }
          </Menu>

          <button onClick={handleAClick} className="hover:text-[#8A52F7] hover:underline transition-colors">
            À propos
          </button>

          <Menu
            anchorEl={aboutEl}
            open={AboutOpen}
            onClose={handleAClose}
            // Personnalisation du style pour coller à ton thème sombre
            PaperProps={{
              style: {
                backgroundColor: "#010e17",
                color: "white",
                border: "1px solid #8A52F7",
              },
            }}
          >
            {
              aboutSections.map((section, index) => (
                <MenuItem key={index} onClick={() => { scrollTo(section.ref); handleAClose() }} >
                  <div className="hover:text-orange transition-colors">{section.label}</div>
                </MenuItem>
              ))
            }
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
