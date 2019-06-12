import PropTypes from 'prop-types';
import React from 'react';
import TopAppBar, {
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarIcon,
  TopAppBarTitle,
} from './material/TopAppBar';

import IconButton from './material/IconButton';
import Button from './material/Button';
import Tooltip from './material/Tooltip/Tooltip';

// @ts-ignore
// import MenuSvg from '../images/inline/baseline-menu-24px.svg';
// @ts-ignore
import WorkSvg from '../images/inline/baseline-work-24px.svg';
import PersonSvg from '../images/inline/baseline-person-24px.svg';
import MailSvg from '../images/inline/baseline-mail-24px.svg';
import GithubSvg from '../images/inline/github-brands.svg';

const Header = ({ siteTitle }) => (
  <>
    <TopAppBar fixed>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          {/* <TopAppBarIcon navIcon>
          <IconButton>
            <MenuSvg />
          </IconButton>
        </TopAppBarIcon> */}
          <TopAppBarTitle>
            <Button href="/" className="site-title">
              {siteTitle}
            </Button>
          </TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection align="end" role="toolbar">
          <TopAppBarIcon actionItem tabIndex={0}>
            <IconButton
              isLink
              href="#projects"
              aria-label="View my projects"
              role="button"
              id="projects-top-app-bar-link"
            >
              <WorkSvg aria-hidden="true" />
            </IconButton>
          </TopAppBarIcon>
          <TopAppBarIcon actionItem tabIndex={0}>
            <IconButton
              isLink
              href="#about"
              aria-label="Read more about me"
              role="button"
              id="about-top-app-bar-link"
            >
              <PersonSvg aria-hidden="true" />
            </IconButton>
          </TopAppBarIcon>
          <TopAppBarIcon actionItem tabIndex={0}>
            <IconButton
              isLink
              href="mailto:adriandinca2008@gmail.com"
              aria-label="Email me"
              role="button"
              id="contact-top-app-bar-link"
            >
              <MailSvg aria-hidden="true" />
            </IconButton>
          </TopAppBarIcon>
          <TopAppBarIcon actionItem tabIndex={0}>
            <IconButton
              isLink
              href="https://github.com/ThisNameWasTaken/"
              aria-label="Go to github profile"
              role="button"
              id="github-top-app-bar-link"
            >
              <GithubSvg aria-hidden="true" />
            </IconButton>
          </TopAppBarIcon>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <Tooltip htmlFor="projects-top-app-bar-link">Projects</Tooltip>
    <Tooltip htmlFor="about-top-app-bar-link">About</Tooltip>
    <Tooltip htmlFor="contact-top-app-bar-link">Contact</Tooltip>
    <Tooltip htmlFor="github-top-app-bar-link">Github</Tooltip>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
