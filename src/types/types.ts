import type { Image, ColorizedText } from "./subtypes"

export interface NavbarConstLink {
    href: string,
    value: string
}

export interface NavbarConstInterface {
    logo: Image,
    items: NavbarConstLink[]
}

export interface NavItemProps {
    href: string,
    children: React.ReactNode
}

export interface AboutConfig {
	id: string,
    title: {
		text: string,
		color: string
	},
    subtitle: {
        text: string,
        colorized: ColorizedText
    },
    description: string,
    btn: {
		text: string,
		color: string
	},
    img: Image,
    heroImage: {
        src: string
    }
}

export interface Service {
    img: Image,
    text: string
}

export interface ServiceProps{
    img: Image,
    index: number,
    children: string
}

export interface ServicesConfig {
	bgColor: string,
    services: Service[]
}

export interface Product {
    logo: {
        bgColor: string,
        img: Image
    },
    title: string,
    description: string
}

export interface ProductProps {
    logo: {
        bgColor: string,
        img: Image
    },
    children: React.ReactNode
}

export interface FeatureBtnProps {
	btn?: {
		bgColor: string,
		text: string,
	}
}

export interface ProductDetailsConfig {
	id: string,
    title: {
        colorized: ColorizedText,
        text: string
    },
    products: Product[],
	bgColor: string
}

export interface FeatureTextContainerProps {
	title: {
		colorized: ColorizedText,
		text: string
	},
	description: string,
	command: string
}

export interface FeatureProps extends FeatureTextContainerProps, FeatureBtnProps{
	img: Image,
	order: string[]
}

export interface Feature{
	bgColor: string,
	img: Image,
	title: {
		colorized: ColorizedText,
		text: string
	},
	description: string,
	command: string,
	btn?: {
		bgColor: string,
		text: string,
	}
	order: string[]
}

export interface FeaturesConfig{
	id: string,
	features: Feature[]
}