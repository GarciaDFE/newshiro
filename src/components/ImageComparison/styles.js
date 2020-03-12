import styled from "styled-components"
import { FaArrowsAltH } from "react-icons/fa";

const WrapComparison = styled.div`
   position: relative;
   width: 600px;
   height: 300px;
   overflow:hidden;
`

const ImageBefore = styled.div`
   width: ${props => props.imgWidth};
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   pointer-events: none;
   overflow: hidden;
   user-select: none;
   z-index: 10;
   &:before {
      content: "antes";
      position: absolute;
      color: black;
      font-size: 18px;
      top: 20px;
      left: 20px;
      text-transform: uppercase;
      padding: 5px 10px;
      border: 1px solid gray;
      background-color: rgba(255,255,255,0.7);
      z-index: 5;
   }
`

const ImageAfter = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   pointer-events: none;
   overflow: hidden;
   pointer-events: none;
   user-select: none;
   &:before {
      content: "depois";
      position: absolute;
      color: black;
      font-size: 18px;
      top: 20px;
      right: 20px;
      text-transform: uppercase;
      padding: 5px 10px;
      border: 1px solid gray;
      background-color: rgba(255,255,255,0.7);
      z-index: 2;
   }
`

const Scroller = styled.div`
   width: 50px;
   height: 50px;
   position: absolute;
   left: ${props => props.leftScroller};
   top: 50%;
   transform: translateY(-50%) translateX(-50%);
   border-radius: 50%;
   opacity: 0.7;
   pointer-events: auto;
   border: 5px solid ${props => props.theme.color.secondyClear};
   cursor: pointer;
   z-index: 30;

   &:hover {
      opacity: 1;
   }
   &:before,
   &:after {
      content:" ";
      display: block;
      width: 7px;
      height: 9999px;
      position: absolute;
      left: 50%;
      margin-left: -3.5px;
      transition: 0.1s;
      background: ${props => props.theme.color.secondyClear};
   }
   &:before{
      top: 100%;
   }
   &:after{
      bottom: 100%;
   }
   .-scrolling {
      pointer-events: none;
      opacity: 1;
   }
`

const IconScroller = styled(FaArrowsAltH)`
   position: absolute;
   width: 30px;
   height: 30px;
   color: ${props => props.theme.color.secondyClear};
   top: 50%;
   left: 50%;
   transform: translateX(-50%) translateY(-50%);
`

export {
   WrapComparison,
   ImageBefore,
   ImageAfter,
   Scroller,
   IconScroller,
}