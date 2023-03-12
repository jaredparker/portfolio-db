
const mongoose = require('mongoose');

const localSchema = new mongoose.Schema({

    src: {
        type: String,
        required: true
        // default: function(){
        //     return this.parent().parent().details.name;
        // }
    }

}, { _id: false });

module.exports = localSchema;