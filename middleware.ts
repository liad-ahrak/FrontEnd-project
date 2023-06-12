import { NextRequest, NextResponse } from "next/server";
// const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken';
const secret = process.env.SECRET;

// const verifyToken = (token : any) => {
//     try {
//         const decoded = jwt.verify(token, secret||"");
//         if (!decoded) {
//             return false;
//         }
//         return decoded;
//     } catch (err) {
//         return false;
//     }
// };

export function middleware(req: NextRequest){
    let cookie = req.cookies.get("tokenLogin")?.value;
    if(!cookie){
        console.log("you don't have token" + cookie);
        console.log("the secret is: " + secret)
        return NextResponse.redirect(new URL('/wrongPlace', req.url));
    }
    else{
        // jwt.decode(cookie);
        const valToken = true;//  verifyToken(cookie)
        if(!valToken){
            console.log("you have token but it's not valid");
            return NextResponse.redirect(new URL('/wrongPlace', req.url));
        }
        console.log("the token is valid");
    }
    console.log("the cookie you got: " + cookie);
    return NextResponse.next();
} 

//the url path that I need to check for valid token
export const config = {
    matcher: ["/drafts","/create", "/profile",],
}
//  , "/TokenAuth/login", "/api/post/index", "/api/publish/[id]"