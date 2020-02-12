import styled from "styled-components"

import Card from "../Card"

const List = styled.ul`
   width: 100%;
   max-width: 960px;
   display: inline-flex;
   justify-content: space-between;
   align-items: center;
   margin: 0;
`

const CardService = styled(Card)`
   position: relative;
   width: 33.33%;
   width: 290px;
   height: 100%;
`

export { 
   List,
   CardService
}