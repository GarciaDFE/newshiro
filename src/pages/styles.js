import styled from "styled-components";
import media from "../styles/breakPoints"

import Section from "../objects/Section"
import Container from "../objects/Container"
import TitleSection from "../objects/TitleSection"
import TextSection from "../objects/TextSection"

// SERVICE HOME
const ServiceSection = styled(Section)`
   padding: 70px 0;
   background-color: transparent;
`

const ServiceContainer = styled(Container)`
   flex-direction: column;
   background-color: ${props => props.theme.color.secondyClear};
`

// TEAM HOME
const TeamSection = styled(Section)`
   max-width: 1440px;
   background-image: ${props => props.theme.gradient.fourth};
   margin: 0 auto;
`

const TeamContainer = styled(Container)`
   max-width: 960px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 70px 0;

   ${media.lessThan("md")`
      max-width: 600px;
      flex-direction: column;
   `}

   ${media.lessThan("sm")`
      max-width: 90%;
   `}


`

const WrapTeam = styled.div`
   width: 100%;
   max-width: 400px;
   padding: 25px 50px 25px 0;

   ${media.lessThan("md")`
      max-width: 100%;
      padding: 25px 0;
   `}

`

// PORTFOLIO HOME
const PortfolioSection = styled(Section)`
   padding: 70px 0 30px;
   background-color: ${props => props.theme.color.secondyClear};
`

const PortfolioContainer = styled(Container)`
   background-color: ${props => props.theme.color.secondyClear};
`

const GalleryTitle = styled.div`
   grid-row-start: 2;
   grid-row-end: 3;
   grid-column-start: 2;
   grid-column-end: 4;
   width: 100%;
   height: auto;
   max-height: 280px;
   background-color: ${props => props.theme.color.firstDark};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 60px;

   ${media.lessThan("lg")`
      padding: 20px;
      max-height: 215px;
   `}
   ${media.lessThan("md")`
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 4;
      padding: 0 15px;
      max-height: 190px;
   `}
   ${media.lessThan("sm")`
      grid-row-start: 2;
      grid-row-end: 4;
      grid-column-start: 1;
      grid-column-end: 6;
      padding: 20px;
      max-height: 100%;
   `}
   ${media.lessThan("576px")`
      padding: 20px;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 3;
   `}
   ${media.lessThan("xs")`
      padding: 20px;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 3;
   `}
   ${media.lessThan("576px")`
      max-height: 155px;
      padding: 0 10px;
   `}
`

const TitleGallery = styled(TitleSection)`

   ${media.lessThan("lg")`
      &.-inverse {
         margin-bottom: 5px;
      }
   `}

`
const TextGallery = styled(TextSection)`

   ${media.lessThan("lg")`
      line-height: 1.3;
   `}
   ${media.lessThan("md")`
      text-align: center;
   `}
   ${media.lessThan("sm")`
      line-height: 1.5;
   `}
   ${media.lessThan("576px")`
      display: none;
   `}

`

export { 
   ServiceSection,
   ServiceContainer,
   TeamSection,
   TeamContainer,
   WrapTeam,
   PortfolioSection,
   PortfolioContainer,
   GalleryTitle,
   TitleGallery,
   TextGallery
}