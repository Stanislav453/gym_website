import { type modalServivesProps } from "../../type";
import { useEffect, useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { zonaData } from "../../data/zonaData";
import { litvaFitnessData } from "../../data/litvaFitnessData";

export const ModalOfServices = ({
  serviceName,
  setServiceName,
}: modalServivesProps) => {
  const [modalSrviceData, setModalServiceData] = useState(litvaFitnessData);
  const [ serviceArticleData, setServiceArticleData ] = useState([])

  const setServicesData = (name: string) => {
    switch (name) {
      case "litva fitness": {
        setModalServiceData(litvaFitnessData);
        break;
      }
      case "zØna": {
        setModalServiceData(zonaData);
        break;
      }
      default:
        console.log("data do not set");
    }
  };

  useEffect(() => {
    setServicesData(serviceName);
  }, [modalSrviceData]);

  console.log(modalSrviceData);

  const articleServiceData = ( category, underCategory ) => {
    console.log(category, underCategory);
    
  }
   

  return (
    <section className="flex fixed top-0 z-50 w-full h-full bg-modalBackgroundColor">
      <button className="absolute top-2 right-2 ">
        <FaCircleXmark
          className="text-modalIcon text-white cursor-pointer transition-transform hover:scale-110"
          onClick={() => setServiceName("")}
        />
      </button>
      <article className="w-full md:w-64 h-full bg-gradient-to-b from-slate-50 to-slate-400">
        <h2 className="text-serviceModalHightText uppercase text-center">
          {modalSrviceData.hightText}
        </h2>
        <h3 className="uppercase text-center">{modalSrviceData.title}</h3>
        <ul className="flex flex-col gap-1 pt-5">
          {modalSrviceData.servicesData.map((oneButton, index) => {
            const { serviceHight, servicesCategory } = oneButton;
            return (
              <li key={index} className="mx-1">
                <button className="w-full bg-mainColor py-3 uppercase">
                  {serviceHight}
                </button>
                <ul>
                  {servicesCategory.map((oneCategory, index) => {
                    const { categoryTitle } = oneCategory;
                    return (
                      <li key={index}>
                        <button
                          className="w-full bg-subMainColor py-3 uppercase mt-[.1rem]"
                          onClick={ () => { articleServiceData(serviceHight, categoryTitle); } }
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
      </article>
      <article className="w-2/4 h-full  bg-subMainColor">
        {/* {
          articleData.map( (item, key) => {
            return item.categoryTitle;
          } )
        } */}
      </article>
    </section>
  );
};
