import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

// import TitleSection from "../../objects/TitleSection"
// import TextSection from "../../objects/TextSection"

import { Gallery, GalleryTitle, GalleryItem, GalleryImg } from "./styles"

const LightBox = ({ children }) => {
   
   const { img01, img02, img03, img04, img05,
           img06, img07, img08, img09, img10 } = useStaticQuery (
      graphql`
         query {
            img01: file(relativePath: { eq: "portfolio/img01.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            img02: file(relativePath: { eq: "portfolio/img02.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            img03: file(relativePath: { eq: "portfolio/img03.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            img04: file(relativePath: { eq: "portfolio/img04.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            img05: file(relativePath: { eq: "portfolio/img05.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            img06: file(relativePath: { eq: "portfolio/img06.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            img07: file(relativePath: { eq: "portfolio/img07.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            img08: file(relativePath: { eq: "portfolio/img08.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            img09: file(relativePath: { eq: "portfolio/img09.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            img10: file(relativePath: { eq: "portfolio/img10.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 290) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
         }
      `
   )


   return (
      <Gallery>
            <GalleryItem>
               <GalleryImg fluid={img01.childImageSharp.fluid} />
            </GalleryItem> 
            <GalleryItem>
               <GalleryImg fluid={img02.childImageSharp.fluid} />
            </GalleryItem> 
            <GalleryItem>
               <GalleryImg fluid={img03.childImageSharp.fluid} />
            </GalleryItem> 
            <GalleryItem>
               <GalleryImg fluid={img04.childImageSharp.fluid} />
            </GalleryItem> 
            <GalleryItem>
               <GalleryImg fluid={img05.childImageSharp.fluid} />
            </GalleryItem>
            <GalleryTitle>{children}</GalleryTitle>
            <GalleryItem>
               <GalleryImg fluid={img06.childImageSharp.fluid} />
            </GalleryItem> 
            <GalleryItem>
               <GalleryImg fluid={img07.childImageSharp.fluid} />
            </GalleryItem> 
            <GalleryItem>
               <GalleryImg fluid={img08.childImageSharp.fluid} />
            </GalleryItem> 
            <GalleryItem>
               <GalleryImg fluid={img09.childImageSharp.fluid} />
            </GalleryItem> 
            <GalleryItem>
               <GalleryImg fluid={img10.childImageSharp.fluid} />
            </GalleryItem> 
      </Gallery>
   )
}

export default LightBox