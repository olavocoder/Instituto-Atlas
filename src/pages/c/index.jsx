import CategoryTemplate from '../templates/Category'
import LoadingTemplate from '../templates/Loading'

export default function CategoryHome(data) {
  if (data.posts) {
    return <CategoryTemplate {...data} />
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
