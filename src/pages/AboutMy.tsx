import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import img from "../assets/about_my/adel-foto3.webp";
import { aboutMyData } from "../data/aboutMyData";

export const AboutMy = () => {
  const hightText = "o mne";
  return (
    <section>
      <main className="grid grid-cols-1 md:grid-cols-2  gap-2">
        <article>
          <SectionHeader hightText={hightText} />
          <p className="text-aboutMy p-5">{aboutMyData}</p>
        </article>
        <article className="h-full w-full">
          <img
            className="w-full h-full max-h-dvh	 object-middle	 object-cover"
            src={img}
            alt="adela_zavrsanova"
          />
        </article>
      </main>
    </section>
  );
};
