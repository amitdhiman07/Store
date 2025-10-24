async function verifyJWT(req, res, next) {
    try{

        const header = req.headers.authorization;

        // Extract token
        const token = req.headers.authorization.split(' ')[1];

        if(!token){
            return res.status(401).json({success: false, message: 'Access denied. No token provided.'});
        }

    }catch (e) {
        console.error("Error! while trying to verify JWT" , e.message);
    }
}