import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { FaWhatsapp } from "react-icons/fa";


import { CardItem, Content, Name, Skills, Contact, MemberImage } from "./styles"

const CardSimple = ({ fixed, alt, name="Mário Tamashiro", className, contact="(11) 94901-5967" }) => {

   const icons = {
      color: "#A00000",
      size: "2.2rem",
      marginRight: "5px",
   }
   
   const { member1 } = useStaticQuery (
      graphql`
         query {
            member1: file(relativePath: { eq: "team/member1.jpg" }) {
               childImageSharp {
                  fixed(width: 260) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            member2: file(relativePath: { eq: "team/member1.jpg" }) {
               childImageSharp {
                  fixed(width: 260) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
         }
      `
   )

   return (
      <CardItem className={className}>
         <MemberImage fixed={member1.childImageSharp.fixed} alt={alt} />
         <Content>
            <Name>{name}</Name>
            <Skills>
               <li>Sócio-fundador</li> 
               <li>Manutenção</li> 
               <li>Montagem</li> 
               <li>Usinagens</li> 
            </Skills>
            <Contact>
               <FaWhatsapp 
                  size={ icons.size } 
                  color={ icons.color }
                  style={{ marginRight: icons.marginRight }}
               />
               {contact}
            </Contact>
         </Content>
      </CardItem>
   )  
}

export default CardSimple