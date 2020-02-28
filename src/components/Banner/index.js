import React from "react";

import ButtonAction from "../../objects/ButtonAction"
import { Section, 
         Container, 
         Overlay, 
         Content, 
         Title, 
         Description, 
         BkgImage } from "./styles"


const Banner = ({ title, description, classButton, imageFluid, imageAlt }) => {
  
   return (
      <Section>
         <Container>
            <Overlay>
               <Content>
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                  <ButtonAction className={classButton} label="Saiba mais" />
               </Content> 
            </Overlay>
            <BkgImage 
               fluid={imageFluid}
               alt={imageAlt}
            />
         </Container>
      </Section>
   )
}

export default Banner;