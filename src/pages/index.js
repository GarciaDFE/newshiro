import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import services from "./content"
import { 
    ServiceSection, 
    ServiceContainer,
    TeamSection, 
    TeamContainer,
    WrapTeam,
    PortfolioSection,
    PortfolioContainer,
    GalleryTitle,
    TitleGallery,
    TextGallery } from "./styles"

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

  const content = useStaticQuery (
    graphql`
      query {
        imgPortfolio: allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
          edges {
            node {
              childImageSharp {
                sizes(maxHeight: 500) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
        imgBanner: file(relativePath: { eq: "banner/banner-home.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        infos: markdownRemark {
          frontmatter {
            action
            classButton
            description
            imageAlt
            imageFluid
            title
            whatsapp
            andress
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home"/>
      <TopBar 
        andress={content.infos.frontmatter.andress}
        whatsapp={content.infos.frontmatter.whatsapp}
      />
      <Header />
      <Banner
        title={content.infos.frontmatter.title}
        description={content.infos.frontmatter.description}
        action={content.infos.frontmatter.action}
        imageFluid={content.imgBanner.childImageSharp.fluid}
        imageAlt={content.infos.frontmatter.imageAlt}
        classButton={content.infos.frontmatter.classButton}
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
          <LightBox data={content.imgPortfolio.edges} services={services}>
            <GalleryTitle>
              <TitleGallery
                className="-inverse"
                title="Portfólio"
                subtitle="Alguns de nossos serviços executados"
              />
              <TextGallery className="-inverse">
                Veja nossos últimos serviços executados e venha construir uma parceria conosco terceirizando seus serviços de elevadores. Com vasta experiência na área somos capazes de agregar eficiência, qualidade e valor para sua empresa.
              </TextGallery>
            </GalleryTitle>
          </LightBox>
        </PortfolioContainer>
      </PortfolioSection>
      <Footer />
    </Layout>
  )
};

export default IndexPage;
