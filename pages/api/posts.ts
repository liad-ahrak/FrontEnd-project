// (/pages/api/posts.ts) that the new api I needed inroder to pull the objects from the query (start -> end)
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from '../../lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  
  if (req.method === "GET") {
    
    const currPage = req.query.currPage ? parseInt(req.query.currPage as string) : 0;

    const posts = await prisma.post.findMany({
        where: {
          published: true,
        },
        include: {
          author: {
            select: {
              name: true,
            },
          },
        },
        skip: currPage * 10,
        take: 10,
      });
      
    res.status(200).json({ posts });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;