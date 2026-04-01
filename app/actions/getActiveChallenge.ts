import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getActiveChallenge() {
	const currentUser = await getCurrentUser();

	if (!currentUser) return null;

	const challenge = await prisma.challenge.findFirst({
		where: {
			userId: currentUser.id,
			failed: false,
			completed: false,
		},
		include: {
			projects: true,
			dailyEntries: true,
		},
	});

	return challenge;
}
