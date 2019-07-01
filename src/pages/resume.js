import React, { Suspense, useEffect, useRef, lazy } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { TopAppBarFixedAdjust } from '../components/material/TopAppBar';
import { Body2 } from '../components/material/Typography';
import Spinner from '../components/material/Spinner';

import './resume.scss';

import Location from '../images/icons/baseline-location_on-24px.svg';
import Phone from '../images/icons/baseline-phone-24px.svg';
import Email from '../images/icons/baseline-email-24px.svg';
import LinkedIn from '../images/icons/linkedin-in-brands.svg';
import Github from '../images/icons/github-brands.svg';
import Tooltip from '../components/material/Tooltip';

const Page2 = lazy(() => import('../partials/resume/page-2'));
const Page3 = lazy(() => import('../partials/resume/page-3'));

/**
 * @param {{
 * items: Array<{key: string, value: string}>
 * otherProps: React.Props
 * }} param0
 */
const GenericInfo = ({ items, ...otherProps }) => (
  <Body2 tag="ul" id="generic-info" {...otherProps}>
    {items.map(({ key, value }, index) => (
      <li key={key}>
        {key} <span className="text--primary">{value}</span>
        {index !== items.length - 1 && (
          <span className="separator" aria-hidden="true">
            |
          </span>
        )}
      </li>
    ))}
  </Body2>
);

const LoadingPage = (
  <div className="page">
    <div className="page__inner">
      <Spinner singleColor style={{ margin: 'auto' }} />
    </div>
  </div>
);

const Resume = () => {
  const rootRef = useRef();
  let rootRect;

  const pageRef = useRef();
  let pageRect;

  function resize() {
    if (!rootRect) return;

    const root = rootRef.current;
    if (!root) return;

    const scale = window.innerWidth / rootRect.width;

    if (scale >= 1) {
      root.style.transform = '';
      return;
    }

    const x = -(rootRect.width - scale * rootRect.width) / 2;
    const y =
      -(
        rootRect.height -
        scale * rootRect.height +
        pageRect.height -
        scale * pageRect.height
      ) / 2;

    root.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
  }

  useEffect(() => {
    const root = rootRef.current;
    rootRect = root.getBoundingClientRect();

    const page = pageRef.current;
    pageRect = page.getBoundingClientRect();

    resize();
    window.addEventListener('resize', resize);
  }, []);

  return (
    <Layout>
      <TopAppBarFixedAdjust>
        <SEO title="Page two" />
        <div className="resume-background" />
        <div className="resume" ref={rootRef}>
          <div className="page" ref={pageRef}>
            <div className="page__inner">
              <div className="page__content">
                <div className="page__columns">
                  <div className="page__column page__column--no-top-border page__column--left">
                    <h2 className="page__headline-1">Adrian Florin Dincă</h2>
                    <h3 className="page__subtitle-1">Mobile Web Specialist</h3>
                  </div>
                  <div className="page__column page__column--no-top-border page__column--right">
                    <ul id="contact-info">
                      <li>
                        <a href="https://www.google.com/maps/place/Strada+Gheorghe+%C8%9Ai%C8%9Beica,+Pite%C8%99ti/@44.8812152,24.831481,17z/data=!3m1!4b1!4m5!3m4!1s0x40b2bbb19af8ecd5:0x1cef63c02419aa1c!8m2!3d44.8812152!4d24.8336697">
                          <Location aria-hidden="true" />
                          <span>
                            Flat 11/B, Gheorghe Titeica Street, Pitesti, Arges
                            County 110329
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="tel:+40725437838">
                          <Phone aria-hidden="true" />
                          <span>(+40) 725 437 838</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:adriandinca2008@gmail.com">
                          <Email aria-hidden="true" />
                          <span>adriandinca2008@gmail.com</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/adrian-dinca-427401159">
                          <LinkedIn aria-hidden="true" />
                          <span>
                            https://www.linkedin.com/in/adrian-dinca-427401159
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/thisNameWasTaken/">
                          <Github aria-hidden="true" />
                          <span>https://github.com/thisNameWasTaken/</span>
                        </a>
                      </li>
                    </ul>

                    <GenericInfo
                      items={[
                        { key: 'Sex', value: 'Male' },
                        { key: 'Date of birth', value: '12-07-1998' },
                        { key: 'Nationality', value: 'Romanian' },
                      ]}
                    />
                  </div>
                </div>

                <div className="page__columns">
                  <div className="page__column page__column--left">
                    <h2 className="page__headline-2">
                      Open Source Projects & Contributions
                    </h2>
                  </div>
                  <div className="page__column page__column--right">
                    <h3 className="page__headline-3">EJS plain loader</h3>
                    <h4 className="page__subtitle-3">
                      November 2018 - Present
                    </h4>
                    <Body2>
                      Created a Webpack plugin for loading EJS templates. It
                      also enables imports of CommonJS modules, JSON files and
                      any file formats which can be converted to a .txt (html,
                      css, csv, etc).
                    </Body2>

                    <h3 className="page__headline-3">RellaxJS</h3>
                    <h4 className="page__subtitle-3">
                      March 2019{' '}
                      <a href="https://github.com/dixonandmoe/rellax/pull/160">
                        #160
                      </a>
                    </h4>
                    <Body2>
                      Made a pull request to close issue{' '}
                      <a href="https://github.com/dixonandmoe/rellax/issues/159">
                        #159
                      </a>{' '}
                      which enabled sharing nodes and node lists. The{' '}
                      <span id="pr">PR</span> increased performance on large DOM
                      trees by avoiding redundant DOM queries.
                    </Body2>

                    <Tooltip htmlFor="pr">Pull Request</Tooltip>

                    <h3 className="page__headline-3">PurgeCSS</h3>
                    <h4 className="page__subtitle-3">
                      January 2019{' '}
                      <a href="https://github.com/FullHuman/purgecss/pull/167">
                        #167
                      </a>
                    </h4>
                    <Body2>
                      Fixed{' '}
                      <a href="https://github.com/FullHuman/purgecss/issues/166">
                        a self discovered bug
                      </a>{' '}
                      which would remove all but the first keyframe when using
                      animations with multiple keyframes.
                    </Body2>

                    <h3 className="page__headline-3">EJS</h3>
                    <h4 className="page__subtitle-3">
                      November 2018{' '}
                      <a href="https://github.com/mde/ejs/pull/411">#441</a>
                    </h4>
                    <Body2>
                      Exposed the template class in order for it to be extended
                      or overridden by other npm modules.
                    </Body2>
                  </div>
                </div>

                <div className="page__columns">
                  <div className="page__column page__column--left">
                    <h2 className="page__headline-2">Education and Training</h2>
                  </div>
                  <div className="page__column page__column--right">
                    <h3 className="page__headline-3">
                      OSF Academy for students
                    </h3>
                    <h4 className="page__subtitle-3">
                      February 2018 - March 2018{' '}
                      <a href="https://www.osf-global.com/">OSF</a>
                    </h4>
                    <Body2>
                      Built the frontend of an{' '}
                      <a href="https://thisnamewastaken.github.io/foose-shoes/">
                        e-commerce website
                      </a>{' '}
                      for selling shoes. Implemented custom GulpJS setup which
                      handled sass and ES2018 transpiling, image optimization,
                      dynamic imports, and dead code removal. Improved
                      performance by inlining critical
                    </Body2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {typeof window !== 'undefined' && (
            <Suspense fallback={LoadingPage}>
              <Page2 />
              <Page3 />
            </Suspense>
          )}
        </div>
      </TopAppBarFixedAdjust>
    </Layout>
  );
};

export default Resume;
