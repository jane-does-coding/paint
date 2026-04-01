"use client";
import Projectpopup from "./Projectpopup";
import ideas from "@/app/data/ideas.json";
import { useState } from "react";
import Colorpopup from "./Colorpopup";
import TopNav from "../TopNav";
import Onboarding from "../Onboarding/Onboarding";
import { Project } from "@prisma/client";

const DashboardPage = ({
	projects = [],
	challenge,
}: {
	projects?: Project[] | null;
	challenge?: any;
}) => {
	const [selectedProject, setSelectedProject]: any = useState();
	const [selectedColorIdea, setSelectedColorIdea]: any = useState();
	const [isOnborading, setIsOnborading]: any = useState(false);

	const completedDays = challenge?.dailyEntries?.length || 0;
	const progress = (completedDays / 75) * 100;

	return (
		<div className="bg-green-200 w-full h-screen">
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

			{isOnborading ? (
				<Onboarding />
			) : (
				<img
					src="/imgs/raccoons/raccoon-bird-front.png"
					className="w-[10vw] fixed bottom-0 right-[2vw] z-19 drop-shadow-xl drop-shadow-black"
					alt=""
				/>
			)}

			<div className="fixed top-0 w-[27.5vw] h-screen z-10 text-center items-center justify-center grid grid-cols-4 left-0 gap-[0.5vh] p-[1vh]">
				{ideas.slice(0, 24).map((idea, i) => (
					<div
						className="bg-blue-400/0 w-full h-full rounded-[1.5vh] cursor-pointer"
						key={i}
						onClick={() => setSelectedColorIdea(idea)}
					></div>
				))}
			</div>
			<TopNav pageTitle={"Your Projects"} />
			<div className="bg-amber-50/50 backdrop-blur-sm h-[3.5vh] left-[30vw] w-[60vw] rounded-full border-3 border-dashed fixed top-[19vh] overflow-hidden">
				<div
					className="bg-sky-300 h-full rounded-full transition-all"
					style={{ width: `${progress + 5}%` }}
				/>
			</div>

			<div className="h-[3vh] right-[3.5vw] w-[5vw] fixed top-[19vh]">
				<p className="finger-paint text-[3.5vh] leading-[2.25vh] mx-auto text-center">
					{completedDays}/75
				</p>
			</div>
			<div className="bg-blue-300/0 left-[27.5vw] top-[23vh] gap-y-[8vh] gap-x-[1vw] px-[2vw] w-[72.5vw] fixed right-0 grid grid-cols-3 overflow-y-auto h-[85vh] pb-[6vh] items-start pt-[8vh] z-11">
				{/* Create new project canvas */}
				<a
					href="/create"
					className="relative h-fit overflow-visible group cursor-pointer"
				>
					<div className="duration-200 group-hover:rotate-4 relative group-hover:scale-105 transition-all ease-in-out z-30">
						<div className="absolute w-full top-[5vh] left-[50%] translate-x-[-50%] mx-auto z-50 flex flex-col items-center justify-center transition-all ease-in-out">
							<h2 className="text-[8vh] h-fit leading-[8vh] z-5  text-black trnasition-all ease-in-out finger-paint relative">
								+
							</h2>
							<h2 className="text-[3vh] w-full text-center z-5 text-black trnasition-all ease-in-out mellow">
								Create new project
							</h2>
						</div>
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[22.5vh] drop-shadow-lg drop-shadow-black/90 relative z-2 "
							alt=""
						/>
						<img
							src="/imgs/clip.png"
							className="w-[8vw] h-[8vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-5.5vh] left-[50%] translate-x-[-50%] z-10"
							alt=""
						/>
					</div>
					<div className=" group-hover:-rotate-2 duration-200 group-hover:scale-[103%] transition-all ease-in-out z-5 flex flex-col items-center justify-center relative">
						<h2 className="absolute top-[50%] translate-y-[-50%] text-[2.5vh] leading-[2.25vh] w-full text-center z-5 left-[50%] translate-x-[-50%] text-black italic finger-paint">
							Your Next Masterpiece
						</h2>
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[10vh] drop-shadow-lg drop-shadow-black/90 relative z-2 mt-[1vh]"
							alt=""
						/>
					</div>
				</a>
				{projects &&
					projects.map((project, i: number) => (
						<div
							className="relative h-fit overflow-visible group cursor-pointer"
							onClick={() => setSelectedProject(project)}
							key={i}
						>
							<div className="duration-200 group-hover:rotate-4 relative group-hover:scale-105 transition-all ease-in-out z-30">
								<img
									src="/imgs/canvas2-nobg.png"
									className="w-full h-[22.5vh] drop-shadow-lg group-hover:drop-shadow-black/70 transition-all group-hover:drop-shadow-xl drop-shadow-black/90 relative z-2"
									alt=""
								/>
								<img
									src={project.image}
									alt=""
									className="absolute w-[90%] h-[87.5%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover rounded-[0.5vh] z-10"
								/>
								<img
									src="/imgs/clip.png"
									className="w-[8vw] h-[8vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-5.5vh] left-[50%] translate-x-[-50%] z-10"
									alt=""
								/>
							</div>
							<div className=" group-hover:-rotate-2 duration-200 group-hover:scale-[103%] transition-all ease-in-out z-5 flex flex-col items-center justify-center relative">
								<h2 className="absolute top-[50%] px-[0.75vw] translate-y-[-50%] text-[2vh] w-full text-center z-20 left-[50%] translate-x-[-50%] text-black italic font-extrabold finger-paint">
									{project.title}
								</h2>
								<img
									src="/imgs/canvas2-nobg.png"
									className="w-full h-[10vh] drop-shadow-lg group-hover:drop-shadow-black/70 transition-all group-hover:drop-shadow-xl drop-shadow-black/90 relative z-2 mt-[1vh]"
									alt=""
								/>
							</div>
						</div>
					))}
			</div>
			{selectedProject && (
				<Projectpopup
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			)}
			{selectedColorIdea && (
				<Colorpopup
					idea={selectedColorIdea}
					onClose={() => setSelectedColorIdea(null)}
				/>
			)}
		</div>
	);
};

export default DashboardPage;
