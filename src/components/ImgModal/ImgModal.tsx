import { type imgModalProps } from "../../type";
import {
  FaCircleChevronRight,
  FaCircleChevronLeft,
  FaCircleXmark,
} from "react-icons/fa6";
import { galleryData } from "../../data/galleryData";
import { Img } from "../Img/Img";

export const ImgModal = ({ id, setModalState }: imgModalProps) => {
  const modalClose = () => {
    setModalState((prevState) => ({
      ...prevState,
      isOpen: false,
    }));
  };

  const photoCounter = (amount: number) => {
    setModalState((prevState) => {
      if (prevState.id >= galleryData.length - 1 && amount > 0) {
        return {
          ...prevState,
          id: 0,
        };
      } else if (prevState.id <= 0 && amount < 0) {
        return {
          ...prevState,
          id: galleryData.length - 1,
        };
      } else {
        return {
          ...prevState,
          id: prevState.id + amount,
        };
      }
    });
  };

  return (
    <div className="fixed top-0 flex justify-center align-center w-full h-full bg-modalBackgroundColor">
      <button>
        <FaCircleXmark
          className="absolute top-2 right-2 text-modalIcon text-white	cursor-pointer"
          onClick={() => modalClose()}
        />
      </button>
      <article className="flex justify-center align-center gap-2 w-full max-w-2xl	p-12">
        <button className="self-center">
          <FaCircleChevronLeft
            className="text-modalIcon text-white	cursor-pointer"
            onClick={() => photoCounter(-1)}
          />
        </button>
        <Img src={galleryData[id].src} />
        <button className="self-center">
          <FaCircleChevronRight
            className="text-modalIcon text-white	cursor-pointer"
            onClick={() => photoCounter(1)}
          />
        </button>
      </article>
    </div>
  );
};
