import styled from "styled-components"
import Img from "gatsby-image"

import media from "../../styles/breakPoints"

const Gallery = styled.div`
   width: 100%;
   max-width: 1200px;
   height: auto;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-gap: 13px;
   background-color: transparent;

   ${media.lessThan("lg")`
      max-width: 900px;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
   `}
   ${media.lessThan("md")`
      max-width: 768px;
   `}
   ${media.lessThan("sm")`
      max-width: 576px;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-gap: 10px;
   `}
   ${media.lessThan("576px")`
      max-width: 320px;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-column-gap: 10px;
   `}

`

const GalleryItem = styled.div`
   position: relative;
   background-color: ${props => props.theme.color.secondyDark};
   box-sizing: border-box;

   ${media.lessThan("lg")`
      max-height: 215px;
   `}
   ${media.lessThan("md")`
      max-height: 183px;
   `}
   ${media.lessThan("sm")`
      max-height: 105px;
   `}
   ${media.lessThan("576px")`
      max-height: 155px;
   `}

`

const OverlayItem = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumBig};
   color: ${props => props.theme.color.secondyClear};
   line-height: 1.3;
   text-align: center;
   z-index: 75;
   padding: 40px;
   cursor: pointer;
   opacity: 0;
   transition: opacity 0.3s ease-out;
   background-color: rgba(0,0,0,0.7);
   &:hover {
      display: flex;
      opacity: 1;
      transition: opacity 0.3s ease-out;
   }

   ${media.lessThan("md")`
      font-size: ${props => props.theme.size.medium};
   `}
   ${media.lessThan("sm")`
      font-size: ${props => props.theme.size.small};
   `}

`

const LightboxModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.8);
  opacity: 0;
  visibility: hidden;
  z-index: 80;
  &.-visible {
     opacity: 1;
     visibility: visible;
     transition: opacity 0.5s linear;
  }
`

const LightboxContent = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 85;

  ${media.lessThan("md")`
      max-width: 80vw;
  `}
  ${media.lessThan("sm")`
      max-width: 75vw;
  `}

`

const StyledImg = styled(Img)`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   max-height: 280px;
   height: 100%;

   ${media.lessThan("lg")`
      max-height: 215px;
   `}
   ${media.lessThan("md")`
      max-height: 183px;
   `}
   ${media.lessThan("sm")`
      max-height: 105px;
   `}
   ${media.lessThan("576px")`
      max-height: 140px;
   `}

`

const OverlayImage = styled.div`
   position: relative;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: rgba(20,20,20, 0.5);
   display: flex;
   justify-content: flex-start;
   align-items: center;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumSmall};
   font-style: italic;
   color: ${props => props.theme.color.secondyLight};
   line-height: 1.3;
   letter-spacing: 0.05rem;
   z-index: 100;
   padding: 10px;

   ${media.lessThan("sm")`
      font-size: ${props => props.theme.size.small};
  `}

`

const LightboxImage = styled(Img)`
   position: fixed;
   width: 100%;
   height: 100%;
   max-width: 90vw;
   max-height: 85vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   padding-bottom: 20px;
`

const Button = styled.button`
   background-color: transparent;
   border: none;
   font-size: ${props => props.theme.size.big};
   text-indent: -9999px;
   background-position: center;
   background-repeat: no-repeat;
   cursor: pointer;
   padding: 0 20px;
   &:focus {
      outline: 0;
   }

   ${media.lessThan("sm")`
      font-size: ${props => props.theme.size.mediumBig};
   `}

`

const CloseButton = styled.button`
   position: absolute;
   top: 0;
   right: 0;
   background-color: transparent;
   z-index: 90;
   font-size: ${props => props.theme.size.big};
   padding: 0 20px;
   margin: 20px;
   border: none;
   cursor: pointer;
   background-position: center;
   background-repeat: no-repeat;
   text-indent: -9999px;
   &:focus {
      outline: 0;
   }

   ${media.lessThan("sm")`
      font-size: ${props => props.theme.size.mediumBig};
   `}

`

const Arrows = styled.div`
   position: absolute;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;
   z-index: 90;

   ${media.lessThan("md")`
      padding: 0 15px;
   `}
   ${media.lessThan("sm")`
      padding: 0 10px;
   `}
   ${media.lessThan("xs")`
      padding: 0 5px;
   `}

`

export {
   Gallery,
   GalleryItem,
   LightboxModal,
   LightboxContent,
   StyledImg,
   LightboxImage,
   Button,
   CloseButton,
   Arrows,
   OverlayItem,
   OverlayImage
}