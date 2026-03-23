import TopNav from "@/app/components/TopNav";

const FAQPage = () => {
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
			<TopNav pageTitle={"Rules"} />
			<div className="bg-blue-300/0 left-[27.5vw] top-[16vh] gap-y-[2vh] gap-x-[1vw] px-[2vw] w-[72.5vw] fixed right-0 flex overflow-y-auto h-[85vh] pb-[6vh] items-start pt-[4vh] z-11 flex flex-col">
				{/* 	<img src="/imgs/frame1.jpg" className="w-[20vw]" alt="" />
				<img src="/imgs/frame2.jpg" className="w-[20vw]" alt="" />
				<img src="/imgs/frame3.png" className="w-[20vw]" alt="" />
				<img src="/imgs/frame4.jpg" className="w-[20vw]" alt="" />
				<img src="/imgs/frame5.jpg" className="w-[20vw]" alt="" /> */}
				<div className="w-[30vw] h-[32.5vh] overflow-hidden absolute top-[3vh] left-[2vw] drop-shadow-xl drop-shadow-black/60 rounded-[0.25vh]">
					<p className="finger-paint text-[2vh] absolute top-[3vh] left-[2vw] w-[12vw] bg-green-300/0 z-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, esse.
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
						atque?
					</p>
					<img
						src="/imgs/frame6.jpg"
						className="w-[30vw] h-[32.5vh] object-cover scale-105"
						alt=""
					/>
				</div>
				<div className="w-[30vw] h-[40vh] overflow-hidden absolute top-[39vh] left-[2vw] drop-shadow-xl drop-shadow-black/60 rounded-[0.25vh] bg-white">
					<p className="finger-paint text-[2.75vh] absolute top-[2vh] left-[2vw] w-[26vw] bg-green-300/0 z-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, esse.
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
						atque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sapiente, consequuntur.
					</p>
					<img
						src="/imgs/paper3.png"
						className="w-[30vw] h-[40vh] object-cover scale-105 opacity-70"
						alt=""
					/>
				</div>
				<div className="w-[36vw] h-[34vh] overflow-hidden absolute top-[45vh] left-[34vw] drop-shadow-xl drop-shadow-black/60 bg-white">
					<p className="finger-paint text-[2.5vh] text-black  absolute top-[2.5vh] left-[2vw] w-[25vw] bg-green-300/0 z-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, esse.
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
						atque?
					</p>
					<img
						src="/imgs/paper5.jpg"
						className="w-[36vw] h-[34vh] object-cover scale-115 opacity-50"
						alt=""
					/>
				</div>
				<div className="w-[15vw] h-[40vh] overflow-hidden absolute top-[3vh] left-[34vw] drop-shadow-xl drop-shadow-black/60 bg-white">
					<p className="finger-paint text-[2.25vh] text-black absolute top-[2.5vh] left-[2.75vw] w-[12vw] bg-green-300/0 z-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, esse.
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
						atque?
					</p>
					<img
						src="/imgs/paper2.jpg"
						className="w-[15vw] h-[40vh] object-cover opacity-90"
						alt=""
					/>
				</div>
				<div className="w-[20vw] h-[40vh] overflow-hidden absolute top-[3vh] left-[50.75vw] drop-shadow-xl drop-shadow-black/60 bg-white">
					<p className="finger-paint text-[2.5vh] text-black absolute top-[2.5vh] left-[2vw] w-[16vw] bg-green-300/0 z-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, esse.
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
						atque?
					</p>
					<img
						src="/imgs/paper3.png"
						className="w-[20vw] h-[40vh] object-cover opacity-90"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default FAQPage;
