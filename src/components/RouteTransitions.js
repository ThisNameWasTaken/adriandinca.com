const ROUTE_TRANSITIONS = {
  DIRECTIONS: {
    TO_LEFT: -1,
    TO_RIGHT: 1,
  },
  CSS_VARS: {
    CURRENT_DURATION: '--route-transition-current-duration',
    DIRECTION: '--route-transition-direction',
    EXIT_SCROLL: '--route-transition-scroll',
    ENTER_SCROLL: '--route-transition-enter-scroll',
    ENTER_FIXED_ELEMENT_TOP_OFFSET:
      '--route-transition-enter-fixed-element-top-offset',
    ENTER_FIXED_ELEMENT_BOTTOM_OFFSET:
      '--route-transition-enter-fixed-element-bottom-offset',
    EXIT_FIXED_ELEMENT_TOP_OFFSET:
      '--route-transition-exit-fixed-element-top-offset',
    EXIT_FIXED_ELEMENT_BOTTOM_OFFSET:
      '--route-transition-exit-fixed-element-bottom-offset',
  },
};

export default ROUTE_TRANSITIONS;
