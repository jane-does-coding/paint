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
		</div>
	);
};

export default CalendarPage;
