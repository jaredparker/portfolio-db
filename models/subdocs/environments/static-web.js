
const mongoose = require('mongoose');

const staticWebSchema = new mongoose.Schema({

    // Serve all files at route
    public: {
        type: [String],
        default: ['/:/']
    },

    // Serve single file at route
    routes: {
        type: [String],
        default: ['/{file-name}.html:/{file-name}']
    }

}, { _id: false });

module.exports = staticWebSchema;