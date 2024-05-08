import { Link } from "react-router-dom";
import { useState } from "react";
import { NavBarData } from "./NavBarData";
import { RxHamburgerMenu } from "react-icons/rx";


export const NavBar = () => {
  const [navigationState, setNavigationState] = useState({id:0, isActive: false});
  const {id, isActive } = navigationState

  const navToggle = () => {
    setNavigationState( (prev) => ({...prev, isActive: !isActive}) )
  }

  const setNavId = (newId: number) => { 
    setNavigationState((prev) => ({ ...prev, id: newId }));
  }


    const actualizeNavState = (newId: number) => {
      setNavId(newId),
        setNavigationState((prev) => ({ ...prev, isActive: false }));
    };


  return (
    <nav className="flex items-center">
      <button className=" md:hidden bg-navHover p-4" onClick={navToggle}>
        <RxHamburgerMenu className="text-hamburgerNavFontSize text-hamburgerMenuColor" />
      </button>
      <ul
        className={`absolute z-50 ${
          isActive ? "top-[83px] opacity-100" : "top-[-200px] opacity-0 md:opacity-100"
        } md:top-0 left-0 md:relative w-full flex flex-col md:flex-row  md:gap-16 tracking-widest transition-top duration-300`}
      >
        {NavBarData.map((navItem, key) => {
          {
            return (
              <li key={key} className="flex">
                <Link
                  to={`/${navItem}`}
                  onClick={ () => actualizeNavState(key)}
                  className={`w-full text-white md:text-black text-center bg-navHover md:bg-white py-2 z-50 uppercase font-semibold md:hover:text-navHover transition-color ${
                    key === id && "text-navHover"
                  } `}
                >
                  {navItem}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};
