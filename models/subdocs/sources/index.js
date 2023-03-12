
const mongoose = require('mongoose');

const createDiscriminators = require('../../../lib/create-discriminators.js');

const sourceEnums = {
    LOCAL: 'local'
}

module.exports = createDiscriminators( sourceEnums, __dirname );