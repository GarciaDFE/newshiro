import React from "react";

import IconChevron from "../../images/globals/email-fill.svg"

import { MainNav, 
         ListItem, 
         Item, 
         Action, 
         ListSubItem, 
         SubItem, 
         SubAction, 
         GroupSocialLinks } from "./styles"

const NavBar = ({ isActive=false, isShow=false, className, onClick }) => {
   return (
      <MainNav className={className}>
         <ListItem className={`${isActive ? "-isActive" : "" }`} >
            <Item><Action to="/">Início</Action></Item>
            <Item><Action to="/About">Quem Somos</Action></Item>
            <Item onClick={onClick}>
               <Action className="comSubmenu" to="/">
                  Serviços
                  <IconChevron />
               </Action>
               <ListSubItem className={`${isShow ? "-isShow" : "" }`}>
                     <SubItem>
                        <SubAction to="/">Reparos mecânicos</SubAction>
                     </SubItem>
                     <SubItem>
                        <SubAction to="/">Retífica de polias de tração</SubAction>
                     </SubItem>
                     <SubItem>
                        <SubAction to="/">Usinagens em geral</SubAction>
                     </SubItem>
               </ListSubItem>
            </Item>
            <Item><Action to="/">Contatos</Action></Item>
            <GroupSocialLinks className="-tablet" stroke="true"/>
         </ListItem>
         <GroupSocialLinks className="-desktop" stroke="true"/>
      </MainNav>
   )
}

export default NavBar;