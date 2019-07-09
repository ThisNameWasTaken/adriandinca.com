import React, { Suspense, lazy } from 'react';
import './HomeBanner.scss';

import SvgIdle from '../images/home-banner-idle.svg';
import SvgIdlePlants from '../images/home-banner-idle-plants.svg';

const SvgActive = lazy(() => import('../images/home-banner-active.svg'));

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <SvgIdle className="home-banner-svg home-banner-svg--idle" />

      {typeof window !== 'undefined' && (
        <Suspense fallback={<svg viewBox="0 0 658.95 512.4" />}>
          <SvgActive className="home-banner-svg home-banner-svg--active" />
        </Suspense>
      )}
      <SvgIdlePlants className="home-banner-svg home-banner-svg--idle" />
    </div>
  );
};

export default HomeBanner;
