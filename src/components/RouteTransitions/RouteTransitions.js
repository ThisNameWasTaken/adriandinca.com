import './RouteTransitions.scss';
import sassVars from './variables.scss';

Object.keys(sassVars).forEach(key => (sassVars[key] = parseInt(sassVars[key])));

const routeTransitions = {
  sassVars,
};

export default routeTransitions;
