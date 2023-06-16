import { prisma } from "@/app/lib/db";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";
import { Prisma } from "@prisma/client";
import { getAllCompanies } from "@/app/controllers/company";

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);
    return NextResponse.json(await getAllCompanies(session?.user.id!));
}

export async function POST() {
    return [{}];
}

export async function PUT() {
    return [{}];
}
