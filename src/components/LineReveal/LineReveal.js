import React from 'react';
import './LineReveal.scss';

const LineReveal = ({ children, className = '' }) => (
  <>
    <div className="line-reveal__line" />
    <div className={`line-reveal__placeholder ${className}`}>{children}</div>
    <div className="line-reveal__mask">
      <div className={`line-reveal__inner-mask ${className}`}>{children}</div>
    </div>
  </>
);

export default LineReveal;
