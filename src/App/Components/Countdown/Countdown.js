import React from 'react'
import Styled from 'styled-components'

import FlipCard from './FlipCard'

const CountdownContainer = Styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   line-height: 0;

   user-select: none;

   @media screen and (max-width: 960px) {
      transform: scale(.8);
   }

   @media screen and (max-width: 768px) {
      transform: scale(.7);
   }

   @media screen and (max-width: 640px) {
      transform: scale(.6);
   }

   @media screen and (max-width: 540px) {
      transform: scale(.5);
   }

   @media screen and (max-width: 480px) {
      transform: scale(.4)
   }

   @media screen and (max-width: 340px) {
      transform: scale(.33)
   }
`

const timeProvider = () => {
   const endDate = new Date("Aug 25, 2022 00:00:00")
   const now = new Date().getTime()

   const difference = endDate - now

   const seconds = 1000
   const minutes = seconds * 60
   const hours = minutes * 60
   const days = hours * 24

   const timeDays = Math.floor(difference / days)
   const timeHours = Math.floor((difference % days) / hours)
   const timeMinutes = Math.floor((difference % hours) / minutes)
   const timeSeconds = Math.floor((difference % minutes) / seconds)

   return({
      days: timeDays,
      hours: timeHours,
      minutes: timeMinutes,
      seconds: timeSeconds
   })
}

const Countdown = () => {
   const [time, setTime] = React.useState(timeProvider())

   React.useEffect( () => {
      const tmp = setInterval(() => {
         setTime(timeProvider)
         console.log(timeProvider())

      }, 1000)
      return () => clearInterval(tmp)
   })

   return (
      <CountdownContainer>
         <FlipCard label="dias" value={ time.days } />
         <FlipCard label="horas" value={ time.hours } />
         <FlipCard label="minutos" value={ time.minutes } />
         <FlipCard label="segundos" value={ time.seconds } />
      </CountdownContainer>
   )
}

export default Countdown
