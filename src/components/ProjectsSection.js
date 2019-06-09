import React, { memo } from 'react';
import './ProjectsSection.scss';

import { Headline2 } from './material/Typography';

import ProjectCard from './ProjectCard';

const ProjectsSection = () => (
  <section className="projects-section" id="projects">
    <Headline2 className="projects-section__headline">
      Recent Projects
    </Headline2>

    {/* One Moon */}
    <article className="projects-section__project">
      <ProjectCard
        headline="One Moon"
        body="A dark theme for Visual Studio Code inspired by Atom's One Dark color theme."
        media={{
          src: '../images/logo-one-moon.png',
          alt: 'People walking around a subway station',
        }}
        tags={['VS Code', 'JSON']}
        demoButton={{
          href:
            'https://marketplace.visualstudio.com/items?itemName=ThisNameWasTaken.one-moon',
          label: 'View on marketplace',
        }}
        sourceButton={{
          href: 'https://github.com/ThisNameWasTaken/one-moon',
          label: 'View Source',
        }}
      />
    </article>

    {/* Foose Shoes */}
    <article className="projects-section__project">
      <ProjectCard
        headline="Foose Shoes"
        body="An e-commerce website for a shoe store I built during OSF Academy for
        Students program."
        media={{
          src: '../images/screenshot-foose-shoes.png',
          alt: 'People walking around a subway station',
        }}
        tags={['HTML', 'SCSS', 'JS', 'Gulp', 'Webpack']}
        demoButton={{
          href: 'https://ThisNameWasTaken.github.io/foose-shoes',
          label: 'View Demo',
        }}
        sourceButton={{
          href: 'https://github.com/ThisNameWasTaken/foose-shoes',
          label: 'View Source',
        }}
      />
    </article>

    {/* EJS Plain Loader */}
    <article className="projects-section__project">
      <ProjectCard
        className="project-card--dark-headline"
        headline="EJS Plain Loader"
        body="An Embedded JavaScript Loader for Webpack which I wrote in order to be
        able to import EJS templates , JavaScript modules and JSON files into
        EJS files."
        media={{
          src: '../images/screenshot-ejs-plain-loader.png',
          alt: 'People walking around a subway station',
        }}
        tags={['Webpack', 'NPM', 'NodeJS']}
        demoButton={{
          href: 'https://www.npmjs.com/package/ejs-plain-loader',
          label: 'View on npm',
        }}
        sourceButton={{
          href: 'https://github.com/ThisNameWasTaken/ejs-plain-loader',
          label: 'View Source',
        }}
      />
    </article>

    {/* Restaurant Reviews */}
    <article className="projects-section__project">
      <ProjectCard
        headline="Restaurant Reviews"
        body=" A Progressive Web App I build during Udacity's Mobile Web Specialist
        Nanodegree Program. It allows starring, rating and reviewing different
        restaurants in a certain area."
        media={{
          src: '../images/restaurant-reviews.png',
          alt: 'People walking around a subway station',
        }}
        tags={['PWA', 'HTML', 'SCSS', 'JS', 'Sails.js', 'Python']}
        demoButton={{
          // TODO: Add demo link for Restaurant Reviews
          href: '#',
          label: 'View demo',
        }}
        sourceButton={{
          href: 'https://github.com/ThisNameWasTaken/mws-restaurant-stage-1',
          label: 'View Source',
        }}
      />
    </article>

    {/* Jokr */}
    <article className="projects-section__project">
      <ProjectCard
        headline="Jokr"
        body="A progressive Web App I built after I had finished Udacity's Mobile
        Web Specialist scholarship to test my knowledge of PWAs and
        performance on the web."
        media={{
          src: '../images/jokr.png',
          alt: 'People walking around a subway station',
        }}
        tags={['PWA', 'HTML', 'SCSS', 'JS', 'Webpack']}
        demoButton={{
          href: 'https://ThisNameWasTaken.github.io/Jokr',
          label: 'View demo',
        }}
        sourceButton={{
          href: 'https://github.com/ThisNameWasTaken/Jokr',
          label: 'View Source',
        }}
      />
    </article>

    {/* Drone Zone */}
    <article className="projects-section__project">
      <ProjectCard
        headline="Drone Zone"
        body=" A presentation website for a fictional drone selling enterprise. I
        built it for fun inspired by a couple of street adds."
        media={{
          src: '../images/screenshot-drone-zone.png',
          alt: 'People walking around a subway station',
        }}
        tags={['HTML', 'SCSS', 'JS']}
        // TODO: Add links for Drone Zone
        demoButton={{
          href: '#',
          label: 'View demo',
        }}
        sourceButton={{
          href: '#',
          label: 'View Source',
        }}
      />
    </article>
  </section>
);

export default memo(ProjectsSection, (prevProps, nextProps) => true);
