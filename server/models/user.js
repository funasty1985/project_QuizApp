// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// another way to define a collection schema
let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: "",
            trim: true,
            require: "username is required"
        },
        /*
        password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        }
        */
        email:
        {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required'
        },
        displayName:
        {
            type: String,
            default: '',
            trim: true,
            required: 'display name is required'
        },
        created: 
        {
            type: Date,
            default: Date.now,
        },
        updated: 
        {
            type: Date,
            default: Date.now,
        }
    },
    {
        collection: "users"
    }
)

// configure options for User Model 

let options = ({ missingPawwordError: "Wrong / Missing Password" });

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);