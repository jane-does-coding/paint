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

	return NextResponse.json(project);
}
