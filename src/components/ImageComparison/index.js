import React, { useState } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

import { 
   WrapComparison,
   ImageBefore,
   ImageAfter,
   Scroller,
   IconScroller } from "./styles"

const ImageComparison = () => {

   const images = useStaticQuery (
      graphql`
         query {
            imgBefore: file(relativePath: { eq: "reparo-mecanico-antes.jpg" }) {
               childImageSharp {
                  fixed(width: 600, height: 300) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgAfter: file(relativePath: { eq: "reparo-mecanico-depois.jpg" }) {
               childImageSharp {
                  fixed(width: 600, height: 300) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
         }
      `
   )

   const [ active, setActive ] = useState(false);
   const [ recWrapper, setRecWrapper] = useState();
   const [ widthWrapper, setWidthWrapper] = useState();
   const [ imgBeforeWidth, setImgBeforeWidth ] = useState("300px");
   const [ leftScroller, setLeftScroller ] = useState("300px");
   const [ classscroller, setClassscroller ] = useState("");

   // WRAPPER EVENT
   const handleWonLoad = (event) => {
      setRecWrapper(event.target.getBoundingClientRect().left);
      setWidthWrapper(event.target.getBoundingClientRect().width);
   }

   // SCROLLER EVENTS
   const handleSMouseDown = () => {
      setActive(true);
      setClassscroller("-scrolling");
      document.body.addEventListener('mousemove', handleBodyMouseMove);
   }

   const handleSMouseUp = () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener('mousemove', handleBodyMouseMove);
   }

   const handleSMouseLeave = () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener('mousemove', handleBodyMouseMove);
   }

   // BODY EVENTS
   document.body.addEventListener('mouseup', () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener('mousemove', handleBodyMouseMove);

   });

   document.body.addEventListener('mouseleave', () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener('mousemove', handleBodyMouseMove);

   });

   // BODY FUNCTION
   const handleBodyMouseMove = event => {
      let posX = event.pageX;
      posX -= recWrapper;
      scrollIt(posX);
   }

   // SCROLLER & IMAGE FUNCTIONS
   const scrollIt = (posX) => {
      let transform = Math.max(0, (Math.min(posX, widthWrapper )));
      setImgBeforeWidth(transform + "px");
      setLeftScroller(transform + "px");
      
   }

   return (
      <WrapComparison 
         onLoad={handleWonLoad}>          
         <ImageAfter>
            <Img
               fixed={images.imgAfter.childImageSharp.fixed}
               alt="imagem depois"
               draggable="false"/>
         </ImageAfter>
         <ImageBefore imgWidth={imgBeforeWidth}>
            <Img 
               fixed={images.imgBefore.childImageSharp.fixed}
               alt="imagem antes"
               draggable="false"/>
         </ImageBefore>
         <Scroller 
            active={active}
            className={classscroller}
            onMouseDown={handleSMouseDown}
            onPointerDown={handleSMouseDown}
            leftScroller={leftScroller}
            onMouseUp={handleSMouseUp}
            onPointerUp={handleSMouseUp}
            onPoniterLeave={handleSMouseLeave}>
            <IconScroller />
         </Scroller>
      </WrapComparison>
   )
}

export default ImageComparison
