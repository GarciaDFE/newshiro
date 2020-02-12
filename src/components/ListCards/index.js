import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import { List, CardService } from "./styles" 

const ListCards = () => {

   const { card1, card2, card3 } = useStaticQuery (
      graphql`
         query {
            card1: file(relativePath: { eq: "services/card1-image.jpg" }) {
               childImageSharp {
                  fixed(width: 270) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            card2: file(relativePath: { eq: "services/card2-image.jpg" }) {
               childImageSharp {
                  fixed(width: 270) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
            card3: file(relativePath: { eq: "services/card3-image.jpg" }) {
               childImageSharp {
                  fixed(width: 270) {
                     ...GatsbyImageSharpFixed_tracedSVG
                  }
               }
            }
         }
      `
   )

   return (
      <List>
         <CardService 
            fixed={card1.childImageSharp.fixed}
            alt="imagem de serviço de reparo mecânico em elevador"
            title="Serviços de Reparos Mecânicos"
            description="Recondicionamento de máquinas e motores de tração, limitadores de velocidade, alinhamento de guias…"
         />
         <CardService 
            fixed={card2.childImageSharp.fixed}
            alt="imagem de serviço de retífica de polia de tração de elevador"
            title="Retífica de Polia de Tração"
            description="Correção nos desgastes dos canais das polias de tração com torno portátil direto na casa de máquinas."
         />
         <CardService 
            fixed={card3.childImageSharp.fixed}
            alt="imagem de serviço de usinagem para elevador"
            title="Serviços de Usinagem em geral"
            description="Nossos serviços de usinagem inclui fabricação, manutenção e recuperação de peças em geral."
         />
      </List>
   ) 

}

export default ListCards