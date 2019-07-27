import React from 'react';

import './project-post.scss';
import Image from 'gatsby-image';

const Post = ({
  pageContext: {
    backgroundAlt,
    description,
    demo,
    sourceCode,
    title,
    timeToRead,
    html,
    childImageSharp,
  },
}) => {
  return (
    <>
      <div className="project-background">
        <Image alt={backgroundAlt} {...childImageSharp} />
      </div>
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
