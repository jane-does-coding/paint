import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: NextRequest) {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
		}

		const body = await req.json();
		const { journal, hoursCoded } = body;

		const challenge = await prisma.challenge.findFirst({
			where: {
				userId: currentUser.id,
				failed: false,
				completed: false,
			},
		});

		if (!challenge) {
			return NextResponse.json(
				{ error: "No active challenge" },
				{ status: 400 }
			);
		}

		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const existingEntry = await prisma.dailyEntry.findFirst({
			where: {
				challengeId: challenge.id,
				date: today,
			},
		});

		if (existingEntry) {
			return NextResponse.json(
				{ error: "Entry already submitted today" },
				{ status: 400 }
			);
		}

		const entry = await prisma.dailyEntry.create({
			data: {
				challengeId: challenge.id,
				journal,
				hoursCoded: Number(hoursCoded),
				date: today,
			},
		});

		return NextResponse.json(entry);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: "Something went wrong" },
			{ status: 500 }
		);
	}
}
