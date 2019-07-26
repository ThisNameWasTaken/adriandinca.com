import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import Card, {
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
} from '@material/react-card';
import { withRipple } from '@material/react-ripple';

import './Card.scss';

const CSS_CLASSES = {
  ROOT: 'mdc-card',
  OUTLINED: 'mdc-card--outlined',
  PRIMARY_ACTION: 'mdc-card__primary-action',
  MEDIA: 'mdc-card__media',
  MEDIA_SQUARE: 'mdc-card__media--square',
  MEDIA_16_9: 'mdc-card__media--16-9',
  MEDIA_CONTENT: 'mdc-card__media-content',
  ACTIONS: 'mdc-card__actions',
  ACTIONS_FULL_BLEED: 'mdc-card__actions--full-bleed',
  ACTION_BUTTONS: 'mdc-card__action-buttons',
  ACTION_ICONS: 'mdc-card__action-icons',
  ACTION: 'mdc-card__action',
  ACTION_BUTTON: 'mdc-card__action--button',
  ACTION_ICON: 'mdc-card__action--icon',
};

const CardPrimaryContent = withRipple(
  ({
    className = '',
    initRipple,
    children,
    unbounded,
    href,
    download,
    ...otherProps
  }) => {
    const classes = classnames(CSS_CLASSES.PRIMARY_ACTION, className);

    const localUrl = /^\/(?!\/)/;
    if (href) {
      if (!localUrl.test(href) || download) {
        return (
          <a className={classes} href={href} ref={initRipple} {...otherProps}>
            {children}
          </a>
        );
      }

      return (
        <Link className={classes} to={href} ref={initRipple} {...otherProps}>
          {children}
        </Link>
      );
    }

    if (otherProps.onClick) {
      return (
        <button className={classes} ref={initRipple} {...otherProps}>
          {children}
        </button>
      );
    }

    return (
      <div className={classes} ref={initRipple} {...otherProps}>
        {children}
      </div>
    );
  }
);

export default Card;

export {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons,
};
