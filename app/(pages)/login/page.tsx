"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setIsLoading(true);

		const callback = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		setIsLoading(false);

		if (callback?.ok) {
			toast.success("Logged in");
			router.push("/");
			router.refresh();
		}

		if (callback?.error) {
			toast.error(callback.error);
		}
	};

	return (
		<div className="flex bg-neutral-100 w-full h-screen items-center justify-center">
			<img
				src="/imgs/bg-texture.jpg"
				className="absolute top-0 left-0 z-0 w-full h-screen opacity-100"
				alt=""
			/>

			<div className="min-w-[32vw] bg-white border-3 border-dashed border-black drop-shadow-md flex flex-col z-10 rounded-[1vh] mt-[5vh]">
				<div className="border-b-3 border-dashed border-black py-[2.5vh] pb-[2vh] px-[2vw] z-10">
					<h1 className="text-[5vh] leading-[4vh] mt-[2vh] text-center font-extralight mellow">
						Login
					</h1>
				</div>

				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-[2.5vh] py-[3vh] px-[2vw] z-10"
				>
					<div className="flex flex-col gap-[0.5vh]">
						<label className="text-[2.25vh] finger-paint">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							disabled={isLoading}
							className="border-2 border-dashed border-black px-[1vw] py-[1vh] text-[2.25vh] rounded-[0.5vh] finger-paint outline-none"
							placeholder="jane@example.com"
						/>
					</div>

					<div className="flex flex-col gap-[0.5vh]">
						<label className="text-[2.25vh] finger-paint">Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							disabled={isLoading}
							className="border-2 border-dashed border-black px-[1vw] py-[1vh] text-[2.25vh] rounded-[0.5vh] finger-paint outline-none"
							placeholder="••••••••"
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="hover:bg-white bg-neutral-900 transition-all rounded-[1vh] ease-in-out duration-300 hover:text-black text-white border-2 border-dashed hover:border-black border-neutral-300 w-full cursor-pointer mt-[1vh] text-[2.75vh] mellow font-extralight py-[1.25vh] pb-[0.75vh] disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Sign In
					</button>
				</form>

				<div className="border-t-3 border-dashed border-black py-[2vh] text-center text-[1.75vh] z-10 finger-paint font-bold">
					Don't have an account?{" "}
					<a
						href="/register"
						className="underline cursor-pointer hover:opacity-70"
					>
						Register
					</a>
				</div>

				<img
					src="/imgs/bg-texture.jpg"
					className="absolute top-0 left-0 w-full h-full opacity-30 z-1"
					alt=""
				/>
				<img
					src="/imgs/clip.png"
					className="w-[12vw] h-[12vh] drop-shadow-sm drop-shadow-black/90 absolute top-[-10vh] left-[50%] translate-x-[-50%] z-10"
					alt=""
				/>
			</div>
		</div>
	);
};

export default LoginPage;
