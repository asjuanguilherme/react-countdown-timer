import React from 'react'
import Styled from 'styled-components'


const colorConfig = {
   backgroundColor: 'hsl(236, 21%, 26%)',
   backgroundDarkColor: 'hsl(236, 21%, 20%)',
   circleColor: 'hsl(234, 17%, 12%)',
   color: 'hsl(345, 95%, 68%)',
   darkColor: 'hsl(345, 95%, 63%)'
}

const ClockContainer = Styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   line-height: 0;
`
const FlipClock = Styled.div`
   display: flex;
   font-size: 85px;
   font-weight: bold;
   position: relative;
   overflow: hidden;
   border-radius: 10px;
   box-shadow: 0px 10px 0px rgba(0,0,0,.4);
`

const FlipClockCircles = Styled.div`
   display: flex;
   height: 100%;
   width: 100%;

   position: absolute;
   left: 0;
   top: 0;
   z-index: 2;

   &:before, &:after {
      content: '';
      position: absolute;
      z-index: 10;
      top: 50%;
      display: flex;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: ${colorConfig.circleColor};
   }

   &:before {
      transform: translate(-50%, -50%);
      left: 0px;
   }

   &:after {
      transform: translate(+50%, -50%);
      right: 0px;
   }
`

const FlipClockLine = Styled.div`
   display: flex;

   width: 100%;
   height: 3px;

   position: absolute;
   left: 0;
   bottom: calc(50% - 1px);
   transform: translateY(-50%);
   z-index: 2;

   background-color: rgba(0,0,0,0.08);
`

const Digit = Styled.div`
   position: relative;

   width: 160px;
   height: 150px;
   border-radius: 10px;
   overflow: hidden;   

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

      background-color: ${colorConfig.backgroundDarkColor};
      color: ${colorConfig.darkColor};
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

   background-color: ${colorConfig.backgroundDarkColor};
   color: ${colorConfig.darkColor};
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

   &.flipped {
      transform: rotateX(-180deg);
      transition: transform .4s ease-in-out;
   }
`

const Countdown = () => {

   const [number, setNumber] = React.useState({
      previous: 0,
      current: 1
   })

   const [flipped, setFlipped] = React.useState(false)

   const updateNumber = () => {
      setNumber( state => ({
         previous: state.previous++,
         current: state.current++
      }))
   }

   const renderNumber = () => {
      setFlipped(true)

      setTimeout( () => {
         setFlipped(false)
         updateNumber()
      }, 400)
   }

   React.useEffect( () => {
      const changePerSecond = setInterval( () => renderNumber(), 600 )
      return () => { clearInterval(changePerSecond) }
   })

   return (
      <ClockContainer>
         <FlipClock>
            <FlipClockLine />
            <FlipClockCircles />
            <Digit
               data-digit-before={ number.previous > 9 ? number.previous : "0" + number.previous }
               data-digit-after={ number.current > 9 ? number.current : "0" + number.current }>
               <Card className={ flipped ? 'flipped' : '' }>
                  <CardFaceFront> { number.previous > 9 ? number.previous : "0" + number.previous } </CardFaceFront>
                  <CardFaceBack>{ number.current > 9 ? number.current : "0" + number.current }</CardFaceBack>
               </Card>
            </Digit>
         </FlipClock>
      </ClockContainer>
   )
}

export default Countdown
