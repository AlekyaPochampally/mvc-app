const Datastore = require('nedb') // set up a temporary (in memory) database
const courseData = require('../data/courses.json') // read in data file
const sectionData = require('../data/section.json') 

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections
  const sd={}
  
  db.courses = new Datastore() // new object property
  sd.sections=new Datastore()
  db.courses.loadDatabase() // call the loadDatabase method
  sd.sections.loadDatabase()

  // insert the sample data into our datastore
  db.courses.insert(courseData)
  sd.sections.insert(sectionData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.courses = db.courses.find(courseData)
  app.locals.sections=sd.sections.find(sectionData)
  console.log(`${app.locals.courses.query.length} courses seeded`)
  console.log(`${app.locals.sections.query.length} section seeded`)
  console.log('END Data Seeder. Sample data read and verified.')
}

