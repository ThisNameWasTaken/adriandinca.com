import React from 'react';

import './project-post.scss';
import { useStaticQuery, graphql } from 'gatsby';

const Post = ({
  pageContext: {
    backgroundImage,
    backgroundAlt,
    description,
    demo,
    sourceCode,
    title,
    timeToRead,
    html,
  },
}) => {
  // const data = useStaticQuery(graphql`

  // `);

  return (
    <>
      <div className="project-background" />
      <div
        className="project"
        dangerouslySetInnerHTML={{
          __html: `
        <h1>${title}</h1>
        <p>
          <i>${timeToRead} minute read</i>
        </p>
        <p>${description}</p>
        ${html}
      `,
        }}
      ></div>
    </>
  );
};

export default Post;
