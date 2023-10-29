import PostTemplate from '../templates/Post'

export default function Post(data) {
  const dataFetched = data.props !== undefined ? data.props[0] : null
  if (dataFetched) {
    return <PostTemplate {...data} />
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
  const data = []
  const seo = []

  return {
    revalidate: 1200,
    props: {
      seo,
      path,
      props: data
    }
  }
}
