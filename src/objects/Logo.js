import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import imgLogo from "../images/globals/logo.svg"

const Img = styled.img`
   height: 110px;
   margin: 0;
`

const LinkLogo = styled(Link)`
   height: 100%;
   display: flex;
   align-items: center;
`

const Logo = () => {
  
   return (
      <LinkLogo to="/">
         <Img src={imgLogo} alt="logo da Shiro Usinagens"/>
      </LinkLogo>
   )
}

export default Logo