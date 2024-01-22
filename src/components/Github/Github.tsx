const Github = () => {
	return (
		<section className="flex justify-center items-center w-full py-16">
			<div className="flex flex-col md:flex-row justify-center items-center w-[90%] bg-aboutBtn min-h-[200px] rounded-md gap-4 p-14">
				<h1 className="text-zinc-200 text-2xl xl:text-5xl font-bold w-full mg:w-1/2 lg:w-[70%]">Message Silo is fully open-source. Follow us on GitHub!</h1>
				<div className="flex justify-center lg:justify-start items-center w-full md:w-1/2 lg:w-[30%] gap-4">
					<a href="https://github.com/Csucsiii/message-silo-landing-page" target="_blank">
						<button className="flex justify-center items-center bg-zinc-200 rounded-md p-2 px-6 gap-2 duration-300 hover:scale-105">
							<div className="w-full">
								<img src="github.svg" alt="github_svg" />
							</div>
							<h2 className="text-zinc-800 text-xl font-normal">Star</h2>
						</button>
					</a>

					<div className="relative bg-zinc-200 aspect-square p-2 rounded-md flex justify-center items-center">
						<div className="absolute top-1/2 -left-[20%] -translate-y-1/2">
							<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1.5 9.59808C-0.499998 8.44338 -0.500001 5.55662 1.5 4.40192L7.5 0.937822C9.5 -0.216878 12 1.2265 12 3.5359L12 10.4641C12 12.7735 9.5 14.2169 7.5 13.0622L1.5 9.59808Z"
									fill="rgb(228,228,231)"
								/>
							</svg>
						</div>
						<h2 className="text-zinc-800 text-xl font-normal">99</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Github;
