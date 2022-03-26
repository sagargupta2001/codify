const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HandleSchema = new Schema({
    "username": {
        "type": String,
        "required": [true, "Username is required"]
    },
    "user_id": {
        "type": String,
        "required": [true, "User ID is required"]
    },
    "handle_type": {
        "type": String,
        "required": [true, "Handle Type is required"]
    }
})


const Handle = mongoose.model('handle', HandleSchema);
module.exports = Handle;