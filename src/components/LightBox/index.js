import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import { Gallery, GalleryTitle, GalleryItem, GalleryImg } from "./styles"

const LightBox = ({ children }) => {
   
   const data = useStaticQuery (
      graphql`
         query imgPortifa {
            allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
               edges {
                  node {
                     childImageSharp {
                        fluid(maxWidth: 290) {
                           ...GatsbyImageSharpFluid_tracedSVG
                        }
                     }     
                  }
               }
            }
         }
      `
   )


   return (
      <Gallery>
        {data.allFile.edges.map(img => (
            <GalleryItem>
               <GalleryImg fluid={img.node.childImageSharp.fluid} />
            </GalleryItem> 
        ))}
        <GalleryTitle>{children}</GalleryTitle>
      </Gallery>
   )

}

export default LightBox