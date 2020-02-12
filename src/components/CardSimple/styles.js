import styled from "styled-components";
import Img from "gatsby-image"

const CardItem = styled.dl`
   position: relative;
   box-sizing: border-box;
   border: 0.5px solid ${props => props.theme.color.secondyLight};
   background-color: ${props => props.theme.color.secondyClear};
   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);
   text-align: center;
`

const Content = styled.li`
   list-style: none;
   margin: 0;
   padding: 20px;
   border-top: 2px solid ${props => props.theme.color.secondyLight};
`

const Name = styled.dt`
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.secondyDark};
  font-size: ${props => props.theme.size.medium};
  font-weight: 700;
  line-height: 1.33;
  margin-bottom: 10px;
`

const MemberImage = styled(Img)`
   width: 100%;
   margin-bottom: -5px;
   padding: 0;
`

const Skills = styled.ul`
  font-family: ${props => props.theme.font.secondy};
  color: ${props => props.theme.color.firstDark};
  font-size: ${props => props.theme.size.verySmall};
  text-transform: uppercase;
  line-height: 1.57rem;
  list-style: none;
  text-align: center;
  margin: 0;
`

const Contact = styled.dd`
   width: 100%;
   font-family: ${props => props.theme.font.secondy};
   color: ${props => props.theme.color.secondyDark};
   font-size: ${props => props.theme.size.medium};
   font-weight: 700;
   text-align: center;
   position: absolute;
   bottom: 20px;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
`

export {
   CardItem,
   Content,
   Name,
   Skills,
   Contact,
   MemberImage
}