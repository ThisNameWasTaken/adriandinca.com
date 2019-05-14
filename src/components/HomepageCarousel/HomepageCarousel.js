import React, { memo } from 'react';

import Carousel from '../carousel';
import SlidePerformance from './SlidePerformance';
import SlideReliability from './SlideReliability';
import SlideAccessibility from './SlideAccessibility';

import './HomepageCarousel.scss';

const HomepageCarousel = memo(
  () => (
    <Carousel className="homepage-carousel">
      <SlidePerformance />
      <SlideReliability />
      <SlideAccessibility />
    </Carousel>
  ),
  () => true
);

export default HomepageCarousel;
