import styled from "styled-components";
import media from "../../styles/breakPoints"

import ButtonMenu from "../../objects/ButtonMenu"

const Section = styled.header`
   width: 100%;
   max-width: 1440px;
   height: 130px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.theme.color.secondyClear};
   z-index: 10;
   transition: height 300ms ease-out;
 
   ${media.lessThan("sm")`
      height: 100px;
   `}

`

const Container = styled.section`
   width: 100%;
   max-width: 1200px;
   height: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;

   background-color: ${props => props.theme.color.secondyClear};

   ${media.lessThan("lg")`
      max-width: 1020px;
      margin: 0 20px;
   `}

`

const NavButtonMenu = styled(ButtonMenu)`
   flex: 1;
`

export {
   Section,
   Container,
   NavButtonMenu,
}