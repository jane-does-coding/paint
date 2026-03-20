import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-green-200 w-full h-screen">
			<img
				src="/imgs/bg-texture.jpg"
				className="h-screen w-full fixed top-0 left-0"
				alt=""
			/>

			{/* the overlap */}
			<div className="w-full h-screen z-19 backdrop-blur-[2px] bg-neutral-900/20 fixed"></div>
			<img
				src="/imgs/clip.png"
				className="w-[15vw] h-[15vh] drop-shadow-sm drop-shadow-black/90 fixed top-[6vh] left-[50%] translate-x-[-50%] z-20"
				alt=""
			/>
			<div className="bg-[#f0e6da] h-[70vh] w-[60vw] fixed top-[18vh] left-[20vw] z-19 inset-shadow-sm rounded-[1vh] inset-shadow-neutral-800/30 shadow-lg shadow-black/50 overflow-hidden p-[3vh] pt-[5vh]">
				<div className="flex w-full h-full z-10 relative">
					<div className="w-4/10">
						<img
							src="https://i.pinimg.com/736x/41/ab/32/41ab32b23c4c2104ff2c75e5c21a285f.jpg"
							alt=""
							className="w-full object-cover rounded-[0.5vh] z-10"
						/>
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p>Lorem, ipsum dolor.</p>
					</div>
					<div className="w-6/10 ">
						<h2>Lorem ipsum dolor sit amet.</h2>
						<p>Lorem, ipsum dolor.</p>
					</div>
				</div>
				<img
					src="/imgs/bg-texture.jpg"
					className="h-screen w-full top-0 left-0 opacity-30 absolute z-5"
					alt=""
				/>
			</div>

			{/* <div className="fixed top-0 w-[28vw] h-[10vh] text-center items-center justify-center flex left-0">
				<h2 className="text-[7vh] leading-[7vh] mellow text-blue-800/80">
					Paint Ideas
				</h2>
			</div> */}
			<img
				src="/imgs/paint-pallete.jpg"
				className="h-[100vh] w-[30vw] fixed top-[0vh] left-0 z-10"
				alt=""
			/>
			<div className="fixed top-[0vh] w-[30vw] h-[100vh] z-10 text-center items-center justify-center grid grid-cols-4 left-0 gap-[0.5vh] p-[1vh]">
				{[
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
					21, 22, 23, 24,
				].map((item, i) => (
					<div
						className="bg-blue-400/0 w-full h-full rounded-[1.5vh] cursor-pointer"
						key={i}
					></div>
				))}
			</div>
			<div className="flex fixed left-[47.5vw] z-10 top-[3vh] gap-[2vw] h-[17.5vh]">
				<img src="/imgs/paint.png" className="h-full w-auto " alt="idk" />
				<img src="/imgs/brush.jpg" className="h-full w-auto" alt="idk" />
			</div>
			<div className="bg-blue-300/0 left-[30vw] top-[22.5vh] gap-y-[9vh] gap-x-[1vw] px-[2vw] w-[70vw] fixed right-0 grid grid-cols-3 overflow-y-auto h-[77.5vh] pb-[5vh] items-center pt-[8vh] z-11">
				{/* Create new project canvas */}
				<div className="relative h-fit overflow-visible group cursor-pointer">
					<div className="duration-200 group-hover:rotate-4  group-hover:scale-105 transition-all ease-in-out z-30">
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
							className="w-full h-[22.5vh] drop-shadow-xl drop-shadow-black/90 relative z-2 "
							alt=""
						/>
						<img
							src="/imgs/clip.png"
							className="w-[10vw] h-[10vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-7vh] left-[50%] translate-x-[-50%] z-2"
							alt=""
						/>
					</div>
					<div className=" group-hover:-rotate-2 duration-200 group-hover:scale-[103%] transition-all ease-in-out z-5 flex flex-col items-center justify-center relative">
						<h2 className="absolute top-[50%] translate-y-[-50%] text-[2.5vh] leading-[2.25vh] w-full text-center z-5 left-[50%] translate-x-[-50%] text-black italic finger-paint">
							Your Next Masterpiece
						</h2>
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[10vh] drop-shadow-xl drop-shadow-black/90 relative z-2 mt-[1vh]"
							alt=""
						/>
					</div>
				</div>
				{[1, 2, 3, 4, 5, 6].map((project, i) => (
					<div className="relative h-fit" key={i}>
						<h2 className="absolute bottom-[2vh] text-[2vh] w-full text-center z-5 left-[50%] translate-x-[-50%] text-black italic font-extrabold finger-paint">
							Lorem Ipsum Dolor Amet Lorem Ipsum Some More
						</h2>
						<div className="relative">
							<img
								src="/imgs/canvas2-nobg.png"
								className="w-full h-[22.5vh] drop-shadow-xl drop-shadow-black/90 relative z-2"
								alt=""
							/>
							<img
								src="https://i.pinimg.com/736x/41/ab/32/41ab32b23c4c2104ff2c75e5c21a285f.jpg"
								alt=""
								className="absolute w-[90%] h-[87.5%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-cover rounded-[0.5vh] z-10"
							/>
						</div>
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[10vh] drop-shadow-xl drop-shadow-black/90 relative z-2 mt-[1vh]"
							alt=""
						/>
						<img
							src="/imgs/clip.png"
							className="w-[10vw] h-[10vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-7vh] left-[50%] translate-x-[-50%] z-10"
							alt=""
						/>
					</div>
				))}
			</div>
		</div>
	);
}
