import styled from "styled-components";
import { Link } from "gatsby";
import media from "../../styles/breakPoints"

const MainNav = styled.nav`
   box-sizing: border-box;
   overflow-x: hidden;
   background-color: aliceblue;
`

const ListItem = styled.ul`
   list-style: none;
   margin: 0;
   &.submenu {
      display: none;
   }

   ${media.lessThan("md")`
      position: absolute;
      display: block;
      top: 140px;
      right: 0;
      width: 260px;
      height: auto;
      padding: 10px;
      text-decoration: none;
      line-height: 50px;
      background-color: aliceblue;
      transform: translateX(200%);
      transition: transform 300ms linear;
      z-index: 10;
   `}

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
   ${media.lessThan("md")`
      &:not(:last-child) {
         margin-right: 10px;
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