import styled from "styled-components";
import media from "../styles/breakPoints"

// ESTILOS TEMPORÁRIOS PARA TESTE DO TEMPLATE
export const Title = styled.h1`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color.firstDark};
  background-color: rgba(0,255,0, 0.4);
  border: 5px solid ${props => props.theme.color.thirdMedium};
  padding: 10px;
  text-transform: uppercase;
  text-align: center;

  ${media.lessThan("lg")`
    font-size: 1.5rem;
    background-color: green;
    color: white;
    border: 10px solid ${props => props.theme.color.firstDark};
  `}
  ${media.lessThan("md")`
    font-size: 1rem;
    background-color: rgba(0,255,255, 0.3);
    border: 1px solid red;
  `}
`;