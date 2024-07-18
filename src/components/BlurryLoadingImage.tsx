import React, { useEffect, useState } from 'react';

type BlurryLoadingImageType = {
  preview: string;
  image: string;
  alt: string;
  imageStyleClass?: string;
  divStyleClass?: string;
  bgColor?: string;
};

const BlurryLoadingImage = ({
  preview,
  image,
  alt,
  imageStyleClass,
  divStyleClass,
  bgColor = 'transparent',
}: BlurryLoadingImageType) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);
  console.log('current Img', currentImage);

  const fetchImage = (src: string) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, []);

  return (
    <div className={divStyleClass} style={{ overflow: 'hidden' }}>
      <img
        style={{
          filter: `${loading ? 'blur(20px)' : ''}`,
          transition: '1s filter linear',
          width: '100%',
          height: `${loading ? '100dvh' : '100%'}`,
          background: bgColor,
        }}
        src={currentImage}
        alt={alt}
        className={imageStyleClass}
      />
    </div>
  );
};

export default BlurryLoadingImage;
