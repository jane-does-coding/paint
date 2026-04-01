import getCurrentUser from "@/app/actions/getCurrentUser";
import Calendar from "@/app/components/Calendar/Calendar";
import prisma from "@/app/libs/prismadb";

const CalendarPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return <div>Not authenticated</div>;
	}

	const challenge = await prisma.challenge.findFirst({
		where: {
			userId: currentUser.id,
			failed: false,
			completed: false,
		},
		include: {
			dailyEntries: true,
			projects: true,
		},
	});

	return <Calendar challenge={challenge} />;
};

export default CalendarPage;
