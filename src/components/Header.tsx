import { NavBar } from "./Navbar/NavBar";
import logo from "../assets/adel-logo.svg";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between px-5 py-3 ">
      <a href="#" className="w-16">
        <img className="w-full h-full" src={logo} alt="logo-adela-zavrsanova" />
      </a>
      <NavBar />
    </header>
  );
};
