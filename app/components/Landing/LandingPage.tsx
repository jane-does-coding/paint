"use client";
import React from "react";
import TopNav from "@/app/components/TopNav";

const LandingPage = () => {
	return (
		<div>
			<div className="w-full h-screen">
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
					className="w-[10vw] fixed -scale-x-100 bottom-0 right-[2vw] z-20 drop-shadow-xl"
					alt=""
				/>

				<div className="fixed left-[27.5vw] top-[5vh] w-[72.5vw] px-[2vw] pb-[6vh] pt-[8vh] h-[85vh] overflow-y-auto z-10">
					<div className="relative w-full max-w-[55vw] mx-auto bg-amber-50 rounded-[1vh] border-3 border-dashed mt-[3vh]">
						<div className="relative p-[3vh] pt-0 mt-[5vh] rounded-[1vh] shadow-lg shadow-black/50 overflow-hidden">
							<div className="relative z-10 flex flex-col items-center text-center">
								<h1 className="mellow text-[5vh] leading-[5vh]">
									Take on the Ultimate Challenge
								</h1>

								<p className="finger-paint text-[2vh] mt-[0.5vh]">
									75 days, zero excuses, total transformation. Are you ready to
									push your limits?
								</p>

								<div className="flex flex-col gap-[1vw] mt-[3vh] w-full">
									<div className="border-2 border-dashed border-black w-full rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
										<p className="finger-paint text-[3vh] font-extrabold">
											Build Consistency
										</p>
										<p className="finger-paint text-[1.75vh] mt-[0.5vh]">
											Every day counts
										</p>
									</div>

									<div className="border-2 border-dashed border-black w-full rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
										<p className="finger-paint text-[3vh] font-extrabold">
											Grow Stronger
										</p>
										<p className="finger-paint text-[1.75vh] mt-[0.5vh]">
											Physically, mentally, creatively
										</p>
									</div>

									<div className="border-2 border-dashed border-black w-full rounded-[1vh] flex flex-col items-center justify-center py-[2vh] bg-amber-50/50 backdrop-blur-xs">
										<p className="finger-paint text-[3vh] font-extrabold">
											Stay Accountable
										</p>
										<p className="finger-paint text-[1.75vh] mt-[0.5vh]">
											Log your progress daily
										</p>
									</div>
								</div>

								<div className="flex gap-[1vw] mt-[3vh] w-full">
									<a
										href="/login"
										className="bg-black text-white finger-paint rounded-[1vh] py-[1vh] text-[2vh] w-full"
									>
										Login
									</a>
									<a
										href="/register"
										className="bg-black text-white finger-paint rounded-[1vh] py-[1vh] text-[2vh] w-full"
									>
										Register
									</a>
								</div>
							</div>
						</div>

						<img
							src="/imgs/bg-texture.jpg"
							className="absolute top-0 left-0 w-full h-full opacity-30"
							alt=""
						/>

						<img
							src="/imgs/clip.png"
							className="w-[12vw] h-[12vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-10vh] left-[50%] translate-x-[-50%]"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
