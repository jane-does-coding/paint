import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function DELETE(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params;

		if (!id) {
			return NextResponse.json(
				{ error: "Project ID is required" },
				{ status: 400 }
			);
		}

		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const project = await prisma.project.findUnique({ where: { id } });
		if (!project) {
			return NextResponse.json({ error: "Project not found" }, { status: 404 });
		}

		if (project.userId !== currentUser.id) {
			return NextResponse.json({ error: "Forbidden" }, { status: 403 });
		}

		await prisma.project.delete({ where: { id } });

		return NextResponse.json({ message: "Project deleted successfully" });
	} catch (err: any) {
		console.error(err);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
