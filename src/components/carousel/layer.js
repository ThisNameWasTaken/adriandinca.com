import React, { memo } from 'react';
import classnames from 'classnames';

const Layer = memo(
  ({
    center = false,
    topLeft = false,
    topRight = false,
    bottomLeft = false,
    bottomRight = false,
    className = '',
    children,
    ...otherProps
  }) => (
    <div
      className={classnames('carousel__slide__layer', className, {
        'carousel__slide__layer--center': center,
        'carousel__slide__layer--top-left': topLeft,
        'carousel__slide__layer--top-right': topRight,
        'carousel__slide__layer--bottom-left': bottomLeft,
        'carousel__slide__layer--bottom-right': bottomRight,
      })}
      {...otherProps}
    >
      {children}
    </div>
  )
);

export default Layer;
