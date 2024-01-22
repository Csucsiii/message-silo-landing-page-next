import type { ProductProps } from "@/types/types";

const ProductDetail = ({ logo, children }: ProductProps) => {
    return (
        <div className="relative w-full">
            <div style={{ backgroundImage: logo.bgColor, borderRadius: "50%" }} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 z-10">
                <img src={logo.img.src} alt={logo.img.alt} />
            </div>
            {children}
        </div>
    );
};


export default ProductDetail;