import { useState } from 'react';
import adelaImg from '../assets/photo/Adela-foto.jpg';
import adelImgBlur from '../assets/photo/Adela-foto-blur.jpg';
import { HeaderButton } from '../components/HeaderButton/HeaderButton';
import { ModalOfServices } from '../components/ModalOfServices/ModalOfServices';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { buttonHeader } from '../data/headerData';
import BlurryLoadingImage from '../components/BlurryLoadingImage';

const Home = () => {
  const [serviceName, setServiceName] = useState('');
  const hightText = 'adela završanová';
  const secondText = 'personal & onnline coach';
  const citation =
    'Byť zdravý a fit pre mňa neznamená mať len pekné telo. Ale sa aj dobre cítiť v akomkoľvek období života.';

  const setActualServiceName = (setName: string) => {
    setServiceName(setName);
  };

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
      <article className='relative flex flex-col justify-center gap-5 pb-4'>
        <SectionHeader hightText={hightText} secondHightText={secondText} />
        <p className='text-citateInHeader mx-5'>{citation}</p>
        <div className='flex flex-col md:flex-row gap-5 mx-5'>
          {buttonHeader.map((oneButton, index) => {
            const { text, variant } = oneButton;
            return (
              <HeaderButton
                onClick={() => setActualServiceName(text)}
                key={index}
                variant={variant}
              >
                {text}
              </HeaderButton>
            );
          })}
        </div>
      </article>
      <article className='h-full w-full blurBg'>
        <BlurryLoadingImage
          preview={adelImgBlur}
          image={adelaImg}
          alt={'Adela_Zavrsanova'}
          imageStyleClass={'max-h-dvh object-top object-cover'}
          divStyleClass={'h-dvh'}
        />

        {/* <img
          height="500"
          className="w-full h-full max-h-dvh object-top	object-cover"
          src={adelaImg}
          alt="adela_zavrsanova"
        /> */}
      </article>
      {serviceName && (
        <ModalOfServices
          serviceName={serviceName}
          setServiceName={setServiceName}
        />
      )}
      {/* <ModalOfServices
        serviceName={serviceName}
        setServiceName={setServiceName}
      /> */}
    </main>
  );
};

export default Home;
