import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { TopAppBarFixedAdjust } from '../components/material/TopAppBar';

const SecondPage = () => (
  <Layout>
    <TopAppBarFixedAdjust>
      <SEO title="Page two" />
      <div style={{ height: 'calc(100vh - 64px)', background: '#f43' }} />
    </TopAppBarFixedAdjust>
  </Layout>
);

export default SecondPage;
