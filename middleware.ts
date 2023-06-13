import { NextRequest, NextResponse } from "next/server";
// const jwt = require('jsonwebtoken')
// import jwt from 'jsonwebtoken';
import {jwtVerify} from 'jose';
const secret = process.env.SECRET;

const getSecretKey = () => {
    if(!secret || secret.length === 0){
        throw new Error("the secret is not defined");
    }
    return secret;
};
const verifyToken = async (token : any) => {
    try {
        const verified = jwtVerify(token, new TextEncoder().encode(getSecretKey()));
        return true;
    } catch (err) {
        return false;
    }
};

export async function middleware(req: NextRequest){
    let cookie = req.cookies.get("tokenLogin")?.value;
    if(!cookie){
        console.log("you don't have token" + cookie);
        return NextResponse.redirect(new URL('/wrongPlace', req.url));
    }
    else{
        // const data = await (await fetch(`/pages/api/checkToken`)).json()
        // console.log("the data is: " + data.massage);
        // jwt.decode(cookie);
        const valToken = await verifyToken(cookie);//true  
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