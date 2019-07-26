import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Headline2 } from './material/Typography';
import ProjectCard from './ProjectCard';

import './ProjectsSection.scss';

const ProjectsSection = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 6
      ) {
        nodes {
          id
          frontmatter {
            title
            backgroundImage
            backgroundAlt
            description
            demo
            sourceCode
            tags
          }
          fields {
            path
          }
        }
      }
    }
  `);

  return (
    <section className="projects-section" id="projects">
      <Headline2 className="projects-section__headline">
        Recent Projects
      </Headline2>

      {nodes.map(
        ({
          id,
          frontmatter: {
            title,
            backgroundImage,
            backgroundAlt,
            description,
            demo,
            sourceCode,
            tags,
          },
          fields: { path },
        }) => (
          <article className="projects-section__project" key={id}>
            <ProjectCard
              href={path}
              headline={title}
              body={description}
              media={{
                src: `../images/${backgroundImage}`,
                alt: backgroundAlt,
              }}
              tags={tags}
              demoButton={{
                href: demo,
                label: 'View Demo',
              }}
              sourceButton={{
                href: sourceCode,
                label: 'View Source',
              }}
            />
          </article>
        )
      )}
    </section>
  );
};

export default memo(ProjectsSection, (prevProps, nextProps) => true);
