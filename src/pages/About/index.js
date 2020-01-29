import React from "react";
import { Link } from "gatsby"
import { Container } from "./styles"

import Layout from "../../components/Layout";
import SEO from "../../components/seo"

const About = () => {
   return (
      <Layout>
         <SEO title="About"/>
            <Container>
               <h1>Page About</h1>
            </Container>
            <Link to="/">Voltar</Link>
      </Layout>
   )
}

export default About;