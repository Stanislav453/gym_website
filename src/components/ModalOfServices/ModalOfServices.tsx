import { type modalServivesProps } from '../../type';
import { useEffect, useState } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';
import { zonaData } from '../../data/zonaData';
import { litvaFitnessData } from '../../data/litvaFitnessData';
import { FaChevronLeft } from 'react-icons/fa6';
import staraBystricaImg from '../../assets/map/litva-fitness-stara-bystrica.webp';
import zborovImg from '../../assets/map/litva-fitness-zborov.webp';
import zona from '../../assets/map/zona-zilina.webp';
import BlurryLoadingImage from '../BlurryLoadingImage';

type TarticleServiceData = {
  categoryTitle: string;
  list: string[];
  price: string;
  sale?: string;
  alertInfo?: string;
  alertInfoSecond?: string;
};

export const ModalOfServices = ({
  serviceName,
  setServiceName,
}: modalServivesProps) => {
  const [modalSrviceData, setModalServiceData] = useState(litvaFitnessData);
  const [serviceArticleData, setServiceArticleData] = useState<
    TarticleServiceData[] | null
  >(null);
  const [infoActive, setInfoActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const setServicesData = (name: string) => {
    switch (name) {
      case 'litva fitness': {
        setModalServiceData(litvaFitnessData);
        break;
      }
      case 'zØna': {
        setModalServiceData(zonaData);
        break;
      }
      default:
        console.log('data do not set');
    }
  };

  useEffect(() => {
    setServicesData(serviceName);
  }, [modalSrviceData, serviceName]);

  const articleServiceData = (category: string, underCategory: string) => {
    const serviceHightName = modalSrviceData.servicesData.filter(
      (data) => data.serviceHight === category
    );
    const result = serviceHightName[0].servicesCategory.filter(
      (categoryName) => categoryName.categoryTitle === underCategory
    );

    setServiceArticleData(result);
  };

  const handleCategoryClick = (category: string, underCategory: string) => {
    if (activeCategory === `${category}-${underCategory}`) {
      setInfoActive(false);
      setActiveCategory(null);
    } else {
      articleServiceData(category, underCategory);
      setInfoActive(true);
      setActiveCategory(`${category}-${underCategory}`);
    }
  };

  return (
    <section className='flex fixed top-0 z-50 w-full h-full bg-modalBackgroundColor'>
      <button className='absolute top-2 right-2 z-50 drop-shadow-xl'>
        <FaCircleXmark
          className='text-modalIcon text-white cursor-pointer transition-transform hover:scale-110'
          onClick={() => {
            setServiceName('');
            setInfoActive(false);
            setActiveCategory(null);
          }}
        />
      </button>
      <article className='w-full md:w-64 h-full bg-gradient-to-b from-slate-50 to-slate-400 overflow-y-auto'>
        <h2 className='text-serviceModalHightText uppercase text-center'>
          {modalSrviceData.hightText}
        </h2>
        <h3 className='uppercase text-center'>{modalSrviceData.title}</h3>
        <ul className='flex flex-col gap-1 pt-5'>
          {modalSrviceData.servicesData.map((oneButton, index) => {
            const { serviceHight, servicesCategory } = oneButton;
            return (
              <li key={index} className='mx-1'>
                <button className='w-full bg-mainColor py-3 uppercase font-semibold cursor-default'>
                  {serviceHight}
                </button>
                <ul>
                  {servicesCategory.map((oneCategory, index) => {
                    const { categoryTitle } = oneCategory;
                    return (
                      <li key={index}>
                        <button
                          className='w-full bg-subMainColor py-3 uppercase mt-[.1rem] hover:bg-gray-500 transition-bgColor'
                          onClick={() =>
                            handleCategoryClick(serviceHight, categoryTitle)
                          }
                        >
                          {categoryTitle}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <ul className='flex flex-col gap-2 pt-4 pb-4'>
          {modalSrviceData.location.map((item) => {
            const { title, link, img } = item;
            return (
              <li key={title}>
                <h3 className='text-center text-articleLocation'>{title}</h3>
                <a className='block w-full px-1' href={link}>
                  <BlurryLoadingImage
                    preview={img}
                    image={img}
                    alt={title}
                    divStyleClass={'min-h-105'}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </article>
      <article
        className={` ${
          infoActive ? 'w-full md:w-2/4 ' : 'w-0 '
        } h-full absolute md:relative bg-subMainColor transition-[width] overflow-y-auto md:overflow-hidden pb-5 `}
      >
        {serviceArticleData?.map((item: TarticleServiceData, index: number) => {
          const {
            categoryTitle,
            list,
            price,
            sale,
            alertInfo,
            alertInfoSecond,
          } = item;
          return (
            <div
              key={index}
              className={` ${
                infoActive ? 'opacity-100' : 'opacity-0'
              }  transition-opacity`}
            >
              <h2 className=' text-serviceModalHightText uppercase text-center pt-2 relative px-12'>
                <button
                  className='absolute left-5 top-3.5 text-white  transition-transform hover:scale-110'
                  onClick={() => setInfoActive(false)}
                >
                  <FaChevronLeft />
                </button>
                {categoryTitle}
              </h2>
              <ul className='flex gap-2 flex-col px-5 pt-5'>
                {list.map((oneList, index) => {
                  return <li key={index}>{oneList}</li>;
                })}
              </ul>
              <p className='px-5'>{sale && sale}</p>
              <p className='px-5'>{price}</p>
              <p className='px-5'>{alertInfo && alertInfo}</p>
              <p className='px-5'>{alertInfoSecond && alertInfoSecond}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};
