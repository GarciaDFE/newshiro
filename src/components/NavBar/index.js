import React from "react";

import { MainNav, 
         ListItem, 
         Item, 
         Action, 
         ListSubItem, 
         SubItem, 
         SubAction, 
         GroupSocialLinks,
         IconSubAction } from "./styles"

const NavBar = ({ isActive=false, isShow=false, className, onClick }) => {
   return (
      <MainNav className={className}>
         <ListItem className={`${isActive ? "-isActive" : "" }`} >
            <Item><Action to="/">Início</Action></Item>
            <Item><Action to="/About">Quem Somos</Action></Item>
            <Item onClick={onClick}>
               <Action to="/">
                  Serviços
                  <IconSubAction className={`${isShow ? "-isActive" : "" }`} />
               </Action>
               <ListSubItem className={`${isShow ? "-isShow" : "" }`}>
                     <SubItem>
                        <SubAction to="/ReparosMecanicos">Reparos mecânicos</SubAction>
                     </SubItem>
                     <SubItem>
                        <SubAction to="/">Retífica de polias de tração</SubAction>
                     </SubItem>
                     <SubItem>
                        <SubAction to="/">Usinagens em geral</SubAction>
                     </SubItem>
               </ListSubItem>
            </Item>
            <Item><Action to="/Contact">Contatos</Action></Item>
            <GroupSocialLinks className="-tablet" stroke="true"/>
         </ListItem>
         <GroupSocialLinks className="-desktop" stroke="true"/>
      </MainNav>
   )
}

export default NavBar;