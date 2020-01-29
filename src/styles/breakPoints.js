import { generateMedia } from "styled-media-query";

const mq = generateMedia({
   xs: "320px",
   sm: "450px",
   md: "768px",
   lg: "1200px",
   xl: "1440px",
 });

export default mq