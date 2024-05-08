import adelaImg from "../assets/photo/Adela-foto.jpg";
import { HeaderButton } from "../components/HeaderButton/HeaderButton";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { buttonHeader } from "../data/headerData";

const Home = () => {
  const hightText = "adela završanová";
  const secondText = "personal & onnline coach";
  const citation =
    "Byť zdravý a fit pre mňa neznamená mať len pekné telo. Ale sa aj dobre cítiť v akomkoľvek období života.";
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
      <article className="relative flex flex-col justify-center gap-5">
        <SectionHeader hightText={hightText} secondHightText={secondText} />
        <p className="text-citateInHeader mx-5">{citation}</p>
        <div className="flex flex-col md:flex-row gap-5 mx-5">
          {buttonHeader.map((oneButton, index) => {
            const { text, variant } = oneButton;
            return (
              <HeaderButton key={index} variant={variant}>
                {text}
              </HeaderButton>
            );
          })}
        </div>
      </article>
      <article className="h-full w-full">
        <img
          className="w-full h-full max-h-dvh object-top	object-cover"
          src={adelaImg}
          alt="adela_zavrsanova"
        />
      </article>
    </main>
  );
};

export default Home;
