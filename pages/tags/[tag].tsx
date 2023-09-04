import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import MoreStories from '../../components/more-stories'
import PostTitle from '../../components/post-title'
import type PostType from '../../interfaces/post'
import { getAllPosts, getPostsByTag } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

type Props = {
  posts: PostType[]
  tag?: string
  preview?: boolean
}

export default function PostsByTag({ posts, tag, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !tag) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Posts about ${tag} | ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <MoreStories title={tag} posts={posts} />
          </>
        )}
      </Container>
    </Layout>
  )

}

type Params = {
  params: {
    tag: string
  }
}

export async function getStaticProps({ params }: Params) {
  const posts = getPostsByTag(params.tag, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags',
  ])

  return {
    props: {
      posts,
      tag: params.tag
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['tags'])
  const allTags = posts.reduce(
    (tags: string[], post) => post.tags ? [...post.tags, ...tags] : tags
    , []
  )
  return {
    paths: allTags.map(tag => {
      return {
        params: {
          tag
        },
      }
    }),
    fallback: false,
  }
}
