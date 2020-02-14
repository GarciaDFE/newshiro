import React from "react"
import styled from "styled-components"

import media from "../styles/breakPoints"

const TextSection = styled.div`
   width: 100%;
`

const Text = styled.p`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: normal;
   line-height: 1.56;
   color: ${props => props.theme.color.secondyDark};
   text-align: justify;
   &.-inverse {
      color: ${props => props.theme.color.secondyClear};
   }

   ${media.lessThan("xs")`
      text-align: left;
   `}

`

export default ({ className, children }) => (
      <TextSection>
         <Text className={className}>{children}</Text>
      </TextSection>
);