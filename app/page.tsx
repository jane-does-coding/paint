import Image from "next/image";

export default function Home() {
	return (
		<div className="bg-green-200 w-full h-screen">
			<img
				src="/imgs/bg-texture.jpg"
				className="h-screen w-full fixed top-0 left-0"
				alt=""
			/>
			<img
				src="/imgs/paint-pallete.jpg"
				className="h-screen relative z-10"
				alt=""
			/>
			<div className="bg-blue-300/0 left-[32.5vw] top-[5vh] gap-y-[4vh] gap-x-[2vw] px-[3vw] w-[67.5vw] fixed right-0 grid grid-cols-2 overflow-y-auto h-[95vh] pb-[5vh] items-center just">
				<div className="relative h-fit">
					<h2 className="absolute bottom-[1vh] text-[2vh] z-5 left-[50%] translate-x-[-50%] text-black italic">
						Your Next Masterpiece
					</h2>
					<h2 className="absolute top-[6vh] text-[8vh] z-5 left-[50%] translate-x-[-50%] text-black italic">
						+
					</h2>
					<h2 className="absolute top-[17vh] text-[2vh] z-5 left-[50%] translate-x-[-50%] text-black italic">
						Create new project
					</h2>
					<img
						src="/imgs/canvas2-nobg.png"
						className="w-full h-[30vh] drop-shadow-xl drop-shadow-black/90 relative z-2"
						alt=""
					/>
					<img
						src="/imgs/canvas2-nobg.png"
						className="w-full h-[5vh] drop-shadow-xl drop-shadow-black/90 relative z-2 mt-[1vh]"
						alt=""
					/>
				</div>
				{[1, 2, 3, 4, 5, 6].map((project, i) => (
					<div className="relative h-fit" key={i}>
						<h2 className="absolute bottom-[1vh] text-[2vh] z-5 left-[50%] translate-x-[-50%] text-black italic">
							Lorem Ipsum
						</h2>
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[30vh] drop-shadow-xl drop-shadow-black/90 relative z-2"
							alt=""
						/>
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[5vh] drop-shadow-xl drop-shadow-black/90 relative z-2 mt-[1vh]"
							alt=""
						/>
					</div>
				))}
			</div>
		</div>
	);
}
