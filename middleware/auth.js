const jsonwebtoken = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.header.authorization.split(' ')[1];
        const decodedToken = jsonwebtoken.verify(token, process.env.TOKEN_KEY)
        const userId = decodedToken.userId;
        req.auth = { userId: userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID'
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
}