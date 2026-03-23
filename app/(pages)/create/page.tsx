import TopNav from "@/app/components/TopNav";

const CreateProject = () => {
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

			<TopNav pageTitle={"Create Project"} />
			<div className="bg-blue-300/0 left-[27.5vw] top-[16vh] gap-y-[2vh] gap-x-[1vw] px-[2vw] w-[72.5vw] fixed right-0 flex overflow-y-auto h-[85vh] pb-[6vh] items-start pt-[4vh] z-11">
				<div className="flex flex-col gap-[2vh] w-[60%]">
					<div className="relative w-full">
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[45vh] relative drop-shadow-lg drop-shadow-black/70"
							alt=""
						/>
						<div className="absolute w-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] mx-auto z-50 flex flex-col items-center justify-center transition-all ease-in-out">
							<h2 className="text-[12.5vh] h-fit leading-[8vh] z-5  text-black trnasition-all ease-in-out finger-paint relative">
								+
							</h2>
							<h2 className="text-[4.25vh] w-full text-center z-5 text-black trnasition-all ease-in-out mellow mt-[2vh]">
								Add a Screenshot
							</h2>
						</div>
					</div>
					<div className="relative w-full">
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[12vh] relative drop-shadow-lg drop-shadow-black/70"
							alt=""
						/>
						<h3 className="absolute top-[1.5vh] text-[2vh] left-[3vw] finger-paint font-extrabold">
							Project Name
						</h3>
						<input
							type="text"
							placeholder="Your Next Masterpiece"
							className="absolute mt-[1.5vh] font-extrabold top-[50%]  translate-y-[-50%] left-[3vw] w-[85%] text-[3vh] finger-paint focus:ring-0 focus:outline-0"
						/>
					</div>
					<div className="relative w-full">
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[30vh] relative drop-shadow-lg drop-shadow-black/70"
							alt=""
						/>
						<h3 className="absolute top-[2.75vh] text-[2vh] left-[3vw] finger-paint font-extrabold">
							Project Description
						</h3>
						<textarea
							placeholder="Your Next Masterpiece"
							className="absolute mt-[1.5vh] h-[19vh] resize-none font-extrabold top-[50%] translate-y-[-50%] left-[3vw] w-[85%] text-[3vh] finger-paint focus:ring-0 focus:outline-0"
						/>
					</div>
					<div className="relative w-full">
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[12vh] relative drop-shadow-lg drop-shadow-black/70"
							alt=""
						/>
						<h3 className="absolute top-[1.5vh] text-[2vh] left-[3vw] finger-paint font-extrabold">
							Github Link
						</h3>
						<input
							type="text"
							placeholder="Code URL"
							className="absolute mt-[1.5vh] font-extrabold top-[50%]  translate-y-[-50%] left-[3vw] w-[85%] text-[3vh] finger-paint focus:ring-0 focus:outline-0"
						/>
					</div>
					<div className="relative w-full">
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[12vh] relative drop-shadow-lg drop-shadow-black/70"
							alt=""
						/>
						<h3 className="absolute top-[1.5vh] text-[2vh] left-[3vw] finger-paint font-extrabold">
							Demo Link
						</h3>
						<input
							type="text"
							placeholder="Demo URL"
							className="absolute mt-[1.5vh] font-extrabold top-[50%]  translate-y-[-50%] left-[3vw] w-[85%] text-[3vh] finger-paint focus:ring-0 focus:outline-0"
						/>
					</div>
				</div>
				<div className="w-[40%] pt-[3vh]">
					<div className="w-full sticky top-0">
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[45vh] relative drop-shadow-lg drop-shadow-black/70"
							alt=""
						/>
						<img
							src="/imgs/clip.png"
							className="w-[8vw] h-[8vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-5.5vh] left-[50%] translate-x-[-50%] z-10"
							alt=""
						/>
						<div className="absolute w-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] mx-auto z-50 flex flex-col items-center justify-center transition-all ease-in-out">
							<h2 className="mellow text-[4vh]">Requirements</h2>
							<div className="flex flex-col gap-[1vh] mt-[2vh]">
								{[
									{ label: "Experienceable Demo Link", value: true },
									{ label: "Public GitHub URL", value: true },
									{ label: "README URL", value: true },
									{ label: "Project Description", value: true },
									{ label: "Project screenshot", value: true },
								].map((item, i) => (
									<p
										key={i}
										className="finger-paint text-[2.5vh] flex items-center gap-[1vw]"
									>
										{item.label}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateProject;
