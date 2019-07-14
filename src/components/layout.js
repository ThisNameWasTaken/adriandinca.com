/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect, useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';

import Header from './header';
import './layout.scss';

const Layout = ({ children, location }) => {
  const [lastLocation, setLastLocation] = useState(location);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';

    window.addEventListener('scroll', event => {
      console.log('scroll');

      document.documentElement.style.setProperty(
        '--fade-exit-scroll',
        `-${window.lastScrollY}px`
      );

      if (window.scrollY > 0) {
        window.lastScrollY = window.scrollY;
      }
    });

    return () => (document.documentElement.style.scrollBehavior = 'auto');
  }, []);

  useEffect(() => {
    if (lastLocation.pathname !== location.pathname) {
      setTimeout(() => (window.lastScrollY = 0), 3000);
    }

    setLastLocation(location);
  }, [location]);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <TopAppBarFixedAdjust>
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={3000}
              >
                {children}
              </CSSTransition>
            </TransitionGroup>
          </TopAppBarFixedAdjust>
        </>
      )}
    />
  );
};

export default Layout;
