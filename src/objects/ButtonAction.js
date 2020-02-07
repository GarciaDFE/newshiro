import React from "react";
import styled from "styled-components";
import media from "../styles/breakPoints"

import { FaFileAlt } from "react-icons/fa";
import { Link } from "gatsby";

const Icon = styled(FaFileAlt)`
   &.orcamento {
      width: 15px;
      height: 20px;
      color: ${props => props.theme.color.secondyClear};
      margin-right: 10px;
      ${media.lessThan("sm")`
         margin-right: 0;
      `}
   }
   &.saibamais {
      display: none;
   }

`

const Label = styled.a`
width: 100%;
   font-family: ${props => props.theme.font.secondy};
   text-transform: uppercase;
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: bold;
   &.orcamento {
      color: ${props => props.theme.color.secondyClear};

      ${media.lessThan("sm")`
         display: none;
      `}
   }
   &.saibamais {
      color: ${props => props.theme.color.thirdMedium};
      transition: all 0.3s linear;
   }

`


const ActionButton = styled(Link)`
   height: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-radius: 3px;
   padding: 0 20px;
   transition: all 0.3s linear;
   text-decoration: none;
   &.orcamento {
      background-color: ${props => props.theme.color.firstDark};
      &:hover {
         background-color: rgba(160,0,0,0.7);
         transition: all 0.3s linear;
      }

      ${media.lessThan("lg")`
         padding: 0 10px;
      `}

      ${media.lessThan("md")`
         padding: 0 15px;
      `}

   }
   &.saibamais {
      background-color: ${props => props.theme.color.secondyClear};
      border: 1px solid ${props => props.theme.color.thirdMedium};
      transition: all 0.3s linear;
      &:hover {
         background-color: ${props => props.theme.color.thirdMedium};
         border: 1px solid ${props => props.theme.color.thirdMedium};
         transition: all 0.3s linear;
         ${Label} {
            color: ${props => props.theme.color.secondyClear};
            transition: all 0.3s linear;
         }
      }
   }

`


const ButtonAction = ({ className="saibamais", label="Label" }) => {
  
   return (
      <ActionButton to="/" className={className}>
         <Icon className={className}/>
         <Label className={className}>{label}</Label>
      </ActionButton>
   )
}


export default ButtonAction;