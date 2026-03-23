import TopNav from "@/app/components/TopNav";
import React from "react";
import { PiSmileyWinkDuotone } from "react-icons/pi";

const CalendarPage = () => {
	return (
		<div>
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
			{/* 	<div className="fixed top-[0vh] w-[27.5vw] h-[100vh] z-10 text-center items-center justify-center grid grid-cols-4 left-0 gap-[0.5vh] p-[1vh]">
				{ideas.slice(0, 24).map((idea, i) => (
					<div
						className="bg-blue-400/0 w-full h-full rounded-[1.5vh] cursor-pointer"
						key={i}
						onClick={() => setSelectedColorIdea(idea)}
					></div>
				))}
			</div> */}
			{/* <div className=" fixed left-[27.5vw] z-10 top-[0vh] bg-amber-50/10 backdrop-blur-[4px] w-[72.5vw] flex items-center justify-start border-b-2 border-dotted">
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
			</div>
			<div className="bg-amber-50/10 backdrop-blur-[4px] fixed left-[27.5vw] top-[6.5vh] px-[3vw] w-[72.5vw] h-[9.25vh] flex items-center justify-between border-b-2 border-dotted border-black">
				<h1 className="text-[4.5vh] finger-paint font-semibold">Calendar</h1>
				<div className="text-[3.5vh] finger-paint font-semibold flex items-center justify-center gap-[1vw] border-l-2 border-dotted h-full pl-[3vw]">
					<span className="text-[5vh]">
						<PiSmileyWinkDuotone />
					</span>
					Jane Doe
				</div>
			</div> */}
			<TopNav pageTitle={"Calendar"} />
		</div>
	);
};

export default CalendarPage;
