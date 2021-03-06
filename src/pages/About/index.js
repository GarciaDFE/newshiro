import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import { 
   AboutContainer,
   Side,
   DifferentialsContainer,
   HistoryTitleSection,
   HistoryTextSection,
   ListDifferentials,
   ListIcon,
   TeamContainer,
   AboutTeam } from "./styles"

import Layout from "../../components/Layout";
import SEO from "../../components/seo"
import TopBar from "../../components/TopBar"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Section from "../../objects/Section"
import TitleSection from "../../objects/TitleSection"
import Footer from "../../components/Footer"

const AboutPage = () => {

   const images = useStaticQuery (
      graphql`
         query {
            imgBanner: file(relativePath: { eq: "banner/banner-about.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgHistory: file(relativePath: { eq: "about-history.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
            imgDifferentials: file(relativePath: { eq: "about-differentials.jpg" }) {
               childImageSharp {
                  fluid(maxWidth: 1440) {
                     ...GatsbyImageSharpFluid_tracedSVG
                  }
               }
            }
         }
      `
   )
  
   return (
      <Layout>
         <SEO title="Sobre"/>
         <TopBar 
            andress="Rua Coronel Fawcett, 454 – Vila Morais – São Paulo-SP"
            whatsapp="(11) 94901-5967 / (11) 98763-9248"
         />
         <Header />
         <Banner
            title="Quem somos"
            description="Conheça um pouco da nossa história e o perfil e experiência da nossa equipe técnica."
            classButton="hidden"
            imageFluid={images.imgBanner.childImageSharp.fluid}
            imageAlt="imagem da oficina da Shiro Usinagens"    
         />
         <Section>
            <AboutContainer>
               <Side className="-content">            
                  <HistoryTitleSection
                     title="Sobre"
                     subtitle="a Shiro Usinagens"
                  />
                  <HistoryTextSection>
                     <p>A <strong>Shiro Usinagens</strong> é uma empresa atuando em parceria com nossos clientes prestando serviços na solução de suas demandas, com agilidade, qualidade e a melhor relação custo x benefício do mercado.</p>
                     <p>Nossa equipe é formada por profissionais com mais de 30 ano de experiência em usinagem de pequeno e médio porte, manutenção, recondicionamento, diagnósticos, com larga experiência industrial e no segmento de elevadores com destaque à montagens, manutenções mecânicas e usinagem em geral.</p>
                  </HistoryTextSection>
               </Side>
               <Side>
                  <Img 
                     fluid={images.imgHistory.childImageSharp.fluid}
                     alt="imagem da oficina da Shiro Usinagens"
                  />
               </Side>               
            </AboutContainer>
         </Section>
         <Section>
            <DifferentialsContainer>
               <Side>
                  <Img 
                     fluid={images.imgDifferentials.childImageSharp.fluid}
                     alt="imagem de torno da oficina da Shiro Usinagens"
                  />
               </Side>               

               <Side className="-content">      
                  <HistoryTitleSection
                     title="Porque escolher"
                     subtitle="a Shiro Usinagens"
                  />
                  <HistoryTextSection>
                     <ListDifferentials>
                        <li><ListIcon />Atendimento com agilidade e qualidade;</li>
                        <li><ListIcon />Preços competitivos com a melhor relação custo x benefício;</li>
                        <li><ListIcon />Trabalhamos com segurança e responsabilidade;</li>
                        <li><ListIcon />Equipe com mais de 30 anos de experiência;</li>
                        <li><ListIcon />Retífica de polia direto na casa de máquinas com torno portátil;</li>
                        <li><ListIcon />Terceirização de serviços de elevadores capaz de agregar valor a sua empresa;</li>
                     </ListDifferentials>
                  </HistoryTextSection>
               </Side>
            </DifferentialsContainer>
         </Section>
         <Section>
            <TeamContainer>
               <TitleSection
                  title="Equipe"
                  subtitle="Nossos Especialistas"
               />
               <AboutTeam />
            </TeamContainer>
         </Section>
         <Footer />
      </Layout>
   )
}

export default AboutPage;
