const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");
// Model
const User = require("../../models/User");

module.exports = router;
