import React, { useState } from "react";
import Img from "gatsby-image";

import { 
   WrapComparison,
   ImageBefore,
   ImageAfter,
   Scroller,
   IconScroller } from "./styles"

const ImageComparison = ({ 
   className,
   imgAfter, 
   altAfter, 
   imgBefore, 
   altBefore, 
   labelAfter, 
   labelBefore,
   imgHeight,
   imgWidth }) => {

   const [ active, setActive ] = useState(false);
   const [ recWrapper, setRecWrapper] = useState();
   const [ widthWrapper, setWidthWrapper] = useState();
   const [ imgBeforeWidth, setImgBeforeWidth ] = useState();
   const [ leftScroller, setLeftScroller ] = useState();
   const [ classscroller, setClassscroller ] = useState("");
   
   // WRAPPER EVENT
   const handleWonLoad = (event) => {
      setRecWrapper(event.target.getBoundingClientRect().left);
      setImgBeforeWidth((imgWidth * 0.5) + "px");
      setWidthWrapper(event.target.getBoundingClientRect().width);
      setLeftScroller((imgWidth * 0.5) + "px");
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
         className={className}
         onLoad={handleWonLoad}
         onChange={handleWonLoad}> 
         <ImageAfter 
            className={className} 
            labelAfter={labelAfter} 
            imgHeight={imgHeight}>
            <Img fixed={imgAfter} alt={altAfter} draggable="false" />
         </ImageAfter>
         <ImageBefore 
            className={className}
            labelBefore={labelBefore} 
            imgHeight={imgHeight}
            imgBeforeWidth={imgBeforeWidth}>
            <Img fixed={imgBefore} alt={altBefore} draggable="false" />
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
