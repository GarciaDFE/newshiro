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
   background-color: yellow; /*${props => props.theme.color.secondyLight};*/

   ${media.lessThan("md")`
      height: 100px;
   `}
   /* ${media.lessThan("sm")`
      height: 40px;
   `} */
`

const Container = styled.section`
   width: 100%;
   max-width: 1200px;
   height: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #FFFFFF;

   ${media.lessThan("lg")`
      max-width: 1020px;
      margin: 0 10px;
   `}
`

const NavButtonMenu = styled(ButtonMenu)`
   flex: 1;
`

export {
   Section,
   Container,
   NavButtonMenu
}