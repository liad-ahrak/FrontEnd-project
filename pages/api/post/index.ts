import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { title, content,  email} = req.body;//session,

  
  if (req.cookies.tokenLogin) {
    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: email } },
      },
    });
    res.json(result);
  }
  else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}
