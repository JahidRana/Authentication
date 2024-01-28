const route = require("express").Router();
const { userRegister, userLogin } = require("../controllers/user.controller");


route.post("/register", userRegister);

route.post("/login", userLogin);




module.exports = route;
