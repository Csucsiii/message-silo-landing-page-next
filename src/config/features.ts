import type { FeaturesConfig } from "@/types/types";

export const featuresConfig: FeaturesConfig = {
	id: "features",
	features: [
		{
			bgColor: "#020E1D",
			img: {
				src: "/laptop.svg",
				alt: "laptop"
			},
			title: {
				colorized: {
					text: "messages",
					color: "#00d9d0"
				},
				text: "Correct your dead-lettered "
			},
			description: "You can define a custom JavaScript function that is called for every dead-letter message. Transform the message en re-enqueue it automatically.",
			command: "siloctl apply -f myconn.yaml",
			btn: {
				bgColor: "linear-gradient(to right, rgb(12, 95, 187), rgb(0, 174, 166))",
				text: "See more examples"
			},
			order: ["image", "text"]
		},
		{
			bgColor: "#021327",
			img: {
				src: "/systems.webp",
				alt: "system"
			},
			title: {
				colorized: {
					text: "systems",
					color: "#00d9d0"
				},
				text: "Simplifies integration between "
			},
			description: "You can define a custom JavaScript function that is called for every dead-letter message. Transform the message and re-enqueue it automatically!",
			command: "siloctl apply -f myconn.yaml",
			btn: {
				bgColor: "linear-gradient(to right, rgb(12, 95, 187), rgb(0, 174, 166))",
				text: "Try it free"
			},
			order: ["text", "image"]
		},
		{
			bgColor: "#020E1D",
			img: {
				src: "/api.webp",
				alt: "api"
			},
			title: {
				colorized: {
					text: "coding",
					color: "#00d9d0"
				},
				text: "Call your own APIs without "
			},
			description: "Send the corrected messages to your own endpoints, or enrich the message with your own business logic!",
			command: "siloctl apply -f myconn.yaml",
			order: ["image", "text"]
		}
	]
}