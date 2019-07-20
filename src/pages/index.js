import React from 'react';

import SEO from '../components/seo';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import HomeBanner from '../components/HomeBanner';

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeBanner />
    <ProjectsSection />
    <AboutSection />
  </>
);

export default IndexPage;
