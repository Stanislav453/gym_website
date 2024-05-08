import React from "react";
import { Logo } from "./Logo/Logo";

export const Footer = () => {
  return (
    <footer className="flex justify-center  w-full h-full p-6">
      <div className="w-full max-w-24	 h-full ">
        <Logo />
      </div>
    </footer>
  );
};
