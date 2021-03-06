import React from "react"

import { 
   FooterSection, 
   FooterContainer, 
   LogoFooter,
   Sitemap,
   Title,
   ListItems,
   Item,
   Action,
   Text,
   Service,
   ButtonFooter,
   Contact,
   SocialLinksFooter,
   FooterBar
} from "./styles.js"

const Footer = () => {
   return (
      <FooterSection>
         <FooterContainer>
            <Sitemap>
               <LogoFooter />
               <Title>Mapa do site</Title>
               <ListItems>
                  <Item><Action to="/">Início</Action></Item>
                  <Item><Action to="/About">Quem somos</Action></Item>
                  <Item><Action to="/ReparosMecanicos">Reparos mecãnicos</Action></Item>
                  <Item><Action to="/RetificaPolias">Retífica de polias</Action></Item>
                  <Item><Action to="/Usinagem">Usinagem</Action></Item>
                  <Item><Action to="/Contact">Contatos</Action></Item>
               </ListItems>
            </Sitemap>
            <Service>
               <Title>Terceirização de serviços de elevadores</Title>
               <Text>Venha construir uma parceria conosco delegando-nos a responsabilidade na área de sua manutenção mecânica.</Text>
               <Text>Somos especialistas com vasta experiência nessa área, capazes de agregar eficiência, qualidade e valor para sua empresa.</Text>
               <Text>Temos preços competitivos, trabalhando com segurança e responsabilidade.</Text>
               <br></br>
               <ButtonFooter action="/Contact#contact-form" className="enviemensagem" label="Envie sua mensagem" />
            </Service>
            <Contact>
               <Title>Contatos</Title>
               <Text>Rua Coronel Fawcett, 454 – Vila Morais<br></br>
                     São Paulo-SP – CEP 04167-030</Text>
               <Text><strong>(11) 94901-5967 – Mário<br></br>
                     (11) 98763-9248 – Ed</strong></Text>
               <Text>contato@shirousinagens.com.br<br></br>
                     mario@shirousinagens.com.br<br></br>
                     ed@shirousinagens.com.br</Text>
               <SocialLinksFooter />
            </Contact>
         </FooterContainer>
         <FooterBar>
            Shiro Usinagens. © Copyright 2020. Todos os direitos reservados.
         </FooterBar>
      </FooterSection>
   )
}

export default Footer