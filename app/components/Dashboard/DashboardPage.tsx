import Image from "next/image";
import Projectpopup from "./Projectpopup";
import { PiSmileyWinkDuotone } from "react-icons/pi";
const DashboardPage = () => {
	return (
		<div className="bg-green-200 w-full h-screen">
			<img
				src="/imgs/bg-texture.jpg"
				className="h-screen w-full fixed top-0 left-0"
				alt=""
			/>

			<img
				src="/imgs/paint-pallete.jpg"
				className="h-[100vh] w-[27.5vw] fixed top-[0vh] left-0 z-10"
				alt=""
			/>
			<div className="fixed top-[0vh] w-[27.5vw] h-[100vh] z-10 text-center items-center justify-center grid grid-cols-4 left-0 gap-[0.5vh] p-[1vh]">
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
			<div className=" fixed left-[27.5vw] z-10 top-[0vh] bg-amber-50/10 backdrop-blur-[4px] w-[72.5vw] flex items-center justify-start border-b-2 border-dotted">
				<p className="border-r-2 border-black border-dotted flex-1 finger-paint text-[3vh] px-0 text-center flex items-center justify-center py-[1vh] ">
					Create
				</p>
				<p className="border-r-2 border-black border-dotted flex-1 finger-paint text-[3vh] px-0 text-center flex items-center justify-center py-[1vh] ">
					Explore
				</p>
				<p className="border-r-2 border-black border-dotted flex-1 finger-paint text-[3vh] px-0 text-center flex items-center justify-center py-[1vh] ">
					FAQ
				</p>
				<p className="border-r-2 border-black border-dotted flex-1 finger-paint text-[3vh] px-0 text-center flex items-center justify-center py-[1vh] ">
					Shop
				</p>
				<p className="border-r-none border-black border-dotted flex-1 finger-paint text-[3vh] px-0 text-center flex items-center justify-center py-[1vh] ">
					Calendar
				</p>
				{/* <img src="/imgs/paint.png" className="h-full w-auto " alt="idk" />
				<img src="/imgs/brush.jpg" className="h-full w-auto" alt="idk" /> */}
			</div>
			<div className="bg-amber-50/10 backdrop-blur-[4px] fixed left-[27.5vw] top-[6.5vh] px-[3vw] w-[72.5vw] h-[9.25vh] flex items-center justify-between">
				<h1 className="text-[4.5vh] finger-paint font-semibold">
					Your Projects
				</h1>
				<div className="text-[3.5vh] finger-paint font-semibold flex items-center justify-center gap-[1vw] border-l-2 border-dotted h-full pl-[3vw]">
					<span className="text-[5vh]">
						<PiSmileyWinkDuotone />
					</span>
					Jane Doe
				</div>
			</div>
			<div className="bg-blue-300/0 border-t-2 border-black border-dotted left-[27.5vw] top-[15.5vh] gap-y-[8vh] gap-x-[1vw] px-[2vw] w-[72.5vw] fixed right-0 grid grid-cols-3 overflow-y-auto h-[85vh] pb-[5vh] items-center pt-[7.5vh] z-11">
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
				</div>
				{[1, 2, 3, 4, 5, 6].map((project, i) => (
					<div className="relative h-fit" key={i}>
						<h2 className="absolute bottom-[2vh] text-[2vh] w-full text-center z-5 left-[50%] translate-x-[-50%] text-black italic font-extrabold finger-paint">
							Lorem Ipsum Dolor Amet Lorem Ipsum Some More
						</h2>
						<div className="relative">
							<img
								src="/imgs/canvas2-nobg.png"
								className="w-full h-[22.5vh] drop-shadow-lg drop-shadow-black/90 relative z-2"
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
							className="w-full h-[10vh] drop-shadow-lg drop-shadow-black/90 relative z-2 mt-[1vh]"
							alt=""
						/>
						<img
							src="/imgs/clip.png"
							className="w-[8vw] h-[8vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-5.5vh] left-[50%] translate-x-[-50%] z-10"
							alt=""
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default DashboardPage;
