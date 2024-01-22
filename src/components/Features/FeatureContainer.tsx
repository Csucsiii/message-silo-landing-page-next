const FeatureContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col justify-around xl:items-center w-full xl:w-[80%] h-full text-zinc-200">{children}</div>
	);
};

export default FeatureContainer;
