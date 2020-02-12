import styled from "styled-components";
import Img from "gatsby-image"

import ButtonAction from "../../objects/ButtonAction"

const CardItem = styled.dl`
   box-sizing: border-box;
   border: 0.5px solid ${props => props.theme.color.secondyLight};
   background-color: ${props => props.theme.color.secondyClear};
   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);
   padding: 10px;
`
const Content = styled.li`
   list-style: none;
   padding: 10px;
`

const Title = styled.dt`
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.secondyMedium};
  font-size: ${props => props.theme.size.medium};
  font-weight: 700;
  line-height: 1.33;
  text-transform: uppercase;
  margin-bottom: 10px;
`

const HeroImage = styled(Img)`
   position: absolute;
   top: 0;
   width: 100%;
   padding: 10px 10px 0;
   transition: transform 300ms ease-out;
   &:hover {
      transform: scale(1.05);
      transition: transform 300ms ease-out;
   }
`

const Description = styled.dd`
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.secondyMedium};
  font-size: ${props => props.theme.size.verySmall};
  line-height: 1.57em;
  margin-bottom: 25px;
`

const CardButton = styled(ButtonAction)`
   margin-left: auto;
`

export {
   CardItem,
   Content,
   Title,
   Description,
   CardButton,
   HeroImage
}