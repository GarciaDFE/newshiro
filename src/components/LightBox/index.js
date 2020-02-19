import React from "react";

import { Gallery, GalleryTitle, GalleryItem } from "./styles"

const LightBox = ({ children, data }) => {
   
   return (
         <Gallery>
            {data.map((img) => (
               <GalleryItem fluid={img.node.childImageSharp.fluid} />
            ))}
            <GalleryTitle>{children}</GalleryTitle>
         </Gallery>
   )

}

export default LightBox