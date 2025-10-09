const Copyright = ({ className }) => {
    const baseClassName = "bg-black text-white w-full h-10 flex items-center justify-center " + className;
    return (
        <div className={baseClassName}>
            Copyright © 2025, YourBookTeam, All Rights Reserved.
        </div>
    );
};

export default Copyright;