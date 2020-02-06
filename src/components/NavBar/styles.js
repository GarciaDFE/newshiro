import styled from "styled-components";
import { Link } from "gatsby";
import media from "../../styles/breakPoints"

const MainNav = styled.nav`
   box-sizing: border-box;
   padding: 10px 0;
`

const ListItem = styled.ul`
   list-style: none;
   margin: 0;
   &.-isActive {
      transform: translateX(0);
      transition: transform 300ms linear;
   }

   ${media.lessThan("md")`
      position: absolute;
      display: block;
      top: 160px;
      right: 0;
      width: 260px;
      height: auto;
      text-decoration: none;
      line-height: 50px;
      background-color:  ${props => props.theme.color.firstDark};
      transform: translateX(200%);
      transition: transform 300ms linear;
      z-index: 10;
   `}

   ${media.lessThan("sm")`
      top: 140px;
   `}

`

const Item = styled.li`
   position: relative;
   display: inline-flex;
   margin: 0;
   cursor: pointer;
   &:not(:last-child) {
      margin-right: 45px;
   }

   ${media.lessThan("lg")`
      &:not(:last-child) {
         margin-right: 20px;
      }
   `}

   ${media.lessThan("md")`
      background-color: transparent;
      display: block;
      padding: 5px 0;
      &:not(:last-child) {
         margin-right: 0;
         border-bottom: 1px solid ${props => props.theme.color.secondyClear};
      }
   `}

`

const Action = styled(Link)`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.medium};
   font-weight: normal;
   color: ${props => props.theme.color.secondyDark};
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

   ${media.lessThan("md")`
      display: block;
      width: 100%;
      color: ${props => props.theme.color.secondyClear};
      padding-left: 20px;
      &:after {
         content: none;
      }
   `}

`

// SUBMENU
const ListSubItem = styled.ul`
   width: 260px;
   position: absolute;
   top: 35px;
   display: none;
   color: ${props => props.theme.color.firstDark};
   background-color: ${props => props.theme.color.secondyClear};
   overflow: visible;
   border: 1px solid ${props => props.theme.color.secondyMedium};
   margin: 0;
   z-index: 30;
   &.-isShow {
      display: block;
   }

   ${media.lessThan("md")`
      position: relative;
      background-color: transparent;
      top: 0;
      padding-left: 20px;
      border: none;
   `}

`

const SubItem = styled.li`
   position: relative;
   display: block;
   padding: 5px 20px;
   margin: 0;
   &:not(:last-child) {
      border-bottom: 1px solid ${props => props.theme.color.secondyMedium};
   }
   &:hover {
      background-color: ${props => props.theme.color.secondyLight};
   }

   ${media.lessThan("md")`
      padding: 5px 0;
      &:not(:last-child) {
         border-bottom: none;
      }
      &:hover {
         background-color: transparent;
      }
   `}

`

const SubAction = styled(Link)`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: normal;
   color: ${props => props.theme.color.secondyDark};
   text-decoration: none;

   ${media.lessThan("md")`
      color: ${props => props.theme.color.secondyClear};
      padding-left: 20px;
      &:hover {
         background-color: transparent;
      }
   `}

`

export {
   MainNav,
   ListItem,
   Item,
   Action,
   ListSubItem,
   SubItem,
   SubAction

}