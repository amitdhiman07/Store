const {newUserRegister} = require("../../helper-functions/register/newUser");
const router = require('express').Router();

//post methods

//For new user registration
router.post('/register' , newUserRegister);

module.exports = router;
