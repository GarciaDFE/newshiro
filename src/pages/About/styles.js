import styled from "styled-components";
import media from "../../styles/breakPoints"
import { FaCheck } from "react-icons/fa"

import Container from "../../objects/Container"
import TitleSection from "../../objects/TitleSection"
import TextSection from "../../objects/TextSection"
import MemberCards from "../../components/MemberCards"


// History Section
const AboutContainer = styled(Container)`
   max-width: 1440px;
   justify-content: space-between;
   background-color: ${props => props.theme.color.secondyLight};

   ${media.lessThan("md")`
      flex-direction: column;
      justify-content: center;
      align-items: center;
   `}

`

// Differentials Section
const DifferentialsContainer = styled(AboutContainer)`
   background: ${props => props.theme.gradient.fourth};
`


const Side = styled.div`
   width: 50%;
   height: auto;
   &.-content {
      padding: 0 90px;
   }

   ${media.lessThan("xl")`
      &.-content {
         padding: 0 50px;
      }
   `}
   ${media.lessThan("lg")`
      &.-content {
         padding: 0 25px;
      }
   `}
   ${media.lessThan("md")`
      width: 100%;
      max-width: 720px;
      order: 2;
      &.-content {
         order: 1;
         padding: 70px;
      }
   `}
   ${media.lessThan("sm")`
      &.-content {
         padding: 70px 25px;
      }
   `}
   ${media.lessThan("xs")`
      &.-content {
         padding: 50px 10px;
      }
   `}

`

const HistoryTitleSection = styled(TitleSection)`

   ${media.lessThan("xl")`
      margin-bottom: 0;
   `}

`

const HistoryTextSection = styled(TextSection)`

   ${media.lessThan("xl")`
      margin-top: 15px;
   `}
   ${media.lessThan("lg")`
      font-size: ${props => props.theme.size.small};
      line-height: 1.2;
   `}
   ${media.lessThan("md")`
      line-height: 1.5;
   `}

`

// DIFERENTTIALS
const ListDifferentials = styled.ul`
   list-style: none;
   margin-left: 30px;
`

const ListIcon = styled(FaCheck)`
   margin-right: -15px;
   transform: translateX(-25px);
   color: ${props => props.theme.color.firstDark};
`

// TEAM
const TeamContainer = styled(Container)`
   max-width: 1440px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: ${props => props.theme.color.secondyLight};
   padding: 70px 0;

   ${media.lessThan("md")`
      flex-direction: column;
      justify-content: center;
      align-items: center;
   `}

`

const AboutTeam = styled(MemberCards)`
   max-width: 700px;
`

export {
  AboutContainer,
  DifferentialsContainer,
  Side,
  HistoryTitleSection,
  HistoryTextSection,
  ListDifferentials,
  ListIcon,
  TeamContainer,
  AboutTeam
}