import { FeatureProps } from "@/types/types";
import FeatureContainer from "./FeatureContainer";
import FeatureImage from "./FeatureImage";
import FeatureText from "./FeatureTextContainer";
import FeatureBtn from "./FeatureBtn";

const Feature = ({ img, title, description, command, btn, order }: FeatureProps) => {
	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center w-[90%] gap-4 py-16">
			{order.map((id, index) => {
				switch (id) {
					case "image": {
						return <FeatureImage key={`features_img_${index}`} src={img.src} alt={img.alt} />;
					}

					case "text": {
						return (
							<FeatureContainer key={`features_container_${index}`}>
								<FeatureText title={title} description={description} command={command} />
								<FeatureBtn btn={btn} />
							</FeatureContainer>
						);
					}

					default:
						return null;
				}
			})}
		</div>
	);
};

export default Feature;
