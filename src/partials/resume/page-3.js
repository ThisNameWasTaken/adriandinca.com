import React from 'react';
import { Body2 } from '../../components/material/Typography';

const Page3 = () => (
  <div className="page">
    <div className="page__inner">
      <div className="page__content">
        <div className="page__columns">
          <div className="page__column page__column--left">
            <h2 className="page__headline-2">Hackathons</h2>
          </div>
          <div className="page__column page__column--right">
            <h3 className="page__headline-3">MS.Hack</h3>
            <h4 className="page__subtitle-3">May 2019</h4>
            <Body2>
              Won the 2<sup>nd</sup> place with a team of 3 people by building a
              PWA using Microsoft's Azure Cognitive Services. The app was aimed
              at visually impaired people and it's main goal was to help them
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
      </div>
    </div>
  </div>
);

export default Page3;
