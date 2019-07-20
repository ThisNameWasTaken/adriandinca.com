import './RouteTransitions.scss';
import sassVars from './variables.scss';

Object.keys(sassVars).forEach(key => (sassVars[key] = parseInt(sassVars[key])));

const classNameBase = `route-transition`;

const classNames = {
  base: classNameBase,
  appear: `${classNameBase}-appear`,
  appearActive: `${classNameBase}-appear-active`,
  appearDone: `${classNameBase}-appear-active-appear-done`,
  enter: `${classNameBase}-enter`,
  enterActive: `${classNameBase}-enter-active`,
  enterDone: `${classNameBase}-enter-done`,
  exit: `${classNameBase}-exit`,
  exitActive: `${classNameBase}-exit-active`,
  exitDone: `${classNameBase}-exit-done`,
};

const cssVars = {
  enterTranslateX: `--${classNames.enter}-translate-x`,
  exitTranslateX: `--${classNames.exit}-translate-x`,
};

const routeTransitions = {
  sassVars,
  cssVars,
  classNames,
  moveToLeft() {
    document.documentElement.style.setProperty(
      this.cssVars.enterTranslateX,
      '100%'
    );
    document.documentElement.style.setProperty(
      this.cssVars.exitTranslateX,
      '-100%'
    );
  },
  moveToRight() {
    document.documentElement.style.setProperty(
      this.cssVars.enterTranslateX,
      '-100%'
    );
    document.documentElement.style.setProperty(
      this.cssVars.exitTranslateX,
      '100%'
    );
  },
};

export default routeTransitions;
