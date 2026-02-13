const MobileBlocker: React.FC = () => {
    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-deep-blue p-2 text-center md:hidden">
            <div className="border-2 p-4 rounded-3xl">
                <p className=" text-lg font-bold text-purple mb-4 font-sans">
                    Site disponible uniquement au format desktop
                </p>
                <p className="text-base text-grey-blue font-sans">
                    Veuillez consulter ce portfolio sur un écran plus large pour une expérience optimale.
                </p>
            </div>
        </div>
    );
};

export default MobileBlocker;