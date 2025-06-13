import { ReactNode } from 'react';
import { SwiperOptions } from 'swiper/types';

export type TSwiperProps = {
  id?: string; // ID для корневого элемента
  className?: string; // Дополнительный класс
  navigation?: boolean; // Включение/выключение навигации
  children: ReactNode; // Содержимое слайдера
  settings?: SwiperOptions;
};
