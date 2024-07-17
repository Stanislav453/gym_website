import React from 'react';

export const Location = (link: string, title: string, src: string) => {
  return (
    <div>
      <h2>{title}</h2>
      <button>
        <a href={link}>
          <img src={src} alt='map' />
        </a>
      </button>
    </div>
  );
};
