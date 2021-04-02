import styled, { css } from "styled-components"
import get from "lodash/get"
import { textStyleVariantMap } from "../../foundation/Text"

const ButtonDefault = css`
   background-color: ${props => get(props.theme, `colors.${props.variant}.color`)};
   color: ${props => get(props.theme, `colors.${props.variant}.contrastColor`)};
`

const ButtonGhost = css`
   background-color: transparent;
   color: ${props => get(props.theme, `colors.${props.variant}.color`)};
`

export const Button = styled.button`
   border: 0;
   cursor: pointer;
   padding: 12px 26px;
   font-weight: bold;
   opacity: 1;
   border-radius: ${({ theme }) => theme.borderRadius};
   transition: ${({ theme }) => theme.transition};
   &:hover,
   &:focus {
      opacity: 0.5;
   }

   ${textStyleVariantMap.paragraphXS}

   ${function(props) {
      if(props.ghost) {
         return ButtonGhost
      }
      return ButtonDefault
   }}

`