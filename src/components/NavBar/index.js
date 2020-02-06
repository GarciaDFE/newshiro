import React from "react";
import { FaChevronDown } from "react-icons/fa"
import { MainNav, ListItem, Item, Action, ListSubItem, SubItem, SubAction } from "./styles"

const NavBar = ({ isActive=false, isShow=false, className, onClick }) => {
   return (
      <MainNav className={className} >
         <ListItem className={`${isActive ? "-isActive" : "" }`} >
            <Item><Action to="/">Início</Action></Item>
            <Item><Action to="/About">Quem Somos</Action></Item>
            <Item onClick={onClick}>
               <Action to="/">
                  Serviços
                  <FaChevronDown 
                     size={12} 
                     style={{ marginLeft: 5 }}
                  />
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
         </ListItem>
      </MainNav>
   )
}

export default NavBar;