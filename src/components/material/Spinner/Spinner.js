import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import './Spinner.scss';

const Spinner = ({
  className = '',
  active = true,
  singleColor = false,
  ...otherProps
}) => {
  const [isUpgraded, setIsUpgraded] = useState(false);

  useEffect(() => {
    setIsUpgraded(true);
  }, []);

  return (
    <div
      className={classnames(Spinner._cssClasses.SPINNER, {
        [Spinner._cssClasses.IS_SINGLE_COLOR]: singleColor,
        [Spinner._cssClasses.IS_ACTIVE]: active,
        [Spinner._cssClasses.IS_UPGRADED]: isUpgraded,
      })}
      {...otherProps}
    >
      {Spinner._layers.map(layer => (
        <div
          className={`${Spinner._cssClasses.LAYER} ${
            Spinner._cssClasses.LAYER
          }-${layer}`}
          key={layer}
        >
          <div
            className={
              Spinner._cssClasses.CIRCLE_CLIPPER +
              ' ' +
              Spinner._cssClasses.LEFT
            }
          >
            <div className={Spinner._cssClasses.CIRCLE} />
          </div>
          <div className={Spinner._cssClasses.GAP_PATCH}>
            <div className={Spinner._cssClasses.CIRCLE} />
          </div>
          <div
            className={
              Spinner._cssClasses.CIRCLE_CLIPPER +
              ' ' +
              Spinner._cssClasses.RIGHT
            }
          >
            <div className={Spinner._cssClasses.CIRCLE} />
          </div>
        </div>
      ))}
    </div>
  );
};

Spinner._cssClasses = {
  SPINNER: 'mdc-spinner',
  IS_ACTIVE: 'mdc-spinner--active',
  IS_UPGRADED: 'mdc-spinner--upgraded',
  IS_SINGLE_COLOR: 'mdc-spinner--single-color',
  LAYER: 'mdc-spinner__layer',
  CIRCLE_CLIPPER: 'mdc-spinner__circle-clipper',
  CIRCLE: 'mdc-spinner__circle',
  GAP_PATCH: 'mdc-spinner__gap-patch',
  LEFT: 'mdc-spinner__left',
  RIGHT: 'mdc-spinner__right',
};

Spinner._layers = [1, 2, 3, 4];

export default Spinner;
