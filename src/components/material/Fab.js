import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
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
  href = undefined,
  download = undefined,
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

  const localUrl = /^\/(?!\/)/;
  if (href) {
    if (!localUrl.test(href) || download) {
      return (
        <a
          className={classes}
          ref={initRipple}
          href={href}
          download={download}
          {...otherProps}
        >
          <Icon icon={icon} />
          <TextLabel textLabel={textLabel} />
        </a>
      );
    }

    return (
      <Link className={classes} ref={initRipple} to={href} {...otherProps}>
        <Icon icon={icon} />
        <TextLabel textLabel={textLabel} />
      </Link>
    );
  }

  return (
    <button className={classes} ref={initRipple} {...otherProps}>
      <Icon icon={icon} />
      <TextLabel textLabel={textLabel} />
    </button>
  );
};

const Fab = withRipple(FabBase);

export default Fab;
