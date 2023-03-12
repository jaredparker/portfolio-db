
const mongoose = require('mongoose');

const createDiscriminators = require('../../../lib/create-discriminators.js');

const environmentEnums = {
    STATIC_WEB: 'static-web',
    NODEJS_WEB: 'nodejs-web'
}

module.exports = createDiscriminators( environmentEnums, __dirname );