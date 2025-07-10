import React from 'react';
import { useNavigate } from 'react-router-dom';
//This function is used to create a button that navigates to a different route when clicked.
function Buttons ({to, children, className}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };
    return (
        <button onClick={handleClick} className={`cursor-pointer ${className}`}>
        {children}
        </button>
    );
}
export default Buttons;