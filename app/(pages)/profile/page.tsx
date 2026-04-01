import getCurrentUser from "@/app/actions/getCurrentUser";
import TopNav from "@/app/components/TopNav";

const ProfilePage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return <div className="">Not Authenticated</div>;
	}

	return (
		<div className="w-full h-screen bg-green-200">
			<img
				src="/imgs/bg-texture.jpg"
				className="h-screen w-full fixed top-0 left-0"
				alt=""
			/>

			<img
				src="/imgs/paint-pallete.jpg"
				className="h-screen w-[27.5vw] fixed top-0 left-0 z-10"
				alt=""
			/>

			<img
				src="/imgs/raccoons/bird.png"
				className="w-[10vw] fixed -scale-x-100 bottom-0 right-[2vw] z-20 drop-shadow-xl drop-shadow-black"
				alt=""
			/>

			<TopNav pageTitle={"Profile"} />

			<div className="fixed left-[27.5vw] top-[16vh] w-[72.5vw] px-[2vw] pb-[6vh] pt-[8vh] h-[85vh] overflow-y-auto z-10">
				<div className="relative w-full max-w-[55vw] mx-auto bg-amber-50 rounded-[1vh] border-3 border-dashed mt-[3vh]">
					<div className="relative p-[3vh] pt-0 mt-[5vh] rounded-[1vh] shadow-lg shadow-black/50 overflow-hidden">
						<div className="relative z-10 flex flex-col items-center text-center">
							<div className="w-[10vh] h-[10vh] rounded-full border-2 border-black overflow-hidden mb-[2vh]">
								<img
									src={"/imgs/default-avatar.png"}
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>

							<h1 className="mellow text-[5vh] leading-[5vh]">
								{currentUser.name || "Unnamed Artist"}
							</h1>

							<p className="finger-paint text-[2vh] mt-[0.5vh]">
								{currentUser.email}
							</p>

							<div className="flex gap-[1vw] mt-[3vh] w-full">
								<div className="border-2 border-black w-1/3 rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
									<p className="finger-paint text-[3vh] font-extrabold">12</p>
									<p className="finger-paint text-[1.75vh] mt-[0.5vh]">
										Projects
									</p>
								</div>

								<div className="border-2 border-black w-1/3 rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
									<p className="finger-paint text-[3vh] font-extrabold">48h</p>
									<p className="finger-paint text-[1.75vh] mt-[0.5vh]">
										Time Logged
									</p>
								</div>

								<div className="border-2 border-black w-1/3 rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
									<p className="finger-paint text-[3vh] font-extrabold">36h</p>
									<p className="finger-paint text-[1.75vh] mt-[0.5vh]">
										Time Approved
									</p>
								</div>
							</div>

							<div className="flex gap-[1vw] mt-[3vh] w-full">
								<button className="bg-black text-white finger-paint rounded-[1vh] py-[1vh] text-[2vh] w-full">
									Edit Profile
								</button>

								<button className="bg-black text-white finger-paint rounded-[1vh] py-[1vh] text-[2vh] w-full">
									Settings
								</button>
							</div>
						</div>
					</div>

					<img
						src="/imgs/bg-texture.jpg"
						className="absolute top-0 left-0 w-full h-full opacity-30 z-1"
						alt=""
					/>
					<img
						src="/imgs/clip.png"
						className="w-[12vw] h-[12vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-10vh] left-[50%] translate-x-[-50%] z-10"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
