const mongoose = require('mongoose');

const Schema = mongoose.Schema( {
    iName : String,
    iProfile : String,
    iReview : String
    
})

module.exports = mongoose.model('Covid-Feedback' , Schema);
