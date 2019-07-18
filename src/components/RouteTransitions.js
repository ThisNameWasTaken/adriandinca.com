const ROUTE_TRANSITIONS = {
  DIRECTIONS: {
    TO_LEFT: -1,
    TO_RIGHT: 1,
  },
  CSS_VARS: {
    CURRENT_DURATION: '--current-route-transition-duration',
    DIRECTION: '--route-transition-direction',
    SCROLL: '--route-transition-scroll',
    ENTER_SCROLL: '--route-transition-enter-scroll',
    ENTER_FIXED_ELEMENT_OFFSET: '--route-transition-enter-fixed-element-offset',
    EXIT_FIXED_ELEMENT_OFFSET: '--route-transition-exit-fixed-element-offset',
  },
};

export default ROUTE_TRANSITIONS;
