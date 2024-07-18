import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import img from '../assets/about_my/adel-foto3.webp';
import imgBlur from '../assets/about_my/adel-foto3-blur.webp';
import { aboutMyData } from '../data/aboutMyData';
import BlurryLoadingImage from '../components/BlurryLoadingImage';

export const AboutMy = () => {
  const hightText = 'o mne';
  return (
    <section>
      <main className='grid grid-cols-1 md:grid-cols-2  gap-2'>
        <article>
          <SectionHeader hightText={hightText} />
          <p className='text-aboutMy p-5'>{aboutMyData}</p>
        </article>
        <article className='h-full w-full'>
          <BlurryLoadingImage
            preview={imgBlur}
            image={img}
            alt={'Adela_Zavrsanova'}
            imageStyleClass={'max-h-dvh object-top object-cover'}
            divStyleClass={'h-dvh'}
          />
        </article>
      </main>
    </section>
  );
};
