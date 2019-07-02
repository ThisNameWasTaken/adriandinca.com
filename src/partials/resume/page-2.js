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
              <a href="https://www.credential.net/hoaryqia">Passed</a> Google's{' '}
              <a href="https://developers.google.com/training/certification/mobile-web-specialist/">
                mobile web specialist exam
              </a>
              , a four and a half hours test consisting in fixing layout,
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

        <div className="page__columns">
          <div className="page__column page__column--left">
            <h2 className="page__headline-2">Spoken Languages</h2>
          </div>
          <div className="page__column page__column--right">
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
                  <td style={{ width: '100%' }}>Cambridge CAE, grade B</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page2;
