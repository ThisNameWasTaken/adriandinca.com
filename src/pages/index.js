import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Carousel, { Slide, Layer } from '../components/carousel';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero>
      <Carousel>
        <Slide className="carousel__slide--performance">
          <Layer center style={{ textTransform: 'uppercase' }}>
            performance
          </Layer>
          <Layer topLeft>topLeft</Layer>
          <Layer topRight>topRight</Layer>
          <Layer bottomLeft>bottomLeft</Layer>
          <Layer bottomRight>bottomRight</Layer>
        </Slide>
        <Slide className="carousel__slide--reliability">
          <Layer center style={{ textTransform: 'uppercase' }}>
            reliability
          </Layer>
          <Layer topLeft>topLeft</Layer>
          <Layer topRight>topRight</Layer>
          <Layer bottomLeft>bottomLeft</Layer>
          <Layer bottomRight>bottomRight</Layer>
        </Slide>
        <Slide className="carousel__slide--accessibility">
          <Layer center style={{ textTransform: 'uppercase' }}>
            accessibility
          </Layer>
          <Layer topLeft>topLeft</Layer>
          <Layer topRight>topRight</Layer>
          <Layer bottomLeft>bottomLeft</Layer>
          <Layer bottomRight>bottomRight</Layer>
        </Slide>
      </Carousel>
    </Hero>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
