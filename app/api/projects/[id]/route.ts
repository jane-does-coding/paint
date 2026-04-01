import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface Params {
	params: { id: string };
}

export async function DELETE(req: NextRequest, { params }: Params) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json("Unauthorized", { status: 401 });
		}

		const { id } = params;

		if (!id) {
			return NextResponse.json("Project ID is required", { status: 400 });
		}

		const project = await prisma.project.findUnique({
			where: { id },
		});

		if (!project) {
			return NextResponse.json("Project not found", { status: 404 });
		}

		if (project.userId !== currentUser.id) {
			return NextResponse.json("Forbidden", { status: 403 });
		}

		await prisma.project.delete({
			where: { id },
		});

		return NextResponse.json({ message: "Project deleted successfully" });
	} catch (err: any) {
		console.error(err);
		return NextResponse.json("Internal server error", { status: 500 });
	}
}
