import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import { 
   ServicesListContainer,
   Side,
   ServicesTitleSection,
   ServicesTextSection,
   ListServices,
   ListIcon,
   BeforeAfterSection,
   BeforeAfterContainer,
   BeforeAfterTextSection,
   ComparisonServiceMechanical } from "./styles";

import { labels, measures } from "./content"

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Section from "../../objects/Section";
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
            imgAfter: file(relativePath: { eq: "reparo-mecanico-depois.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            imgBefore: file(relativePath: { eq: "reparo-mecanico-antes.jpg" }) {
               childImageSharp {
                  fixed(width: 600) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
         }
      `
   )
 

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
                  <Side>
                     <ComparisonServiceMechanical 
                        imgAfter={images.imgAfter.childImageSharp.fixed}
                        altAfter="imagem de depois"
                        labelAfter={labels.after}
                        imgBefore={images.imgBefore.childImageSharp.fixed}
                        altBefore="imagem de antes"
                        labelBefore={labels.before}
                        imgHeight={measures.height}
                        widthWrapper={measures.width}
                        imgWidth={measures.width}
                     />
                  </Side>
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
