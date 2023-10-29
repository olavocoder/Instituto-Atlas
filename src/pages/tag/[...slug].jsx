import { getAllTags } from 'services/wordpress'

import LoadingTemplate from '../templates/Loading'
import TagTemplate from '../templates/Tag'

export default function Tag(data) {
  if (data.posts) {
    return <TagTemplate {...data} />
  } else {
    return <LoadingTemplate {...data} />
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const path = params.slug
  const tag = await getAllTags(path)
  const seo = []
  const posts = []

  return {
    revalidate: 1200,
    props: {
      seo,
      path,
      tag,
      posts
    }
  }
}
