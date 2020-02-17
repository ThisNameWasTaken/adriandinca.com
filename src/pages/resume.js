import React, { Suspense, useEffect, useRef, lazy } from 'react';

import SEO from '../components/seo';

import { Body2 } from '../components/material/Typography';
import Spinner from '../components/material/Spinner';
import Tooltip from '../components/material/Tooltip';

import './resume.scss';
// import styles from './resume.scss';

import Location from '../images/icons/baseline-location_on-24px.svg';
import Phone from '../images/icons/baseline-phone-24px.svg';
import Email from '../images/icons/baseline-email-24px.svg';
import LinkedIn from '../images/icons/linkedin-in-brands.svg';
import Github from '../images/icons/github-brands.svg';
import Language from '../images/icons/baseline-language-24px.svg';

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

  let pageCount = 2;

  useEffect(() => {
    pageCount = rootRef.current.getElementsByClassName('page').length;

    new MutationObserver(mutations => {
      pageCount = rootRef.current.getElementsByClassName('page').length;
      resize();
    }).observe(rootRef.current, { childList: true });
  }, []);

  function resize() {
    if (!rootRect) return;

    const root = rootRef.current;
    if (!root) return;

    const scale =
      document.querySelector('main:not([aria-hidden="true"]) > div')
        .clientWidth / rootRect.width;

    if (scale >= 1) {
      root.style.transform = '';
      return;
    }

    const x = -(rootRect.width - scale * rootRect.width) / 2;
    const y = -(pageCount * (pageRect.height - scale * pageRect.height)) / 2;

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
    <>
      <SEO
        title="Resume"
        keywords={[
          'Adrian Dinca',
          'Adrian Florin Dinca',
          'Adrian',
          'Dinca',
          'Florin',
          'Adrian-Florin',
          'Mobile',
          'Web',
          'Specialist',
          'Developer',
          'JavaScript',
          'JS',
          'React',
          'Gatsby',
          'Application',
          'App',
          'Freelancer',
          'Resume',
        ]}
      />
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
                    <li>
                      <a href="https://adriandinca.com">
                        <Language aria-hidden="true" />
                        <span>https://adriandinca.com</span>
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
                  <h2 className="page__headline-2">Education and Training</h2>
                </div>
                <div className="page__column page__column--right">
                  <h3 className="page__headline-3">OSF Academy for students</h3>
                  <h4 className="page__subtitle-3">
                    February 2019 - March 2019{' '}
                    <a href="https://www.osf-global.com/">
                      OSF Global Services
                    </a>
                  </h4>
                  <Body2>
                    Built the frontend of an{' '}
                    <a href="https://thisnamewastaken.github.io/foose-shoes/">
                      e-commerce website
                    </a>{' '}
                    for selling shoes. Implemented custom GulpJS setup to handle
                    sass, ES2019 transpiling, image optimization, dynamic
                    imports and dead code removal. Improved performance by
                    inlining critical styles, using code splitting and lazy
                    loading images via intersection observers. The gulp script
                    parses the html and ensures that only needed files are
                    included in the final build.
                  </Body2>
                  <Body2>
                    At the end of the program, my mentor, Volodymyr Lysenko,
                    recommended me for a frontend developer job at OSF.
                  </Body2>

                  <h3 className="page__headline-3">
                    Mobile Web Specialist Google Developers Certification
                  </h3>
                  <h4 className="page__subtitle-3">
                    September 2018{' '}
                    <a href="https://www.linkedin.com/company/googledevelopers/about/">
                      Google Developers
                    </a>
                  </h4>
                  <Body2>
                    <a href="https://www.credential.net/hoaryqia">Passed</a>{' '}
                    Google's{' '}
                    <a href="https://developers.google.com/training/certification/mobile-web-specialist/">
                      mobile web specialist exam
                    </a>
                    , a four and a half hours test, consisting in fixing layout,
                    performance and accessibility issues and common mistakes.
                  </Body2>

                  <h3 className="page__headline-3">
                    Mobile Web Specialist Nanodegree Program
                  </h3>
                  <h4 className="page__subtitle-3">
                    March 2018 - July 2018{' '}
                    <a href="https://eu.udacity.com/">Udacity</a>
                  </h4>
                  <Body2>
                    Worked on <a href="#">a progressive web app</a> (PWA) for
                    reviewing restaurants. Fixed layout and responsiveness
                    issues. Improved load times on 3G by 80%. Fixed
                    accessibility issues. Added offline support and push
                    notifications.
                  </Body2>

                  <h3 className="page__headline-3">
                    Google Developer Challenge Scholarship
                  </h3>
                  <h4 className="page__subtitle-3">
                    November 2017 - February 2018{' '}
                    <a href="https://eu.udacity.com/">Udacity</a>
                  </h4>
                  <Body2>
                    Turned a website into a PWA, increased its user engagement
                    by adding features such as background sync and push
                    notifications. Guided other students through solving their
                    issues. Got accepted into the next stage. Built{' '}
                    <a href="https://thisnamewastaken.github.io/Jokr/">
                      my first PWA
                    </a>{' '}
                    to test my knowledge.
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
    </>
  );
};

export default Resume;
