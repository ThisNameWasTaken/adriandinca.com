import React, { Suspense, lazy } from 'react';
import Button from './material/Button';
import './HomeBanner.scss';

import SvgIdle from '../images/home-banner-idle.svg';
import SvgIdlePlants from '../images/home-banner-idle-plants.svg';

const SvgActive = lazy(() => import('../images/home-banner-active.svg'));

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner__content" style={{ background: '#f43' }}>
        {/*  */}
      </div>
      <div className="home-banner__svgs" style={{ background: '#34f' }}>
        <SvgIdle className="home-banner__svg home-banner__svg--idle" />
        {typeof window !== 'undefined' && (
          <Suspense fallback={<svg viewBox="0 0 658.95 512.4" />}>
            <SvgActive className="home-banner__svg home-banner__svg--active" />
          </Suspense>
        )}
        <SvgIdlePlants className="home-banner__svg home-banner__svg--idle" />
      </div>
    </div>
  );
};

export default HomeBanner;
