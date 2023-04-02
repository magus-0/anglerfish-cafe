import { useState, useEffect } from 'react';
import './App.css';
import Btn from './components/Btn/GenericBtn';
import BwahButton from './components/BwahButton/BwahButton';
import PageFooter from './components/footer/PageFooter';
import { FaSun } from 'react-icons/fa'
import { generateMenu } from './helpers/helper';
import Menu from './components/Menu/Menu';

function App() {
  const [foodMenu, setFoodMenu] = useState({});
  const [drinksMenu, setDrinksMenu] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [menuType, setMenuType] = useState("food");

  useEffect(() => {
    function getSnacksAndDrinks() {
      const {food, drink} = generateMenu()
      setFoodMenu(food);
      setDrinksMenu(drink);
      setIsLoading(false);
    }

    getSnacksAndDrinks();
  }, [menuType]);

  return (
    <div className="App">
      <h1 className="title">Welcome to the Anglerfish Café</h1>
      <div className="content">
        {
          isLoading ?
          <FaSun className='spinningIcon' size="100" /> :
          (
            menuType==="food" && <Menu menu={foodMenu} title="Food Menu"/>
            ||
            menuType==="drink" && <Menu menu={drinksMenu} title="Drink Menu"/>
          )
        }
        {/* <FaSun className='spinningIcon' size="20" /> */}
      </div>
      <PageFooter>
        <Btn onClick={()=>setMenuType("food")}>food</Btn>
        <BwahButton />
        <Btn onClick={()=>setMenuType("drink")}>drink</Btn>
      </PageFooter>
    </div>
  )
};

export default App
