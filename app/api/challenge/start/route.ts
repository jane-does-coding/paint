import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
		}

		const existingChallenge = await prisma.challenge.findFirst({
			where: {
				userId: currentUser.id,
				failed: false,
				completed: false,
			},
		});

		if (existingChallenge) {
			return NextResponse.json(
				{ error: "Challenge already active" },
				{ status: 400 }
			);
		}

		const startDate = new Date();

		const endDate = new Date();
		endDate.setDate(startDate.getDate() + 75);

		const challenge = await prisma.challenge.create({
			data: {
				userId: currentUser.id,
				startDate,
				endDate,
			},
		});

		const projects = [];

		for (let i = 1; i <= 5; i++) {
			const dueDate = new Date(startDate);
			dueDate.setDate(startDate.getDate() + i * 15);

			projects.push({
				challengeId: challenge.id,
				title: `Challenge Project ${i}`,
				description: "",
				dueDate,
			});
		}

		await prisma.challengeProject.createMany({
			data: projects,
		});

		return NextResponse.json(challenge);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: "Something went wrong" },
			{ status: 500 }
		);
	}
}
