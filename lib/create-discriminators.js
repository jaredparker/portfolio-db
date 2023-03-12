
const mongoose = require('mongoose');
const path = require('path');

module.exports = function createDiscriminators( enums, dir ){

    const discriminators = Object.values( enums );

    const baseOptions = {
        discriminatorKey: 'kind',
        _id: false
    }
    
    const baseSchema = new mongoose.Schema( {
    
        kind: {
            type: String,
            enum: discriminators,
            required: true
        }
    
    }, baseOptions );
    
    function addDiscriminators( schema, field ){
    
        for( let discriminator of discriminators ){
            schema.path(field).discriminator( discriminator, require( path.join( dir, `${discriminator}.js` ) ) );
        }
    }
    
    return {
        schema: baseSchema,
        addDiscriminators,
        enums
    };
}