import React from "react";
import styled from "styled-components";
import media from "../styles/breakPoints"

import IconFacebook from "../images/globals/facebook-square.svg"
import IconYoutube from "../images/globals/youtube-positivo.svg"
import IconEmail from "../images/globals/email-positivo.svg"

const ListSocialLinks = styled.ul`
   display: flex;
   justify-content: space-around;
   align-items: center;
   list-style: none;
   margin: 0;
   height: 30px;/* setagem da altura dos ícones */
`

const ItemList = styled.li`
   width: 100%;
   height: 100%;
   margin: 0;
   text-indent: -9999px;
   transition: transform 200ms linear;
   /* &:not(:first-child) {
      margin-left: 25px;
   } */
   &:hover {
      transform: scale(1.1);
      transition: transform 200ms linear;
   }

   /* ${media.lessThan("lg")`
      &:not(:first-child) {
         margin-left: 10px;
      }
   `} */
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

const SocialLinks = ({ className }) => {
  
   return (
         <ListSocialLinks className={className}>
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