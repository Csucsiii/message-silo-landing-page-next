import Navbar from "../Navbar/Navbar";
import { aboutConfig } from "@/config/about";

const About = () => {
	return (
		<section
			id={aboutConfig.id}
			style={{ backgroundImage: `url(${aboutConfig.heroImage.src})`}}
			className="relative flex flex-col items-center w-full min-h-screen bg-no-repeat bg-center bg-cover z-10 before:absolute before:top-0 before:w-full before:h-full before:bg-[rgba(2,14,29,.85)] before:-z-10"
		>
			<Navbar />
			<div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center w-[90%] h-[70%]">
				<div className="flex flex-col justify-around items-center w-full h-full text-zinc-200 gap-8 p-6">
					<div className="flex flex-col gap-8 w-full my-8">
						<h1 style={{ background: aboutConfig.title.color, backgroundClip: "text" }} className="text-2xl md:text-4xl font-bold text-transparent duration-300 ease-linear p-1">
							{aboutConfig.title.text}
						</h1>
						<h2 className="text-4xl md:text-6xl font-semibold">
							{aboutConfig.subtitle.text}
							<span style={{ color: aboutConfig.subtitle.colorized.color }}>{aboutConfig.subtitle.colorized.text}</span>
						</h2>
						<h3 className="text-lg md:text-2xl font-medium my-2">{aboutConfig.description}</h3>
					</div>

					<button style={{ background: aboutConfig.btn.color }} className="text-xl text-zinc-200 py-3 px-2 w-1/2 lg:w-1/4 rounded-lg self-center md:self-start cursor-pointer duration-300 hover:scale-105">
						{aboutConfig.btn.text}
					</button>
				</div>

				<div className="hidden xl:flex justify-center items-center w-full h-full">
					<div className="w-1/2 aspect-square">
						<img src={aboutConfig.img.src} alt={aboutConfig.img.alt} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
