import { keyframes } from "styled-components";
import fadeInLeft from "react-animations/lib/fade-in-left"
import fadeInRight from "react-animations/lib/fade-in-right"
import fadeIn from "react-animations/lib/fade-in"

const fInLeft = keyframes`${fadeInLeft}`
const fInRight = keyframes`${fadeInRight}`
const fIn = keyframes`${fadeIn}`

const theme = {
  color: {
    firstDark: "#A00000", // dark red
    secondyClear: "#FFFFFF", // white
    secondyLight: "#F5F5F5", // light gray
    secondyMedium: "#757575", // medium gray
    secondyDark: "#000000", // black
    thirdMedium: "#0089FF", // medium blue
    msgerr: "#FF0000",
    msgok: "#019601",
    overlay: "rgba(0,0,0,0.7)" // opacity 70% black
  },
  font: {
    primary: `
     Ubuntu,
     Roboto,
     Helvetica,
     Arial,
     sans-serif,
     -apple-system,
     BlinkMacSystemFont`,
    secondy: `
     Roboto,
     Helvetica,
     Arial,
     sans-serif,
     -apple-system,
     BlinkMacSystemFont`
  },
  gradient: {
    primary: `linear-gradient(107deg, rgb(199, 60, 60), rgb(160, 0, 0))`,
    secondy: `linear-gradient(45deg, rgba(0, 70, 124, 0.8), rgba(0, 0, 0, 0.5))`,
    third: `linear-gradient(74deg, #000000, rgba(0, 0, 0, 0.5))`,
    fourth: `linear-gradient(to right, #fafbff 0%, #f2f5fa 100%)`,
  },
  size: {
    verySmall: "1.4rem",
    small: "1.5rem",
    mediumSmall: "1.6rem",
    medium: "1.8rem",
    mediumBig: "2.5rem",
    big: "3rem",
    veryBig: "3.5rem"
  },
  animation: {
    fadeInLeft: fInLeft,
    fadeInRight: fInRight,
    fadeIn: fIn
  }
};

export default theme;
