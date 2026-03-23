import TopNav from "@/app/components/TopNav";

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
				className="h-screen w-[27.5vw] fixed top-0 left-0 z-10"
				alt=""
			/>
			<TopNav pageTitle={"Calendar"} />
			<div className="bg-blue-300/0 left-[27.5vw] top-[16vh] gap-y-[2vh] gap-x-[1vw] px-[2vw] w-[72.5vw] fixed right-0 flex overflow-y-auto h-[85vh] pb-[6vh] items-start pt-[7.5vh] z-11">
				<div className="grid grid-cols-12 mx-auto gap-[1.25vh]">
					{Array.from({ length: 75 }).map((_, i) => (
						<div
							key={i}
							className={`w-[4.75vw] border-2 border-dotted border-black finger-paint h-[4.75vw] rounded-full flex items-center justify-center shadow text-[2.5vh] ${
								i < 20
									? "opacity-80 blur-[1px] drop-shadow-black/0 drop-shadow-none bg-white/50 backdrop-blur-sm "
									: "drop-shadow-xl drop-shadow-black/60 bg-white "
							} `}
						>
							{i + 1}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CalendarPage;
