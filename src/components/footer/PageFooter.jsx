import React from 'react';
import './PageFooter.css';
import {v4 as uuidv4} from 'uuid';

const PageFooter = ({ children }) => {
  return (
    <div className="footer">
      {children.map((child) => <div className="footerElement" key={uuidv4()}>{child}</div>)}
    </div>
  )
};

export default PageFooter;