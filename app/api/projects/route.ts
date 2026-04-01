import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.json("Unauthorized", { status: 401 });
	}

	const body = await req.json();
	const { title, description, github, demo, image, timeLogged, tags } = body;

	const project = await prisma.project.create({
		data: {
			title,
			description,
			image,
			github,
			demo,
			timeLogged,
			tags,
			userId: currentUser.id,
		},
	});

	const activeChallenge = await prisma.challenge.findFirst({
		where: {
			userId: currentUser.id,
			completed: false,
			failed: false,
		},
		include: {
			projects: true,
		},
	});

	if (activeChallenge) {
		const nextProject = activeChallenge.projects
			.filter((p) => !p.submitted)
			.sort(
				(a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
			)[0];

		if (nextProject) {
			await prisma.challengeProject.update({
				where: {
					id: nextProject.id,
				},
				data: {
					submitted: true,
					title,
					description,
				},
			});
		}
	}

	return NextResponse.json(project);
}
