import coolStuff from './assests/coolStuff1.png'
import kingdom from './assests/kingdom.png'
import superMarket from './assests/superMarket.png'
import asyncHandler from './assests/asyncHandler.png'
import csv from './assests/csv.png'
import calendar from './assests/calendar.png'
import techMeetup from './assests/techMeetup.png'

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
    case 'csv-converter':
      return csv
    case 'calendar':
      return calendar
    case 'tech-meetup-calendar':
      return techMeetup
    default:
      return
  }
}

export default picSelector