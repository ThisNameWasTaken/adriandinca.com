import React from 'react';

import './project-post.scss';

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
  return (
    <>
      <div className="fixed-background" />
      <div className="project">
        <h1>{title}</h1>
        <p>
          <i>{timeToRead} minute read</i>
        </p>
        <p>{description}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
};

export default Post;
