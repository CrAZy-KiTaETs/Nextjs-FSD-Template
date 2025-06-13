'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import S from './PageLoader.module.scss';
import { usePageLoaderStore } from './store';

export const PageLoader = () => {
  const { isOpen, close } = usePageLoaderStore();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        close();
      }, 900);
    }
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={S.loadingWrapper}
          initial={{ opacity: 0 }} // Начальное состояние
          animate={{ opacity: 1 }} // Анимация появления
          exit={{ opacity: 0 }} // Анимация исчезновения
          transition={{ duration: 0.3, ease: 'easeInOut' }} // Настройка анимации
        >
          <div className={S.loadingWindow}>
            <div className={S.car}>
              <div className={S.strike}></div>
              <div className={`${S.strike} ${S.strike2}`}></div>
              <div className={`${S.strike} ${S.strike3}`}></div>
              <div className={`${S.strike} ${S.strike4}`}></div>
              <div className={`${S.strike} ${S.strike5}`}></div>
              <div className={`${S.carDetail} ${S.spoiler}`}></div>
              <div className={`${S.carDetail} ${S.back}`}></div>
              <div className={`${S.carDetail} ${S.center}`}></div>
              <div className={`${S.carDetail} ${S.center1}`}></div>
              <div className={`${S.carDetail} ${S.front}`}></div>
              <div className={`${S.carDetail} ${S.wheel}`}></div>
              <div className={`${S.carDetail} ${S.wheel} ${S.wheel2}`}></div>
            </div>
            <div className={S.text}>
              <span>Loading</span>
              <span className={S.dots}>...</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
