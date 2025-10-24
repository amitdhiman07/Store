const {UserMaster} = require('../../database/model/userMaster/userMaster');
const sequelize = require("../../database/config/config");
const jwt = require("jsonwebtoken");

async function newUserRegister(req, res) {
    try{

        const user = await UserMaster(sequelize);

        // request body parameter
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).send({error: 'email and password is required'});
        }

        if(!password && email){
            return res.status(400).send({error: 'password is required'});
        }

        if(!email && password){
            return res.status(400).send({error: 'email is required'});
        }

        if(email && password){

            const existingUser = await user.findOne({where : {email: email , password: password}});
            console.log("existingUser", existingUser);

            if(existingUser){
                return res.status(400).json({success: 'false' , message : `${email} already exists`});
            }
                const response = await user.create({email:email, password:password});

                // Generate token
                const token = jwt.sign({id:response.id , email : response.email} , process.env.SECRET_SIGNATURE, {expiresIn: process.env.JWT_EXPRIES_IN});
                console.log("token", token);
                return res.status(201).json({success: true, message:`${email} has been successfully registered ` , token : token});
        }



    }catch (e) {
        console.error(e);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
}

module.exports= {newUserRegister};