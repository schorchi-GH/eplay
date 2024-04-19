import Tag from '../Tag'

import { Card, Titulo, Descricao } from './styles'
const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima quo,
      voluptatum illum excepturi ad eum non quas voluptas rem blanditiis impedit
      quod, quidem velit dolore eos unde iusto recusandae!
    </Descricao>
  </Card>
)

export default Product
