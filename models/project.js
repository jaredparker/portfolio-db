
const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');
const urlSlug  = require('url-slug');

const { visibilities } = require('../lib/enums.js');

const serviceSchema = require('./subdocs/service.js');

const projectSchema = new mongoose.Schema({

    // Used to access project (e.g new-project)
    id: {
        type: String,
        unique: true,
        lowercase: true
    },

    // ### PROJECT DETAILS ###
    // Information displayed on the projects page

    details: {

        name: {
            type: String,
            default: 'New Project',
            required: true
        },

        description: {
            type: String
        },

        tags: [{
            type: String
        }],

        visibility: {
            type: String,
            enum: [visibilities],
            default: visibilities.UNLISTED,
            required: true
        }

    },

    // ### PROJECT HOSTING ###
    // Configuration for hosting the project

    hosting: {

        services: [serviceSchema]

    }

});

// Generate ID if not provided
projectSchema.pre('save', async function( next ){
    if( !this.isNew || this.isModified('id') ){ return next(); }

    // Create new ID based on name
    const slug = urlSlug( this.details.name );

    if( await Project.exists({ id: slug }) ){
        next( new Error(`Couldn't generate a unique ID. ('${slug}' already exists)`) );
    };

    this.id = slug;
    next();
});

const Project = mongoose.model( 'Project', projectSchema );

module.exports = Project;