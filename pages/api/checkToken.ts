import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET;




export default async function handle(req: NextApiRequest, res: NextApiResponse) {   
    if (req.cookies.tokenLogin) {
        try{
            const decoded = jwt.verify(req.cookies.tokenLogin, secret);
            console.log("the decoded is: " + decoded.name);
            res.status(200).json({ massage : "success"});
        }
        catch(err){
            console.log("the error is: " + err);
            res.status(401).send({ message: 'Unauthorized' })
        }
        
    } else {
        res.status(401).send({ message: 'Unauthorized' })
    }
    }