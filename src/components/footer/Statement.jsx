const Statement = ({ className }) => {

    const baseClassName = "text-white text-wrap text-sm md:text-base 2xl:text-xl " + className;

    return (
    <div className={baseClassName}>
        We turn aspiring writers into bestselling authors by focusing on each story’s heart—turning 
        a shaky first draft into a story that outlives you—we build legacy.
    </div>
    );
};

export default Statement;
