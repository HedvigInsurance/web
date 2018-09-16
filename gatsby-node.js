/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { getSlugAndLang } = require('ptz-i18n');
const {
  createPageTemplates,
  createTagPages,
} = require('./src/utils/setup-gatsby-node');

const DEFAULT_LANGUAGE = 'se';

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src/'),
        assets: path.resolve(__dirname, 'static/assets/'),
      },
    },
  });
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
              langKey
            }
            frontmatter {
              templateKey
              tags
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
    }

    createPageTemplates(createPage)(result);
    createTagPages(createPage)(result);
  });
};

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slugAndLang = getSlugAndLang(
      { langKeyDefault: DEFAULT_LANGUAGE },
      node.fileAbsolutePath,
    );
    createNodeField({ name: 'slug', node, value: slugAndLang.slug });
    createNodeField({ name: 'langKey', node, value: slugAndLang.langKey });
  }
};
