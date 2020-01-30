import styled from "styled-components";
import media from "../../styles/breakPoints"

const Section = styled.section`
   width: 100%;
   max-width: 1440px;
   height: 130px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: yellow; /*${props => props.theme.color.secondyLight};*/
   /* ${media.lessThan("md")`
      height: 60px;
   `}
   ${media.lessThan("sm")`
      height: 40px;
   `} */
`

const Container = styled.div`
   width: 100%;
   max-width: 1200px;
   height: 100%;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: aliceblue;
   /* ${media.lessThan("lg")`
      max-width: 1020px;
      margin: 0 10px;
   `}
   ${media.lessThan("md")`
      max-width: 724px;
      flex-direction: column;
      justify-content: space-evenly;
   `} */
`

export {
   Section,
   Container,
}