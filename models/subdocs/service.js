
const mongoose = require('mongoose');

const sources = require('./sources/index.js');
const environments = require('./environments/index.js');

const serviceSchema = new mongoose.Schema({

    id: {
        type: String,
        default: 'main',
        required: true
    },

    match: {
        type: String,
        default: '@'
    },

    source: {
        type: sources.schema,
        default: {
            kind: sources.enums.LOCAL
        }
    },

    environment: {
        type: environments.schema,
        default: {
            kind: environments.enums.STATIC_WEB
        }
    }

}, { _id: false } );

sources.addDiscriminators( serviceSchema, 'source' );
environments.addDiscriminators( serviceSchema, 'environment' );

module.exports = serviceSchema;