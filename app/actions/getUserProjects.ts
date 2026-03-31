import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getUserprojects() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return null;
		}

		const projects = await prisma.project.findMany({
			where: {
				userId: currentUser.id as string,
			},
		});

		if (!projects) {
			return null;
		}

		return projects;
	} catch (err: any) {
		return null;
	}
}
