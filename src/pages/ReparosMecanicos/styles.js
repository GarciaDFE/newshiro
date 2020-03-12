import styled from "styled-components";
import media from "../../styles/breakPoints"
import { FaArrowRight } from "react-icons/fa"

import Section from "../../objects/Section"
import Container from "../../objects/Container"
import TitleSection from "../../objects/TitleSection"
import TextSection from "../../objects/TextSection"


// SERVICES LIST SECTION
const ServicesListContainer = styled(Container)`
   max-width: 1440px;
   justify-content: space-between;
   background-color: ${props => props.theme.color.secondyClear};

   ${media.lessThan("md")`
      flex-direction: column;
      justify-content: center;
      align-items: center;
   `}

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

const ServicesTitleSection = styled(TitleSection)`

   ${media.lessThan("xl")`
      margin-bottom: 0;
   `}

`

const ServicesTextSection = styled(TextSection)`

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

const ListServices = styled.ul`
   list-style: none;
   margin-left: 30px;
`

const ListIcon = styled(FaArrowRight)`
   margin-right: -15px;
   transform: translateX(-25px);
   color: ${props => props.theme.color.firstDark};
`

// BEFORE-AFTER SECTION
const BeforeAfterSection = styled(Section)`
   max-width: 1440px;
   background: ${props => props.theme.gradient.primary};
`

const BeforeAfterContainer = styled(Container)`
   max-width: 1200px;
   justify-content: space-between;
   background-color: transparent;
   color: ${props => props.theme.color.secondyClear};
   padding: 70px 0;

   ${media.lessThan("md")`
      flex-direction: column;
      justify-content: center;
      align-items: center;
   `}

`

const BeforeAfterTextSection = styled(ServicesTextSection)`
   color: ${props => props.theme.color.secondyClear};
`



export {
   ServicesListContainer,
   Side,
   ServicesTitleSection,
   ServicesTextSection,
   ListServices,
   ListIcon,
   BeforeAfterSection,
   BeforeAfterContainer,
   BeforeAfterTextSection,
 }