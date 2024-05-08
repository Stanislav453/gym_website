import React from "react";
import { type HeaderButtonProps } from "../../type";

const buttonBasicStyle =
  "flex-1 px-8 py-4 text-headerButton uppercase hover:shadow-HeadoeButtonHover transition-box-shadow";

export const HeaderButton = ({ variant, children }: HeaderButtonProps) => {
  return (
    <button
      className={
        variant === "transparent"
          ? `${buttonBasicStyle} border-4 border-black`
          : `${buttonBasicStyle} bg-slate-400`
      }
    >
      {children}
    </button>
  );
};
