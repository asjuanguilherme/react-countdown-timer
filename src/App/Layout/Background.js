import React from 'react'
import Styled from 'styled-components'

import pattsernHill from '../images/pattern-hills.svg'

import BackgroundParticles from './BackgroundParticles'

const BackgroundContainer = Styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   background: linear-gradient(0deg, hsla(345, 95%, 68%, 0.10) 0%, rgba(0,0,0,0) 100%);
`
const BackgroundBottomElement = Styled.div`
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 25vh;
   background-image: url(${pattsernHill});
   background-size: cover;
   background-position: top;
   z-index: 10;
`
const MainContainer = Styled.main`
   height: 100vh;
   width: 100vw;
   overflow: auto;
   position: fixed; 
   top: 0;
   left: 0;
   z-index: 100;
`

const Background = (props) => {
   return (
      <div>
      <BackgroundContainer>
         <MainContainer>
            { props.children }
         </MainContainer>
         <BackgroundBottomElement />
         <BackgroundParticles />
      </BackgroundContainer>
      </div>
   )
}

export default Background
