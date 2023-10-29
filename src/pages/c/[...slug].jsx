import CategoryTemplate from '../templates/Category'

export default function Category(data) {
  if (data.posts) {
    return <CategoryTemplate {...data} />
  } else {
    return null
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
  const seo = []
  const posts = []

  return {
    revalidate: 1200,
    props: {
      seo,
      posts,
      path
    }
  }
}
