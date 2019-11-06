

const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
        
      },
      Given: {
        type: String,
    
      },
      Family: {
        type: String,

      },
      Email: {
        type: String,
        minlength: 4,
        maxlength: 4,
        required: true,
        unique : true
       
      },
      Salary: {
        type: Number,
        required: true,
       
      },
      GitHub: {
        type: Number,
        required: true,
      
      }
    })
    module.exports = mongoose.model('section', sectionSchema)
    