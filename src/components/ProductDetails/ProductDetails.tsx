import GradientBorder from "./GradientBorder";
import ProductContainer from "./ProductContainer";
import ProductDetail from "./ProductDetail";
import { productDetailsConfig } from "@/config/productDetails";
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescription";

const ProductDetails = () => {
	return (
		<section id={productDetailsConfig.id} className="flex justify-center items-center w-full h-full text-zinc-200 py-16 my-10">
			<div className="flex flex-col items-center w-[90%]">
				<h1 className="text-md md:text-xl font-bold text-center w-[50%] my-20">
					<span style={{ color: productDetailsConfig.title.colorized.color }}>{productDetailsConfig.title.colorized.text}</span>
					{productDetailsConfig.title.text}
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center items-center w-full h-full gap-14 xl:gap-4 mt-6">
					{productDetailsConfig.products.map((product, index) => {
						return (
							<ProductDetail key={`product_details_${index}`} logo={product.logo}>
								<GradientBorder>
									<ProductContainer>
										<ProductTitle>{product.title}</ProductTitle>
										<ProductDescription>{product.description}</ProductDescription>
									</ProductContainer>
								</GradientBorder>
							</ProductDetail>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
