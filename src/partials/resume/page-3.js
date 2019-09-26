import React from 'react';
import { Body2 } from '../../components/material/Typography';

const Page3 = () => (
  <div className="page">
    <div className="page__inner">
      <div className="page__content">
        <div className="page__columns">
          <div className="page__column page__column--no-top-border page__column--left "></div>
          <div className="page__column page__column--no-top-border page__column--right">
            <Body2>
              avoid nearby obstacles and point out certain objects based on
              their needs (fatigue, coldness, thirst, etc) using a smartphone.
            </Body2>

            <h3 className="page__headline-3">ITFest</h3>
            <h4 className="page__subtitle-3">November 2018 </h4>
            <Body2>
              Won the 1<sup>st</sup> place with a team of 3 people by building a
              file sharing PWA. The contest was about building a PWA so the
              focus was on performance, reliability, offline first support and
              accessibility. Managed to score 100 across all Lighthouse's tests.
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

export default Page3;
