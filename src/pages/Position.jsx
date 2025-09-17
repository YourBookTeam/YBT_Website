import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from "../components/Button";
import { positions } from '../data/positions';

function Position() {
  //Getting position data from positions page
    const { id } = useParams();
    const [position, setPosition] = useState(null);

    useEffect(() => {
      const selectedPosition = positions.find(position => position.id === id);
        if (selectedPosition){
        setPosition(selectedPosition)
      }else{
        setPosition(null);
      }
    }, [id]);
    if (!position || position.status === "close") return <p>No open positions</p>;

  
  return (
    <div>
       
    </div>
  );

}

export default Position;