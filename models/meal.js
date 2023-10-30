const mongoose = require('mongoose').set("strictQuery", true);

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    calories: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    urlLink: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    favorite: {
        type: String
    }
    });

mealSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Meal', mealSchema);