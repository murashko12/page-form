import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => new PrismaClient()

// Тип для инстанса Prisma
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// Расширяем globalThis для хранения Prisma Client
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

// Используем существующий инстанс или создаём новый
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// В development сохраняем Prisma Client в globalThis для reuse
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}