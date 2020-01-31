import React from "react";
import styled from "styled-components";
import media from "../styles/breakPoints"

import IconFacebook from "../images/globals/facebook-square.svg"
import IconYoutube from "../images/globals/youtube-positivo.svg"
import IconEmail from "../images/globals/email-positivo.svg"

const ListSocialLinks = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   list-style: none;
   margin: 0;

   ${media.lessThan("md")`
      display: none;
   `}
`

const ItemList = styled.li`
   width: 100%;
   height: 30px; /* setagem da altura dos ícones */
   margin: 0;
   text-indent: -9999px;
   &:not(:first-child) {
      margin-left: 25px;
   }

   ${media.lessThan("lg")`
      &:not(:first-child) {
         margin-left: 10px;
      }
   `}
`

const ButtonLink = styled.a`
   width: 100%;
   height: 100%;
   position: relative;
   display: block;
   margin: 0;
   padding: 0 20px;
`

const Icon = styled.img`
   position: absolute;
   line-height: 100%;
   top: 0;
   right: 0;
   width: auto;
   height: 100%;
   
`

const SocialLinks = () => {
  
   return (
         <ListSocialLinks>
            <ItemList>
               <ButtonLink 
                  href="https://www.facebook.com/shirousinagens/"
                  alt="link para o perfil da Shiro no Facebook"
                  target="_blank">
                  <Icon src={IconFacebook} alt="imagem logo facebook"/>
                  Facebook
               </ButtonLink>
            </ItemList>
            <ItemList>
               <ButtonLink 
                  href="https://www.facebook.com/shirousinagens/"
                  alt="link para o perfil da Shiro no Facebook"
                  target="_blank">
                  <Icon src={IconYoutube} alt="imagem logo youtube"/>
                  Youtube
               </ButtonLink>
            </ItemList>
            <ItemList>
               <ButtonLink 
                  href="https://www.facebook.com/shirousinagens/"
                  alt="link para o perfil da Shiro no Facebook"
                  target="_blank">
                  <Icon src={IconEmail} alt="imagem envelope"/>
                  E-mail
               </ButtonLink>
            </ItemList>
         </ListSocialLinks>
   )
}

export default SocialLinks;