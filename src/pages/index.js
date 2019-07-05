import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import HomepageCarousel from '../components/HomepageCarousel';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero>
      <HomepageCarousel />
    </Hero>
    <ProjectsSection />
    <AboutSection />
  </Layout>
);

export default IndexPage;
