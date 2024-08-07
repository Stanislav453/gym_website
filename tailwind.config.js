/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      articleLocation: [
        '1rem',
        {
          fontWeight: '900',
        },
      ],

      hightText: [
        'clamp(3.5rem, 5vw, 6rem)',
        {
          lineHeight: '3.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        },
      ],
      secondHightText: [
        'clamp(1rem, 2vw, 1.5rem)',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '800',
        },
      ],
      citateInHeader: [
        'clamp(1rem, 5vw, 1.7rem)',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '300',
        },
      ],
      headerButton: [
        'clamp(1rem, 5vw, 1.5rem)',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        },
      ],
      referenctArticleHight: [
        'clamp(1.5rem, 5vw, 1.3rem)',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '900',
        },
      ],
      referenctArticleText: [
        'clamp(1rem, 5vw, 1.1rem)',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        },
      ],
      referenctArticleAuthor: [
        'clamp(1.5rem, 5vw, 1.3rem)',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '900',
        },
      ],
      voucherHightText: [
        'clamp(1.5rem, 5vw, 1.3rem)',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '900',
        },
      ],
      voucherInfoText: [
        'clamp(1.1rem, 5vw, 1.1rem)',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
        },
      ],

      modalIcon: ['clamp(2rem, 5vw, 4rem)'],
      aboutMy: ['clamp(1.2rem, 5vw, 1.5rem)'],
      hamburgerNavFontSize: ['2rem'],

      serviceModalHightText: [
        'clamp(1.1rem, 5vw, 1.5rem)',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '900',
        },
      ],
    },
    extend: {
      colors: {
        navHover: '#94A3B8',
        modalBackgroundColor: 'rgba(0, 0, 0, 0.4)',
        referencesArticleBackground: 'rgb(211 211 211)',
        hamburgerMenuColor: '#fff',
        mainColor: '#94A3B8',
        subMainColor: '#8a95a6',
        basicImgBg:
          'linear-gradient(90deg, rgba(205,205,205,1) 0%, rgba(219,219,219,1) 100%)',
      },
      backgroundImage: {
        'header-article': "url('./assets/rectangel.webp')",
      },
      dropShadow: {
        headerTextShadow: '4px 4px #b8b8b8',
        secondHightTextDropShadow: '3px 3px #b8b8b8',
      },
      boxShadow: {
        HeaderButtonHover: '3px 3px #000',
        voucherShadow: '0px 0px 5px #dbd9d9',
      },
      transitionProperty: {
        boxShadow: 'box-shadow',
        top: 'top, opacity',
        color: 'color',
        tranform: 'transform',
        bgColor: 'background-color',
      },
      spacing: {
        105: '6.5625rem',
        lowGap: '1px',
      },
    },
  },
  plugins: [],
};
