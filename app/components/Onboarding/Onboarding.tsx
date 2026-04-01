import React, { useState } from "react";

const Onboarding = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const steps = [
		{
			title: "Meet Floof and Feathers...",
			description:
				"The creators of the 75 Hard Challenge for Programmers, who will guide you through this journey.",
			image: "/imgs/raccoons/raccoon-bird-side.png",
		},
		{
			title: "Code Every Day",
			description:
				"You must code for at least 2+ hours every single day. This is deep work only — no distractions, no excuses.",
			image: "/imgs/raccoons/raccoon-bird-stand-side.png",
		},
		{
			title: "Ship Projects",
			description:
				"Every 15 days, you must complete and submit a project. No unfinished ideas — you ship or you restart.",
			image: "/imgs/raccoons/raccoon-bird-react.png",
		},
		{
			title: "Sharpen Your Mind",
			description:
				"Solve LeetCode problems every day (except weekends). Train your problem-solving like a weapon.",
			image: "/imgs/raccoons/raccoon-bird-think.png",
		},
	];

	const handleNext = () => {
		if (currentStep < steps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const step = steps[currentStep];

	return (
		<div className="bg-blue-500/0 z-70 backdrop-blur-[2px] w-[70vw] h-[35vh] fixed bottom-[5vh] left-[50%] translate-x-[-50%] drop-shadow-2xl drop-shadow-black">
			<div
				className={`bg-[#f0e6da] h-[35vh] w-[70vw] fixed left-0
				rounded-[1vh] shadow-lg shadow-black/50 overflow-hidden px-[3vw] pt-[2vh] border-3 border-dashed border-black pb-[2vh] flex
				transition-all duration-200 z-19 opacity-100 translate-y-0`}
			>
				<img
					src="/imgs/bg-texture.jpg"
					className="absolute top-0 left-0 w-full h-full opacity-30 z-1"
					alt=""
				/>

				<div className="w-[20vw] z-30 flex items-center justify-center">
					<img
						src={step.image}
						className="w-fit h-full mt-auto drop-shadow-md drop-shadow-black/80 z-30"
						alt=""
					/>
				</div>

				<div className="flex flex-col z-10 ml-[3vw] pt-[4vh]">
					<h3 className="text-[2.75vh] finger-paint">{step.title}</h3>

					<p className="finger-paint text-[2.75vh] mt-[1vh]">
						{step.description}
					</p>

					<p
						onClick={handleNext}
						className="cursor-pointer finger-paint text-[2.5vh] mt-[2vh] absolute bottom-[4vh] right-[3vw]"
					>
						{currentStep === steps.length - 1
							? "Start Challenge"
							: "Continue →"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Onboarding;
