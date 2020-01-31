import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { Title } from "./styles"

import Layout from "../components/Layout";
import SEO from "../components/seo"
import TopBar from "../components/TopBar"
import Header from "../components/Header"

const IndexPage = () => {

  const { bkgImage } = useStaticQuery(
    graphql`
      query {
        bkgImage: file(relativePath: { eq: "bkg-template.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }`
  )

  return (
    <Layout>
      <SEO title="Home"/>
      <TopBar />
      <Header />
      <Img 
        fluid={bkgImage.childImageSharp.fluid}
        alt="exemplo imagem fundo"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      />
      <Title>.:. Projeto Web Gatsby JS .:.</Title>
    </Layout>
  )

};


export default IndexPage;
