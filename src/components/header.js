import PropTypes from 'prop-types';
import React from 'react';
import TopAppBar, {
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarIcon,
  TopAppBarTitle,
} from './material/TopAppBar';
import MaterialIcon from './material/MaterialIcon';

import IconButton from './material/IconButton';
import Button from './material/Button';

// @ts-ignore
// import MenuSvg from '../images/inline/baseline-menu-24px.svg';
// @ts-ignore
import WorkSvg from '../images/inline/baseline-work-24px.svg';
import PersonSvg from '../images/inline/baseline-person-24px.svg';
import MailSvg from '../images/inline/baseline-mail-24px.svg';
import GithubSvg from '../images/inline/github-brands.svg';

const Header = ({ siteTitle }) => (
  <TopAppBar>
    <TopAppBarRow>
      <TopAppBarSection align="start">
        {/* <TopAppBarIcon navIcon tabIndex={0}>
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
          <IconButton isLink href="#projects">
            <WorkSvg />
          </IconButton>
        </TopAppBarIcon>
        <TopAppBarIcon actionItem tabIndex={0}>
          <IconButton isLink href="#about">
            <PersonSvg />
          </IconButton>
        </TopAppBarIcon>
        <TopAppBarIcon actionItem tabIndex={0}>
          <IconButton isLink href="#contact">
            <MailSvg />
          </IconButton>
        </TopAppBarIcon>
        <TopAppBarIcon actionItem tabIndex={0}>
          <IconButton isLink href="https://github.com/ThisNameWasTaken/">
            <GithubSvg />
          </IconButton>
        </TopAppBarIcon>
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
