"use client";

import TopNav from "@/app/components/TopNav";
import { useState } from "react";

const CreateProject = () => {
	const [form, setForm] = useState({
		title: "",
		description: "",
		github: "",
		demo: "",
		image: "",
		timeLogged: "",
		tags: "",
	});

	const update = (field: string, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
	};

	const requirements = [
		{ label: "Experienceable Demo Link", valid: form.demo.length > 5 },
		{ label: "Public GitHub URL", valid: form.github.length > 5 },
		{ label: "Project Description", valid: form.description.length > 10 },
		{ label: "Project screenshot", valid: form.image.length > 5 },
		{ label: "Project Name", valid: form.title.length > 2 },
		{ label: "Time Logged", valid: form.timeLogged.length > 0 },
		{ label: "Tags", valid: form.tags.length > 0 },
	];

	const handleSubmit = async () => {
		await fetch("/api/projects", {
			method: "POST",
			body: JSON.stringify({
				...form,
				tags: form.tags.split(",").map((t) => t.trim()),
			}),
		});
	};

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

			<img
				src="/imgs/raccoons/raccoon-bird-lay-side.png"
				className="w-[17.5vw] fixed bottom-0 right-[2vw] z-19 drop-shadow-xl drop-shadow-black"
				alt=""
			/>

			<TopNav pageTitle={"Create Project"} />

			<div className="left-[27.5vw] top-[16vh] gap-y-[2vh] gap-x-[1vw] px-[2vw] w-[72.5vw] fixed right-0 flex overflow-y-auto h-[85vh] pb-[6vh] items-start pt-[4vh] z-11">
				<div className="flex flex-col gap-[2vh] w-[60%] pt-[3vh]">
					<div className="relative w-full">
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[45vh] relative drop-shadow-lg drop-shadow-black/70"
							alt=""
						/>
						<img
							src="/imgs/clip.png"
							className="w-[10vw] h-[10vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-6.5vh] left-[50%] translate-x-[-50%] z-10"
							alt=""
						/>

						{form.image ? (
							<img
								src={form.image}
								className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[38vh] object-contain rounded-md"
							/>
						) : (
							<div className="absolute w-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center">
								<h2 className="text-[12vh] finger-paint">+</h2>
								<h2 className="text-[4vh] mellow">Add a Screenshot</h2>
							</div>
						)}
					</div>

					<div className="relative w-full">
						<img
							src="/imgs/canvas2-nobg.png"
							className="w-full h-[12vh]"
							alt=""
						/>

						<h3 className="absolute top-[1.5vh] left-[3vw] finger-paint text-[2vh]">
							Screenshot URL
						</h3>

						<input
							value={form.image}
							onChange={(e) => update("image", e.target.value)}
							placeholder="Image URL"
							className="absolute top-[50%] translate-y-[-50%] left-[3vw] w-[85%] mt-[1vh] text-[2.75vh] finger-paint focus:outline-none"
						/>
					</div>

					<div className="relative w-full">
						<img src="/imgs/canvas2-nobg.png" className="w-full h-[12vh]" />

						<h3 className="absolute top-[1.5vh] left-[3vw] finger-paint text-[2vh]">
							Project Name
						</h3>

						<input
							value={form.title}
							onChange={(e) => update("title", e.target.value)}
							placeholder="Your Next Masterpiece"
							className="absolute top-[50%] translate-y-[-50%] left-[3vw] w-[85%] mt-[1vh] text-[2.75vh] finger-paint focus:outline-none"
						/>
					</div>

					<div className="relative w-full">
						<img src="/imgs/canvas2-nobg.png" className="w-full h-[30vh]" />

						<h3 className="absolute top-[2.75vh] left-[3vw] finger-paint text-[2vh]">
							Project Description
						</h3>

						<textarea
							value={form.description}
							placeholder="Explain what your project does"
							onChange={(e) => update("description", e.target.value)}
							className="absolute top-[50%] translate-y-[-50%] left-[3vw] w-[85%] h-[19vh] resize-none mt-[1vh] text-[2.75vh] finger-paint focus:outline-none"
						/>
					</div>

					<div className="relative w-full">
						<img src="/imgs/canvas2-nobg.png" className="w-full h-[12vh]" />

						<h3 className="absolute top-[1.5vh] left-[3vw] finger-paint text-[2vh]">
							Github Link
						</h3>

						<input
							value={form.github}
							placeholder="Github URL"
							onChange={(e) => update("github", e.target.value)}
							className="absolute top-[50%] translate-y-[-50%] left-[3vw] w-[85%] mt-[1vh] text-[2.75vh] finger-paint focus:outline-none"
						/>
					</div>

					<div className="relative w-full">
						<img src="/imgs/canvas2-nobg.png" className="w-full h-[12vh]" />

						<h3 className="absolute top-[1.5vh] left-[3vw] finger-paint text-[2vh]">
							Demo Link
						</h3>

						<input
							value={form.demo}
							placeholder="Demo URL"
							onChange={(e) => update("demo", e.target.value)}
							className="absolute top-[50%] translate-y-[-50%] left-[3vw] w-[85%] mt-[1vh] text-[2.75vh] finger-paint focus:outline-none"
						/>
					</div>

					<div className="relative w-full">
						<img src="/imgs/canvas2-nobg.png" className="w-full h-[12vh]" />

						<h3 className="absolute top-[1.5vh] left-[3vw] finger-paint text-[2vh]">
							Time Logged
						</h3>

						<input
							value={form.timeLogged}
							placeholder="Example: 4h 27m"
							onChange={(e) => update("timeLogged", e.target.value)}
							className="absolute top-[50%] translate-y-[-50%] left-[3vw] w-[85%] mt-[1vh] text-[2.75vh] finger-paint focus:outline-none"
						/>
					</div>

					<div className="relative w-full">
						<img src="/imgs/canvas2-nobg.png" className="w-full h-[12vh]" />

						<h3 className="absolute top-[1.5vh] left-[3vw] finger-paint text-[2vh]">
							Tags
						</h3>

						<input
							value={form.tags}
							placeholder="game, hackathon, react"
							onChange={(e) => update("tags", e.target.value)}
							className="absolute top-[50%] translate-y-[-50%] left-[3vw] w-[85%] mt-[1vh] text-[2.75vh] finger-paint focus:outline-none"
						/>
					</div>

					<button
						onClick={handleSubmit}
						className="hover:bg-white bg-neutral-900 transition-all rounded-[1vh] ease-in-out duration-300 hover:text-black text-white border-2 border-dashed hover:border-black border-neutral-300 w-[96%] mx-auto cursor-pointer mt-[1vh] text-[2.75vh] mellow font-extralight py-[1.25vh] pb-[0.75vh] disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Create Project
					</button>
				</div>

				<div className="w-[40%] pt-[3vh]">
					<div className="w-full sticky top-0">
						<img src="/imgs/canvas2-nobg.png" className="w-full h-[45vh]" />
						<img
							src="/imgs/clip.png"
							className="w-[10vw] h-[10vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-6.5vh] left-[50%] translate-x-[-50%] z-10"
							alt=""
						/>

						<div className="absolute w-full top-[50%] translate-y-[-50%] flex flex-col items-center">
							<h2 className="mellow text-[4vh]">Requirements</h2>

							<div className="flex flex-col gap-[1vh] mt-[2vh]">
								{requirements.map((item, i) => (
									<p
										key={i}
										className={`finger-paint text-[2.5vh] flex gap-[1vw] ${
											item.valid ? "text-green-600" : "text-red-500"
										}`}
									>
										{item.valid ? "✓" : "✗"} {item.label}
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
