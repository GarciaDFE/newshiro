import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import { ServicesListContainer,
         Side,
         ServicesTitleSection,
         ServicesTextSection,
         ListServices,
         ListIcon,
         BeforeAfterSection,
         BeforeAfterContainer,
         BeforeAfterTitleSection,
         BeforeAfterTextSection,
         SideComparison,
         PortfolioSection,
         PortfolioContainer,
         GalleryContainer } from "./styles";

import { labels, measures, services } from "./content"

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Section from "../../objects/Section";
import TitleSection from "../../objects/TitleSection"
import ComparisonServiceMechanical from "../../components/ImageComparison"
import LightBox from "../../components/LightBox"
import Footer from "../../components/Footer";

const UsinagemGeral = () => {
   
   const images = useStaticQuery (
      graphql`
         query {
            imgBanner: file(relativePath: { eq: "banner/banner-usinagem.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgService: file(relativePath: { eq: "usinagem.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgAfterLarge: file(relativePath: { eq: "comparison/usinagem-depois-large.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgBeforeLarge: file(relativePath: { eq: "comparison/usinagem-antes-large.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgAfterSmall: file(relativePath: { eq: "comparison/usinagem-depois-small.jpg" }) {
               childImageSharp {
                  fixed(width: 300) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgBeforeSmall: file(relativePath: { eq: "comparison/usinagem-antes-small.jpg" }) {
               childImageSharp {
                  fixed(width: 300) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgGallery: allFile(filter: {relativeDirectory: {eq: "portfolio-usinagem"}}) {
               edges {
                 node {
                   childImageSharp {
                     sizes(maxHeight: 500) {
                       ...GatsbyImageSharpSizes
                     }
                   }
                 }
               }
            }     
         }
      `
   )


   let defaultWidth
   let smallImage = false

   if (typeof window !== `undefined`) {
      defaultWidth = window.innerWidth
   }

   const useWindowSize = () => {
      const [dimensions, setDimensions] = useState(defaultWidth)

      useEffect(() => {
         const handler = () => setDimensions(window.innerWidth)
         window.addEventListener(`resize`, handler)
         return () => window.removeEventListener(`resize`, handler)
      }, [])

      return dimensions
   }

   let getWidthWindow = useWindowSize()

   if (getWidthWindow < 768) {
      smallImage = true
   } else if (getWidthWindow >= 900 && getWidthWindow <= 1200) {
      smallImage = true
   } else {
      smallImage = false
   }

   return (
      <Layout>
         <SEO title="Usinagens em geral"/>
         <TopBar 
            andress="Rua Coronel Fawcett, 454 – Vila Morais – São Paulo-SP"
            whatsapp="(11) 94901-5967 / (11) 98763-9248"
         />
         <Header />
         <Banner
            title="Usinagens em geral"
            description="Serviços de usinagens em geral, retífica de polias em torno convencional, usinagem de eixos buchas e polias de desvio"
            classButton="hidden"
            imageFluid={images.imgBanner.childImageSharp.fluid}
            imageAlt="imagem parcial de usinagem de peça de elevador"    
         />
         <Section>
            <ServicesListContainer>
               <Side className="-content">
                  <ServicesTitleSection
                     title="Serviços"
                     subtitle="de Usinagens em geral"
                  />
                  <ServicesTextSection>
                     <ListServices>
                        <li><ListIcon />
                           Retífica de polias em torno convencional;
                        </li>
                        <li><ListIcon />
                           Usinagem de eixos, buchas e polias de desvio;
                        </li>
                        <li><ListIcon />
                           Utilizamos as mesmas características de matéria-prima, dimensões e tratamentoos utilizados nas peças originais;
                        </li>
                     </ListServices>
                  </ServicesTextSection>
               </Side>
               <Side>
                  <Img 
                     fluid={images.imgService.childImageSharp.fluid}
                     alt="imagem de usinagem em peça em torno da Shiro Usinagens" 
                  />
               </Side>
            </ServicesListContainer>
         </Section>
         <Section>
            <BeforeAfterSection>
               <BeforeAfterContainer>
                  <SideComparison>
                     <ComparisonServiceMechanical
                        className=""
                        imgAfter={smallImage ? images.imgAfterSmall.childImageSharp.fixed : images.imgAfterLarge.childImageSharp.fixed}
                        altAfter="imagem de depois"
                        labelAfter={labels.after}
                        imgBefore={smallImage ? images.imgBeforeSmall.childImageSharp.fixed : images.imgBeforeLarge.childImageSharp.fixed}
                        altBefore="imagem de antes"
                        labelBefore={labels.before}
                        widthComponent={measures.width}
                        heightComponent={measures.height}
                        small={smallImage}
                     />
                  </SideComparison>
                  <Side className="-content">
                     <BeforeAfterTitleSection
                        title="Antes e Depois"
                        subtitle="Exemplo de serviço"
                        className="-inverse"
                     />
                     <BeforeAfterTextSection >
                        <p>Exemplo do antes e depois em serviço de usinagem em peças de elevador realizado pela Shiro Usinagens.</p>
                        <p>Foi restaurado lorem ipsum lorem ipsum e ajustado lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                     </BeforeAfterTextSection>
                  </Side>
               </BeforeAfterContainer>
            </BeforeAfterSection>
         </Section>
         <PortfolioSection>
            <PortfolioContainer>
               <TitleSection
                  title="Galeria"
                  subtitle="Conheça nossos trabalhos"
               />
               <GalleryContainer>
                  <LightBox data={images.imgGallery.edges} services={services}></LightBox>
               </GalleryContainer>
            </PortfolioContainer>
         </PortfolioSection>
         <Footer />
      </Layout>
   )
}

export default UsinagemGeral;
