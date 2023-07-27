import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../lib/prisma'
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
// import bcrypt from "bcrypt";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const  { email, password } = req.body;
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password);
        if(!(user && passwordCorrect)){
            return res.status(401).json({
                error: 'invalid username or password'
            })
        }

        const sessionId = 232322;
        res.setHeader("Set-Cookie", `session=${sessionId}; Path=/;   Max-Age=600`);

        const userForToken = {
            id: user.id,
            email: user.email,
            name: user.name,
            username: user.username,
            photo: user.photo
        }
        const token = jwt.sign(
            userForToken, 
            process.env.SECRET,
            { expiresIn: 60*60*6 }) // expires in 6 hours
        
        const verToken = jwt.verify(token, process.env.SECRET || "")
        // console.log("the token is: " + verToken.name);
        res.status(200).json({ token: token, email: user.email, name: user.name, id: user.id })
    }
};

export default handler;