interface HeaderProps {
    sectionRef: React.RefObject<HTMLDivElement | null>;
}

const Header: React.FC<HeaderProps> = ({ sectionRef }) => {

    return (
        <section ref={sectionRef}
            className="max-h-300"
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",
            }}
        >
            {/* Vidéo de fond */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            >
                <source src="videos/storm.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
            </video>

            {/* Contenu au-dessus de la vidéo */}
            <div style={{ zIndex: 1, textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}>
                <div className="header-title whitespace-nowrap mb-4 text-orange font-lobtser">Ava's Project</div>

                <p className="text-2xl">
                    Explorations visuelles à travers la couleur et l’émotion
                </p>

                <div className="mt-8 text-[1.2rem] opacity-70 animate-bounce">
                    ↓ Scroll
                </div>
            </div>
        </section>
    );
};

export default Header;