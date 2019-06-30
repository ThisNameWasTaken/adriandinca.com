import React, { useEffect, useRef } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { TopAppBarFixedAdjust } from '../components/material/TopAppBar';
import { Body2 } from '../components/material/Typography';

import './resume.scss';

import Location from '../images/icons/baseline-location_on-24px.svg';
import Phone from '../images/icons/baseline-phone-24px.svg';
import Email from '../images/icons/baseline-email-24px.svg';
import LinkedIn from '../images/icons/linkedin-in-brands.svg';
import Github from '../images/icons/github-brands.svg';

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

const SecondPage = () => {
  const rootRef = useRef();
  let rootRect;

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
    const y = -(rootRect.height - scale * rootRect.height) / 2;

    root.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
  }

  useEffect(() => {
    const root = rootRef.current;
    rootRect = root.getBoundingClientRect();
    resize();
    window.addEventListener('resize', resize);
  }, []);

  return (
    <Layout>
      <TopAppBarFixedAdjust>
        <SEO title="Page two" />
        <div className="resume-wrapper">
          <div className="resume-container" ref={rootRef}>
            <div className="resume">
              <div className="resume__inner">
                <div className="resume__content">
                  <div className="resume__columns">
                    <div className="resume__column resume__column--no-top-border resume__column--left">
                      <h2 className="resume__headline-1">
                        Adrian Florin Dincă
                      </h2>
                      <h3 className="resume__subtitle-1">
                        Mobile Web Specialist
                      </h3>
                    </div>
                    <div className="resume__column resume__column--no-top-border resume__column--right">
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

                  <div className="resume__columns">
                    <div className="resume__column resume__column--left">
                      <h2 className="resume__headline-2">
                        Open Source Projects & Contributions
                      </h2>
                    </div>
                    <div className="resume__column resume__column--right">
                      <h3 className="resume__headline-3">EJS plain loader</h3>
                      <h4 className="resume__subtitle-3">
                        November 2018 - Present
                      </h4>
                      <Body2>
                        Created a Webpack plugin for loading EJS templates. It
                        also enables imports of CommonJS modules, JSON files and
                        any file formats which can be converted to a .txt (html,
                        css, csv, etc).
                      </Body2>

                      <h3 className="resume__headline-3">RellaxJS</h3>
                      <h4 className="resume__subtitle-3">
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
                        <span id="pr" title="Pull Request">
                          PR
                        </span>{' '}
                        increased performance on large DOM trees by avoiding
                        redundant DOM queries.
                      </Body2>

                      <h3 className="resume__headline-3">PurgeCSS</h3>
                      <h4 className="resume__subtitle-3">
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

                      <h3 className="resume__headline-3">EJS</h3>
                      <h4 className="resume__subtitle-3">
                        November 2018{' '}
                        <a href="https://github.com/mde/ejs/pull/411">#441</a>
                      </h4>
                      <Body2>
                        Exposed the template class in order for it to be
                        extended or overridden by other npm modules.
                      </Body2>
                    </div>
                  </div>

                  <div className="resume__columns">
                    <div className="resume__column resume__column--left">
                      <h2 className="resume__headline-2">
                        Education and Training
                      </h2>
                    </div>
                    <div className="resume__column resume__column--right">
                      <h3 className="resume__headline-3">
                        OSF Academy for students
                      </h3>
                      <h4 className="resume__subtitle-3">
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

            <div className="resume">
              <div className="resume__inner">
                <div className="resume__content">
                  <div className="resume__columns">
                    <div className="resume__column resume__column--no-top-border resume__column--left" />
                    <div className="resume__column resume__column--no-top-border resume__column--right">
                      <Body2>
                        styles, using code splitting and lazy loading images via
                        intersection observers. The gulp script parses the html
                        and ensures that only needed files are included in the
                        final build. At the end of the program, my mentor,
                        Volodymyr Lysenko, recommended me for a frontend
                        developer job at OSF.
                      </Body2>

                      <h3 className="resume__headline-3">
                        Mobile Web Specialist Google Developers Certification
                      </h3>
                      <h4 className="resume__subtitle-3">
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
                        , a four and a half hours test consisting in fixing
                        layout, performance and accessibility issues and common
                        mistakes. The exam ends with a 5 minute exit interview
                        with a few exam related questions to insure its
                        integrity.
                      </Body2>

                      <h3 className="resume__headline-3">
                        Mobile Web Specialist Nanodegree Program
                      </h3>
                      <h4 className="resume__subtitle-3">
                        March 2018 - July 2018{' '}
                        <a href="https://eu.udacity.com/">Udacity</a>
                      </h4>
                      <Body2>
                        Worked on <a href="#">a progressive web app</a> (PWA)
                        for reviewing restaurants. Fixed layout and
                        responsiveness issues. Improved load times on 3G by 80%.
                        Fixed accessibility issues. Added offline support and
                        push notifications.
                      </Body2>

                      <h3 className="resume__headline-3">
                        Google Developer Challenge Scholarship
                      </h3>
                      <h4 className="resume__subtitle-3">
                        November 2017 - February 2018{' '}
                        <a href="https://eu.udacity.com/">Udacity</a>
                      </h4>
                      <Body2>
                        Leaned to turn a website into a PWA and the
                        ECMAScript2017 syntax. Guided other students through
                        solving their issues. Got accepted into the next stage.
                        Built{' '}
                        <a href="https://thisnamewastaken.github.io/Jokr/">
                          my first PWA
                        </a>{' '}
                        to test my knowledge.
                      </Body2>

                      <h3 className="resume__headline-3">Bachelor Degree</h3>
                      <h4 className="resume__subtitle-3">
                        October 2017 - PRESENT{' '}
                        <a href="https://unibuc.ro/?lang=en">
                          University of Bucharest
                        </a>
                      </h4>
                      <Body2>
                        Student in the computer science department at the
                        University of Bucharest.
                      </Body2>

                      <h3 className="resume__headline-3">High School</h3>
                      <h4 className="resume__subtitle-3">
                        September 2013 - July 2017{' '}
                        <a href="http://zinca-golescu.ro/">
                          CNL "Zinca Golescu"
                        </a>
                      </h4>
                      <Body2>
                        Studied mathematics and computer science at CNL "Zinca
                        Golescu" in Pitești. Created a <a href="#">website</a>{' '}
                        while learning the basics of HTML, CSS, JavaScript, PHP
                        and SQL.
                      </Body2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume">
              <div className="resume__inner">
                <div className="resume__content">
                  <div className="resume__columns">
                    <div className="resume__column resume__column--left">
                      <h2 className="resume__headline-2">Spoken Languages</h2>
                    </div>
                    <div className="resume__column resume__column--right">
                      <table id="spoken-languages">
                        <thead>
                          <tr>
                            <th style={{ width: '35%' }}>Understanding</th>
                            <th style={{ width: '48%' }}>Speaking</th>
                            <th style={{ width: '17%' }}>Writing</th>
                          </tr>
                          <tr>
                            <th style={{ width: '17.5%' }}>Listening</th>
                            <th style={{ width: '17.5%' }}>Reading</th>
                            <th style={{ width: '24%' }}>Spoken Interaction</th>
                            <th style={{ width: '24%' }}>Spoken Production</th>
                            <th style={{ width: '17%' }} />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>English</th>
                            <td style={{ width: '17.5%' }}>C2</td>
                            <td style={{ width: '17.5%' }}>C2</td>
                            <td style={{ width: '24%' }}>C2</td>
                            <td style={{ width: '24%' }}>C2</td>
                            <td style={{ width: '17%' }}>C2</td>
                          </tr>
                          <tr>
                            <th>Romanian</th>
                            <td style={{ width: '17.5%' }}>C1</td>
                            <td style={{ width: '17.5%' }}>C1</td>
                            <td style={{ width: '24%' }}>C1</td>
                            <td style={{ width: '24%' }}>C1</td>
                            <td style={{ width: '17%' }}>C1</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td style={{ width: '100%' }}>
                              Cambridge CAE, grade B
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>

                  <div className="resume__columns">
                    <div className="resume__column resume__column--left">
                      <h2 className="resume__headline-2">Hackathons</h2>
                    </div>
                    <div className="resume__column resume__column--right">
                      <h3 className="resume__headline-3">MS.Hack</h3>
                      <h4 className="resume__subtitle-3">May 2019</h4>
                      <Body2>
                        Won the 2<sup>nd</sup> place with a team of 3 people by
                        building a PWA using Microsoft's Azure Cognitive
                        Services. The app was aimed at visually impaired people
                        and it's main goal was to help them avoid nearby
                        obstacles and point out certain objects based on their
                        needs (fatigue, coldness, thirst, etc) using a
                        smartphone.
                      </Body2>

                      <h3 className="resume__headline-3">ITFest</h3>
                      <h4 className="resume__subtitle-3">November 2018 </h4>
                      <Body2>
                        Won the 1<sup>st</sup> place with a team of 3 people by
                        building a file sharing PWA. The contest was about
                        building a PWA so the focus was on performance,
                        reliability, offline first support and accessibility.
                        Managed to score 100 across all Lighthouse's tests.
                      </Body2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TopAppBarFixedAdjust>
    </Layout>
  );
};

export default SecondPage;
