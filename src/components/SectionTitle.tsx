interface TitleProps {
    title: string;
}

const SectionTitle: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="text-5xl text-center z-2 p-4 mt-12 mb-6 text-[#8A52F7] font-lobtser">
            {title}
        </div>
    );
};

export default SectionTitle;