import type { FeatureBtnProps } from "@/types/types";

const FeatureBtn = ({ btn }: FeatureBtnProps) => {
	return btn ? (
		<button
			style={{ background: btn.bgColor, borderRadius: "0.5rem" }}
			className="text-xl text-zinc-200 py-3 px-2 w-1/2 sm:w-1/3 md:w-[40%] self-center md:self-start cursor-pointer duration-300 hover:scale-105"
		>
			{btn.text}
		</button>
	) : null;
};

export default FeatureBtn;
