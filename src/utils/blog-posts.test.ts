import { sortBlogPosts } from './blog-posts'
it('sorts blog posts', () => {
  const edges = [
    {
      id: 1337,
      node: { frontmatter: { date: '2019-09-16T14:40:33+00:00' } },
    },
    {
      id: 42,
      node: { frontmatter: { date: '2018-09-16T14:40:33+00:00' } },
    },
  ]

  expect(sortBlogPosts(edges)).toMatchObject([{ id: 42 }, { id: 1337 }])
})
