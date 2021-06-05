import React from 'react'
import Styled, { keyframes } from 'styled-components'

import backgroundStars from '../images/bg-stars.svg'

const showHideParticles = keyframes`
   0% {
      opacity: 1;
      transform: scale(1.02);
   }

   50% {
      opacity: 0.2;
      transform: scale(1);
   }

   100% {
      opacity: 1;
      transform: scale(1.02);
   }
` 

const Particles = Styled.div`
   height: 100%;
   width: 100%;
   background-image: url(${backgroundStars});
   background-size: 60%;
   background-position: center;
   animation: ${showHideParticles} 5s linear infinite;
`

const BackgroundParticles = () => {
   return (
      <>
         <Particles/>
      </>
   )
}

export default BackgroundParticles
