import React from "react";
import styled from "styled-components";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "gatsby";


const ActionButton = styled(Link)`
   height: 40px;
   display: flex;
   justify-items: center;
   align-items: center;
   font-family: ${props => props.theme.font.secondy};
   text-transform: uppercase;
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: bold;
   color: ${props => props.theme.color.secondyClear};
   text-decoration: none;
   background-color: ${props => props.theme.color.firstDark};
   border-radius: 3px;
   padding: 0 20px;
   transition: all 0.3s linear;
   &:hover {
      background-color: rgba(160,0,0,0.7);
      transition: all 0.3s linear;
   }
`

const Icon = styled(FaFileAlt)`
   height: 20px;
   color: ${props => props.theme.color.secondyClear};
   margin-right: 6px;
`

const LinkButton = ({ label="Label" }) => {
  
   return (
      <ActionButton to="/"><Icon />{label}</ActionButton>
   )
}

export default LinkButton;