const express = require('express');
const router = express.Router();

const { addHandle, fetchHandle } = require('../controllers/handle.controller');
const { authenticateToken } = require('../controllers/auth.controller');


router.post("/addHandle", authenticateToken, addHandle);

router.post("/fetchHandle", fetchHandle)

// router.get("/user", authenticateToken, getUser);

module.exports = router;