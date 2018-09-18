const {
  getEdges,
  getPageTemplateParamsFromEdge,
  createPageTemplates,
  flatMapTags,
  getUniqueTags,
  createTagPages,
} = require('./setup-gatsby-node');

const getResultData = () => ({
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              tags: ['tag a', 'tag b'],
              templateKey: 'a-tmpl',
            },
            fields: {
              slug: 'ab',
              langKey: 'sv',
            },
            id: 1,
          },
        },
        {
          node: {
            frontmatter: {
              tags: ['tag b', '#c'],
              templateKey: 'c-tmpl',
            },
            fields: {
              slug: 'c',
              langKey: 'sv',
            },
            id: 2,
          },
        },
      ],
    },
  },
});

it('gets egdges', () => {
  expect(getEdges(getResultData())).toEqual(
    getResultData().data.allMarkdownRemark.edges,
  );
});

it('gets template params from node', () => {
  expect(
    getPageTemplateParamsFromEdge(() => 'component')(
      getResultData().data.allMarkdownRemark.edges[0],
    ),
  ).toMatchObject({
    path: 'ab',
    templateKey: 'a-tmpl',
    component: 'component',
    context: { id: 1, langKey: 'sv' },
  });
});

it('creates page templates', () => {
  const createPageStub = jest.fn();
  createPageTemplates(createPageStub)(getResultData());
  expect(createPageStub).toHaveBeenCalledTimes(2);
  // TODO improve assertions here
});

it('flat maps tags', () => {
  expect(flatMapTags(getResultData().data.allMarkdownRemark.edges)).toEqual([
    'tag a',
    'tag b',
    'tag b',
    '#c',
  ]);
});

it('gets unique tags', () => {
  expect(getUniqueTags(getResultData())).toEqual(['tag-a', 'tag-b', 'c']);
});

it('creates tag pages', () => {
  const createPage = jest.fn();
  createTagPages(createPage)(getResultData());
  expect(createPage).toHaveBeenCalledTimes(3);
  // TODO better assertions
});
