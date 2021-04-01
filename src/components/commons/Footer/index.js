import styled from "styled-components"

import LogoAlura from "../../../theme/LogoAlura"

const FooterWrapper = styled.footer`
   width: 100%;
   padding: 16px;
background-color: yellow;
   display: flex;
`


const Footer = () => {
   return (
      <FooterWrapper>
         <LogoAlura />
         Footer
      </FooterWrapper>
   )
}

export default Footer