/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const LoadablePlugin = require('@loadable/webpack-plugin');
const path = require('path');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  });
};

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === 'MarkdownRemark') {
    const route = `/projects/${path.basename(
      node.fileAbsolutePath,
      path.extname(node.fileAbsolutePath)
    )}/`;

    createNodeField({
      node,
      name: 'path',
      value: route,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/project-post.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          timeToRead
          frontmatter {
            title
            backgroundImage
            backgroundAlt
            description
            demo
            sourceCode
            tags
            date
          }
          html
          id
          fields {
            path
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog post pages.
  return await Promise.all(
    result.data.allMarkdownRemark.nodes.map(async node => {
      const imageResult = await graphql(
        `
          query imageQuery($imagePath: String!) {
            file(relativePath: { eq: $imagePath }) {
              childImageSharp {
                fluid(maxWidth: 665) {
                  srcSetWebp
                  base64
                  aspectRatio
                  sizes
                  src
                  srcSet
                  srcWebp
                }
              }
            }
          }
        `,
        { imagePath: node.frontmatter.backgroundImage }
      );

      if (imageResult.errors) {
        throw imageResult.errors;
      }

      createPage({
        // Path for this page — required
        path: node.fields.path,
        component: blogPostTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
          timeToRead: node.timeToRead,
          html: node.html,
          childImageSharp: imageResult.data.file.childImageSharp,
          ...node.frontmatter,
        },
      });
    })
  );
};
