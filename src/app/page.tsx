import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import Github from "@/components/Github/Github";
import Line from "@/components/Line/Line";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import Services from "@/components/Services/Services";

export default function Home() {
    return (
        <>
            <About />
            <Line />
            <Services />
            <ProductDetails />
			<Features />
			<Github />
        </>
    );
}
