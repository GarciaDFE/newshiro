import React from "react";

import ButtonAction from "../../objects/ButtonAction"
import { Section, 
         Container, 
         Overlay, 
         Content, 
         AnimateTitle,
         Title, 
         AnimateDescription,
         Description, 
         BkgImage } from "./styles"


const Banner = ({ title, description, classButton, action, imageFluid, imageAlt }) => {
  
   return (
      <Section>
         <Container>
            <Overlay>
               <Content>
                  <AnimateTitle duration="1s" delay="1s">
                     <Title>{title}</Title>                  
                  </AnimateTitle>
                  <AnimateDescription duration="1s" delay="1s">
                     <Description>{description}</Description>
                  </AnimateDescription>
                  <ButtonAction 
                     action={action} 
                     className={classButton} 
                     label="Saiba mais" />
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