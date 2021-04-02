import { NavWrapper, LinksList} from "./styles"
import LogoInstaluraSmall from "../../../theme/LogoInstaluraSmall"
import { Button } from "../Button"
import Text from "../../foundation/Text"

const links = [
   {
      label: "Home",
      url: "/"
   },
   {
      label: "Perguntas frequentes",
      url: "/faq"
   },
   {
      label: "Sobre",
      url: "/sobre"
   },
]

const MainNav = () => {
   return (
      <NavWrapper>
         <NavWrapper.Brand href="/">
            <LogoInstaluraSmall />
         </NavWrapper.Brand>
         <NavWrapper.Buttons>
            <Button ghost variant="secondary.main">Entrar</Button>
            <Button variant="primary.main">Cadastrar</Button>
         </NavWrapper.Buttons>
         <NavWrapper.Links>
            <LinksList>
               {links.map((link) => {
                  return (
                     <li key={link.label}>
                        <Text
                           tag="a"
                           variant="paragraphXS"
                           href={link.url}
                        >
                           {link.label}
                        </Text>
                     </li>
                  )
               })}
            </LinksList>
         </NavWrapper.Links>
      </NavWrapper>
   )
}

export default MainNav