import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req,res,next)=>{
    const { token } =  req.cookies;

    if (!token) res.status(401).json({ message: "no token, authorization dened" })
    
    jwt.verify(token, TOKEN_SECRET, (err, user)=>{
        if(err) return res.status(403).json({ message: "Invalid Token" })

        req.user = user
        next()
    })

}