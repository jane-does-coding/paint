import React from "react";

const Onboarding = () => {
	const step1 = {
		title: "Meet Floof and Feathers...",
		description:
			"The creators of the 75 Hard Challenge for Programmers, who will be helping you throughout this challenge",
		image: "/imgs/raccoons/raccoon-bird-side.png",
	};

	return (
		<div className="bg-blue-500/0 z-70 backdrop-blur-[2px] w-[70vw] h-[35vh] fixed bottom-[5vh] left-[50%] translate-x-[-50%] drop-shadow-2xl drop-shadow-black">
			<div
				className={`bg-[#f0e6da] h-[35vh] w-[70vw] fixed left-[0vw]
				rounded-[1vh] shadow-lg shadow-black/50 overflow-hidden px-[3vw] pt-[2vh] border-4 border-dashed border-black pb-[2vh] flex
				transition-all duration-200 z-19 opacity-100 translate-y-0`}
			>
				<img
					src="/imgs/bg-texture.jpg"
					className="absolute top-0 left-0 w-full h-full opacity-30 z-1"
					alt=""
				/>
				<img
					src={`${step1.image}`}
					className="w-[13vw] h-fit mt-auto drop-shadow-md drop-shadow-black/80 z-30"
					alt=""
				/>
				<div className="flex flex-col z-10 ml-[3vw] pt-[3vh]">
					<h3 className="text-[2.75vh] finger-paint">{step1.title}</h3>
					<p className="finger-paint text-[2.75vh] mt-[3vh]">
						{step1.description}
					</p>
					<p className="finger-paint text-[2.5vh] mt-[2vh] absolute bottom-[4vh] right-[3vw]">
						Continue {"->"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Onboarding;
