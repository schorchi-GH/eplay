import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 24px;
  display: block;
  margin: 16px 0 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
