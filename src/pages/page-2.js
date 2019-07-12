import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import HomeBanner from '../components/HomeBanner';

const Page2 = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello from page 2</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, impedit
      voluptatibus aspernatur error quasi vel et quam, assumenda minus animi
      pariatur atque dolorum accusamus voluptates, magni veniam. Porro, incidunt
      enim.
    </p>
  </div>
);

export default Page2;
