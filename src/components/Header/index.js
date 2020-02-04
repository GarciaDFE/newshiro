import React, { useState } from "react";

import Logo from "../../objects/Logo"
import NavBar from "../../components/NavBar"
import SocialLinks from "../../objects/SocialLinks"
import LinkButton from "../../objects/LinkButton"
import { Section, Container, NavButtonMenu } from "./styles"


const Header = () => {
   const [isopen, setIsopen] = useState(false);

   const handleClickButtonMenu = event => {
      event.preventDefault();
      isopen ? setIsopen(false) : setIsopen(true);
   }

   return (
      <Section>
         <Container>
            <Logo />
            <NavBar />
            <NavButtonMenu
               isOpen={isopen} 
               onClick={handleClickButtonMenu}/>
            <SocialLinks className="hide"/>
            <LinkButton label="Orçamento" />
         </Container>
      </Section>
   )
}

export default Header;