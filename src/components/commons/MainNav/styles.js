import styled from 'styled-components'

export const NavWrapper = styled.nav`
   width: 100vw;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
`
NavWrapper.Brand = styled.a`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding: 16px;
   box-sizing: border-box;
   border-bottom: 1px solid #F2F2F2;
`
NavWrapper.Links = styled.div`
   width: 100%;
   padding: 12px 16px;
   border-bottom: 1px solid #F2F2F2;
`
NavWrapper.Buttons = styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   padding: 16px 16px 16px 0;
   box-sizing: border-box;
   border-bottom: 1px solid #F2F2F2;

`

export const LinksList = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   list-style: none;
   margin: 0;
   padding: 0;
   li > a {
      text-decoration: none;
      font-weight: 400;
      color: ${props => props.theme.colors.tertiary.light.color};
      &:hover,
      &:focus {
         font-weight: 500;
         color: ${props => props.theme.colors.tertiary.main.color};
      }
   }
`