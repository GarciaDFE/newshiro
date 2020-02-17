import React from "react";

import { 
    ServiceSection, 
    ServiceContainer,
    TeamSection, 
    TeamContainer,
    WrapTeam,
    PortfolioSection,
    PortfolioContainer,
} from "./styles"

import Layout from "../components/Layout";
import SEO from "../components/seo"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
import Banner from "../components/Banner"
import ServiceCards from "../components/ServiceCards"
import TitleSection from "../objects/TitleSection"
import TextSection from "../objects/TextSection"
import MemberCards from "../components/MemberCards"
import LightBox from "../components/LightBox"
import Footer from "../components/Footer"

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
        <ServiceContainer>
          <TitleSection
            title="Serviços"
            subtitle="Conheça Nossos Serviços"
          />
          <ServiceCards />
        </ServiceContainer>
      </ServiceSection>
      <TeamSection>
        <TeamContainer>
          <WrapTeam>
            <TitleSection
              title="Equipe"
              subtitle="Nossos Especialistas"
            />
            <TextSection>
              Nossa equipe é formada por profissionais com mais de 30 anos de experiência em usinagem, manutenção, recondicionamento, diagnósticos, com larga experiência industrial. No segmento de elevadores com destaque à montagens, manutenções mecânicas e usinagem em geral.
            </TextSection>
          </WrapTeam>
          <MemberCards />
        </TeamContainer>
      </TeamSection>
      <PortfolioSection>
        <PortfolioContainer>
          <LightBox>
              <TitleSection
                className="-inverse"
                title="Portfólio"
                subtitle="Alguns de nossos serviços executados"
              />
              <TextSection className="-inverse">
                Veja nossos últimos serviços executados e venha construir uma parceria conosco terceirizando seus serviços de elevadores. Com vasta experiência na área somos capazes de agregar eficiência, qualidade e valor para sua empresa.
              </TextSection>
          </LightBox>
        </PortfolioContainer>
      </PortfolioSection>
      <Footer />
    </Layout>
  )
};


export default IndexPage;
