import React from 'react';
import { Image } from 'react-bootstrap';

import carouselRightArrow from '../../assets/carouselRightArrow.svg';
import leftCarouselArrow from '../../assets/leftCarouselArrow.svg';

//import './style.css';

export const SliderNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <Image
      className={className}
      onClick={onClick}
      src={carouselRightArrow}
      style={{  height: '30px', width: '30px', marginRight: '-10px' }}
    />
  );
};

export const SliderPrevArrow = (props) => {
  const { className,  onClick } = props;
  return (
    <Image
      className={className}
      onClick={onClick}
      src={leftCarouselArrow}
      style={{  height: '30px', width: '30px', marginLeft: '-20px', display: 'block' }}
    />
  );
};
