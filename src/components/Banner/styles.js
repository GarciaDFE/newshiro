import styled from "styled-components";
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
      height: 334px;
   `}
   ${media.lessThan("sm")`
      height: 200px;
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
      height: 334px;
      margin: 0 auto;
   `}
   ${media.lessThan("1024px")`
      margin: 0 10px;
   `}
   ${media.lessThan("md")`
      align-items: center;
   `}
   ${media.lessThan("sm")`
      height: 200px;
   `}

`

const Title = styled.h1`
   width: 40%;
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.veryBig};
   color: ${props => props.theme.color.secondyClear};
   text-transform: uppercase;
   line-height: 1.3;

   ${media.lessThan("lg")`
      width: 50%;
   `}
   ${media.lessThan("1000px")`
      width: 60%;
   `}
   ${media.lessThan("900px")`
      width: 70%;
   `}
   ${media.lessThan("md")`
      font-size: ${props => props.theme.size.big};
      text-align: center;
      width: 80%;
   `}
   ${media.lessThan("650px")`
      width: 100%;
   `}
   ${media.lessThan("sm")`
      font-size: ${props => props.theme.size.medium};
      margin-bottom: 5px;
      line-height: 1.2;
   `}

`

const Description = styled.p`
   width: 50%;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.medium};
   color: ${props => props.theme.color.secondyClear};
   line-height: 1.4;

   ${media.lessThan("lg")`
      width: 60%;
   `}
   ${media.lessThan("1000px")`
      width: 70%;
   `}
   ${media.lessThan("900px")`
      width: 80%;
   `}
   ${media.lessThan("md")`
      font-size: ${props => props.theme.size.small};
      text-align: center;
      width: 90%;
   `}
   ${media.lessThan("650px")`
      width: 100%;
   `}
   ${media.lessThan("sm")`
      font-size: ${props => props.theme.size.verySmall};
      margin-bottom: 5px;
      line-height: 1.2;
   `}

`

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
   Title,
   Description,
   BkgImage
}