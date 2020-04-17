import styled from "styled-components";
import media from "../../styles/breakPoints"

const WrapForm = styled.form`
   width: 100%;
   max-width: 690px;
   height: auto;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;

   ${media.lessThan("xl")`
      max-width: 600px;
   `}
   ${media.lessThan("lg")`
      max-width: 540px;
   `}
   ${media.lessThan("1040px")`
      max-width: 450px;
   `}
   ${media.lessThan("md")`
      max-width: 70%;
   `}
   ${media.lessThan("sm")`
      max-width: 85%;
   `}
   ${media.lessThan("xs")`
      max-width: 90%;
      flex-direction: column;
      align-items: center;
   `}

`

const InputItem = styled.div`
   width: 48%;
   max-width: 330px;
   height: 40px;
   color: ${props => props.theme.color.secondyMedium};
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumSmall};
   padding: 10px;
   outline: none;
   border: 1px solid blue; /* ${props => props.theme.color.secondyMedium};*/
   margin-bottom: 20px;

   ${media.lessThan("xs")`
      width: 100%;
      max-width: 100%;
   `}

`

const TextAreaItem = styled.textarea`
   width: 100%;
   color: ${props => props.theme.color.secondyMedium};
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumSmall};
   padding: 10px;
   outline: none;
   resize: none;
   border: 1px solid ${props => props.theme.color.secondyMedium};
   margin-bottom: 20px;
`

const Button = styled.button`
   height: 40px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-radius: 3px;
   padding: 0 30px;
   transition: all 0.3s linear;
   text-decoration: none;
   font-family: ${props => props.theme.font.secondy};
   text-transform: uppercase;
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: bold;
   color: ${props => props.theme.color.secondyClear};
   letter-spacing: 0.05rem;
   background-color: ${props => props.theme.color.firstDark};
   cursor: pointer;
   &:hover {
      background-color: rgba(160,0,0,0.7);
      transition: all 0.3s linear;
   }
`

export {
   WrapForm,
   InputItem,
   TextAreaItem,
   Button
}