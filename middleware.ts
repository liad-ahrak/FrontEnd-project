import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest){
    console.log("middleware");
    
    return NextResponse.next();
} 

//the url path that I need to check for valid token
export const config = {
    matcher: ["/drafts", "/profile", "/create", "/TokenAuth/login", "/api/post/index", "/api/publish/[id]"],
}