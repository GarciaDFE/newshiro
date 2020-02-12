import React from "react";

import { ServiceSection, Container } from "./styles"

import Layout from "../components/Layout";
import SEO from "../components/seo"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
import Banner from "../components/Banner"
import ServiceCards from "../components/ServiceCards"
import TitleSection from "../objects/TitleSection"
import CardSimple from "../components/CardSimple"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home"/>
      <TopBar />
      <Header />
      <Banner
        title="Terceirização de Serviços de Elevadores"
        description="Venha construir uma parceria delegando a responsabilidade da sua área de manutenção mecânica para nossa equipe com vasta experiência na área, agregando eficiência, qualidade e rapidez a sua empresa."  
      />
      <ServiceSection>
        <Container>
          <TitleSection
            title="Serviços"
            subtitle="Conheça Nossos Serviços"
          />
          <ServiceCards />
        </Container>
      </ServiceSection>
      <ServiceSection>
        <Container>
        <CardSimple />
        </Container>
      </ServiceSection>

    </Layout>
  )
};


export default IndexPage;
