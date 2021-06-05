import React from 'react'
import Styled from 'styled-components'


const colorConfig = {
   backgroundColor: '#fff',
   color: '#222'
}

const ClockContainer = Styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 50px;
   line-height: 0;
`

const FlipClock = Styled.div`
   display: flex;
   
   perspective: 90px;
`

const Digit = Styled.div`
   position: relative;

   width: 45px;
   height: 80px;
   overflow: hidden;

   border: 2px solid white;

   &::before {
      content: attr(data-digit-before);

      bottom: 0;
      align-items: flex-start;

      background-color: ${colorConfig.backgroundColor};
      color: ${colorConfig.color};
   }

   &::after {
      content: attr(data-digit-after);

      top: 0;
      align-items: flex-end;

      background-color: ${colorConfig.backgroundColor};
      color: ${colorConfig.color};
   }

   &::before,
   &::after {
      position: absolute;
      z-index: 0;

      display: flex;
      justify-content: center;

      width: 100%;
      height: 50%;
      overflow: hidden;
   }
`

const CardFaceFront = Styled.div`
   position: absolute;

   display: flex;
   justify-content: center;
   align-items: flex-end;

   width: 100%;
   height: 100%;
   overflow: hidden;

   background-color: ${colorConfig.backgroundColor};
   color: ${colorConfig.color};
`

const CardFaceBack = Styled.div`
   position: absolute;

   display: flex;
   justify-content: center;
   align-items: flex-start;

   width: 100%;
   height: 100%;
   overflow: hidden;

   background-color: ${colorConfig.backgroundColor};
   color: ${colorConfig.color};

   transform: rotateX(-180deg);
`

const Card = Styled.div`
   position: relative;
   z-index: 1;

   width: 100%;
   height: 50%;

   transform-style: preserve-3d;
   transform-origin: bottom;
   transform: rotateX(0);

   transition: transform .4s ease-in-out;

   &.flipped {
      transform: rotateX(-180deg);
   }
`

const Countdown = () => {

   const [flipped, setFlipped] = React.useState(false)

   const [numbers, setNumbers] = React.useState({previousNumber: 0, currentNumber: 1})

   let flipTurn = true;

   const clock = () => {
      if( flipTurn ) {
         return(
            <Card className="flipped" >
               <CardFaceFront> { numbers.previousNumber } </CardFaceFront>
               <CardFaceBack>{ numbers.currentNumber }</CardFaceBack>
            </Card>
         )
      }

      if( !flipTurn ) {
         setNumbers( state => ({
            previousNumber: state.previousNumber++,
            currentNumber: state.currentNumber++
         }))
         return(
            <Card>
               <CardFaceFront> { numbers.previousNumber } </CardFaceFront>
               <CardFaceBack>{ numbers.currentNumber }</CardFaceBack>
            </Card>
         )
      }
   }

   return (
      <ClockContainer>
         <FlipClock>
            <Digit data-digit-before={ numbers.previousNumber } data-digit-after={ numbers.currentNumber }>
               
            </Digit>
         </FlipClock>
      </ClockContainer>
   )
}

export default Countdown
