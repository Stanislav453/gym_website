import { NavBar } from "./Navbar/NavBar";
import { Logo } from "./Logo/Logo";

export const Nav = () => {
  return (
    <header className="flex flex-row justify-between px-2 md:px-5 py-3 ">
      <Logo />
      <NavBar />
    </header>
  );
};
