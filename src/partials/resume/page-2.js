import React from 'react';
import { Body2 } from '../../components/material/Typography';

const Page2 = () => (
  <div className="page">
    <div className="page__inner">
      <div className="page__content">
        <div className="page__columns">
          <div className="page__column page__column--no-top-border page__column--left" />
          <div className="page__column page__column--no-top-border page__column--right">
            <Body2>
              styles, using code splitting and lazy loading images via
              intersection observers. The gulp script parses the html and
              ensures that only needed files are included in the final build. At
              the end of the program, my mentor, Volodymyr Lysenko, recommended
              me for a frontend developer job at OSF.
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
              <a href="https://www.credential.net/hoaryqia">Passed</a> Google's{' '}
              <a href="https://developers.google.com/training/certification/mobile-web-specialist/">
                mobile web specialist exam
              </a>
              , a four and a half hours test consisting in fixing layout,
              performance and accessibility issues and common mistakes. The exam
              ends with a 5 minute exit interview with a few exam related
              questions to insure its integrity.
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
              reviewing restaurants. Fixed layout and responsiveness issues.
              Improved load times on 3G by 80%. Fixed accessibility issues.
              Added offline support and push notifications.
            </Body2>

            <h3 className="page__headline-3">
              Google Developer Challenge Scholarship
            </h3>
            <h4 className="page__subtitle-3">
              November 2017 - February 2018{' '}
              <a href="https://eu.udacity.com/">Udacity</a>
            </h4>
            <Body2>
              Leaned to turn a website into a PWA and the ECMAScript2017 syntax.
              Guided other students through solving their issues. Got accepted
              into the next stage. Built{' '}
              <a href="https://thisnamewastaken.github.io/Jokr/">
                my first PWA
              </a>{' '}
              to test my knowledge.
            </Body2>

            <h3 className="page__headline-3">Bachelor Degree</h3>
            <h4 className="page__subtitle-3">
              October 2017 - PRESENT{' '}
              <a href="https://unibuc.ro/?lang=en">University of Bucharest</a>
            </h4>
            <Body2>
              Student in the computer science department at the University of
              Bucharest.
            </Body2>

            <h3 className="page__headline-3">High School</h3>
            <h4 className="page__subtitle-3">
              September 2013 - July 2017{' '}
              <a href="http://zinca-golescu.ro/">CNL "Zinca Golescu"</a>
            </h4>
            <Body2>
              Studied mathematics and computer science at CNL "Zinca Golescu" in
              Pitești. Created a <a href="#">website</a> while learning the
              basics of HTML, CSS, JavaScript, PHP and SQL.
            </Body2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page2;
