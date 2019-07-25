const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message:'Invalid Token, try again!'});
            } else {
                req.decodedToken = decodedToken;
                console.log('decoded token', req.decodedToken);
                
                next();
            }
        });
    } else {
        res.status(401).json({ Auth: 'Unauthorized permission' });
    }
};