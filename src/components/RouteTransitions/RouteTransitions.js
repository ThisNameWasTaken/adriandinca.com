import './RouteTransitions.scss';
import sassVars from './variables.scss';

Object.keys(sassVars).forEach(key => (sassVars[key] = parseInt(sassVars[key])));

const classNameBase = `route-transition`;

const routeTransitions = {
  sassVars,
  classNames: {
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
  },
};

export default routeTransitions;
