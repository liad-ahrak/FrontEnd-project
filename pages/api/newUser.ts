import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../lib/prisma'
const bcrypt = require("bcrypt");
// import bcrypt from "bcrypt";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const  { userName, password, email, name } = req.body;
    
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });
    if(user){
        res.status(400).json({ message: "User already exists" });
    }else{
        const salt = bcrypt.genSaltSync(10)
        const passwordHash = await bcrypt.hash(password, salt);
        // const passwordHash = password
        const newUser = await prisma.user.create({
            data: {
                name: name,
                username: userName,
                email: email,
                password: passwordHash,
            },
          });
          res.status(201).json({ message: `User created ${newUser.name}` });
    }  
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;