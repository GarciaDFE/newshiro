import React from "react";

import { Card, Content, Title, Description, CardButton, HeroImage } from "./styles"

const CardService = ({ fixed, alt, title, description }) => {


   return (
      <Card>
         <HeroImage fixed={fixed} alt={alt} />
         <Content>
            <Title>{title}</Title>
            <Description>{description}  
            </Description>
            <CardButton 
               className="saibamais"
               label="Saiba mais" />
         </Content>
      </Card>
   )
}

export default CardService