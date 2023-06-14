import { NextRequest, NextResponse } from "next/server";
// const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken';
import {jwtVerify, SignJWT} from 'jose';
const secret = process.env.SECRET;


const verifyToken = async (token : any) => {
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
        return true;
    } catch (err) {
        return false;
    }
};
// req.nextUrl.pathname.startsWith("/api/post" || "/api/publish" 
//                                         || "api/changeProfileP" || ""  
//                                         || "/" || "/create" || "/profile"
//                                         || "/drafts")

export async function middleware(req: NextRequest){
    // if ( req.nextUrl.pathname.startsWith("/drafts" )||req.nextUrl.pathname.startsWith("/profile")||
    //   req.nextUrl.pathname.startsWith("/create")|| req.nextUrl.pathname.startsWith("/api/publish")|| 
    //   req.nextUrl.pathname.startsWith("api/changeProfileP")){
    console.log("the url is: " + req.nextUrl.pathname);
    let cookie = req.cookies.get("tokenLogin")?.value;
    if(!cookie){
        console.log("you don't have token" );
        return NextResponse.redirect(new URL('/wrongPlace', req.url));
    }
    else{
        const valToken = await verifyToken(cookie);//true or false
        if(!valToken){
            console.log("you have token but it's not valid");
            // need to delete the cookie here
            const res = NextResponse.redirect(new URL('/wrongPlace', req.url));
            res.cookies.delete('tokenLogin');
            
            return res;
        }
        else{
            console.log("the token is valid");
        }
    }
    // }
    
    return NextResponse.next();
} 

//the url path that I need to check for valid token
export const config = {
    matcher: ["/drafts","/create", "/profile", "/api/post/:path*", "/api/publish/:path*", ],
    
}