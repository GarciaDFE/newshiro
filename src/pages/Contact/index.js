import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import { FormContainer, WrapContent, WrapForm } from "./styles";

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Section from "../../objects/Section";
import Footer from "../../components/Footer";

const ContactPage = () => {

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
         <Footer />
      </Layout>
   )
}

export default ContactPage;
