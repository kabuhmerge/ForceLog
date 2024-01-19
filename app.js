import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function Finder() {
    try {
        const data = await prisma.user.findMany()
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally {
        prisma.$disconnect
    }
}

async function Add(data) {
    try {
        await prisma.user.create({
            data: data
        })
    } catch (error) {
        console.log(error)
    } finally {
        prisma.$disconnect
    }
}

// Add({
//     username: "rofiq",
//     password: "rofiq123"
// })

Finder()