const {newUserRegister} = require("../../helper-functions/register/newUser");
const {verifyJWT} = require("../../middleware/jwt/verifyJWT");
const router = require('express').Router();

//post methods

//For new user registration
router.post('/register' , newUserRegister);


// Login
router.get('/login' , verifyJWT , (req, res) => {
   return  res.json({
        success: true,
        message: 'Welcome to the server!',
        user : req.user
    });
});

module.exports = router;
