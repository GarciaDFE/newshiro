import styled from "styled-components";

const Container = styled.div`
   position: relative;
   width: 100%;
   max-width: 960px;
   margin: 0 auto;
   display: flex;
   padding: 20px 0;
   justify-content: space-between;
   background-color: ${props => props.theme.color.secondyClear};
`

export {
   Container,
}