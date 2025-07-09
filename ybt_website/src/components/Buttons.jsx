import React from 'react';
import { useNavigate } from 'react-router-dom';
function Buttons ({to, children, className}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };
    return (
        <button onClick={handleClick} className={className}>
        {children}
        </button>
    );
}
export default Buttons;