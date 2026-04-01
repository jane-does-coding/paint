import TopNav from "@/app/components/TopNav";

const FAQPage = () => {
	return (
		<div>
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
			<TopNav pageTitle={"Rules"} />
			<div className="bg-blue-300/0 left-[27.5vw] top-[16vh] gap-y-[2vh] gap-x-[1vw] px-[2vw] w-[72.5vw] fixed right-0 overflow-y-auto h-[85vh] pb-[6vh] items-start pt-[4vh] z-11 flex flex-col">
				<div className="w-[30vw] h-[32.5vh] overflow-hidden absolute top-[3vh] left-[2vw] drop-shadow-xl drop-shadow-black/60 rounded-[0.25vh] border-2 border-dotted border-black bg-white">
					<p className="finger-paint text-[2vh] absolute top-[3.75vh] left-[2.25vw] w-[11vw] bg-green-300/0 z-10">
						Fully complete{" "}
						<span className="font-extrabold italic text-blue-800">
							one project
						</span>{" "}
						each{" "}
						<span className="font-extrabold italic text-blue-800">15 days</span>
						. By the end of the challenge you'll have{" "}
						<span className="font-extrabold italic text-blue-800">
							5 fully completed projects
						</span>{" "}
						for your portfolio
					</p>
					<img
						src="/imgs/frame6.jpg"
						className="w-[30vw] h-[32.5vh] object-cover scale-105"
						alt=""
					/>
				</div>
				<div className="w-[30vw] h-[40vh] overflow-hidden absolute top-[39vh] left-[2vw] drop-shadow-xl drop-shadow-black/60 rounded-[0.25vh] border-2 border-dotted border-black bg-white">
					<p className="finger-paint text-[3vh] absolute top-[2vh] left-[2vw] w-[26vw] bg-green-300/0 z-10">
						During those{" "}
						<span className="font-extrabold italic text-blue-800">75 days</span>
						, you must do{" "}
						<span className="font-extrabold italic text-blue-800">
							2+ hours
						</span>{" "}
						of programming every day, which can be working on meeting the goal
						requirements for{" "}
						<span className="font-extrabold italic text-blue-800">
							Leetcode or the Projects.
						</span>
					</p>
					<img
						src="/imgs/paper3.png"
						className="w-[30vw] h-[40vh] object-cover scale-105 opacity-60"
						alt=""
					/>
				</div>
				<div className="w-[36vw] h-[34vh] overflow-hidden absolute top-[45vh] left-[34vw] drop-shadow-xl drop-shadow-black/60 rounded-[0.25vh] border-2 border-dotted border-black bg-white">
					<p className="finger-paint text-[2.5vh] text-black  absolute top-[2.5vh] left-[2vw] w-[32vw] bg-green-300/0 z-10">
						Once you complete the challenge by getting to{" "}
						<span className="font-extrabold italic text-blue-800">day 75</span>{" "}
						without missing a single day you'll get a{" "}
						<span className="font-extrabold italic text-blue-800">
							cetificate of completing
						</span>
						, highlighting all your projects, solved leetcode problems, all the
						hours you've spent programming, and more!
					</p>
					<img
						src="/imgs/paper5.jpg"
						className="w-[36vw] h-[34vh] object-cover scale-115 opacity-50"
						alt=""
					/>
				</div>
				<div className="w-[15vw] h-[40vh] overflow-hidden absolute top-[3vh] left-[34vw] drop-shadow-xl drop-shadow-black/60 rounded-[0.25vh] border-2 border-dotted border-black bg-white">
					<p className="finger-paint text-[2.25vh] text-black absolute top-[2.5vh] left-[2.75vw] w-[12vw] bg-green-300/0 z-10">
						Complete{" "}
						<span className="font-extrabold italic text-blue-800">
							50 Leetcode coding problems
						</span>{" "}
						by the end of the challenge to sharpen your{" "}
						<span className="font-extrabold italic text-blue-800">
							problem-solving skills
						</span>{" "}
						and enhance your resume.
					</p>
					<img
						src="/imgs/paper2.jpg"
						className="w-[15vw] h-[40vh] object-cover opacity-80"
						alt=""
					/>
				</div>
				<div className="w-[20vw] h-[40vh] overflow-hidden absolute top-[3vh] left-[50.75vw] drop-shadow-xl drop-shadow-black/60 rounded-[0.25vh] border-2 border-dotted border-black bg-white">
					<p className="finger-paint text-[2.6vh] text-black absolute top-[2.5vh] left-[2vw] w-[16vw] bg-green-300/0 z-10">
						If you miss any rule, like not programming for a day or not
						completing a project you would need to{" "}
						<span className="font-extrabold italic text-blue-800">
							start all over from day 1
						</span>{" "}
						again.
					</p>
					<img
						src="/imgs/paper3.png"
						className="w-[20vw] h-[40vh] object-cover opacity-90"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default FAQPage;
