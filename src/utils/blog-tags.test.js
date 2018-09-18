const { kebabCaseTag } = require('./blog-tags')

it('kebab cases tags', () => {
  const tagA = 'tag a'
  const tagB = '# tag B '
  expect(kebabCaseTag(tagA)).toEqual('tag-a')
  expect(kebabCaseTag(tagB)).toEqual('tag-b')
})
