'use client';
import { Skeleton } from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';
import { Thumbs, Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import './SwiperThumbs.scss';
import 'swiper/css/pagination';
import { MyImage } from '../my-image/MyImage';

const sharedSettings = {
  breakpoints: {
    769: {
      spaceBetween: 16,
    },
    526: {
      spaceBetween: 12,
    },
    0: {
      spaceBetween: 8,
    },
  },
  modules: [Thumbs, Navigation],
};

export const SwiperThumbs = ({ images }: { images: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [ready, setReady] = useState(false);

  const mainSwiperSetting = {
    ...sharedSettings,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev',
    },
    thumbs: { swiper: thumbsSwiper },
  };

  const secondSwiperSettings = {
    ...sharedSettings,
    slidesPerView: 2,
    spaceBetween: 8,
    watchSlidesProgress: true,
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      526: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      376: {
        slidesPerView: 3,
      },
    },
    onSwiper: (swiper: SwiperClass) => {
      setReady(true);
      setThumbsSwiper(swiper);
    },
  };

  return (
    <div id="swiper-thumbs-wrapper" className={clsx(!ready && 'swiper-hide')}>
      {!ready && (
        <div className="swiper-skeleton-wrapper">
          <div className="swiper-skeleton-wrapper__main">
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </div>
          <div className="swiper-skeleton-wrapper__footer">
            <Skeleton variant="rectangular" width="100%" height="100%" />
            <Skeleton variant="rectangular" width="100%" height="100%" />
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </div>
        </div>
      )}
      <Swiper id="main-swiper" {...mainSwiperSetting}>
        <button className="swiper__prev"></button>
        <button className="swiper__next"></button>
        {images.map((child, index) => (
          <SwiperSlide key={index}>
            <MyImage
              className="swiper-thumb__img"
              width={900}
              height={550}
              src={child}
              alt={`Image ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper id="second-swiper" {...secondSwiperSettings}>
        {images.map((child, index) => (
          <SwiperSlide key={index}>
            <MyImage
              className="swiper-thumb__img"
              width={300}
              height={200}
              src={child}
              alt={`Image ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
