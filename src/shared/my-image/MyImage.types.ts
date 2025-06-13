import { ImageProps, StaticImageData } from 'next/image';

export type MyImageProps = Omit<ImageProps, 'src'> & {
  src: string | StaticImageData;
};
