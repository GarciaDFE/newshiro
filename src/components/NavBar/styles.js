import styled from "styled-components";
import { Link } from "gatsby";
import media from "../../styles/breakPoints"
import { FaChevronDown } from "react-icons/fa"

import SocialLinks from "../../objects/SocialLinks"


const MainNav = styled.nav`
   display: flex;
   justify-content: space-between;
   flex-grow: 1;
   box-sizing: border-box;
   padding: 10px 0;
   margin: 0 60px;

   ${media.lessThan("lg")`
      margin: 0 40px;
   `}

`

const ListItem = styled.ul`
   list-style: none;
   margin: 0;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   &.-isActive {
      transform: translateX(0);
      transition: transform 300ms linear;
   }

   ${media.lessThan("sm")`
      position: absolute;
      display: block;
      top: 160px;
      right: 0;
      width: 100vw;
      height: auto;
      text-decoration: none;
      line-height: 50px;
      background-color: ${props => props.theme.color.secondyLight};
      transform: translateX(-300%);
      transition: transform 300ms linear;
      z-index: 10;
   `}

   ${media.lessThan("xs")`
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

   ${media.lessThan("sm")`
      background-color: transparent;
      display: block;
      padding: 5px 0;
      &:not(:last-child) {
         margin-right: 0;
      }
   `}

`

const IconSubAction = styled(FaChevronDown)`
   width: 15px;
   height: 12px;
   margin-left: 5px;
   transition: transform 300ms linear;
   &.-isActive {
      transform: rotate(180deg);
      transition: transform 300ms linear;
   }
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

   ${media.lessThan("sm")`
      display: block;
      width: 100%;
      color: ${props => props.theme.color.secondyDark};
      padding-left: 20px;
      background-color: transparent;
      text-align: center;
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

   ${media.lessThan("sm")`
      width: 100vw;
      position: relative;
      background-color: transparent;
      top: 0;
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

   ${media.lessThan("sm")`
      padding: 5px 0;
      text-align: center;

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
      color: ${props => props.theme.color.secondyDark};
      font-size: ${props => props.theme.size.verySmall};
      &:hover {
         background-color: transparent;
      }
   `}

`

// SOCIAL
const GroupSocialLinks = styled(SocialLinks)`
   &.-tablet {
      width: 100%;
      display: none;
      justify-content: space-evenly;
      margin-top: 20px;
   }

   ${media.lessThan("md")`
      &.-desktop {
         display: none;
      }
   `}
   
   ${media.lessThan("sm")`
      &.-tablet {
         display: inline-flex;
         justify-content: center;
         margin: 40px 0;
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
   SubAction,
   GroupSocialLinks,
   IconSubAction
}