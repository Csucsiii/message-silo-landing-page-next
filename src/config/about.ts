import type { AboutConfig } from "@/types/types";

export const aboutConfig: AboutConfig = {
	id: "home", //Section ID-ja, ez jelzi a navbárnak, hogy ide görgessen.
    title: {
		text: "Message Silo", //Főcím, színátementes.
		color: "linear-gradient(90deg, #0F77EA 0%, #00D9D0 30%)"
	},
    subtitle: {
        text: "Clean up the mess of ", // Alcím tartalma.
        colorized: {
            text: "messages", //Kiemelt szöveg tartalma.
            color: "#00d9d0" // Kiemelt szöveg színe.
        }
    },
    description: "A tool to fix or enrich messages with the power of AI, and make integration simpler for event-driven systems", //Leírás tartalma.
    btn: {
		text: "Get Started", //Gomb szövege
		color: "linear-gradient(to right, rgb(12, 95, 187), rgb(0, 174, 166))" //Gomb színe.
	},
    img: {
        src: "/bg-2.svg", //Kép elérési útja.
        alt: "about_bg" //Alt szöveg, ha nem sikerülne betölteni a képet.
    },
    heroImage: {
        src: "/about-bg.webp" //Háttérkép elérési útja.
    }
}