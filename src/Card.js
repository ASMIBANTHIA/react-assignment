import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import './Card.css';

const Card = ({ id, text, x, y }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  const togglePopup = () => setPopupOpen(!isPopupOpen);
  const toggleExpand = () => setExpanded(!isExpanded);

  return (
    <Draggable defaultPosition={{ x, y }}>
      <Resizable
        height={200}
        width={200}
        minConstraints={[100, 100]}
        maxConstraints={[400, 400]}
      >
        <div className="card" id={id}>
          <p className='fontcss'>
            {isExpanded ? text : `${text.substring(0, text.length / 2)}...`}
            <button className='togglebtn'  onClick={toggleExpand}>{isExpanded ? 'Show Less' : 'Show More'}</button>
          </p>
          <button onClick={togglePopup}>View Details</button>
          {isPopupOpen && (
            <div className="popup">
              <p className='fontcss fontwhite' >{text}</p>
              <button onClick={togglePopup}>Close</button>
            </div>
          )}
        </div>
      </Resizable>
    </Draggable>
  );
};

export default Card;
