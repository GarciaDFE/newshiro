import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../../components/Layout";
import SEO from "../../components/seo"
import TopBar from "../../components/TopBar"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"

const About = () => {

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
         }
      `
   )
  
   return (
      <Layout>
         <SEO title="About"/>
         <TopBar />
         <Header />
         <Banner
            title="Quem somos"
            description="Conheça um pouco da nossa história e o perfil e experiência da nossa equipe técnica."
            classButton="hidden"
            imageFluid={images.imgBanner.childImageSharp.fluid}
            imageAlt="imagem de polia de tração de elevador"    
         />
         <Footer />

      </Layout>
   )
}

export default About;
