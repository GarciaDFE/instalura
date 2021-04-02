import styled, { css } from "styled-components"
import PropTypes from "prop-types"

export const textStyleVariantMap = {
   paragraph1: css`
      font-size: ${({ theme }) => theme.typography.paragraph1.fontSize};
      font-weight: ${({ theme }) => theme.typography.paragraph1.fontWeight};
      line-height: ${({ theme }) => theme.typography.paragraph1.lineHeight};
   `,
   paragraphXS: css`
      font-size: ${({ theme }) => theme.typography.paragraphXS.fontSize};
      font-weight: ${({ theme }) => theme.typography.paragraphXS.fontWeight};
      line-height: ${({ theme }) => theme.typography.paragraphXS.lineHeight};
   `,
}


const TextBase = styled.span`
   ${(props) => textStyleVariantMap[props.variant]}
`

const Text = ({ tag="span", variant="paragraph1", children }) => {
   return (
      <TextBase as={tag} variant={variant}>
         {children}
      </TextBase>
   )
}

Text.propTypes = {
   tag: PropTypes.string.toRequired,
   variant: PropTypes.string,
   children: PropTypes.node.toRequired,
}

export default Text