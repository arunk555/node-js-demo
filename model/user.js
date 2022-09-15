const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
    street: { type: String, default: null },
    city: { type: String, default: null },
});

const userSchema=new Schema({
    name: { type: String, default:null},
    email: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true},
    address: addressSchema,
    token:{ type: String, required: true},
    refresh_token:{ type: String, required: true},
    createdAt: { type: Date, immutable: true, default:()=>Date.now()},
    updatedAt: {type: Date, immutable: true, default:()=>Date.now()}
});

module.exports = model("loginusers",userSchema);