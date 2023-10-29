import Base from '../Base'
import * as S from './styles'

export default function HomeTemplate({ seo, header, footer, categories }) {
  console.table(categories)

  return (
    <Base seo={seo} header={header} footer={footer}>
      <S.Wrapper>Página inicial</S.Wrapper>
    </Base>
  )
}
