import type { NavbarConstInterface } from "@/types/types";

export const navbarConst: NavbarConstInterface = {
    logo: {
        src: "/nav-logo.webp",
        alt: "Company Logo"
    },
    items: [
        {
            href: "#home",
            value: "Home"
        },
        {
            href: "#why",
            value: "Why"
        },
        {
            href: "#features",
            value: "Features"
        },
        {
            href: "#contact",
            value: "Find Us"
        }
    ]
}