import React from 'react';

import SEO from '../components/seo';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import HomeBanner from '../components/HomeBanner';

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      keywords={[
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

export default IndexPage;
