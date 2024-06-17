import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin: 0;
  }
`
export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    &.is-open {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    &.is-open {
      display: block;
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
    a {
      text-align: center;
      dislpay: block;
      padding: 16px 0;
    }
  }
`

export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
      span {
      display: none;
    }
`

export const Hamburger = styled.div`
  width: 32px;
  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${cores.branca};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
