import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import { FormContainer, WrapContent, WrapForm, MapContainer } from "./styles";

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Section from "../../objects/Section";
import LocalMap from "../../objects/LocalMap"
import Footer from "../../components/Footer";

const ContactPage = () => {

   const local = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2184084422756!2d-46.615661148986355!3d-23.632348070028424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b14b9609f53%3A0x36961263b9d4bccc!2sRua%20Coronel%20Fawcett%2C%20454%20-%20Vila%20Moraes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004167-030!5e0!3m2!1spt-BR!2sbr!4v1583332049834!5m2!1spt-BR!2sbr"

   const images = useStaticQuery (
      graphql`
         query {
            imgBanner: file(relativePath: { eq: "banner/banner-contact.jpg" }) {
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
         <SEO title="Contatos"/>
         <TopBar />
         <Header />
         <Banner
            title="Contatos"
            description="Conheça nossos canais de contato por telefone, WhatsApp, e-mail, formulário de mensagem ou venha tomar um café conosco."
            classButton="hidden"
            imageFluid={images.imgBanner.childImageSharp.fluid}
            imageAlt="imagem de polias de tração de elevador"    
         />
         <Section>
            <FormContainer>
               <WrapContent>
                  Contatos
               </WrapContent>
               <WrapForm>
                  <form action="" method="POST">
                     <div className="field">
                        <label for="name" className="label">Nome</label>
                        <input id="name" className="input" type="text" placeholder="Seu nome completo" />
                     </div>

                     <div className="field">
                        <label for="company" className="label">Empresa</label>
                        <input id="company" className="input" type="text" placeholder="Nome da empresa" />
                     </div>

                     <div className="field">
                        <label for="email" className="label">Email</label>
                        <input type="email" id="email" className="input" placeholder="Seu e-mail" />
                     </div>

                     <div className="field">
                        <label for="phone" className="label">Telefone</label>
                        <input id="phone" className="input" type="text" placeholder="Ex.: (99) 99999 9999"/>
                     </div>

                     <div className="field">
                        <label for="message" className="label">Mensagem</label>
                        <input type="text-area" id="message" className="input" placeholder="Digite aqui sua mensagem." />
                     </div>

                     <button type="submit" id="btn-submit" className="btn-submit">Enviar</button>
                  </form>   
               </WrapForm>
            </FormContainer>
         </Section>
         <Section>
            <MapContainer>
               <LocalMap local={local}/>
            </MapContainer>
         </Section>
         <Footer />
      </Layout>
   )
}

export default ContactPage;
