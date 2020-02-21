import React, { useState } from "react";

import IconArrowLeft from "../../images/globals/arrow-left.svg"
import IconArrowRight from "../../images/globals/arrow-right.svg"
import IconClose from "../../images/globals/close.svg"
import services from "./content"
import { 
   Gallery, 
   GalleryTitle, 
   GalleryItem, 
   LightboxModal, 
   StyledImg,
   LightboxImage,
   LightboxContent,
   Button,
   CloseButton,
   Arrows,
   OverlayItem,
   OverlayImage } from "./styles"


const LightBox = ({ children, data }) => {

   const [showLightboxModal, setShowLightboxModal] = useState("");
   const [selectedImage, setSelectedImage] = useState(0);
   
   const handleClick = (e, index) => {
      e.preventDefault();
      setShowLightboxModal("-visible");
      setSelectedImage(index);
   }

   const handleCloseModal = (e) => {
      e.preventDefault();
      setShowLightboxModal("");
   }

   const handleGoBack = () => {
      if (selectedImage === 0) {
         setSelectedImage(data.length - 1);
      } else {
         setSelectedImage(selectedImage - 1);
      }
   }

   const handleGoForward = () => {
      if (selectedImage === data.length - 1) {
         setSelectedImage(0);
      } else {
         setSelectedImage(selectedImage + 1);
      }
   }

   return (
      <>
         <Gallery>
            {data.map((img, i) => {
               const service = services[i].label;
               return (
                  <GalleryItem key={img.node.childImageSharp.sizes.src}>
                     <OverlayItem 
                        key={img.node.childImageSharp.sizes.src}
                        onClick={e => handleClick(e, i)}>
                           {service}
                     </OverlayItem>
                     <a href={img.node.childImageSharp.sizes.src} 
                        alt="imagem serviço">
                           <StyledImg sizes={img.node.childImageSharp.sizes} />
                     </a>
                  </GalleryItem>
               )
            })}
            <GalleryTitle>{children}</GalleryTitle>
         </Gallery>

         <LightboxModal className={showLightboxModal}>
            <CloseButton 
               onClick={handleCloseModal}
               style={{ backgroundImage:`url(${IconClose})` }}>
                  Fechar
            </CloseButton>
            <Arrows>
               <Button onClick={handleGoBack}
                  style={{ backgroundImage:`url(${IconArrowLeft})` }}>
                     Anterior
               </Button>
               <Button onClick={handleGoForward}
                  style={{ backgroundImage:`url(${IconArrowRight})` }}>
                     Próxima
               </Button>
            </Arrows>
            <LightboxContent>
               <LightboxImage sizes={data[selectedImage].node.childImageSharp.sizes} />
               <OverlayImage>{services[selectedImage].label}</OverlayImage>
            </LightboxContent>
         </LightboxModal>
      </>
   )
}

export default LightBox