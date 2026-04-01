import getProjects from "@/app/actions/getProjects";
import ExplorePage from "@/app/components/Explore/ExplorePage";

const Explore = async () => {
	const projects = await getProjects();
	return (
		<div>
			<ExplorePage projects={projects} />
		</div>
	);
};

export default Explore;
