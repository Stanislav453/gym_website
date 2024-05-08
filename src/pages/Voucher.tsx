import { voucherData } from "../data/voucherData";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { Img } from "../components/Img/Img";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";

export const Voucher = () => {
  const voucherImg = voucherData.voucherImg;
  const voucheInfo = voucherData.voucherInfo;

  const hightText = "voucher";
  return (
    <section>
      <SectionHeader hightText={hightText} />
      <main className="pt-5">
        <article>
          <div className="flex justify-center flex-wrap gap-5">
            {voucherImg.map((oneImg, index) => (
              <div className="flex-initial w-[30rem] m-5 shadow-voucherShadow">
                <Img key={index} src={oneImg} />
              </div>
            ))}
          </div>
          <div>
            {voucheInfo.map((oneItem, index) => {
              const { title, info, contactTitle, tel, mail } = oneItem;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-5 pt-5"
                >
                  <div className="flex flex-col gap-2 px-2">
                    <h3 className="text-voucherHightText text-center">
                      {title}
                    </h3>
                    <p className="text-center text-voucherInfoText	">{info}</p>
                  </div>
                  <div className="flex flex-col gap-2 px-2">
                    <h3 className="text-voucherHightText text-center">
                      {contactTitle}
                    </h3>
                    <div className="flex flex-col self-center text-voucherInfoText w-full">
                      <a
                        className="flex justify-center items-center gap-2"
                        href={`tel:${tel}`}
                      >
                        <FaPhone className="text-[1.3rem]"  />
                        <span>{tel}</span>
                      </a>
                      <a
                        className="flex items-center justify-center  gap-2"
                        href={`mailto:${mail}`}
                      >
                        <FaRegEnvelope className="text-[1.5rem]" />
                        <span>{mail}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </main>
    </section>
  );
};
