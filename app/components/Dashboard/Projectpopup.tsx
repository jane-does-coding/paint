"use client";
import React, { useEffect, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Projectpopup = ({ project, onClose }: any) => {
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
			{/* overlay */}
			<div
				onClick={handleClose}
				className={`fixed w-full h-screen backdrop-blur-[2px] bg-neutral-900/20 z-19 transition-opacity duration-200
				${isVisible ? "opacity-100" : "opacity-0"}`}
			/>

			{/* clip */}
			<img
				src="/imgs/clip.png"
				className={`fixed w-[16vw] h-[16vh] top-[5vh] left-[50%] translate-x-[-50%] z-20
				drop-shadow-sm drop-shadow-black/90
				transition-all duration-200
				${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[2vh]"}`}
				alt=""
			/>

			{/* popup */}
			<div
				className={`bg-[#f0e6da] h-[70vh] w-[60vw] fixed top-[18vh] left-[20vw]
				rounded-[1vh] shadow-lg shadow-black/50 overflow-hidden p-[3vh] pt-[6vh]
				transition-all duration-200 z-19
				${
					isVisible
						? "opacity-100 scale-100 translate-y-0"
						: "opacity-0 scale-95 translate-y-[2vh]"
				}`}
			>
				{/* close */}
				<div
					onClick={handleClose}
					className="absolute top-[1vh] right-[2vw] text-[4vh] finger-paint cursor-pointer z-21"
				>
					X
				</div>

				<div className="flex w-full h-full relative z-10">
					{/* LEFT */}
					<div className="w-9/20">
						<img
							src={project.image}
							alt=""
							className="w-full h-[27.5vh] object-cover rounded-[0.5vh] border-2 border-black"
						/>

						<div className="flex gap-[0.75vw] mt-[2vh]">
							<a
								href={project.demo}
								className="bg-black text-white finger-paint rounded-[1vh] py-[0.75vh] text-[2vh] w-full flex items-center justify-center"
							>
								Demo
							</a>
							<a
								href={project.github}
								className="bg-black text-white finger-paint rounded-[1vh] py-[0.75vh] text-[2vh] w-full flex items-center justify-center"
							>
								Github
							</a>
						</div>

						{/* checklist */}
						<div className="flex flex-col gap-[1vh] mt-[2vh]">
							{[
								{ label: "Experienceable Demo Link", value: project.demo },
								{ label: "Public GitHub URL", value: project.github },
								{ label: "README URL", value: project.readme },
								{ label: "Project Description", value: project.description },
								{ label: "Project screenshot", value: project.image },
							].map((item, i) => (
								<p
									key={i}
									className="finger-paint text-[2.5vh] flex items-center gap-[1vw]"
								>
									<span
										className={`p-[0.25vh] bg-amber-50 border-2 rounded-full ${
											item.value ? "text-green-600" : "text-red-600"
										}`}
									>
										{item.value ? <IoCheckmark /> : <RxCross2 />}
									</span>
									{item.label}
								</p>
							))}
						</div>
					</div>

					{/* RIGHT */}
					<div className="w-11/20 pl-[2vw] h-full overflow-y-auto pt-[1vh]">
						<h2 className="mellow text-[6vh] leading-[7vh]">{project.title}</h2>

						<div className="flex flex-wrap gap-[0.5vw] my-[1vh]">
							{project.tags?.map((tag: string) => (
								<span
									key={tag}
									className="bg-neutral-600/20 finger-paint px-[0.5vw] py-[0.25vh] rounded-[0.25vh] text-[1.75vh]"
								>
									{tag}
								</span>
							))}
						</div>

						<p className="text-[2.25vh] finger-paint mt-[2vh]">
							{project.description}
						</p>

						<div className="flex w-full gap-[0.75vw] mt-[2vh]">
							<div className="border-2 border-black w-1/2 rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
								<p className="finger-paint text-[3vh] font-extrabold">
									{project.timeLogged}
								</p>
								<p className="finger-paint text-[1.75vh] mt-[1vh]">
									Time Logged
								</p>
							</div>

							<div className="border-2 border-black w-1/2 rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
								<p className="finger-paint text-[3vh] font-extrabold">
									{project.timeApproved}
								</p>
								<p className="finger-paint text-[1.75vh] mt-[1vh]">
									Time Approved
								</p>
							</div>
						</div>

						<div className="flex gap-[0.75vw] mt-[2vh]">
							<a className="bg-black text-white finger-paint rounded-[1vh] py-[0.75vh] text-[2vh] w-full flex items-center justify-center">
								Edit
							</a>
							<a className="bg-black text-white finger-paint rounded-[1vh] py-[0.75vh] text-[2vh] w-full flex items-center justify-center">
								Delete
							</a>
						</div>
					</div>
				</div>

				{/* texture */}
				<img
					src="/imgs/bg-texture.jpg"
					className="absolute top-0 left-0 w-full h-full opacity-30"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Projectpopup;
