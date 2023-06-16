import { Prisma } from "@prisma/client";
import { prisma } from "../lib/db";

export type Companies = Prisma.PromiseReturnType<typeof getAllCompanies>;
export type Company = Prisma.PromiseReturnType<typeof getAllCompanies>[0];

export async function getAllCompanies(userId: string) {
    const companies = await prisma.company.findMany({
        include: {
            Team: true,
        },
        where: {
            Team: {
                some: {
                    userId: userId,
                },
            },
        },
    });
    return companies;
}
