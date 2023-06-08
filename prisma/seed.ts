import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()
const bcrypt = require("bcrypt");

const passwordHash = "$2a$10$atLR6eJ3fM70IchvZ6OixuYID.EDnSxdSxQfASAcpw6YOpht3XQK2";
//it is hash of 123456

const userData: Prisma.UserCreateInput[] = [
  {
    username: 'Alice',
    name: 'Alice',
    email: 'alice@prisma.io',
    password: passwordHash,
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
    username: 'Nilu',
    name: 'Nilu',
    email: 'nilu@prisma.io',
    password: passwordHash,
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
    username: 'Mahmoud',
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    password: passwordHash,
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
    username: 'Lihad',
    name: 'Lihad',
    email: 'lihad@prisma.io',
    password: passwordHash,
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
  // for (let i = 0; i < 1000/*00*/; i++) {
  //   const user = {
  //     userName: `lihad ${i}`,
  //     name: `lihad ${i}`,
  //     email: `lihad${i}@prisma.io`,
  //     password: '123456',
  //     posts: {
  //       create: [
  //         {
  //           title: `Post 1 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //         {
  //           title: `Post 2 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //         {
  //           title: `Post 3 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //         {
  //           title: `Post 4 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //         {
  //           title: `Post 5 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //         {
  //           title: `Post 6 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //         {
  //           title: `Post 7 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //         {
  //           title: `Post 8 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //         {
  //           title: `Post 9 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //         {
  //           title: `Post 10 of user lihad${i}`,
  //           content: 'https://www.github.com/prisma/prisma/discussions',
  //           published: true,
  //         },
  //       ],
  //     },
  //   }
  //   const newUser = await prisma.user.create({
  //     data: user,
  //   })
  //   console.log(`Created user with id: ${newUser.id}`)
  // }
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
