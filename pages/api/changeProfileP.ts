import type { NextApiRequest, NextApiResponse } from 'next';
// import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
const jwt = require('jsonwebtoken')

const MakeNewToken = (oldT:string, newP: string) => {
    const decoded = jwt.decode(oldT);
    const newData = {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
        username: decoded.username,
        photo: newP
    }
    const newToken = jwt.sign(
        newData, 
        process.env.SECRET,
        { expiresIn: 60 * 60 })//1 hour
    return newToken;
}


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const {userId, photo} = req.body;    
    if (req.cookies.tokenLogin) {
        const user = await prisma.user.update({
        where: { id: Number(userId) },
        data: { photo: photo },
        });
        const newToken = MakeNewToken(req.cookies.tokenLogin, photo);
        res.status(200).json({ token : newToken, massage : "success"});
    } else {
        res.status(401).send({ message: 'Unauthorized' })
    }
    }