import React, { useState } from "react";

import { 
   Gallery, 
   GalleryTitle, 
   GalleryItem, 
   LightboxModal, 
   LightboxContent, 
   StyledImg,
   LightboxImage,
   Controls, 
   Button,
   LeftRight } from "./styles"

const LightBox = ({ children, data }) => {

   const [showLightbox, setShowLightbox] = useState("");
   const [selectedImage, setSelectedImage] = useState(0);
   
   const handleClick = (e, index) => {
      e.preventDefault();
      setShowLightbox("-visible");
      setSelectedImage(index);
   }

   const handleCloseModal = (e) => {
      e.preventDefault();
      setShowLightbox("");
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
            {data.map((img, i) => (
               <GalleryItem key={img.node.childImageSharp.sizes.src}>
                  <a href={img.node.childImageSharp.sizes.src} 
                     alt="imagem serviço"
                     onClick={e => handleClick(e, i)}
                  >
                     <StyledImg sizes={img.node.childImageSharp.sizes} />
                  </a>
               </GalleryItem>
            ))}
            <GalleryTitle>{children}</GalleryTitle>
         </Gallery>

         <LightboxModal className={showLightbox}>
            <LightboxContent>
               <LightboxImage sizes={data[selectedImage].node.childImageSharp.sizes} />
               <Controls>
                  <Button onClick={handleCloseModal}>Fechar</Button>
                  <LeftRight>
                     <Button onClick={handleGoBack}>Anterior</Button>
                     <Button onClick={handleGoForward}>Próxima</Button>
                  </LeftRight>
               </Controls>
            </LightboxContent>
         </LightboxModal>
      </>
   )

}

export default LightBox