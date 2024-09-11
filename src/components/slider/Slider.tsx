import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import styles from "./slider.module.css";

export type SlideType = {
  title: string;
  text: string;
  img: string;
};

type Props = {
  slides: SlideType[];
};

function Slider({ slides }: Props) {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const timerId = useRef<number | null>(null);
  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    timerId.current = window.setInterval(() => {
      const nextIndex = (activeSlide + 1) % slides.length;
      setActiveSlide(nextIndex);
    }, 5000);

    return () => {
      if (timerId.current !== null) {
        clearInterval(timerId.current);
      }
    };
  }, [activeSlide, slides.length]);

  return (
    <div className={styles.sliderWrapper}>
      {slides.map((slide, index) => {
        if (activeSlide === index) {
          return (
            <div key={index} className={styles.slideWrap}>
              <img
                src={slide.img}
                alt={slide.title}
                className={styles.sliderImg}
              />
              <h3 className={styles.sliderTitle}>{slide.title}</h3>
              <p className={styles.sliderText}>{slide.text}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className={styles.sliderDotsWrap}>
        {slides.map((_, index) => {
          return (
            <span
              key={index}
              onClick={() => handleSlideChange(index)}
              className={cn(styles.sliderDot, {
                [styles.active]: activeSlide === index,
              })}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
