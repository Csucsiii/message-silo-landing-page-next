import { featuresConfig } from "@/config/features";
import Feature from "./Feature";

const Features = () => {
	return featuresConfig.features.map((feature, index) => {
			return (
				<section style={{ backgroundColor: feature.bgColor }} id={featuresConfig.id} className="flex justify-center items-center w-full h-full">
					<Feature
						key={`features_${index}`}
						img={feature.img}
						title={feature.title}
						description={feature.description}
						command={feature.command}
						btn={feature.btn}
						order={feature.order}
					/>
				</section>
			)
		});
};

export default Features;
