import React from 'react'
import Styled from 'styled-components'

import FlipCard from './FlipCard'

const ClockContainer = Styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   line-height: 0;
`

const timeProvider = () => {
   const endDate = new Date("Aug 25, 2021 00:00:00")
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
      <ClockContainer>
         <FlipCard label="dias" value={ time.days } />
         <FlipCard label="horas" value={ time.hours } />
         <FlipCard label="minutos" value={ time.minutes } />
         <FlipCard label="segundos" value={ time.seconds } />
      </ClockContainer>
   )
}

export default Countdown
