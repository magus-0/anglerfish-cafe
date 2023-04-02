import React, { useState } from "react";
import { randomChoice } from "../../helpers/helper";
import { bwahs } from "../../constants/bwahs";
import Btn from "../Btn/GenericBtn";
import '../Btn/Btn.css'


const BwahButton = () => {
  const [currentBwah, setCurrentBwah] = useState(randomChoice(bwahs))

  const handleClick = () => {
    const bwah = new Audio(currentBwah);
    const newBwah = randomChoice(bwahs);
    setCurrentBwah(newBwah)
    bwah.play();
  }

  return (
    <Btn onClick={handleClick}>
      Bwah
    </Btn>
  );
};

export default BwahButton;
