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
  // const users = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   },
  // })
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
  // Get all articles
  // const articles = await prisma.article.findMany()
  // console.log(articles)
  // Create user and article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Sara Smith',
  //     email: 'sara@gmail.com',
  //     articles: {
  //       create: {
  //         title: "Sara's First Article",
  //         body: "This is Sara's first article",
  //       },
  //     },
  //   },
  // })
  // console.log(user)
  // Create another article
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Sample Article',
  //     body: 'This is a sample article',
  //     author: {
  //       connect: {
  //         id: 2,
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
