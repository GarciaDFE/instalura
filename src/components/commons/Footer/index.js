import styled from "styled-components"

import LogoAlura from "../../../theme/LogoAlura"

const FooterWrapper = styled.footer`
   width: 100%;
   padding: 16px;
   background-color: transparent;
   display: flex;
   justify-content: center;
   align-items: center;

`

const LogoWrapper = styled.div`
   padding: 0 8px;
`

export const TextWrapper = styled.div`
   font-size: 14px;
   line-height: 17.5px;
   color: ${props => props.theme.colors.tertiary.light.color};
   padding: 0 16px;
`

TextWrapper.Destak = styled.span`
   color: ${props => props.theme.colors.primary.main.color};
`

const Footer = () => {
   return (
      <FooterWrapper>
         <LogoWrapper>
            <LogoAlura />
         </LogoWrapper>
         <TextWrapper>
            Orgulhosamente criado durante o <TextWrapper.Destak>Bootcamp Alura JAM Stack</TextWrapper.Destak>
         </TextWrapper>
      </FooterWrapper>
   )
}

export default Footer