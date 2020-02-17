import styled from "styled-components"
import Img from "gatsby-image"

const Gallery = styled.div`
   width: 100%;
   max-width: 1200px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap: 13px;
   background-color: aliceblue;
   box-sizing: border-box;

`

const GalleryTitle = styled.div`
   grid-row-start: 2;
   grid-row-end: 3;
   grid-column-start: 2;
   grid-column-end: 4;
   width: 100%;
   max-height: 280px;
   background-color: #A00000;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 60px;
`

const GalleryItem = styled.div`
   position: relative;
   width: 100%;
   max-width: 290px;
   max-height: 280px;
   position: relative;

`

const GalleryImg = styled(Img)`
   position: relative;
   width: 100%;
   max-width: 290px;
   height: 100%;
   max-height: 280px;

`

export {
   Gallery,
   GalleryTitle,
   GalleryItem,
   GalleryImg
}