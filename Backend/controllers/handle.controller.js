const Handle = require('../models/handle.model');
const { fetchLeetcode } = require('../utils/leetcodescrapper');

// Controllers 
module.exports.addHandle = async(req, res) => {
    const { userId, username, handleType } = req.body;

    const newHandle = {
        "user_id": userId,
        "username": username,
        "handle_type": handleType
    };

    try {
        const newHandle = await Handle.create(newHandle);
        res.status(200).json({
            "added": true,
            "handle": newHandle
        });
    } catch (err) {
        res.statu(400).json({
            "added": false,
            "error": err
        })
    }
}


module.exports.fetchHandle = async(req, res) => {
    const userName = req.body.username;
    data = fetchLeetcode(userName);
    res.status(200).json(data);
}