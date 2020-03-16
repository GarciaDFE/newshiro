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
   widthComponent,
   heightComponent,
   small }) => {

   const [ active, setActive ] = useState(false);
   const [ recWrapper, setRecWrapper] = useState();
   const [ widthWrapper, setWidthWrapper] = useState(widthComponent);
   const [ heightWrapper, setHeightWrapper ] = useState(heightComponent);
   const [ imgBeforeWidth, setImgBeforeWidth ] = useState(widthComponent * 0.5);
   const [ leftScroller, setLeftScroller ] = useState(widthComponent * 0.5);
   const [ classscroller, setClassscroller ] = useState("");
   const [ statusSmall, setStatusSmall ] = useState(small);
   
   // WRAPPER EVENT
   const handleWonLoad = (event) => {
      setRecWrapper(event.target.getBoundingClientRect().left);
      setImgBeforeWidth(widthComponent * 0.5);
      setWidthWrapper(widthComponent);
      setHeightWrapper(heightComponent);
      setLeftScroller(widthComponent * 0.5)
      setStatusSmall(small);
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
      setImgBeforeWidth(transform);
      setLeftScroller(transform);
   }

   return (
      <WrapComparison 
         className={className}
         onLoad={handleWonLoad}> 
         <ImageAfter 
            className={className}
            widthComponent={widthWrapper}
            heightComponent={heightWrapper}   
            labelAfter={labelAfter}>
            <Img fixed={imgAfter} alt={altAfter} draggable="false" />
         </ImageAfter>
         <ImageBefore 
            className={className}
            heightComponent={heightWrapper}   
            labelBefore={labelBefore}
            imgBeforeWidth={imgBeforeWidth}>
            <Img fixed={imgBefore} alt={altBefore} draggable="false" />
         </ImageBefore>
         <Scroller 
            active={active}
            statusSmall={statusSmall}
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
