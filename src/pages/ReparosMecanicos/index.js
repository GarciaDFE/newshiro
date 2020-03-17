import React from "react";
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
         BeforeAfterTextSection,
         SideComparison } from "./styles";

import { labels, measures } from "./content"

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Section from "../../objects/Section";
import ComparisonServiceMechanical from "../../components/ImageComparison"
import Footer from "../../components/Footer";

const ReparosMecanicos = () => {
   
   const images = useStaticQuery (
      graphql`
         query {
            imgBanner: file(relativePath: { eq: "banner/banner-reparos-mecanicos.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgService: file(relativePath: { eq: "reparos-mecanicos.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgAfterLarge: file(relativePath: { eq: "comparison/reparo-mecanico-depois-large.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgBeforeLarge: file(relativePath: { eq: "comparison/reparo-mecanico-antes-large.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgAfterSmall: file(relativePath: { eq: "comparison/reparo-mecanico-depois-small.jpg" }) {
               childImageSharp {
                  fixed(width: 300) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgBeforeSmall: file(relativePath: { eq: "comparison/reparo-mecanico-antes-small.jpg" }) {
               childImageSharp {
                  fixed(width: 300) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
         }
      `
   )


   let smallImage = false
   let getWidthWindow = window.innerWidth;

   const statusImage = () => {
      if (getWidthWindow < 768) {
         return smallImage = true
      } else if (getWidthWindow >= 900 && getWidthWindow <= 1200) {
         return smallImage = true
      } else {
         return smallImage = false
      }
   }
   statusImage();

   return (
      <Layout>
         <SEO title="Reparos Mecânicos"/>
         <TopBar />
         <Header />
         <Banner
            title="Reparos Mecânicos"
            description="Serviços de reparos em máquinas de tração, motores, freios, limitadores de velocidade, cabos e polias e muito mais."
            classButton="hidden"
            imageFluid={images.imgBanner.childImageSharp.fluid}
            imageAlt="imagem de motor de polia de tração de elevador"    
         />
         <Section>
            <ServicesListContainer>
               <Side className="-content">
                  <ServicesTitleSection
                     title="Serviços"
                     subtitle="de Reparos Mecânicos"
                  />
                  <ServicesTextSection>
                     <ListServices>
                        <li><ListIcon />
                           Troca de cabos e polias de tração. Instalação de novas máquinas;
                        </li>
                        <li><ListIcon />
                           Máquinas de tração, motores, freios: eliminação de ruídos, vazamentos e ajustes de folgas;
                        </li>
                        <li><ListIcon />
                           Limitador de velocidade: serviços de recondicionamento, aferição e trocas do conjunto;
                        </li>
                        <li><ListIcon />
                           Retífica da polia de tração, recondicionamento de polias, desvios e eixos;
                        </li>
                        <li><ListIcon />
                           Alinhamento de guias, troca das corrediças, encurtamento, equalização de cabos de tração;
                        </li>
                        <li><ListIcon />
                           Elevadores hidráulicos: reparo dos pistões e geral;
                        </li>
                     </ListServices>
                  </ServicesTextSection>
               </Side>
               <Side>
                  <Img 
                     fluid={images.imgService.childImageSharp.fluid}
                     alt="imagem de serviços de reparo mecânico da Shiro Usinagens" 
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
                     <ServicesTitleSection
                        title="Antes e Depois"
                        subtitle="Exemplo de serviço"
                        className="-inverse"
                     />
                     <BeforeAfterTextSection >
                        <p>Exemplo do antes e depois em serviço de reparo no motor de tração realizado pela Shiro Usinagens.</p>
                        <p>Foi trocado lorem ipsum lorem ipsum e ajustado lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                     </BeforeAfterTextSection>
                  </Side>
               </BeforeAfterContainer>
            </BeforeAfterSection>
         </Section>
         <Footer />
      </Layout>
   )
}

export default ReparosMecanicos;
