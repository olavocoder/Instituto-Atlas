import { getAllCategories } from '../services/wordpress'
import HomeTemplate from '../templates/Home'

export default function Home(data) {
  return <HomeTemplate {...data} />
}

export async function getStaticProps() {
  const categories = await getAllCategories()
  // const data = categories

  // go to notfound
  // if (data[0] === undefined || !data[0]) {
  //   return {
  //     notFound: true
  //   }
  // }

  const seo = {
    title: 'Home',
    description: 'Página inicial',
    noindex: false
  }

  return {
    revalidate: 1200,
    props: {
      seo,
      categories
    }
  }
}
