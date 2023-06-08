// (/pages/api/posts.ts) that the new api I needed inroder to pull the objects from the query (start -> end)
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../lib/prisma'
const bcrypt = require("bcrypt");
// import bcrypt from "bcrypt";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  
  if (req.method === "POST") {
    const  { name, userName, email, password } = req.body;
    
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });
    if(user){
        res.status(400).json({ message: "User already exists" });
    }else{
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                name: name,
                username: userName,
                email: email,
                password: passwordHash,
            },
          });
          console.log(password);
          console.log(passwordHash);
          console.log(newUser.name);
          res.status(201).json({ message: `User created ${newUser.name}` });
    }  
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;