import type { NextApiRequest, NextApiResponse } from 'next';
// import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

// PUT /api/publish/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const {postId, photo} = req.body;
    // const session = await getSession({ req })

    console.log("postId: " + postId + " photo: " + photo);    
    if (req.cookies.tokenLogin) {
        const post = await prisma.user.update({
        where: { id: Number(postId) },
        data: { photo: photo },
        });
        res.json({post, massage : "success"});
    } else {
        res.status(401).send({ message: 'Unauthorized' })
    }
    }