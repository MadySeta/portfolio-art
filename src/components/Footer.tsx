const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-grey-blue border-t-2 border-orange-site/30 py-12 px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo & Slogan */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-black text-orange uppercase tracking-tighter italic">
                        Ava's Project
                    </h2>
                    <p className="text-deep-blue text-sm opacity-70">Explorations visuelles & Motion Design</p>
                </div>

                {/* Contact Rapide */}
                <div className="text-center md:text-right">
                    <p className="text-white">ravakarmjr@gmail.com</p>
                    <p className="text-white">+33 6 02 80 05 50</p>
                    <p className="text-[10px] text-green-500 uppercase tracking-widest mt-2 animate-pulse">
                        ● Disponible pour nouveaux projets
                    </p>
                </div>

            </div>

            <div className="flex border-t border-white/5 mt-12 pt-6 justify-center items-center">
                <div className="text-[10px] text-center text-deep-blue opacity-50 uppercase tracking-[0.3em]">
                    © 2026 — Built in REACT
                </div>
                <img className="h-10 mx-6" src="images/competence-logo/react.svg" alt="Logo react" />

                <div className="text-[10px] text-center text-deep-blue opacity-50 uppercase tracking-[0.3em]">
                    by
                </div>

                <a
                    href="https://www.linkedin.com/in/mady-seta-ab4425205"
                    className="text-white hover:text-orange transition-colors mx-6"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mady Seta
                </a>
            </div>

        </footer>
    );
};

export default Footer;