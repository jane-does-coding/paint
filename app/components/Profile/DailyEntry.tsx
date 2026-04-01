"use client";

import { useState } from "react";

const DailyEntry = () => {
	const [journal, setJournal] = useState("");
	const [hours, setHours] = useState("");

	const submitEntry = async () => {
		await fetch("/api/challenge/daily-entry", {
			method: "POST",
			body: JSON.stringify({
				journal,
				hoursCoded: hours,
			}),
		});

		setJournal("");
		setHours("");
	};

	return (
		<div className="relative w-full max-w-[55vw] p-[3vh] mx-auto bg-amber-50 rounded-[1vh] border-3 border-dashed mt-[12.5vh] shadow-lg flex flex-col shadow-black/50">
			<h2 className="finger-paint text-[2.5vh] mb-[1vh] z-10 relative">
				Today's Entry
			</h2>

			<textarea
				placeholder="Write 1-2 sentences about what you coded today..."
				value={journal}
				onChange={(e) => setJournal(e.target.value)}
				className="border-2 border-dashed border-black px-[1vw] py-[1vh] text-[2.25vh] rounded-[0.5vh] mt-[2vh] finger-paint outline-none relative z-10"
			/>

			<input
				type="number"
				placeholder="Hours coded today"
				value={hours}
				onChange={(e) => setHours(e.target.value)}
				className="border-2 border-dashed border-black px-[1vw] py-[1vh] text-[2.25vh] rounded-[0.5vh] mt-[2vh] finger-paint outline-none relative z-10"
			/>

			<button
				onClick={submitEntry}
				className="mt-[2vh] bg-black text-white finger-paint z-10 relative rounded-[1vh] py-[1vh] px-[2vh]"
			>
				Submit Entry
			</button>

			<img
				src="/imgs/bg-texture.jpg"
				className="absolute top-0 left-0 w-full h-full opacity-30 z-1"
				alt="Background texture"
			/>
			<img
				src="/imgs/clip.png"
				className="w-[12vw] h-[12vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-10vh] left-[50%] translate-x-[-50%] z-10"
				alt="Clip decoration"
			/>
		</div>
	);
};

export default DailyEntry;
