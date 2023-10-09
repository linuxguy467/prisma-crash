import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create User
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'John Doe',
  //     email: 'john@gmail.com',
  //   },
  // })
  // console.log(user)
  // Get all users
  // const users = await prisma.user.findMany()
  // console.log(users)
  // Create an article and associate it with user
  // const article = await prisma.article.create({
  //   data: {
  //     title: "John's First Article",
  //     body: "This is John's first article",
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // })
  // console.log(article)
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
