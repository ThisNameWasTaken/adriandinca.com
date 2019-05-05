import React, { memo } from 'react';
import classnames from 'classnames';
import './hero.scss';

const Hero = memo(({ className, children, ...otherProps }) => (
  <div className={classnames('Hero', className)} {...otherProps}>
    {children}
  </div>
));

export default Hero;
