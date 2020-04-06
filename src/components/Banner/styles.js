import styled from "styled-components";
import { FadeInLeftBig, 
         FadeInRight } from "animate-css-styled-components"

import Img from "gatsby-image"

import media from "../../styles/breakPoints"

const Section = styled.section`
   width: 100%;
`

const Container = styled.div`
   position: relative;
   width: 100%;
   max-width: 1440px;
   height: auto;
   margin: 0 auto;

   ${media.lessThan("lg")`
      height: 300px;
   `}
   ${media.lessThan("sm")`
      height: 220px;
   `}

`

const Overlay = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background: ${props => props.theme.gradient.third};
   z-index: 5;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`

const Content = styled.div`
   width: 100%;
   max-width: 1200px;
   height: auto;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;

   ${media.lessThan("lg")`
      max-width: 1020px;
      height: 300px;
      margin: 0 auto;
   `}
   ${media.lessThan("1024px")`
      margin: 0 60px;
   `}
   ${media.lessThan("md")`
      align-items: center;
      margin: 0 10px;
   `}
   ${media.lessThan("sm")`
      height: 220px;
   `}

`

const AnimateTitle = styled(FadeInLeftBig)`
   width: 40%;

   ${media.lessThan("lg")`
      width: 50%;
   `}
   ${media.lessThan("1024px")`
      width: 70%;
   `}
   ${media.lessThan("800px")`
      width: 100%;
   `}
   ${media.lessThan("sm")`
      width: 100%;
   `}
   ${media.lessThan("470px")`
      width: 100%;
      margin-bottom: 5px;
   `}

`
const Title = styled.h1`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.veryBig};
   color: ${props => props.theme.color.secondyClear};
   text-transform: uppercase;
   line-height: 1.3;
   width: 100%;

   ${media.lessThan("md")`
      text-align: center;
   `}
   ${media.lessThan("sm")`
      font-size: ${props => props.theme.size.big};
      line-height: 1.2;
   `}
   ${media.lessThan("470px")`
      font-size: ${props => props.theme.size.mediumBig};
      line-height: 1.1;
   `}
   ${media.lessThan("380px")`
      font-size: ${props => props.theme.size.medium};
      line-height: 1.3;
   `}

`


// const Title = styled.h1`
//    width: 40%;
//    font-family: ${props => props.theme.font.primary};
//    font-size: ${props => props.theme.size.veryBig};
//    color: ${props => props.theme.color.secondyClear};
//    text-transform: uppercase;
//    line-height: 1.3;
//    background-color: red;

//    ${media.lessThan("lg")`
//       width: 50%;
//    `}
//    ${media.lessThan("1024px")`
//       width: 70%;
//    `}
//    ${media.lessThan("md")`
//       text-align: center;
//       margin-bottom: 5px;
//    `}
//    ${media.lessThan("800px")`
//       width: 100%;
//    `}
//    ${media.lessThan("sm")`
//       font-size: ${props => props.theme.size.big};
//       width: 100%;
//       line-height: 1.2;
//    `}
//    ${media.lessThan("470px")`
//       width: 100%;
//       font-size: ${props => props.theme.size.mediumBig};
//       margin-bottom: 5px;
//       line-height: 1.1;
//    `}
//    ${media.lessThan("380px")`
//       font-size: ${props => props.theme.size.medium};
//       line-height: 1.3;
//    `}

// `


const AnimateDescription = styled(FadeInRight)`
   width: 50%;

   ${media.lessThan("lg")`
      width: 60%;
   `}
   ${media.lessThan("1024px")`
      width: 80%;
   `}
   ${media.lessThan("md")`
      width: 90%;
   `}
   ${media.lessThan("sm")`
      width: 90%;
      margin-bottom: 10px;
   `}
   ${media.lessThan("xs")`
      width: 100%;
   `}

`

const Description = styled.p`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.medium};
   color: ${props => props.theme.color.secondyClear};
   line-height: 1.4;
   border-left: 5px solid ${props => props.theme.color.firstDark};
   padding-left: 15px;
   width: 100%;

   ${media.lessThan("md")`
      text-align: center;
      border-left: none;
      padding-left: 0;
   `}
   ${media.lessThan("sm")`
      font-size: ${props => props.theme.size.small};
      line-height: 1.3;
   `}
   ${media.lessThan("xs")`
      font-size: ${props => props.theme.size.verySmall};
   `}

`

// const Description = styled.p`
//    width: 50%;
//    font-family: ${props => props.theme.font.secondy};
//    font-size: ${props => props.theme.size.medium};
//    color: ${props => props.theme.color.secondyClear};
//    line-height: 1.4;
//    border-left: 5px solid ${props => props.theme.color.firstDark};
//    padding-left: 15px;

//    ${media.lessThan("lg")`
//       width: 60%;
//    `}
//    ${media.lessThan("1024px")`
//       width: 80%;
//    `}
//    ${media.lessThan("md")`
//       width: 90%;
//       text-align: center;
//       border-left: none;
//       padding-left: 0;
//    `}
//    ${media.lessThan("sm")`
//       width: 90%;
//       font-size: ${props => props.theme.size.small};
//       line-height: 1.3;
//       margin-bottom: 10px;
//    `}
//    ${media.lessThan("xs")`
//       width: 100%;
//       font-size: ${props => props.theme.size.verySmall};
//    `}

// `



const BkgImage = styled(Img)`
   max-width: 1440px;
   margin: 0 auto;

   ${media.lessThan("lg")`
      height: 100%;
   `}

`

export {
   Section,
   Container,
   Overlay,
   Content,
   AnimateTitle,
   Title,
   AnimateDescription,
   Description,
   BkgImage,
}