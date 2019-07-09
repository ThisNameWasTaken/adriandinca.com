import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import HomeBanner from '../components/HomeBanner';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeBanner />
    <ProjectsSection />
    <AboutSection />
  </Layout>
);

export default IndexPage;
