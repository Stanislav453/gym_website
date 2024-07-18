import { useState } from "react";
import { Img } from "../components/Img/Img";
import { ImgModal } from "../components/ImgModal/ImgModal";
import { galleryData } from "../data/galleryData";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";

const Gallery = () => {
  const hightText = "fotogaleria";
  const [imodalState, setModalState] = useState({ isOpen: false, id: 0 });
  const { isOpen, id } = imodalState;

  return (
    <section>
      <header>
        <SectionHeader hightText={hightText} />
      </header>
      <main className='flex flex-wrap gap-5 justify-center w-full h-full pt-16'>
        {galleryData.map((onePhoto, index) => {
          return (
            <div
              key={index}
              className=' flex-initial w-72 h-80	cursor-pointer hover:scale-105 transition-transform'
              onClick={() => setModalState({ isOpen: true, id: index })}
            >
              {' '}
              <Img src={onePhoto.src} />{' '}
            </div>
          );
        })}
      </main>
      {isOpen && <ImgModal id={id} setModalState={setModalState} />}
    </section>
  );
};

export default Gallery;
