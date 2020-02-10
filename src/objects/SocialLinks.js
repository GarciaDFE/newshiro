import React from "react";
import styled from "styled-components";

import IconFacebook from "../images/globals/facebook-square.svg"
import IconYoutube from "../images/globals/youtube-positivo.svg"
import IconEmail from "../images/globals/email-positivo.svg"

const ListSocialLinks = styled.ul`
   display: flex;
   list-style: none;
   margin: 0;
   height: 35px;
`

const ItemList = styled.li`
   height: 100%;
   margin: 0;
   text-indent: -9999px;
   transition: transform 200ms linear;
   margin: 0 5px;
   &:hover {
      transform: scale(1.1);
      transition: transform 200ms linear;
   }

`

const ButtonLink = styled.a`
   width: 100%;
   height: 100%;
   position: relative;
   display: block;
   margin: 0;
   padding: 0 25px;
   background-repeat: no-repeat;
   background-size: contain;
`

const SocialLinks = ({ className }) => {
  
   return (
         <ListSocialLinks className={className}>
            <ItemList>
               <ButtonLink 
                  href="https://www.facebook.com/shirousinagens/"
                  alt="link para o perfil da Shiro Usinagens no Facebook"
                  target="_blank"
                  style={{ 
                     backgroundImage: `url(${IconFacebook})`,
                     backgroundPosition: "center"
                  }} >
                  Facebook
               </ButtonLink>
            </ItemList>
            <ItemList>
               <ButtonLink 
                  href="https://www.facebook.com/shirousinagens/"
                  alt="link para o perfil da Shiro Usinagens no Youtube"
                  target="_blank"
                  style={{ 
                     backgroundImage: `url(${IconYoutube})`,
                     backgroundPosition: "center left"
                  }} >
                  Youtube
               </ButtonLink>
            </ItemList>
            <ItemList>
               <ButtonLink 
                  href="https://www.facebook.com/shirousinagens/"
                  alt="link para enviar um e-mail para a Shiro Usinagens"
                  target="_blank"
                  style={{ 
                     backgroundImage: `url(${IconEmail})`,
                     backgroundPosition: "center right"
                  }} >
                  E-mail
               </ButtonLink>
            </ItemList>
         </ListSocialLinks>
   )
}

export default SocialLinks;