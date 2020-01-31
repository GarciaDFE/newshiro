import React from "react";
import styled from "styled-components";
import media from "../styles/breakPoints"

import { FaFileAlt } from "react-icons/fa";
import { Link } from "gatsby";


const ActionButton = styled(Link)`
   height: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: ${props => props.theme.color.firstDark};
   border-radius: 3px;
   padding: 0 20px;
   transition: all 0.3s linear;
   text-decoration: none;
   ${media.lessThan("lg")`
      padding: 0 10px;
   `}
   ${media.lessThan("md")`
      padding: 0 15px;
   `}

   &:hover {
      background-color: rgba(160,0,0,0.7);
      transition: all 0.3s linear;
   }
`
const Label = styled.a`
   font-family: ${props => props.theme.font.secondy};
   text-transform: uppercase;
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: bold;
   color: ${props => props.theme.color.secondyClear};

   ${media.lessThan("md")`
      display: none;
   `}
`

const Icon = styled(FaFileAlt)`
   width: 15px;
   height: 20px;
   color: ${props => props.theme.color.secondyClear};
   margin-right: 10px;
   ${media.lessThan("md")`
      margin-right: 0;
   `}
`

const LinkButton = ({ label="Label" }) => {
  
   return (
      <ActionButton to="/">
         <Icon />
         <Label>{label}</Label>
      </ActionButton>
   )
}

export default LinkButton;