import React, { useEffect } from 'react';

import SEO from '../components/seo';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import HomeBanner from '../components/HomeBanner';

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Home"
        keywords={[
          'Adrian Dinca',
          'Adrian Florin Dinca',
          'Adrian',
          'Dinca',
          'Florin',
          'Adrian-Florin',
          'Mobile',
          'Web',
          'Specialist',
          'Developer',
          'JavaScript',
          'JS',
          'React',
          'Gatsby',
          'Application',
          'App',
          'Freelancer',
        ]}
      />
      <HomeBanner />
      <ProjectsSection />
      <AboutSection />
    </>
  );
};

export default IndexPage;
