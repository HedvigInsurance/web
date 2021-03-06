const nodePath = require('path');
const { pipe, flatten, map, forEach, uniq, path } = require('ramda');
const { kebabCaseTags } = require('./blog-tags');

const tagPageTemplatePath = nodePath.resolve(
  __dirname,
  '../templates/tag-page.js',
);
const getComponentPath = (templateKey) =>
  nodePath.resolve(__dirname, `../templates/${templateKey}.js`);

const getEdges = path(['data', 'allMarkdownRemark', 'edges']);
const getPageTemplateParamsFromEdge = (getComponentPathFn) => (edge) => ({
  path: edge.node.fields.slug,
  component: getComponentPathFn(edge.node.frontmatter.templateKey),
  templateKey: edge.node.frontmatter.templateKey,
  context: { id: edge.node.id, langKey: edge.node.fields.langKey },
});
const createPageTemplates = (createPage) =>
  pipe(
    getEdges,
    map(getPageTemplateParamsFromEdge(getComponentPath)),
    forEach(createPage),
  );

const flatMapTags = pipe(
  map(path(['node', 'frontmatter', 'tags'])),
  flatten,
);

const getUniqueTags = pipe(
  getEdges,
  flatMapTags,
  kebabCaseTags,
  uniq,
);

const createTagPages = (createPage) =>
  pipe(
    getUniqueTags,
    map((tag) => ({
      path: `/blog/tags/${tag}`,
      component: tagPageTemplatePath,
      context: { tag },
    })),
    forEach(createPage),
  );

module.exports = {
  getEdges,
  getPageTemplateParamsFromEdge,
  createPageTemplates,
  flatMapTags,
  getUniqueTags,
  createTagPages,
};
