import React from 'react'
import coolStuff from './assests/coolStuff1.png'
import kingdom from './assests/kingdom.png'
import superMarket from './assests/superMarket.png'
import asyncHandler from './assests/asyncHandler.png'

const picSelector = projName => {
  switch (projName) {
    case 'bunch-cool-stuff':
      return coolStuff
    case 'kingdom':
      return kingdom
    case 'super-market':
      return superMarket
    case 'async-handler':
      return asyncHandler
    default:
      return
  }
}

export default picSelector