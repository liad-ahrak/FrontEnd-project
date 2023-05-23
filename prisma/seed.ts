import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()


const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    posts: {
      create: [
        {
          title: 'Join the Prisma Slack',
          content: 'https://slack.prisma.io',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    posts: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://www.twitter.com/prisma',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    posts: {
      create: [
        {
          title: 'Ask a question about Prisma on GitHub',
          content: 'https://www.github.com/prisma/prisma/discussions',
          published: true,
        },
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube',
        },
      ],
    },
  },
  {
    name: 'Lihad',
    email: 'lihad@prisma.io',
    posts: {
      create: 
      [
        {
          title: '1',
          content: 'https://www.github.com/prisma/prisma/discussions',
          published: true,
        },
        {
          title: '2',
          content: 'https://pris.ly/youtube',
          published: true,
        },
      ],
    },
  },
 ]

async function main() {
  console.log(`Start seeding ...`)
 
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  for (let i = 0; i < 1/*00000*/; i++) {
    const user = {
      name: `lihad ${i}`,
      email: `lihad${i}@prisma.io`,
      posts: {
        create: [
          {
            title: `Post 1 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: `Post 2 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: `Post 3 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: `Post 4 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: `Post 5 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: `Post 6 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: `Post 7 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: `Post 8 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: `Post 9 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
          {
            title: `Post 10 of user lihad${i}`,
            content: 'https://www.github.com/prisma/prisma/discussions',
            published: true,
          },
        ],
      },
    }
    const newUser = await prisma.user.create({
      data: user,
    })
    console.log(`Created user with id: ${newUser.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
