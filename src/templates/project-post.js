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
      <Image
        className="project-background"
        style={{ position: 'fixed' }}
        alt={backgroundAlt}
        {...childImageSharp}
      />
      <div className="project">
        <div
          className="project__page"
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
        />
      </div>
    </>
  );
};

export default Post;
