import React from 'react';
import classnames from 'classnames';
import { withRipple } from '@material/react-ripple';

import './Fab.scss';

const CSS_CLASSES = {
  ROOT: 'mdc-fab',
  ICON: 'mdc-fab__icon',
  LABEL: 'mdc-fab__label',
  MINI: 'mdc-fab--mini',
  EXTENDED: 'mdc-fab--extended',
  EXITED: 'mdc-fab--exited',
};

const Icon = ({ icon }) => {
  if (!icon) {
    return null;
  }

  const updatedProps = {
    className: classnames(CSS_CLASSES.ICON, icon.props.className),
  };

  return React.cloneElement(icon, updatedProps);
};

const TextLabel = ({ textLabel }) => {
  if (textLabel.length === 0) {
    return null;
  }

  return <span className={CSS_CLASSES.LABEL}>{textLabel}</span>;
};

export const FabBase = ({
  exited = false,
  mini = false,
  icon,
  textLabel = '',
  className = '',
  initRipple = () => {},
  unbounded, // eslint-disable-line @typescript-eslint/no-unused-vars
  ...otherProps
}) => {
  const extended = textLabel.length > 0;
  const classes = classnames(CSS_CLASSES.ROOT, className, {
    [CSS_CLASSES.MINI]: mini,
    [CSS_CLASSES.EXTENDED]: extended,
    [CSS_CLASSES.EXITED]: exited,
  });

  return (
    <button className={classes} ref={initRipple} {...otherProps}>
      <Icon icon={icon} />
      <TextLabel textLabel={textLabel} />
    </button>
  );
};

const Fab = withRipple(FabBase);

export default Fab;
