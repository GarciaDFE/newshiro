import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

//import { } from "./styles";

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
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
         <Footer />
      </Layout>
   )
}

export default ReparosMecanicos;
