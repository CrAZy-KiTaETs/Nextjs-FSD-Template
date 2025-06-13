'use client';
import { Skeleton } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import S from './MyImage.module.scss';
import { MyImageProps } from './MyImage.types';

export const MyImage = (props: MyImageProps) => {
  const { className, width, height, ...imgAttr } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={clsx(S.imgWrapper, className)} style={{ width: width, height: height }}>
      {!isLoaded && <Skeleton variant="rectangular" width="100%" height="100%" />}
      <Image
        {...imgAttr}
        alt={imgAttr.alt || ''}
        objectFit="cover"
        fill
        onLoadingComplete={handleLoad}
      />
    </div>
  );
};
