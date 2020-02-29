import styled from "styled-components"
import media from "../../styles/breakPoints"

import CardSimple from "../CardSimple"

const List = styled.ul`
   width: 100%;
   max-width: 960px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0;

   ${media.lessThan("sm")`
      flex-wrap: wrap;
      justify-content: space-around;
   `}

`

const CardMember = styled(CardSimple)`
   position: relative;
   width: 50%;
   max-width: 260px;
   height: 320px;

   ${media.lessThan("xs")`
      width: 100%;
      &:not(:last-child) {
         margin-bottom: 70px;
      }
   `}

`

export { 
   List,
   CardMember
}