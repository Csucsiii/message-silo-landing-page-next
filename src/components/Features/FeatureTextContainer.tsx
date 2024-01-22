import { FeatureTextContainerProps } from "@/types/types";

const FeatureText = ({ title, description, command }: FeatureTextContainerProps) => {
	return (
		<div className="flex flex-col gap-2 w-full my-8">
			<h1 className="text-3xl md:text-4xl font-semibold">
				{title.text}
				<span style={{ color: title.colorized.color }}>{title.colorized.text}</span>
			</h1>
			<h2 className="text-lg md:text-lg text-justify font-normal my-2">{description}</h2>
			<h3 className="text-lg md:text-xl font-medium my-2">{command}</h3>
		</div>
	);
};

export default FeatureText;
