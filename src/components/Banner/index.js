import React from "react";
import PropTypes from "prop-types"

import ButtonAction from "../../objects/ButtonAction"
import * as S from "./styles"

const Banner = ({ title, 
                  description, 
                  classButton, 
                  action, 
                  imageFluid, 
                  imageAlt }) => {

   return (
      <S.Section>
         <S.Container>
            <S.Overlay>
               <S.Content>
                  <S.Title>{title}</S.Title>                  
                  <S.Description>{description}</S.Description>
                  <ButtonAction 
                     action={action} 
                     className={classButton} 
                     label="Saiba mais" />
               </S.Content> 
            </S.Overlay>
            <S.BkgImage 
               fluid={imageFluid}
               alt={imageAlt}
            />
         </S.Container>
      </S.Section>
   )
}

Banner.propTypes = {
   title: PropTypes.string.isRequired, 
   description: PropTypes.string.isRequired, 
   classButton: PropTypes.string, 
   action: PropTypes.string, 
   imageFluid: PropTypes.string.isRequired, 
   imageAlt: PropTypes.string
}

export default Banner;