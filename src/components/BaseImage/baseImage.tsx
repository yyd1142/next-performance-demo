import React, { FC } from 'react';
import Image from 'next/image';

interface BaseImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality?: number;
}

const BaseImage: FC<BaseImageProps> = ({ src, alt, width, height, quality = 75 }) => {
  const imageLoader = ({ src }: any) => {
    const image = { url: `${src}@` };
    image.url += `${width}w_`;
    image.url += `${height}h_`;
    image.url += `${quality}q${'.webp'}`;
    return image.url;
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      loader={imageLoader}
    />
  );
};

export default BaseImage;
