interface TitleProps {
    title: string;
}

const ProjectTitle: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="text-3xl text-center z-2 my-6 text-orange font-lobtser">
            {title}
        </div>
    );
};

export default ProjectTitle;