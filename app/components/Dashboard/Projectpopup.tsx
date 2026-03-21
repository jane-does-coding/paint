import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Projectpopup = () => {
	return (
		<div>
			{/* the overlap */}
			<div className="w-full h-screen z-19 backdrop-blur-[2px] bg-neutral-900/20 fixed"></div>
			<img
				src="/imgs/clip.png"
				className="w-[15vw] h-[15vh] drop-shadow-sm drop-shadow-black/90 fixed top-[6vh] left-[50%] translate-x-[-50%] z-20"
				alt=""
			/>
			<div className="bg-[#f0e6da] h-[70vh] w-[60vw] fixed top-[18vh] left-[20vw] z-19 inset-shadow-sm rounded-[1vh] inset-shadow-neutral-800/30 shadow-lg shadow-black/50 overflow-hidden p-[3vh] pt-[6vh]">
				<div className="top-[1vh] right-[2vw] absolute text-[4vh] finger-paint cursor-pointer z-21">
					X
				</div>
				<div className="flex w-full h-full z-10 relative">
					<div className="w-9/20">
						<img
							src="https://i.pinimg.com/736x/41/ab/32/41ab32b23c4c2104ff2c75e5c21a285f.jpg"
							alt=""
							className="w-full h-[27.5vh] object-cover rounded-[0.5vh] z-10 border-2 border-black"
						/>
						<div className="flex gap-[0.75vw] mt-[2vh]">
							<a
								href=""
								className="bg-black text-white finger-paint rounded-[1vh] py-[0.75vh] text-[2vh] w-full flex items-center justify-center"
							>
								Demo
							</a>
							<a
								href=""
								className="bg-black text-white finger-paint rounded-[1vh] py-[0.75vh] text-[2vh] w-full flex items-center justify-center"
							>
								Github
							</a>
						</div>
						<div className="flex flex-col gap-[1vh] mt-[2vh]">
							<p className="finger-paint text-[2.5vh] flex items-center justify-start gap-[1vw]">
								<span className="font-extrabold text-green-600 p-[0.25vh] bg-amber-50 border-2 rounded-full ">
									<IoCheckmark />
								</span>
								Experienceable Demo Link
							</p>
							<p className="finger-paint text-[2.5vh] flex items-center justify-start gap-[1vw]">
								<span className="font-extrabold text-green-600 p-[0.25vh] bg-amber-50 border-2 rounded-full ">
									<IoCheckmark />
								</span>
								Public GitHub URL
							</p>
							<p className="finger-paint text-[2.5vh] flex items-center justify-start gap-[1vw]">
								<span className="font-extrabold text-red-600 p-[0.25vh] bg-amber-50 border-2 rounded-full ">
									<RxCross2 />
								</span>
								README URL
							</p>
							<p className="finger-paint text-[2.5vh] flex items-center justify-start gap-[1vw]">
								<span className="font-extrabold text-green-600 p-[0.25vh] bg-amber-50 border-2 rounded-full ">
									<IoCheckmark />
								</span>
								Project Description
							</p>
							<p className="finger-paint text-[2.5vh] flex items-center justify-start gap-[1vw]">
								<span className="font-extrabold text-green-600 p-[0.25vh] bg-amber-50 border-2 rounded-full ">
									<IoCheckmark />
								</span>
								Project screenshot
							</p>
						</div>
					</div>
					<div className="w-11/20 pl-[2vw] h-full overflow-y-auto pt-[1vh]">
						<h2 className="mellow text-[6vh] leading-[7vh]">
							Lorem ipsum dolor sit amet.
						</h2>
						<div className="flex flex-wrap gap-[0.5vw] my-[1vh]">
							<span className="bg-neutral-600/20 finger-paint px-[0.5vw] py-[0.25vh] rounded-[0.25vh] text-[1.75vh]">
								Lorem Ipsum
							</span>
							<span className="bg-neutral-600/20 finger-paint px-[0.5vw] py-[0.25vh] rounded-[0.25vh] text-[1.75vh]">
								Dolor Amet
							</span>
						</div>
						<p className="text-[2.25vh] finger-paint mt-[2vh]">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
							aperiam repudiandae odit dolore ad saepe.
						</p>
						<div className="flex w-full gap-[0.75vw] mt-[2vh]">
							<div className="border-2 border-black w-1/2 rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
								<p className="finger-paint text-[3vh] leading-[3vh] font-extrabold">
									4h 27m
								</p>
								<p className="finger-paint text-[1.75vh] leading-[2vh] mt-[1vh]">
									Time Logged
								</p>
							</div>
							<div className="border-2 border-black w-1/2 rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
								<p className="finger-paint text-[3vh] leading-[3vh] font-extrabold">
									4h 27m
								</p>
								<p className="finger-paint text-[1.75vh] leading-[2vh] mt-[1vh]">
									Time Approved
								</p>
							</div>
						</div>
						<div className="flex gap-[0.75vw] mt-[2vh]">
							<a
								href=""
								className="bg-black text-white finger-paint rounded-[1vh] py-[0.75vh] text-[2vh] w-full flex items-center justify-center"
							>
								Edit
							</a>
							<a
								href=""
								className="bg-black text-white finger-paint rounded-[1vh] py-[0.75vh] text-[2vh] w-full flex items-center justify-center"
							>
								Delete
							</a>
						</div>
					</div>
				</div>
				<img
					src="/imgs/bg-texture.jpg"
					className="h-screen w-full top-0 left-0 opacity-30 absolute z-5"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Projectpopup;
