import getCurrentUser from "./actions/getCurrentUser";
import getUserprojects from "./actions/getUserProjects";
import DashboardPage from "./components/Dashboard/DashboardPage";

export default async function Home() {
	const currentUser = await getCurrentUser();
	const projects = await getUserprojects();

	if (!currentUser) return;

	console.log(currentUser);
	return <DashboardPage projects={projects} />;
}
