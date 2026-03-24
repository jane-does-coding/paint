import TopNav from "@/app/components/TopNav";
import React from "react";

const ExplorePage = () => {
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
			<TopNav pageTitle={"Explore"} />
			<div className="bg-blue-300/0 left-[27.5vw] top-[16vh] gap-y-[2vh] gap-x-[1vw] px-[2vw] w-[72.5vw] fixed right-0 flex overflow-y-auto h-[85vh] pb-[6vh] items-start pt-[4vh] z-11 flex-col">
				<div className="flex flex-col gap-[1.5vh] w-full">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((person, i) => (
						<div className="relative w-full drop-shadow-2xl">
							<img
								src="/imgs/canvas2-nobg.png"
								className="w-full h-[9vh] relative drop-shadow-lg drop-shadow-black/70"
								alt=""
							/>
							<div className="flex absolute top-[50%] translate-y-[-50%] px-[4vw] items-center justify-between w-full">
								<h3
									className={`text-[2.75vh] finger-paint ${
										i == 1
											? "font-extrabold italic border-2 border-dotted px-[2vw] rounded-full"
											: ""
									}`}
								>
									{i == 1 ? "" : ""}
									Jane Doe
								</h3>
								<div className="flex gap-[2vw]">
									<h3 className="text-[2.75vh] finger-paint">3 Projects</h3>
									<h3 className="text-[2.75vh] finger-paint">Day 30</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExplorePage;
