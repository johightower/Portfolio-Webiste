/* eslint-disable no-unused-vars */
import { useState } from 'react'
import SelfIntro from './Self'
import Navbar from './Navbar'
import { Router } from 'react-router-dom'
import Tickets from './Tickets'
import Passport from './Passport/Passport'

const App = () => {
  return (
    <div>
      <Navbar />
      <SelfIntro />
      <Passport />
      <Tickets />
    </div>
  )
}

export default App;
