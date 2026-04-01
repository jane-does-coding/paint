import getActiveChallenge from "./actions/getActiveChallenge";
import getCurrentUser from "./actions/getCurrentUser";
import getUserprojects from "./actions/getUserProjects";
import DashboardPage from "./components/Dashboard/DashboardPage";

export default async function Home() {
	const currentUser = await getCurrentUser();
	const projects = (await getUserprojects()) ?? [];
	const challenge = (await getActiveChallenge()) ?? [];

	if (!currentUser) return;

	console.log(currentUser);
	return <DashboardPage projects={projects} challenge={challenge} />;
}
