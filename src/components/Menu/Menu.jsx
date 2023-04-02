import React from 'react';
import './Menu.css';
import {v4 as uuidv4} from 'uuid';
import { FaSun } from 'react-icons/fa'

const Menu = ({ menu, title }) => {
  const menuItems = Object.keys(menu)
  return (
    <div className="menuContainer">
      <FaSun className='spinningIcon' size="20" />
      <h1>{title}</h1>
      <h2>Items and prices are quantum.</h2>
      <div className="menuContentsGrid">
        {
          menuItems.map(item => {
            return(
              <div className='menuContent' key={uuidv4()}>
                <div className='itemName'>{item}</div>
                <div className='itemPrice'>{menu[item]}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Menu;