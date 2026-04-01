import getCurrentUser from "@/app/actions/getCurrentUser";
import Profile from "@/app/components/Profile/Profile";

const ProfilePage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return <div className="">Not Authenticated</div>;
	}

	return <Profile currentUser={currentUser} />;
};

export default ProfilePage;
