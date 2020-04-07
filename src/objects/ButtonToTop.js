import React, { useState } from "react"
import styled from "styled-components"

import smoothScroll from "../util/smoothScroll"

import icoToTop from "../images/btn-totop.svg"

const Button = styled.button`
   display: block;
   position: fixed;
   width: 45px;
   height: 45px;
   border-radius: 50%;
   bottom: 20px;
   right: 20px;
   opacity: 0;
   transition: opacity 0.5s linear;
   z-index: 20;
   margin: 0;
   padding: 0;
   box-shadow: 1px 1px 10px gray;
   border: 0;
   outline: none;
   cursor: none;
   pointer-events: none;
   &.-visible {
      opacity: 0.5;
      transition: opacity 0.5s linear;
      cursor: pointer;
      pointer-events: visible;
      &:hover {
         opacity: 1;
         transition: opacity 0.3s linear;
      }

   }
`

const ButtonToTop = () => {

   const [visible, setVisible] = useState("")

   window.onscroll = () => {
      let top = window.pageYOffset;
      if (top >= 300) {
         setVisible("-visible")
      } else {
         setVisible("")
      }
   }
   
   const handleClick = () => {
      smoothScroll(window, 1500, 0)
   }

   return (
      <Button className={visible} onClick={handleClick}>
         <img src={icoToTop} alt="botão para subir ao topo"/>
      </Button>
   )
}

export default ButtonToTop