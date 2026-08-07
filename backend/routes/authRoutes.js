const express = require("express");
const router = express.Router();

const { signup, login, subscribeUser, getUserById} = require("../controllers/authController");

router.post("/signup", signup);

router.post("/login", login);

router.post("/subscribe", subscribeUser);

router.get("/user/:id", getUserById);


module.exports = router;