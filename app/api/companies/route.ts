import { prisma } from "@/app/lib/db";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";
import { Prisma } from "@prisma/client";

export type Companies = Prisma.PromiseReturnType<typeof getAllCompanies>;
export type Company = Prisma.PromiseReturnType<typeof getAllCompanies>[0];

export async function getAllCompanies() {
    const session = await getServerSession(authOptions);
    const companies = await prisma.company.findMany({
        include: {
            Team: true,
        },
        where: {
            Team: {
                some: {
                    userId: session?.user?.id,
                },
            },
        },
    });
    return companies;
}

export async function GET(req: NextRequest) {
    return NextResponse.json(await getAllCompanies());
}

export async function POST() {
    return [{}];
}

export async function PUT() {
    return [{}];
}
