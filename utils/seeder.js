const Datastore = require('nedb') // set up a temporary (in memory) database
const courseData = require('../data/courses.json') // read in data file
const sectionData = require('../data/section.json') 
const studentsData=require('../data/students.json') 
const teachersData=require('../data/teachers.json') 

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections
  const sd={}
  const std={}
  const td={}
  
  db.courses = new Datastore() // new object property
  sd.sections=new Datastore()
  std.students=new Datastore()
  td.teachers=new Datastore()

  db.courses.loadDatabase() // call the loadDatabase method
  sd.sections.loadDatabase()
  std.students.loadDatabase()
  td.teachers.loadDatabase()

  // insert the sample data into our datastore
  db.courses.insert(courseData)
  sd.sections.insert(sectionData)
  std.students.insert(studentsData)
  td.teachers.insert(teachersData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.courses = db.courses.find(courseData)
  app.locals.sections=sd.sections.find(sectionData)
  app.locals.students=std.students.find(studentsData)
  app.locals.teachers=td.teachers.find(teachersData)


  console.log(`${app.locals.courses.query.length} courses seeded`)
  console.log(`${app.locals.sections.query.length} section seeded`)
  console.log(`${app.locals.sections.query.length} student seeded`)
  console.log(`${app.locals.sections.query.length} Teacher seeded`)
  console.log('END Data Seeder. Sample data read and verified.')
}

