import React from "react"
import styled from "styled-components"

const Title = styled.h2`
  font-family: ${props => props.theme.font.primary};
  font-size: ${props => props.theme.size.big};
  font-weight: bold;
  color: ${props => props.theme.color.firstDark};
  text-align: center;
  margin-bottom: 5px;
  &.-inverse {
      color: ${props => props.theme.color.secondyClear};
  }
`

export default ({ title, className }) => (
   <Title className={className}>{title}</Title>
 );