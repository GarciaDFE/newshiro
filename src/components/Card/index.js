import React from "react";

import { CardItem, Content, Title, Description, CardButton, HeroImage } from "./styles"

const Card = ({ fixed, alt, title, description, className }) => {


   return (
      <CardItem className={className}>
         <HeroImage fixed={fixed} alt={alt} />
         <Content>
            <Title>{title}</Title>
            <Description>{description}  
            </Description>
            <CardButton 
               className="saibamais"
               label="Saiba mais" />
         </Content>
      </CardItem>
   )
}

export default Card