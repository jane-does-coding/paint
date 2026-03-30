import getCurrentUser from "./actions/getCurrentUser";
import DashboardPage from "./components/Dashboard/DashboardPage";

export default async function Home() {
	const currentUser = await getCurrentUser();
	console.log(currentUser);
	return <DashboardPage />;
}
