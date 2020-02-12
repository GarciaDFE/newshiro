import React from "react"
import styled from "styled-components"

const TitleSection = styled.div`
   width: 100%;
   display: block;
   text-align: center;
   margin-bottom: 50px;
` 

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
    letter-spacing: 0.05rem;
  }
`

export default ({ title, subtitle, className }) => (
   <TitleSection className={className}>
     <Title className={className}>{title}</Title>
     <Subtitle className={className}>{subtitle}</Subtitle>
   </TitleSection>
 );