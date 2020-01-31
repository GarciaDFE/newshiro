import React from "react";
import { Section, Container } from "./styles"

import Logo from "../../objects/Logo"
import NavBar from "../../components/NavBar"
import SocialLinks from "../../objects/SocialLinks"
import LinkButton from "../../objects/LinkButton"



const Header = () => {
   return (
      <Section>
         <Container>
            <Logo />
            <NavBar />
            <SocialLinks className="hide"/>
            <LinkButton label="Orçamento" />
         </Container>
      </Section>
   )
}

export default Header;


/* <LinkButton label="Orçamento" /> */
