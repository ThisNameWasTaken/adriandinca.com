import React, { memo } from 'react';
import './AboutSection.scss';

import { Headline2, Body1 } from './material/Typography';
import Image from './image';
import { Link } from 'gatsby';
import Tooltip from './material/Tooltip/Tooltip';

const AboutSection = () => (
  <section className="about-section" id="about">
    <Headline2 className="about-section__headline">About me</Headline2>
    <article className="about-card">
      <div className="about-card__media">
        <div className="about-card__media__content">
          <Image
            src="../images/41250439_1091136534388946_4505289778605850624_n.jpg"
            alt="A picure of the website's author standing in a purple spotlight having half of his face covered by green fluorescent powder"
          />
        </div>
      </div>
      <div className="about-card__body">
        <h3 className="about-card__body__title">Adrian Florin Dinca</h3>
        <h4 className="about-card__body__subtitle">Mobile Web Specialist</h4>
        <Body1>
          Hi! I am Adrian,{' '}
          <a
            href="https://www.credential.net/hoaryqia?key=0116a705dbbdaa598bb8cc1b2865fd57264ea47b909d6d017a0e6a2aa4ab6de6"
            id="link-to-mws-certificate"
          >
            Google certified
          </a>{' '}
          <Tooltip htmlFor="link-to-mws-certificate">
            See my certificate
          </Tooltip>
          Mobile Web Specialist. I am a performance and accessibility freak who
          loves to ensure that all users get a fast and reliable experience
          regardless of their devices or internet connection and that all of the
          content is equally accessible whether a user is physically impaired or
          not. Want to know more? Check out{' '}
          <Link href="/resume">my resume</Link>!
        </Body1>
      </div>
    </article>
  </section>
);

export default memo(AboutSection, () => true);
