import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
const secret = process.env.SECRET;

// const checkToken = (token) =>{
//     try{
//         return jwt.verify(token, secret);
//     }catch(err){
//         return false;
//     }

// }

export function middleware(req: NextRequest){
    let cookie = req.cookies.get("tokenLogin")?.value;
    if(!cookie){
        console.log("you don't have token" + cookie);
        console.log("the secret is: " + secret)
        return NextResponse.redirect(new URL('/wrongPlace', req.url));
    }
    // if(!checkToken(cookie)){


    console.log("the cookie you got: " + cookie);
    return NextResponse.next();
} 

//the url path that I need to check for valid token
export const config = {
    matcher: ["/drafts","/create", "/profile",],
}
//  , "/TokenAuth/login", "/api/post/index", "/api/publish/[id]"