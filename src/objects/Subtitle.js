import React from "react"
import styled from "styled-components"

const Subtitle = styled.h4`
  font-family: ${props => props.theme.font.primary};
  font-size: ${props => props.theme.size.mediumSmall};
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.theme.color.secondyDark};
  text-align: center;
  margin-bottom: 5px;
  &.-inverse {
    color: ${props => props.theme.color.secondyClear};
  }
`

export default ({ subtitle, className }) => (
  <Subtitle className={className}>{subtitle}</Subtitle>
);