import React from "react";
import { FaChevronDown } from "react-icons/fa"
import { MainNav,ListItem,Item,Action } from "./styles"

const NavBar = () => {
   return (
      <MainNav>
         <ListItem>
            <Item><Action to="/">Início</Action></Item>
            <Item><Action to="/About">Quem Somos</Action></Item>
            <Item>
               <Action to="/">
                  Serviços
                  <FaChevronDown 
                     size={12} 
                     style={{ marginLeft: 5 }}
                  />
               </Action>
               <ListItem className="submenu">
                     <Item><Action to="/">Reparos mecânicos</Action></Item>
                     <Item><Action to="/">Retífica de polias de tração</Action></Item>
                     <Item><Action to="/">Usinagens em geral</Action></Item>
               </ListItem>
            </Item>
            <Item><Action to="/">Contatos</Action></Item>
         </ListItem>
      </MainNav>
   )
}

export default NavBar;