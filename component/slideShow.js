import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import slideImage1 from '@/public/images/slideImage1.jpg';
import slideImage6 from '@/public/images/slideImage6.jpg';
import slideImage7 from '@/public/images/slideImage7.jpg';
import slideImage8 from '@/public/images/slideImage8.jpg';
import slideImage9 from '@/public/images/slideImage9.jpg';
import styles from '@/styles/Home.module.scss';

const images = [
  slideImage1,
  slideImage6,
  slideImage7,
  slideImage8,
  slideImage9,
];

const Slideshow = () => {
  return (
    <div className={`slide-container  ${styles.slideShow}`}>
      <Fade>
        {images.map((image, index) => (
          <div className="each-slide" key={index}>
            <div>
              <Image
                width={1300}
                height={700}
                src={image}
                alt={`image${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
