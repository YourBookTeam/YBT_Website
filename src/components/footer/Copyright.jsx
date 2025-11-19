const Copyright = ({ className }) => {
    const baseClassName = "bg-black text-xs text-white w-full h-8 flex items-center justify-center z-50 " + className; 
    return (
        <div className={baseClassName}>
            Copyright © 2025, YourBookTeam, All Rights Reserved.
        </div>
    );
};

export default Copyright;