import React, { useState } from 'react';
import icondicesvg from "./../assets/images/icon-dice.svg";
import './DiceComponent.css'; // Import CSS file for styling

const DiceComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000); // Reset clicked state after 3 seconds (3000 milliseconds)
  };

  return (
    <div >
        
      <img
        src={icondicesvg}
        alt='Randomize!'
        className={`p-4 dice-icon ${clicked ? 'spin' : ''}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default DiceComponent;
