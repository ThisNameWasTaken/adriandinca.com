import React, { memo } from 'react';
import classnames from 'classnames';

const Slide = memo(({ className = '', children, ...otherProps }) => (
  <div className={classnames('carousel__slide', className)} {...otherProps}>
    <div className="carousel__slide__inner">{children}</div>
  </div>
));

export default Slide;
