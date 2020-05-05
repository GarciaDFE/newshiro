import styled from "styled-components";
import media from "../../styles/breakPoints"

const Section = styled.section`
   width: 100%;
   max-width: 1440px;
   height: 40px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.theme.color.secondyLight};
   ${media.lessThan("sm")`
      height: 60px;
   `}
   ${media.lessThan("xs")`
      height: 40px;
   `}
`

const Container = styled.div`
   width: 100%;
   max-width: 1200px;
   height: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: transparent;
   ${media.lessThan("lg")`
      max-width: 1020px;
      margin: 0 20px;
   `}
   ${media.lessThan("sm")`
      max-width: 724px;
      flex-direction: column;
      justify-content: space-evenly;
   `}
`

const ItemTopbar = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   font-family: ${props => props.theme.font.secondy};
   font-weight: normal;
   font-size: ${props => props.theme.size.mediumSmall};
   color: ${props => props.theme.color.secondyDark};
   ${media.lessThan("xs")`
      width: 100%;
      justify-content: center;
      &:first-child {
         display: none;
         justify-content: center;
      }
   `}
`

export {
   Section,
   Container,
   ItemTopbar
}