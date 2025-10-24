const jwt = require("jsonwebtoken");

async function verifyJWT(req, res, next) {
    try{

        const header = req.headers.authorization;

        // Extract token
        const token = req.headers.authorization.split(' ')[1];

        if(!token){
            return res.status(401).json({success: false, message: 'Access denied. No token provided.'});
        }

        if(token){
           const decoded = jwt.verify(token, process.env.SECRET_SIGNATURE);
           req.user = decoded;
           return next();
        }
        // return next();


    }catch (e) {
        console.error("Error! while trying to verify JWT" , e.message);
        return res.status(403).json({ success: false, message: 'Invalid or expired token.' });
    }
}

module.exports = {verifyJWT};