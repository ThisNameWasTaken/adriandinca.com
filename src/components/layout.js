/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './header';
import './layout.scss';

import { TopAppBarFixedAdjust } from '@material/react-top-app-bar';

const Layout = ({ children, location }) => {
  console.log(location);
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    document.documentElement.style.overflowX = 'hidden';

    return () => (document.documentElement.style.scrollBehavior = 'auto');
  }, []);

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
                timeout={1000}
                classNames="fade"
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
