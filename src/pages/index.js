import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import HomepageCarousel from '../components/HomepageCarousel';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero>
      <HomepageCarousel />
    </Hero>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
