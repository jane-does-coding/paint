"use client";
import React, { useEffect, useState } from "react";

const Colorpopup = ({ idea, onClose }: any) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(() => {
			onClose();
		}, 200);
	};

	return (
		<div>
			<div
				onClick={handleClose}
				className={`fixed w-full h-screen backdrop-blur-[2px] bg-neutral-900/20 z-19 transition-opacity duration-200
				${isVisible ? "opacity-100" : "opacity-0"}`}
			/>

			<img
				src="/imgs/clip.png"
				className={`fixed w-[12vw] h-[12vh] top-[12vh] left-[50%] translate-x-[-50%] z-20
				drop-shadow-sm drop-shadow-black/90
				transition-all duration-200
				${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[2vh]"}`}
				alt=""
			/>

			<div
				className={`bg-[#f0e6da] h-[50vh] w-[50vw] fixed top-[22vh] left-[25vw]
				rounded-[1vh] shadow-lg shadow-black/50 overflow-hidden p-[3vh] pt-[6vh]
				transition-all duration-200 z-19
				${
					isVisible
						? "opacity-100 scale-100 translate-y-0"
						: "opacity-0 scale-95 translate-y-[2vh]"
				}`}
			>
				<div
					onClick={handleClose}
					className="absolute top-[1vh] right-[2vw] text-[4vh] finger-paint cursor-pointer z-21"
				>
					X
				</div>

				<div className="flex w-full h-full relative z-10">
					<div className="w-9/20">
						<img
							src={idea.image}
							alt=""
							className="w-full h-[27.5vh] object-cover rounded-[0.5vh] border-2 border-black"
						/>
					</div>

					<div className="w-11/20 pl-[2vw] h-full overflow-y-auto pt-[1vh]">
						<h2 className="mellow text-[6vh] leading-[7vh]">{idea.title}</h2>

						<div className="flex flex-wrap gap-[0.5vw] my-[1vh]">
							{idea.tags?.map((tag: string) => (
								<span
									key={tag}
									className="bg-neutral-600/20 finger-paint px-[0.5vw] py-[0.25vh] rounded-[0.25vh] text-[1.75vh]"
								>
									{tag}
								</span>
							))}
						</div>

						<p className="text-[2.25vh] finger-paint mt-[2vh]">
							{idea.description}
						</p>

						<div className="flex w-full gap-[0.75vw] mt-[2vh]">
							<div className="border-2 border-black w-full rounded-[1vh] flex gap-[2vh] items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
								<p className="finger-paint text-[3vh] font-extrabold">
									{idea.timeEstimate}
								</p>
								<p className="finger-paint text-[1.75vh] mt-[1vh]">
									Estimated Time
								</p>
							</div>
						</div>
					</div>
				</div>

				<img
					src="/imgs/bg-texture.jpg"
					className="absolute top-0 left-0 w-full h-full opacity-30"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Colorpopup;
