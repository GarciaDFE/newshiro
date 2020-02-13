import styled from "styled-components"

import Logo from "../../objects/Logo" 
import ButtonAction from "../../objects/ButtonAction"
import SocialLinks from "../../objects/SocialLinks"


// GENERAL
const FooterSection = styled.section`
   width: 100%;
   max-width: 1440px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: gray;
   margin: 0 auto;
`

const FooterContainer = styled.div`
   position: relative;
   width: 100%;
   max-width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 70px 0;
   background-color: aliceblue;
`

const Title = styled.h4`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: bold;
   color: ${props => props.theme.color.secondyDark};
   text-transform: uppercase;
   margin-bottom: 10px;
`

const Text = styled.p`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: normal;
   color: ${props => props.theme.color.secondyDark};
   line-height: 1.5;
`


// COL1 = SITEMAP
const LogoFooter = styled(Logo)`
   height: 102px;
   margin-bottom: 45px;
   & img {
      padding: 0;
   }
`

const Sitemap = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: space-between;
   background-color: skyblue;
`


const ListItems = styled.ul`
   display: block;
   list-style: none;
   margin: 0;
`

const Item = styled.li`
   padding: 2px 0;
   margin: 0;
   cursor: pointer;
`

const Action = styled.a`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: normal;
   color: ${props => props.theme.color.secondyDark};
   &:hover {
      color: ${props => props.theme.color.firstDark};
   }
`

// COL2 = OFERTA SERVIÇOS
const Service = styled.div`
   max-width: 30%;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: space-between;
   background-color: greenyellow;
`

const ButtonFooter = styled(ButtonAction)`
   width: 225px;
`

// COL3 = CONTATOS
const Contact = styled.div`
   display: block;
   background-color: white;
`

const SocialLinksFooter = styled(SocialLinks)`
   margin-left: -13px;
   margin-top: 35px;
`

export {
   FooterSection,
   FooterContainer,
   LogoFooter,
   Sitemap,
   Title,
   ListItems,
   Item,
   Action,
   Text,
   Service,
   ButtonFooter,
   Contact,
   SocialLinksFooter
}