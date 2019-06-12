import React, { useEffect, useRef } from 'react';
import './Tooltip.scss';

/**
 * @param {{
 * children: React.ReactNode,
 * htmlFor: string,
 * top?: boolean,
 * left?: boolean,
 * bottom?: boolean,
 * right?: boolean,
 * }} param
 */
const Tooltip = ({
  children,
  htmlFor,
  top = false,
  left = false,
  right = false,
  bottom = true,
  ...otherProps
}) => {
  const rootRef = useRef();

  const displayTooltip = event => {
    const root = rootRef.current;

    if (!root) return;

    const anchorRect = event.target.getBoundingClientRect();

    let x = anchorRect.x + anchorRect.width / 2;
    const y = anchorRect.y + anchorRect.height / 2;

    const rootWidth = root.offsetWidth;
    const rootHeight = root.offsetHeight;

    const marginLeft = -1 * (rootWidth / 2);
    const marginTop = -1 * (rootHeight / 2);

    const isHorizontal = left || right;
    const isVertical = !isHorizontal;

    const isTop =
      isVertical &&
      (top || anchorRect.bottom + rootHeight + 10 > window.innerHeight);

    const isBottom =
      isVertical && (bottom || anchorRect.top - rootHeight - 10 < 0);

    const isLeft =
      isHorizontal &&
      (left || anchorRect.right + rootWidth + 10 > window.innerWidth);

    const isRight =
      isHorizontal && (right || anchorRect.left - rootWidth - 10 < 0);

    if (isLeft || isRight) {
      x = anchorRect.width / 2;
      if (y + marginTop < 0) {
        root.style.top = '0';
        root.style.marginTop = '0';
      } else {
        root.style.top = `${y}px`;
        root.style.marginTop = `${marginTop}px`;
      }
    } else if (isTop || isBottom) {
      if (x + marginLeft < 0) {
        root.style.left = '0';
        root.style.marginLeft = '0';
      } else {
        root.style.left = `${x}px`;
        root.style.marginLeft = `${marginLeft}px`;
      }
    }

    if (isVertical) {
      if (isTop && !top) {
        // It has to be at the top, otherwise it would not be in the viewport
        root.style.top = `${anchorRect.top - rootHeight - 10}px`;
      } else if (isBottom && !bottom) {
        // It has to be at the bottom, otherwise it would not be in the viewport
        root.style.top = `${anchorRect.top + anchorRect.height + 10}px`;
      } else if (top) {
        root.style.top = `${anchorRect.top - rootHeight - 10}px`;
      } else if (bottom) {
        root.style.top = `${anchorRect.top + anchorRect.height + 10}px`;
      }
    } else {
      if (isLeft && !left) {
        // It has to be to the left, otherwise it would not be in the viewport
        root.style.left = `${anchorRect.left - rootWidth - 10}px`;
      } else if (isRight && !right) {
        // It has to be to the right, otherwise it would not be in the viewport
        root.style.left = `${anchorRect.left + anchorRect.width + 10}px`;
      } else if (left) {
        root.style.left = `${anchorRect.left - rootWidth - 10}px`;
      } else {
        root.style.left = `${anchorRect.left + anchorRect.width + 10}px`;
      }
    }

    root.classList.add(Tooltip._cssClasses.IS_ACTIVE);
  };

  const hideTooltip = () => {
    const root = rootRef.current;
    if (!root) return;
    root.classList.remove(Tooltip._cssClasses.IS_ACTIVE);
  };

  useEffect(() => {
    const anchor = document.getElementById(htmlFor);

    if (!anchor) {
      console.error(`could not find an element with the id '${htmlFor}'`);
      return;
    }

    // Prevent accidental text selection on Android
    if (!anchor.hasAttribute('tabindex')) {
      anchor.setAttribute('tabindex', '0');
    }

    anchor.addEventListener('mouseenter', displayTooltip, false);

    anchor.addEventListener('touchend', displayTooltip, false);

    anchor.addEventListener(
      'keyup',
      event => event.key === 'Tab' && displayTooltip(event),
      false
    );

    anchor.addEventListener('blur', hideTooltip, false);

    anchor.addEventListener('mouseleave', hideTooltip, false);

    window.addEventListener('scroll', hideTooltip, true);

    window.addEventListener('touchstart', hideTooltip);
  }, []);

  return (
    <div
      className="mdc-tooltip"
      role="tooltip"
      htmlFor={htmlFor}
      aria-labelledby={htmlFor}
      ref={rootRef}
      {...otherProps}
    >
      {children}
    </div>
  );
};

/**
 * @enum {string}
 * @private
 */
Tooltip._cssClasses = {
  IS_ACTIVE: 'mdc-tooltip--active',
  BOTTOM: 'mdc-tooltip--bottom',
  LEFT: 'mdc-tooltip--left',
  RIGHT: 'mdc-tooltip--right',
  TOP: 'mdc-tooltip--top',
};

export default Tooltip;
