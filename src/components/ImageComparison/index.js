import React, { useState } from "react";
import Img from "gatsby-image";

import { WrapComparison,
         ImageBefore,
         ImageAfter,
         Scroller,
         IconScroller } from "./styles"

const ImageComparison = ({ className,
                           imgAfter, 
                           altAfter, 
                           imgBefore, 
                           altBefore, 
                           labelAfter, 
                           labelBefore,
                           widthComponent,
                           heightComponent, small }) => {

   const [ active, setActive ] = useState(false);
   const [ recWrapper, setRecWrapper] = useState();
   const [ widthWrapper, setWidthWrapper] = useState(widthComponent);
   const [ heightWrapper, setHeightWrapper ] = useState(heightComponent);
   const [ imgBeforeWidth, setImgBeforeWidth ] = useState(widthComponent * 0.5);
   const [ leftScroller, setLeftScroller ] = useState(widthComponent * 0.5);
   const [ classscroller, setClassscroller ] = useState("");
   
   // WRAPPER EVENT
   const handleWonLoad = (event) => {
      setRecWrapper(event.target.getBoundingClientRect().left);
      setImgBeforeWidth(widthComponent * 0.5);
      setWidthWrapper(widthComponent);
      setHeightWrapper(heightComponent);
      small ? 
         setLeftScroller(widthComponent * 0.25) : 
         setLeftScroller(widthComponent * 0.5)
   }
   
   // SCROLLER EVENTS POINTER AND TOUCH
   const handleSMouseDown = () => {
      setActive(true);
      setClassscroller("-scrolling");
      if (typeof document !== `undefined`) {
         document.body.addEventListener('mousemove', handleBodyMouseMove);
         document.body.addEventListener('touchstart', handleBodyMouseMove);
      }
   }

   const handleSMouseUp = () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener('mousemove', handleBodyMouseMove);
      document.body.removeEventListener('touchstart', handleBodyMouseMove);
   }

   const handleSMouseLeave = () => {
      setActive(false);
      setClassscroller("");
      document.body.removeEventListener('mousemove', handleBodyMouseMove);
      document.body.removeEventListener('touchstart', handleBodyMouseMove);
   }

   // BODY EVENTS
   if (typeof document !== `undefined`) {
      document.body.addEventListener('mouseup', () => {
         setActive(false);
         setClassscroller("");
         document.body.removeEventListener('mousemove', handleBodyMouseMove);
      });
      document.body.addEventListener('touchend', () => {
         setActive(false);
         setClassscroller("");
         document.body.removeEventListener('touchstart', handleBodyMouseMove);
      });
   }


   if (typeof document !== `undefined`) {
      document.body.addEventListener('mouseleave', () => {
         setActive(false);
         setClassscroller("");
         document.body.removeEventListener('mousemove', handleBodyMouseMove);
      });
      document.body.addEventListener('touchleave', () => {
         setActive(false);
         setClassscroller("");
         document.body.removeEventListener('mousemove', handleBodyMouseMove);
         document.body.removeEventListener('touchstart', handleBodyMouseMove);
      });
   }
   
   // BODY FUNCTION
   const handleBodyMouseMove = event => {
      let posX = event.pageX;
      posX -= recWrapper;
      scrollIt(posX);
   }

   // SCROLLER & IMAGE FUNCTIONS
   const scrollIt = (posX) => {
      let transform = Math.max(0, (Math.min(posX, widthWrapper )));
      setLeftScroller(transform);
      small ? 
         setImgBeforeWidth(transform * 2) : 
         setImgBeforeWidth(transform)
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
            className={classscroller}
            onMouseDown={handleSMouseDown}
            onTouchStart={handleSMouseDown}
            onPointerDown={handleSMouseDown}
            leftScroller={leftScroller}
            onMouseUp={handleSMouseUp}
            onPointerUp={handleSMouseUp}
            onTouchEnd={handleSMouseUp}
            onPointerLeave={handleSMouseLeave}
            onTouchCancel={handleSMouseLeave}>
            <IconScroller />
         </Scroller>
      </WrapComparison>
   )
}

export default ImageComparison