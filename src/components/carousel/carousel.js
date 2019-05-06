import React, { memo } from 'react';
import classnames from 'classnames';
import Slide from './slide';
import Layer from './layer';
import './carousel.scss';

const Carousel = memo(({ className = '', children, ...otherProps }) => (
  <div className={classnames('carousel', className)} {...otherProps}>
    <div className="carousel__inner">{children}</div>
  </div>
));

export default Carousel;

export { Slide, Layer };
