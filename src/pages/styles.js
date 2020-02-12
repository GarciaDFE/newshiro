import styled from "styled-components";
//import media from "../styles/breakPoints"

const ServiceSection = styled.section`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 70px 0;
`

const Container = styled.div`
   position: relative;
   width: 100%;
   max-width: 1200px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.theme.color.secondyClear};
`

export { 
   ServiceSection,
   Container
}