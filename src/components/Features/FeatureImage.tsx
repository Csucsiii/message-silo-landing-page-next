const FeatureImage = ({ src, alt }: { src: string, alt: string }) => {
	return (
		<div className="hidden xl:flex justify-center items-center w-full h-full">
			<div className="w-full justify-self-end">
				<img src={src} alt={alt} />
			</div>
		</div>
	);
};

export default FeatureImage;
