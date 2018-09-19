import { compose, find, path, pathOr, pipe, propOr, sortBy } from 'ramda'
import { BlogPost } from 'src/components/Blog'
import { notNullable } from 'src/utils/nullables'
import { Author } from '../components/Blog/types'

type BlogPost = any
const sortBlogPosts = (posts: BlogPost[]) =>
  sortBy<BlogPost>(
    compose(
      Number,
      (dateString: string | undefined) => new Date(notNullable(dateString)),
      path(['node', 'frontmatter', 'date']),
    ),
    posts,
  )

interface Poster {
  name: string
  picture?: { standard: string }
}
const getAuthorField = pathOr('', ['node', 'frontmatter', 'author'])
const authorOrDefault = (
  name: string,
  authors: Array<{ node: Author }>,
): Author =>
  pipe(
    find((author) => path(['node', 'name'], author) === name),
    pathOr<Poster>({ name }, ['node']),
    (author: Poster) => ({
      name: propOr<string, Poster, string>('Anonym', 'name', author),
      image: path<string>(['picture', 'standard'], author),
    }),
  )(authors)
const getBlogPostPropsFromEdge = (authors: Array<{ node: Author }>) => (
  blogPost: BlogPost,
) => ({
  title: pathOr('', ['node', 'frontmatter', 'title'], blogPost),
  date: pathOr('', ['node', 'frontmatter', 'date'], blogPost),
  topImage: pathOr('', ['node', 'frontmatter', 'topImage'], blogPost),
  tags: pathOr<string[]>([], ['node', 'frontmatter', 'tags'], blogPost),
  excerpt: pathOr('', ['node', 'frontmatter', 'excerpt'], blogPost),
  slug: pathOr('', ['node', 'fields', 'slug'], blogPost),
  author: authorOrDefault(getAuthorField(blogPost), authors),
})

export {
  sortBlogPosts,
  getAuthorField,
  authorOrDefault,
  getBlogPostPropsFromEdge,
}
