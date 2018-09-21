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

const data = [coolStuff, kingdom, superMarket, asyncHandler]

export default data
