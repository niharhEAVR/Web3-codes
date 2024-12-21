const mongoose = require("mongoose");
require("dotenv").config()
mongoose.connect(process.env.MONGO_URL)

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = mongoose.Schema({
    author: ObjectId,
    username: String,
    password: String,
    privateKey: String,
    publicKey: String
})

const userModel = mongoose.model("users", UserSchema);

module.exports = {
    userModel
}