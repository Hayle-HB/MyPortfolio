import React, { useState } from 'react'
import './Card.css'
const Card = ({belong}) => {
  const [selected, setSelected] = useState(true);
  return (
    <div className={`card-item ${belong.id}`}>
      {/* {selected && <p className='circle'></p>} */}
      <h2>{belong.name}</h2>
      <p>{belong.position}</p>
    </div>
  );
}

export default Card
