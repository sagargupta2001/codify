const express = require('express');
const router = express.Router();

const { addHandle } = require('../controllers/handle.controller');
const { authenticateToken } = require('../controllers/auth.controller');


router.post("/addHandle", authenticateToken, addHandle);

// router.get("/user", authenticateToken, getUser);