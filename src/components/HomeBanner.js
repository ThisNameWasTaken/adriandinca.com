import React, { Suspense, lazy } from 'react';
import Button from './material/Button';
import './HomeBanner.scss';

import SvgIdle from '../images/home-banner-idle.svg';
import SvgIdlePlants from '../images/home-banner-idle-plants.svg';

const SvgActive = lazy(() => import('../images/home-banner-active.svg'));

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner__content">
        <h1 className="home-banner__headline">
          <div>Web Development</div>
          <div>& Maintenance</div>
        </h1>

        <div>
          <Button raised href="mailto:adriandinca2008@gmail.com">
            get in touch
          </Button>
        </div>
      </div>
      <div className="home-banner__svgs">
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
