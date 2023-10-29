import LoadingTemplate from '../templates/Loading'
import TagTemplate from '../templates/Tag'

export default function TagsHome(data) {
  if (data.posts) {
    return <TagTemplate {...data} />
  } else {
    return <LoadingTemplate {...data} />
  }
}

export async function getStaticProps() {
  const seo = []
  const posts = []

  return {
    revalidate: 1200,
    props: {
      seo,
      posts
    }
  }
}
