import styled from "styled-components"

import media from "../../styles/breakPoints"

import Logo from "../../objects/Logo" 
import ButtonAction from "../../objects/ButtonAction"
import SocialLinks from "../../objects/SocialLinks"


// GENERAL
const FooterSection = styled.footer`
   width: 100%;
   max-width: 1440px;
   background-color: ${props => props.theme.color.secondyClear};
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
   background-color: ${props => props.theme.color.secondyClear};

   ${media.lessThan("lg")`
      padding: 70px;
   `}
   ${media.lessThan("md")`
      padding: 70px 50px;
   `}
   ${media.lessThan("sm")`
      flex-direction: column;
      justify-content: center;
      padding: 70px 20px;
   `}

`

const Title = styled.h4`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: bold;
   color: ${props => props.theme.color.secondyDark};
   text-transform: uppercase;
   line-height: 1.5;
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

   ${media.lessThan("md")`
      display: none;
   `}

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
   width: 390px;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: space-between;

   ${media.lessThan("sm")`
      order: 2;
      text-align: center;
      align-items: center;
   `}
   ${media.lessThan("xs")`
      width: 100%;
   `}

`

const ButtonFooter = styled(ButtonAction)`
   width: 225px;
   text-align: center;
`


// COL3 = CONTATOS
const Contact = styled.div`
   display: block;
   background-color: white;

   ${media.lessThan("sm")`
      order: 1;
      text-align: center;
      margin-bottom: 50px;
   `}
`

const SocialLinksFooter = styled(SocialLinks)`
   margin-left: -13px;
   margin-top: 35px;

   ${media.lessThan("sm")`
      width: 100%;
      margin: 30px 0 0 -5px;
      justify-content: center;
   `}

`

// BARRA RODAPÉ
const FooterBar = styled.div`
   width: 100%;
   max-width: 1440px;
   height: 40px;
   background-color: ${props => props.theme.color.firstDark};
   color: ${props => props.theme.color.secondyClear};
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: normal;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   ${media.lessThan("xs")`
      height: 60px;
      padding: 0 40px;
   `}

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
   SocialLinksFooter,
   FooterBar
}