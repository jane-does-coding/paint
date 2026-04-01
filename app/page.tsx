import getActiveChallenge from "./actions/getActiveChallenge";
import getCurrentUser from "./actions/getCurrentUser";
import getUserprojects from "./actions/getUserProjects";
import DashboardPage from "./components/Dashboard/DashboardPage";
import LandingPage from "./components/Landing/LandingPage";

export default async function Home() {
	const currentUser = await getCurrentUser();
	const projects = (await getUserprojects()) ?? [];
	const challenge = (await getActiveChallenge()) ?? [];

	console.log(currentUser);

	return (
		<>
			{currentUser && currentUser !== null ? (
				<DashboardPage projects={projects} challenge={challenge} />
			) : (
				<LandingPage />
			)}
		</>
	);
}
