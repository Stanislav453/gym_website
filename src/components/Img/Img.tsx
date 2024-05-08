import { type imgProps } from "../../type";
export const Img = ({ src }: imgProps) => {
  return (
    <img
      className="w-full h-full object-cover"
      src={src}
      alt="adela_zavrsanova"
    />
  );
};
