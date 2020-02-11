import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import ButtonAction from "../../objects/ButtonAction"
import { Section, Container, Overlay, Content, Title, Description, BkgImage } from "./styles"


const Banner = ({ title, description }) => {

   const { imgBanner } = useStaticQuery(
      graphql`
        query {
          imgBanner: file(relativePath: { eq: "banner/image-banner.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }`
    )
  
   return (
      <Section>
         <Container>
            <Overlay>
               <Content>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                  <ButtonAction className="saibamais" label="Saiba mais" />
               </Content> 
            </Overlay>
            <BkgImage 
               fluid={imgBanner.childImageSharp.fluid}
               alt="imagem de polia de tração de elevador"
            />
         </Container>
      </Section>
   )
}

export default Banner;