import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()

  const data = await prisma.user.findMany()
  await prisma.post.update({
    where: {
      id: 123,
    },
    data: {
      arr: {
        push: 'hi',
      },
    },
  })
  console.log(data)
  prisma.$disconnect()
}

main()
