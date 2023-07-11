import jwt from 'jsonwebtoken'

export const verifyTokenAndAuthorization = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization){
        res.status(404).json("You're' not authenticated")
    }
    const token = authorization.split(' ')[1];

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, tokenData) => {
            if(err){
                res.status(404).json('JWT Server Error')
            }
            if(tokenData){
                req.user = tokenData;
                next();
            } else {
                res.status(404).json("You're not authorized")
            }
        })
    }

}
export const verifyTokenAndAuthorizeStudent = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization){
        res.status(404).json("You're' not authenticated")
    }
    const token = authorization.split(' ')[1];

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, tokenData) => {
            if(err){
                res.status(404).json('JWT Server Error')
            }
            if(tokenData.studentId){
                req.user = tokenData;
                next();
            } else {
                res.status(404).json("You're not authorized")
            }
        })
    }

}

export const verifyTokenAndAuthorizeStaff = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization){
        res.status(404).json("You're' not authenticated")
    }
    const token = authorization.split(' ')[1];

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, tokenData) => {
            if(err){
                res.status(404).json('JWT Server Error')
            }
            if(tokenData.staffId){
                req.user = tokenData;
                next();
            } else {
                res.status(404).json("You're not authorized")
            }
        })
    }

}