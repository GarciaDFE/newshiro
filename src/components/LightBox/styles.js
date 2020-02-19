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
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 1fr);
   `}
   ${media.lessThan("md")`
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 1fr);
   `}
   ${media.lessThan("xs")`
      grid-template-columns: 1fr;
      grid-template-rows: repeat(11, 1fr);
      grid-column-gap: 0;
   `}

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
      padding: 40px;
   `}
   ${media.lessThan("md")`
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 1;
      grid-column-end: 3;
      padding: 0 80px;
   `}
   ${media.lessThan("sm")`
      padding: 0 40px;
   `}
   ${media.lessThan("xs")`
      padding: 20px;
      grid-row-start: 5;
      grid-row-end: 6;
      grid-column-start: 1;
      grid-column-end: 2;
   `}

`

const GalleryItem = styled(Img)`
   display: block;
   width: 100%;
   object-fit: contain;
   height: auto;
   max-height: 280px;
   filter: blur(0px);
   transition: filter 0.3s ease-in;
   cursor: pointer;
   &:hover {
      filter: blur(2px);
   }
`


const LightboxModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const LightboxContent = styled.div`
  margin: 15px;
  max-width: 700px;
  width: 100%;

`
const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%; /* or whatever */
  & > img {
    object-fit: cover !important; /* or whatever */
    object-position: 0% 0% !important; /* or whatever */
  }
`

export {
   Gallery,
   GalleryTitle,
   GalleryItem,
   LightboxModal,
   LightboxContent,
   StyledImg
}