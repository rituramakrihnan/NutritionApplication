const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minLength: 3,
        required: true,
    },
    name: { type: String },
    passwordHash: {
        type: String,
        required: true,
        minLength: 3
    },
    meals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Meal'
        }
    ],
    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Meal'

        }
    ]
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
    transForm: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;