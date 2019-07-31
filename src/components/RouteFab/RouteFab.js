import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Fab from '../material/Fab';
import Tooltip from '../material/Tooltip';

import './RouteFab.scss';
import routeTransitions from '../RouteTransitions';

const projectFab = {
  id: 'visit-website-fab',
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>
  ),
  label: 'visit website',
  tooltip: 'visit website',
};

const fabs = [
  {
    id: 'download-resume-fab',
    href: '/Adrian-Florin-Dinca-Resume.pdf',
    download: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
      </svg>
    ),
    label: 'download resume',
    tooltip: 'Download PDF',
    pathname: '/resume',
  },
  {
    ...projectFab,
    href: 'https://marketplace.visualstudio.com/items?itemName=ThisNameWasTaken.one-moon',
    pathname: '/projects/one-moon',
  },
  {
    ...projectFab,
    href: 'https://thisnamewastaken.github.io/foose-shoes',
    pathname: '/projects/foose-shoes',
  },
  {
    ...projectFab,
    href: 'https://www.npmjs.com/package/ejs-plain-loader',
    pathname: '/projects/ejs-plain-loader',
  },
  {
    ...projectFab,
    href: 'https://thisnamewastaken.github.io/Jokr/',
    pathname: '/projects/jokr',
  },
  {
    ...projectFab,
    href: 'https://thisnamewastaken.github.io/mws-restaurant-stage-1',
    pathname: '/projects/restaurant-reviews',
  },
  {
    ...projectFab,
    href: 'https://thisnamewastaken.github.io/drone-zone',
    pathname: '/projects/drone-zone',
  },
];

const getFab = location => {
  const fab = fabs.find(fab => location.pathname.startsWith(fab.pathname));

  if (!fab) return null;

  const { label, tooltip, pathname, ...fabProps } = fab;

  return (
    <>
      <Fab className="route-fab" aria-label={fab.label} {...fabProps} />
      <Tooltip htmlFor={fab.id}>{fab.tooltip}</Tooltip>
    </>
  );
};

const RouteFabBase = ({ location, ...otherProps }) => {
  const [fab, setFab] = useState(getFab(location));

  useEffect(() => {
    setFab(getFab(location));
  }, [location]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="route-fab-route-transition"
        timeout={routeTransitions.sassVars.routeTransitionDuration}
      >
        <div {...otherProps}>{fab}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouteFabBase;
