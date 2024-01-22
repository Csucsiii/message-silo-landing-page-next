import type { ProductDetailsConfig } from "@/types/types";

export const productDetailsConfig: ProductDetailsConfig = {
	id: "why",
    title: {
        colorized: {
            text: "Created for developers ",
            color: "#00d9d0"
        },
        text: "who need to handle special cases of dead-lettered messages in different message-brokers"
    },
	bgColor: "#021327",
    products: [
        {
            logo: {
                img: {
                    src: "/simple.svg",
                    alt: "simple"
                },
                bgColor: "linear-gradient(300deg, #0081FF 5.83%, #4EA7FF 78.12%)"
            },
            title: "Simple",
            description: "You can control your message processing with a unified configuration."
        },
        {
            logo: {
                img: {
                    src: "/developer-friendly.svg",
                    alt: "developer-friendly"
                },
                bgColor: "linear-gradient(300deg, #F60 5.83%, #F8893F 78.12%)"
            },
            title: "Developer Friendly",
            description: "Full control by our CLI called siloctl. Manage your connections in YAML files."
        },
        {
            logo: {
                img: {
                    src: "/developer-friendly.svg",
                    alt: "developer-friendly"
                },
                bgColor: "linear-gradient(300deg, #00D9D0 5.83%, #15EEE5 78.12%)"
            },
            title: "Developer Friendly",
            description: "Full control by our CLI called siloctl. Manage your connections in YAML files."
        }
    ]
}