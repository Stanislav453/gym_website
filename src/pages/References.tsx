import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { referencesData } from "../data/referencesData";

export const References = () => {
  const hightText = "referencie";
  return (
    <section>
      <SectionHeader hightText={hightText} />
      <main>
        <ul className="flex flex-wrap gap-6 justify-center items-start	 pt-6">
          {referencesData.map((oneItem, key) => {
            const { title, text, name } = oneItem;
            return (
              <li
                className="flex-initial w-full mx-6 md:m-0 md:w-[30rem]"
                key={key}
              >
                <div className="flex flex-col gap-4 bg-referencesArticleBackground p-5">
                  <h3 className="text-referenctArticleHight">{title}</h3>
                  <p className="text-referenctArticleText">{text}</p>
                  <p>
                    <span className="text-referenctArticleAuthor">{name}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
};
