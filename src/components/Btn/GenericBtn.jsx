import React from "react";
import './Btn.css'


const Btn = ({onClick, children}) => {

  return (
    <button
      className="btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Btn;
