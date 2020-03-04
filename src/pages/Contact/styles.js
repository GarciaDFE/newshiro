import styled from "styled-components";
import media from "../../styles/breakPoints"

import Container from "../../objects/Container"


// Firn Contact Section
const FormContainer = styled(Container)`
   background-color: ${props => props.theme.color.secondyLight};
`

const WrapContent = styled.div`
   width: 40%;
   height: auto;
   background-color: yellow;
`

const WrapForm = styled.div`
   width: 60%;
   height: auto;
   background-color: violet;
`

const MapContainer = styled.div`
   width: 100%;
   max-width: 1440px;
   height: 400px;
   background-color: aliceblue;
   ${media.lessThan("sm")`
      height: 300px;
   `}
   ${media.lessThan("xs")`
      height: 200px;
   `}
`

export {
   FormContainer,
   WrapContent,
   WrapForm,
   MapContainer
}
