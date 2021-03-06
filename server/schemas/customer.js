const mongoose = require('mongoose');
var randomstring = require("randomstring");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token:{
        type: String,
        default : randomstring.generate(20)
    },
    phone: {
        type: Number,
        required: true,
        default: 0
    },
    address: {
        type: String,
        required: true,
        default: ' '
    },
    email: {
        type: String,
        required: true
    },
    debtMoney: {
        type: Number,
        required: true,
        default: 0
    },
}, {
        timestamps: true,
        versionKey: false
    });

module.exports = CustomerSchema;