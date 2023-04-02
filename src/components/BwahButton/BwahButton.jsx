import React, { useState } from "react";
import { randomChoice } from "../../helpers/helper.js";
import { bwahs } from "../../constants/bwahs.js";
import Btn from "../Btn/GenericBtn.jsx";
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
