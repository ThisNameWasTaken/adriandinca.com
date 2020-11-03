import React from 'react';
import { Body2 } from '../../components/material/Typography';
import Tooltip from '../../components/material/Tooltip';

const Page2 = () => (
  <div className="page">
    <div className="page__inner">
      <div className="page__content">
        <div className="page__columns">
          <div className="page__column page__column--no-top-border page__column--left" />
          <div className="page__column page__column--no-top-border page__column--right">
            <Body2>
              Turned a website into a PWA, increased its user engagement by
              adding features such as background sync and push notifications.
              Guided other students through solving their issues. Got accepted
              into the next stage. Built{' '}
              <a href="https://thisnamewastaken.github.io/Jokr/">
                my first PWA
              </a>{' '}
              to test my knowledge.
            </Body2>

            <h3 className="page__headline-3">
              Bachelor's Degree in Computer Science
            </h3>
            <h4 className="page__subtitle-3">
              October 2017 - July 2020{' '}
              <a href="https://unibuc.ro/?lang=en">University of Bucharest</a>
            </h4>

            <h3 className="page__headline-3">
              Master's Degree in Software engineering
            </h3>
            <h4 className="page__subtitle-3">
              October 2020 - Present{' '}
              <a href="https://unibuc.ro/?lang=en">University of Bucharest</a>
            </h4>

            <h3 className="page__headline-3">High School</h3>
            <h4 className="page__subtitle-3">
              September 2013 - July 2017{' '}
              <a href="http://zinca-golescu.ro/">CNL "Zinca Golescu"</a>
            </h4>
            <Body2>
              Created a{' '}
              <a href="https://frostybytes.000webhostapp.com">website</a> while
              learning the basics of HTML, CSS, JavaScript, PHP and SQL.
            </Body2>
          </div>
        </div>

        <div className="page__columns">
          <div className="page__column page__column--left">
            <h2 className="page__headline-2">
              Open Source Projects & Contributions
            </h2>
          </div>

          <div className="page__column page__column--right">
            <h3 className="page__headline-3">RellaxJS</h3>
            <h4 className="page__subtitle-3">
              March 2019{' '}
              <a href="https://github.com/dixonandmoe/rellax/pull/160">#160</a>
            </h4>
            <Body2>
              Made a pull request to close issue{' '}
              <a href="https://github.com/dixonandmoe/rellax/issues/159">
                #159
              </a>{' '}
              which enabled sharing nodes and node lists. The{' '}
              <span id="pr">PR</span> increased performance on large DOM trees
              by avoiding redundant DOM queries.
            </Body2>

            <Tooltip htmlFor="pr">Pull Request</Tooltip>

            <h3 className="page__headline-3">PurgeCSS</h3>
            <h4 className="page__subtitle-3">
              January 2019{' '}
              <a href="https://github.com/FullHuman/purgecss/pull/167">#167</a>
            </h4>
            <Body2>
              Fixed{' '}
              <a href="https://github.com/FullHuman/purgecss/issues/166">
                a self discovered bug
              </a>{' '}
              which would remove all but the first keyframe when using
              animations with multiple keyframes.
            </Body2>

            <h3 className="page__headline-3">EJS plain loader</h3>
            <h4 className="page__subtitle-3">November 2018 - Present</h4>
            <Body2>
              Created a Webpack plugin for loading EJS templates. It also
              enables imports of CommonJS modules, JSON files and any file
              formats which can be converted to a .txt (html, css, csv, etc).
            </Body2>

            <h3 className="page__headline-3">EJS</h3>
            <h4 className="page__subtitle-3">
              November 2018{' '}
              <a href="https://github.com/mde/ejs/pull/411">#441</a>
            </h4>
            <Body2>
              Exposed the template class in order for it to be extended or
              overridden by other npm modules.
            </Body2>
          </div>
        </div>

        <div className="page__columns">
          <div className="page__column page__column--left">
            <h2 className="page__headline-2">Hackathons</h2>
          </div>
          <div className="page__column page__column--right">
            <h3 className="page__headline-3">Smarthack</h3>
            <h4 className="page__subtitle-3">October 2019</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page2;
