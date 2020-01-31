import styled from "styled-components";
import { Link } from "gatsby";

import media from "../../styles/breakPoints"

const MainNav = styled.nav`
   background-color: aliceblue;
   padding: 10px;
`

const ListItem = styled.ul`
   list-style: none;
   margin: 0;
   &.submenu {
      display: none;
   }
`

const Item = styled.li`
   position: relative;
   display: inline-flex;
   margin: 0;
   &:not(:last-child) {
      margin-right: 45px;
   }

   ${media.lessThan("lg")`
      &:not(:last-child) {
         margin-right: 20px;
      }
   `}

`

const Action = styled(Link)`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.medium};
   font-weight: normal;
   color: ${props => props.theme.color.secondDark};
   text-decoration: none;
   &:after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: ${props => props.theme.color.firstDark};
      position: absolute;
      bottom: -1px;
      left: 0;
      transform: scaleX(0);
      transition: transform 200ms linear;
      transform-origin: center;
   }
   &:hover:after {
      transform: scale(1);
   }

   ${media.lessThan("lg")`
      font-size: ${props => props.theme.size.mediumSmall};
   `}

`

export {
   MainNav,
   ListItem,
   Item,
   Action
}