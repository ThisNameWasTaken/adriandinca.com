import React, { memo, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useInView } from 'react-intersection-observer';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const LazySvg = memo(({ src, otherProps }) => {
  const [ref, inView] = useInView({
    rootMargin: '200px',
    triggerOnce: true,
  });

  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.href = src;
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    document.head.appendChild(preloadLink);
  }, []);

  return <img src={inView ? src : ''} ref={ref} {...otherProps} />;
});

const Image = memo(({ src, ...otherProps }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              extension
              publicURL
              childImageSharp {
                fluid(maxWidth: 665) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={({ images }) => {
      const srcSplits = src.split('/images/');

      if (srcSplits[1] === undefined) {
        throw new Error(
          `"${src}" does not resolve to the "/src/images/" folder`
        );
      }

      src = srcSplits[1];

      const image = images.edges.find(({ node }) => node.relativePath === src);

      // TODO: Check for external urls or url encodings
      if (!image) { return <img src={src} {...otherProps} />; }

      if (image.node.extension === 'svg') {
        return <LazySvg src={image.node.publicURL} {...otherProps} />;
      }

      return <Img fluid={image.node.childImageSharp.fluid} {...otherProps} />;
    }}
  />
));

export default Image;
