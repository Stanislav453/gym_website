import { sectionHeaderProps } from "../../type";

export const SectionHeader = ({
  hightText,
  secondHightText,
}: sectionHeaderProps) => {
  return (
    <header className="relative w-full flex flex-col justify-center items-center h-48">
      {secondHightText && (
        <h2 className="absolute top-[-6px] left-[10%] z-30 text-secondHightText uppercase drop-shadow-secondHightTextDropShadow">
          {secondHightText}
        </h2>
      )}
      <h1
        className={` ${
          secondHightText && "absolute left-[10%]"
        } z-30 text-hightText capitalize drop-shadow-headerTextShadow`}
      >
        {hightText}
      </h1>
      <div className="absolute top-0 left-0 flex justify-between w-full h-full">
        {secondHightText ? (
          <>
            <div className="w-[10%] h-full bg-header-article	bg-repeat"></div>{" "}
            <div className="w-[40%] h-full bg-header-article	bg-repeat"></div>
          </>
        ) : (
          <div className="w-full h-full bg-header-article	bg-repeat"></div>
        )}
      </div>
    </header>
  );
};
