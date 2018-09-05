/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { getSlugAndLang } = require('ptz-i18n');
const uniq = require('lodash/uniq');
const kebabCase = require('lodash/kebabCase');

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
    // Create regular pages from markdown files
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug, langKey } = node.fields;
      createPage({
        path: slug,
        component: path.resolve(
          __dirname,
          `src/templates/${node.frontmatter.templateKey}.js`,
        ),
        context: { id: node.id, langKey },
      });
    });

    let tags = [];
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      if (edge.node.frontmatter.tags) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    tags = uniq(tags);
    const tagPage = path.resolve('src/templates/tag-page.js');
    tags.forEach((tag) => {
      createPage({
        path: `/blog/tags/${kebabCase(tag)}`,
        component: tagPage,
        context: { tag },
      });
    });
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
