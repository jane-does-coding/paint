import getActiveChallenge from "@/app/actions/getActiveChallenge";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Profile from "@/app/components/Profile/Profile";

const ProfilePage = async () => {
	const currentUser = await getCurrentUser();
	const challenge = await getActiveChallenge();

	if (!currentUser) {
		return <div className="">Not Authenticated</div>;
	}

	return <Profile currentUser={currentUser} challenge={challenge} />;
};

export default ProfilePage;
