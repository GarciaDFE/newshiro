import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import { 
   FormContainer, 
   WrapContent, 
   ContentItem, 
   // ContactForm, 
   // InputItem,
   // ButtonSubmit,
   // TextAreaItem,
   MapContainer } from "./styles";

import Layout from "../../components/Layout";
import SEO from "../../components/seo";
import TopBar from "../../components/TopBar";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Section from "../../objects/Section";
import ContactForm from "../../components/ContactForm";
import LocalMap from "../../objects/LocalMap"
import Footer from "../../components/Footer";

const ContactPage = () => {
   
   //MAP
   const local = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2184084422756!2d-46.615661148986355!3d-23.632348070028424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b14b9609f53%3A0x36961263b9d4bccc!2sRua%20Coronel%20Fawcett%2C%20454%20-%20Vila%20Moraes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004167-030!5e0!3m2!1spt-BR!2sbr!4v1583332049834!5m2!1spt-BR!2sbr"

   //BANNER
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

   // const [state, setState] = React.useState({})

   // const handleChange = (e) => {
   //   setState({ ...state, [e.target.name]: e.target.value })
   // }
    
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
                  <ContentItem className="-local">
                     Rua Coronel Fawcett, 454 – Vila Moraes <br></br>
                     São Paulo-SP – CEP 04167-030
                  </ContentItem>
                  <ContentItem className="-whatsapp">
                     (11) 94901-5967 – Mário <br></br>
                     (11) 98763-9248 – Ed
                  </ContentItem>
                  <ContentItem className="-email">
                     mariokt.mt@gmail.com <br></br>
                     edsonfox2010@hotmail.com
                  </ContentItem>
               </WrapContent>
               <ContactForm /> 

               {/* <ContactForm 
                  id="contact-form"
                  action="https://formspree.io/xeqkvdvp"
                  method="POST"
               >
                  <input 
                     type="hidden" 
                     name="_cc" 
                     value="mrgempdig@gmail.com" />
                  <input 
                     type="hidden" 
                     name="_subject" 
                     value="Mensagem recebido pelo formulário de contato do site" />
                  <InputItem 
                     id="name" 
                     name="Nome"
                     type="text" 
                     placeholder="Nome" 
                     onChange={handleChange}
                     required />
                  <InputItem 
                     id="company" 
                     name="Empresa" 
                     type="text" 
                     placeholder="Empresa"
                     onChange={handleChange} />
                  <InputItem 
                     id="email"
                     name="e-mail" 
                     type="email" 
                     placeholder="E-mail"
                     onChange={handleChange} />
                  <InputItem 
                     id="phone"
                     name="Telefone"  
                     type="text" 
                     placeholder="Telefone"
                     onChange={handleChange}
                     required />
                  <TextAreaItem 
                     id="message" 
                     name="Mensagem" 
                     rows="3" 
                     placeholder="Deixe sua mensagem."
                     onChange={handleChange}
                     required />
                  <ButtonSubmit type="submit">Enviar</ButtonSubmit>
               </ContactForm> */}
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
