import { PiSmileyWinkDuotone } from "react-icons/pi";

const TopNav = ({ pageTitle }: any) => {
	return (
		<div className="flex flex-col fixed left-[27.5vw] z-10 top-0">
			<div className=" bg-amber-50/10 backdrop-blur-xs w-[72.5vw] flex items-center justify-start border-b-2 border-dashed">
				<a
					href="/"
					className="border-r-2 border-black border-dashed flex-1 finger-paint text-[3vh] px-0 text-center flex items-center justify-center drop-shadow-none shadow-none py-[1vh] "
				>
					Projects
				</a>
				<a
					href="/explore"
					className="border-r-2 border-black border-dashed flex-1 finger-paint text-[3vh] px-0 text-center flex items-center justify-center drop-shadow-none shadow-none py-[1vh] "
				>
					Explore
				</a>
				<a
					href="/faq"
					className="border-r-2 border-black border-dashed flex-1 finger-paint text-[3vh] px-0 text-center flex items-center justify-center drop-shadow-none shadow-none py-[1vh] "
				>
					FAQ
				</a>

				<a
					href="/calendar"
					className="border-r-none border-black border-dashed flex-1 finger-paint text-[3vh] px-0 text-center flex items-center justify-center drop-shadow-none shadow-none py-[1vh] "
				>
					Calendar
				</a>
			</div>
			<div className="bg-amber-50/10 backdrop-blur-xs px-[3vw] w-[72.5vw] h-[9.25vh] flex items-center justify-between border-b-2 border-dashed border-black">
				<h1 className="text-[4.5vh] finger-paint font-semibold">{pageTitle}</h1>
				<a
					href="/profile"
					className="text-[3.5vh] finger-paint font-semibold flex items-center justify-center drop-shadow-none shadow-none gap-[1vw] border-l-2 border-dashed h-full pl-[3vw]"
				>
					<span className="text-[5vh]">
						<PiSmileyWinkDuotone />
					</span>
					Jane Doe
				</a>
			</div>
		</div>
	);
};

export default TopNav;
