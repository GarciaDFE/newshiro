import React from "react"
import styled from "styled-components"

import SectionTitle from "./Title"
import SectionSubtitle from "./Subtitle"

const TitleSection = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  margin-bottom: 50px;
  &.-inverse {
    margin-bottom: 30px;
  }
` 
export default ({ title, subtitle, className }) => (
   <TitleSection className={className}>
     <SectionTitle className={className} title={title} />
     <SectionSubtitle className={className} subtitle={subtitle} />
   </TitleSection>
 );