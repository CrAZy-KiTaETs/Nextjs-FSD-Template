'use client';
import { Children } from 'react';
import { Grid, Autoplay } from 'swiper/modules';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './Swiper.scss';
import type { TSwiperProps } from './Swiper.type';

const defaultSettings = {
  slidesPerView: 3,
  spaceBetween: 6,
  breakpoints: {
    1280: {
      spaceBetween: 24,
    },
    768: {
      spaceBetween: 24,
    },
    525: {
      spaceBetween: 20,
    },
    375: {
      spaceBetween: 6,
    },
  },
  modules: [Grid, Autoplay],
};

export const Swiper: React.FC<TSwiperProps> = ({ id, className, children, settings }) => {
  const swiperSettings = {
    ...defaultSettings,
    ...settings,
  };

  return (
    <ReactSwiper id={id} className={className} {...swiperSettings}>
      {Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </ReactSwiper>
  );
};
