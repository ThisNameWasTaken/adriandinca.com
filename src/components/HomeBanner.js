import React, { useRef, useEffect } from 'react';
import './HomeBanner.scss';

import SvgActive from '../images/home-banner-active.svg';
import SvgIdle from '../images/home-banner-idle.svg';
import SvgIdlePlants from '../images/home-banner-idle-plants.svg';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <SvgIdle className="home-banner-svg home-banner-svg--idle" />
      <SvgActive className="home-banner-svg home-banner-svg--active" />
      <SvgIdlePlants className="home-banner-svg home-banner-svg--idle" />
    </div>
  );
};

export default HomeBanner;
