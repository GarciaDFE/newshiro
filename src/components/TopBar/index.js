import React from "react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

import { Section, Container, ItemTopbar } from "./styles"

const icons = {
   color: "#A00000",
   size: "2rem",
   marginRight: "5px",
}

const TopBar = () => {
   return (
      <Section>
         <Container>
            <ItemTopbar>
               <FaMapMarkerAlt 
                  size={ icons.size } 
                  color={ icons.color }
                  style={{ marginRight: icons.marginRight }}
               />
                  Rua Coronel Fawcett, 454 – Vila Morais – São Paulo-SP
            </ItemTopbar>
            <ItemTopbar>
               <FaWhatsapp 
                  size={ icons.size } 
                  color={ icons.color }
                  style={{ marginRight: icons.marginRight }}
               />
                  (11) 94901-5967 / (11) 98763-9248
            </ItemTopbar>
         </Container>
      </Section>
   )
}

export default TopBar
