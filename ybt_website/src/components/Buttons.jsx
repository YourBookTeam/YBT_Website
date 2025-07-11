import React from 'react';
import { useNavigate } from 'react-router-dom';
function Buttons ({to, children, className}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };
    return (
        <button onClick={handleClick} className={"justify-center font-bold text-sm bg-[#F5BE29] px-5 py-2 m-3 rounded shadow"}>
        {children}
        </button>
    );
}
export default Buttons;
