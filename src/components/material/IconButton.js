import React, { Component } from 'react';
import classnames from 'classnames';
import { withRipple } from '@material/react-ripple';
import { MDCIconButtonToggleFoundation } from '@material/icon-button/foundation';

import { Link } from 'gatsby';

import '@material/react-icon-button/index.scss';

const ARIA_PRESSED = 'aria-pressed';

class IconButtonBase extends Component {
  foundation;

  constructor(props) {
    super(props);

    this.state = {
      classList: new Set(),
      [ARIA_PRESSED]: props[ARIA_PRESSED],
    };
  }

  static defaultProps = {
    className: '',
    handleChange: () => {},
    initRipple: () => {},
    onClick: () => {},
    unbounded: true,
  };

  componentDidMount() {
    this.foundation = new MDCIconButtonToggleFoundation(this.adapter);
    this.foundation.init();
  }

  get classes() {
    const { classList } = this.state;
    const { className } = this.props;
    return classnames('mdc-icon-button', Array.from(classList), className);
  }

  get adapter() {
    return {
      addClass: className =>
        this.setState({ classList: this.state.classList.add(className) }),
      removeClass: className => {
        const { classList } = this.state;
        classList.delete(className);
        this.setState({ classList });
      },
      hasClass: className => this.classes.split(' ').includes(className),
      setAttr: this.updateState,
      notifyChange: this.props.handleChange,
    };
  }

  updateState = (key, value) => {
    this.setState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  handleClick_ = e => {
    this.props.onClick && this.props.onClick(e);
    this.foundation.handleClick();
  };

  render() {
    const {
      children,
      initRipple,
      href,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      className,
      handleChange,
      onClick,
      unbounded,
      download,
      [ARIA_PRESSED]: ariaPressed,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...otherProps
    } = this.props;

    const props = {
      className: this.classes,
      ref: initRipple,
      [ARIA_PRESSED]: this.state[ARIA_PRESSED],
      onClick: this.handleClick_,
      download,
      ...otherProps,
    };
    if (href) {
      const localUrl = /^\/(?!\/)/;
      if (!localUrl.test(href) || download) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      }
      return (
        <Link to={href} {...props}>
          {children}
        </Link>
      );
    }
    return <button {...props}>{children}</button>;
  }
}

const IconButton = withRipple(IconButtonBase);

export default IconButton;
