"use client";

import { useState, useEffect } from "react";
import TopNav from "@/app/components/TopNav";

const Calendar = ({ challenge }: any) => {
	const [selectedDay, setSelectedDay] = useState<any>(null);
	const [isVisible, setIsVisible] = useState(false);

	const completedDays = challenge?.dailyEntries?.length || 0;
	const progress = (completedDays / 75) * 100;

	const getDayData = (day: number) => {
		if (!challenge) return null;

		const startDate = new Date(challenge.startDate);
		const targetDate = new Date(startDate);
		targetDate.setDate(startDate.getDate() + day - 1);

		const entry = challenge.dailyEntries.find((e: any) => {
			const entryDate = new Date(e.date);
			return entryDate.toDateString() === targetDate.toDateString();
		});

		const project = challenge.projects?.find((p: any) => {
			const dueDate = new Date(p.dueDate);
			return dueDate.toDateString() === targetDate.toDateString();
		});

		return { date: targetDate, entry, project };
	};

	useEffect(() => {
		if (selectedDay) setIsVisible(true);
	}, [selectedDay]);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(() => setSelectedDay(null), 200);
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

			<TopNav pageTitle={"Calendar"} />

			<div className="bg-amber-50/50 backdrop-blur-sm h-[3.5vh] left-[30vw] w-[60vw] rounded-full border-3 border-dashed fixed top-[19vh]">
				<div
					className="bg-blue-400 h-full rounded-full transition-all"
					style={{ width: `${progress}%` }}
				/>
			</div>

			<div className="h-[3vh] right-[3.5vw] w-[5vw] fixed top-[19vh]">
				<p className="finger-paint text-[3.5vh] leading-[2.25vh] mx-auto text-center">
					{completedDays}/75
				</p>
			</div>

			<div className="left-[27.5vw] top-[23vh] px-[2vw] w-[72.5vw] fixed flex overflow-y-auto h-[80vh] pb-[6vh] items-start pt-[4vh] z-10">
				<div className="grid grid-cols-12 mx-auto gap-[1.25vh]">
					{Array.from({ length: 75 }).map((_, i) => {
						const day = i + 1;
						const completed = day <= completedDays;

						return (
							<div
								key={i}
								onClick={() => setSelectedDay(getDayData(day))}
								className={`w-[4.75vw] border-2 border-dotted border-black finger-paint h-[4.75vw] rounded-full flex items-center justify-center shadow text-[2.5vh] cursor-pointer ${
									completed
										? "bg-blue-200 drop-shadow-xl"
										: "bg-white/50 backdrop-blur-sm opacity-70"
								}`}
							>
								{day}
							</div>
						);
					})}
				</div>
			</div>

			{selectedDay && (
				<div>
					<div
						onClick={handleClose}
						className={`fixed w-full h-screen backdrop-blur-[2px] bg-neutral-900/20 z-19 transition-opacity duration-200 ${
							isVisible ? "opacity-100" : "opacity-0"
						}`}
					/>

					<div
						className={`bg-[#f0e6da] h-[40vh] w-[40vw] fixed top-[30vh] left-[30vw]
						rounded-[1vh] shadow-lg shadow-black/50 overflow-visible p-[3vh] pt-[6vh]
						transition-all duration-200 z-20 ${
							isVisible
								? "opacity-100 scale-100 translate-y-0"
								: "opacity-0 scale-95 translate-y-[2vh]"
						}`}
					>
						<div
							onClick={handleClose}
							className="absolute top-[1vh] right-[2vw] text-[4vh] finger-paint cursor-pointer z-21"
						>
							X
						</div>

						<div className="flex flex-col h-full overflow-y-auto relative z-10">
							<h2 className="finger-paint text-[4vh] mb-[1vh]">
								Date: {selectedDay.date.toDateString()}
							</h2>

							{selectedDay.entry ? (
								<>
									<p className="finger-paint text-[2.25vh]">
										Hours coded: {selectedDay.entry.hoursCoded}
									</p>
									<p className="finger-paint text-[2.25vh] mt-[1vh]">
										{selectedDay.entry.journal}
									</p>
								</>
							) : (
								<p className="text-[2vh] opacity-60">No entry submitted</p>
							)}
						</div>

						<img
							src="/imgs/clip.png"
							className="w-[12vw] h-[12vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-10vh] left-[50%] translate-x-[-50%] z-10"
							alt="Clip decoration"
						/>

						<img
							src="/imgs/bg-texture.jpg"
							className="absolute top-0 left-0 w-full h-full opacity-30"
							alt=""
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Calendar;
