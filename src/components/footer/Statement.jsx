const Statement = ({ className }) => {

    const baseClassName = "text-white text-start text-wrap " + className;

    return (
    <div className={baseClassName}>
        We turn aspiring writers into bestselling authors by focusing on each story’s heart—turning 
        a shaky first draft into a story that outlives you—we build legacy.
    </div>
    );
};

export default Statement;
