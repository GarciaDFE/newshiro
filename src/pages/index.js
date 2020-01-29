import React from "react";
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import { Title } from "./styles"

import Layout from "../components/Layout";
import SEO from "../components/seo"

const IndexPage = () => {

  const bkgImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "bkg-template.jpg" }) {
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
      <Link to="/About">About</Link>
      <Img 
        fluid={bkgImage.file.childImageSharp.fluid}
        alt="exemplo imagem fundo"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      />
      <Title>.:. Projeto Web Gatsby JS .:.</Title>
    </Layout>
  )

};


export default IndexPage;
