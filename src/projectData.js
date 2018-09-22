class ProjectData {
  constructor(name, title, deployed, description, role, tech) {
    this.name = name
    this.title = title
    this.deployed = deployed
    this.description = description
    this.role = role
    this.tech = tech
  }
}

const coolStuff = new ProjectData(
  'bunch-cool-stuff',
  'Bunch of Cool Stuff',
  'https://bunch-of-cool-stuff.herokuapp.com/',
  'e-commerce site for a Williamsburg-based clothing brand',
  'Sole Developer',
  'React, Redux, Node, Express, PostgresSQL, Stripe'
)

const kingdom = new ProjectData(
  'kingdom',
  'Kingdom',
  'https://kingdom.netlify.com/',
  'Location-based role playing game based on Foursquare API',
  'Developer',
  'React, Redux, Node, Express, PostgresSQL, Foursquare, Google Maps'
)

const superMarket = new ProjectData(
  'super-market',
  'SUPERmarket',
  'http://sup3r-market.herokuapp.com/',
  'e-commerce site for buying superpowers',
  'Developer',
  'React, Redux, Node, Express, PostgresSQL, Node Mailer'
)

const asyncHandler = new ProjectData(
  'async-handler',
  'async-handler-middleware',
  'https://www.npmjs.com/package/async-handler-middleware',
  'npm package for handling errors with async/await',
  'Sole Developer',
  'Promises'
)

const csv = new ProjectData(
  'csv-converter',
  'CSV Converter',
  'https://github.com/cdkirkwood/csv-converter',
  'Converts CSV files into an interactive table that sorts and filters data',
  'Sole Developer',
  'React, fs, Papa Parse'
)

const calendar = new ProjectData(
  'calendar',
  'Calendar App',
  'https://github.com/cdkirkwood/calendar-app',
  'Simple calendar app for creating, editing, and removing events',
  'Sole Developer',
  'React, Redux, Node, Express, Sequelize, MomentJS'
)

const techMeetup = new ProjectData(
  'tech-meetup-calendar',
  'Tech Meetup Calendar',
  'https://github.com/cdkirkwood/tech-meetup-calendar',
  'Uses Eventbrite API and Google Calendar API to auto-populate calendar with tech events.',
  'Sole Developer',
  'Javascript, Google Calendar API, Eventbrite Api'
)

const data = [coolStuff, kingdom, superMarket, asyncHandler, csv, calendar, techMeetup]

export default data
