import styled from "styled-components";
import media from "../styles/breakPoints"

// BASE
const Section = styled.section`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Container = styled.div`
   position: relative;
   width: 100%;
   max-width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;

`

// SERVICE HOME
const ServiceSection = styled(Section)`
   padding: 70px 0;
   background-color: transparent;
`

const ServiceContainer = styled(Container)`
   flex-direction: column;
   background-color: ${props => props.theme.color.secondyClear};
`

// TEAM HOME
const TeamSection = styled(Section)`
   max-width: 1440px;
   background-image: ${props => props.theme.gradient.fourth};
   margin: 0 auto;
`

const TeamContainer = styled(Container)`
   max-width: 960px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 70px 0;

   ${media.lessThan("md")`
      max-width: 600px;
      flex-direction: column;
   `}

   ${media.lessThan("sm")`
      max-width: 90%;
   `}


`

const WrapTeam = styled.div`
   width: 100%;
   max-width: 400px;
   padding: 25px 50px 25px 0;

   ${media.lessThan("md")`
      max-width: 100%;
      padding: 25px 0;
   `}

`

export { 
   ServiceSection,
   ServiceContainer,
   TeamSection,
   TeamContainer,
   WrapTeam
}