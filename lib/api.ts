import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type Items = {
  [key: string]: any
}


const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '').replace(/\d{4}-\d{2}-\d{2}-/, '')
  let re = new RegExp(`\\d{4}-\\d{2}-\\d{2}-${realSlug}.md$`);
  let files = fs.readdirSync(postsDirectory).find(filename => re.test(filename));
  if (!files) {
    return {}
  }
  const fullPath = join(postsDirectory, files)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)



  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug.replace(/\d{4}-\d{2}-\d{2}-/, '')
    }
    if (field === 'content') {
      items[field] = content
    }

    if (field === 'tags') {
      items.tags = data[field] || []
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getPostsByTag(tag: string, fields: string[] = []) {
  const posts = getAllPosts(fields)
  return posts.filter((post) => post.tags?.includes(tag))
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
