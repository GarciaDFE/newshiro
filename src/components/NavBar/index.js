import React from "react";

import { Section, Container } from "./styles"
import Logo from "../../objects/Logo"
import LinkButton from "../../objects/LinkButton"

const NavBar = () => {
   return (
      <Section>
         <Container>
            <Logo />
            <LinkButton label="Orçamento" />
         </Container>
      </Section>
   )
}

export default NavBar;